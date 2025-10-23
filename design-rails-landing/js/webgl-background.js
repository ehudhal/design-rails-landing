/**
 * WebGL Fluid Gradient Background
 * Creates an animated gradient effect for the hero section
 */

class FluidGradient {
  constructor(canvas) {
    this.canvas = canvas;
    this.gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!this.gl) {
      console.warn('WebGL not supported, falling back to CSS gradient');
      return;
    }

    this.time = 0;
    this.mouseX = 0.5;
    this.mouseY = 0.5;

    this.init();
    this.resize();
    this.setupEventListeners();
    this.animate();
  }

  init() {
    const gl = this.gl;

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Fragment shader - Fluid gradient effect
    const fragmentShaderSource = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      // Gradient color palette
      vec3 color1 = vec3(0.05, 0.067, 0.09);     // Dark blue-black
      vec3 color2 = vec3(0.094, 0.106, 0.125);   // Slightly lighter
      vec3 color3 = vec3(0.345, 0.651, 1.0);     // Primary cyan
      vec3 color4 = vec3(0.941, 0.533, 0.243);   // Accent orange

      // Smooth noise function
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      // Smooth interpolation
      float smoothNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);

        float a = noise(i);
        float b = noise(i + vec2(1.0, 0.0));
        float c = noise(i + vec2(0.0, 1.0));
        float d = noise(i + vec2(1.0, 1.0));

        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      // Fractal Brownian Motion
      float fbm(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;
        float frequency = 1.0;

        for(int i = 0; i < 5; i++) {
          value += amplitude * smoothNoise(p * frequency);
          frequency *= 2.0;
          amplitude *= 0.5;
        }

        return value;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;

        // Adjust for aspect ratio
        vec2 p = uv * 2.0 - 1.0;
        p.x *= u_resolution.x / u_resolution.y;

        // Animated noise patterns
        float n1 = fbm(p * 2.0 + u_time * 0.1 + u_mouse);
        float n2 = fbm(p * 1.5 - u_time * 0.08 + vec2(u_mouse.y, u_mouse.x));
        float n3 = fbm(p * 3.0 + u_time * 0.05);

        // Create flowing pattern
        float pattern = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;

        // Color mixing based on pattern
        vec3 color = mix(color1, color2, smoothstep(0.3, 0.7, pattern));

        // Add primary color accent
        float accent1 = smoothstep(0.6, 0.8, n1);
        color = mix(color, color3, accent1 * 0.3);

        // Add secondary accent
        float accent2 = smoothstep(0.7, 0.9, n2);
        color = mix(color, color4, accent2 * 0.15);

        // Vignette effect
        float vignette = 1.0 - length(uv - 0.5) * 0.8;
        color *= vignette;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Create shaders
    const vertexShader = this.createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = this.createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    // Create program
    this.program = this.createProgram(vertexShader, fragmentShader);

    // Set up geometry (full screen quad)
    const positions = new Float32Array([
      -1, -1,
      1, -1,
      -1, 1,
      1, 1,
    ]);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(this.program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Get uniform locations
    this.timeLocation = gl.getUniformLocation(this.program, 'u_time');
    this.resolutionLocation = gl.getUniformLocation(this.program, 'u_resolution');
    this.mouseLocation = gl.getUniformLocation(this.program, 'u_mouse');
  }

  createShader(type, source) {
    const gl = this.gl;
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compile error:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  }

  createProgram(vertexShader, fragmentShader) {
    const gl = this.gl;
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return null;
    }

    return program;
  }

  resize() {
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    if (this.canvas.width !== displayWidth || this.canvas.height !== displayHeight) {
      this.canvas.width = displayWidth;
      this.canvas.height = displayHeight;

      if (this.gl) {
        this.gl.viewport(0, 0, displayWidth, displayHeight);
      }
    }
  }

  setupEventListeners() {
    window.addEventListener('resize', () => this.resize());

    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX / window.innerWidth;
      this.mouseY = 1.0 - (e.clientY / window.innerHeight);
    });
  }

  animate() {
    if (!this.gl) return;

    this.time += 0.016; // Approximately 60fps

    const gl = this.gl;
    gl.useProgram(this.program);

    // Update uniforms
    gl.uniform1f(this.timeLocation, this.time);
    gl.uniform2f(this.resolutionLocation, this.canvas.width, this.canvas.height);
    gl.uniform2f(this.mouseLocation, this.mouseX, this.mouseY);

    // Draw
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    new FluidGradient(canvas);
  }
});
