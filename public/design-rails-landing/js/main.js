/**
 * Main interactive functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Copy to clipboard functionality
  const copyButton = document.querySelector('.copy-button');
  const installCommand = document.querySelector('.install-command code');

  if (copyButton && installCommand) {
    copyButton.addEventListener('click', async () => {
      const commandText = installCommand.textContent;

      try {
        await navigator.clipboard.writeText(commandText);

        // Visual feedback
        const originalHTML = copyButton.innerHTML;
        copyButton.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;
        copyButton.style.background = 'var(--color-success)';
        copyButton.style.borderColor = 'var(--color-success)';
        copyButton.style.color = 'var(--color-bg-primary)';

        setTimeout(() => {
          copyButton.innerHTML = originalHTML;
          copyButton.style.background = '';
          copyButton.style.borderColor = '';
          copyButton.style.color = '';
        }, 2000);

      } catch (err) {
        console.error('Failed to copy:', err);

        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = commandText;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();

        try {
          document.execCommand('copy');
          console.log('Copied using fallback method');
        } catch (fallbackErr) {
          console.error('Fallback copy failed:', fallbackErr);
        }

        document.body.removeChild(textArea);
      }
    });
  }

  // Add active state to CTA buttons
  const ctaButtons = document.querySelectorAll('.cta-primary');
  ctaButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
      button.style.transform = 'translateY(0)';
    });

    button.addEventListener('mouseup', () => {
      button.style.transform = '';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = '';
    });
  });

  // Add subtle hover animation to capability icons
  const capabilityIcons = document.querySelectorAll('.capability-icon');
  capabilityIcons.forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'scale(1.1) rotate(5deg)';
    });
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = '';
    });
  });

  // Performance monitoring (optional)
  if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint') {
          console.log(`${entry.name}: ${entry.startTime}ms`);
        }
      }
    });

    try {
      perfObserver.observe({ entryTypes: ['paint'] });
    } catch (e) {
      // Observer not supported for these entry types
    }
  }

  // Add keyboard navigation support
  document.addEventListener('keydown', (e) => {
    // Allow escape key to close/dismiss actions
    if (e.key === 'Escape') {
      document.activeElement.blur();
    }
  });

  // Preload critical resources
  const preloadLinks = [
    'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap'
  ];

  preloadLinks.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
  });

  // Console easter egg for developers
  console.log('%c🎨 Design Rails', 'font-size: 24px; font-weight: bold; color: #58a6ff;');
  console.log('%cGive your AI coding agent the design intelligence it\'s missing.', 'font-size: 14px; color: #8b949e;');
  console.log('%cBuilt with distinctive design choices, not AI slop. 🚀', 'font-size: 12px; color: #f0883e;');
});

// Detect reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Disable animations for users who prefer reduced motion
  document.documentElement.style.setProperty('--transition-fast', '0s');
  document.documentElement.style.setProperty('--transition-base', '0s');
  document.documentElement.style.setProperty('--transition-slow', '0s');

  // Disable WebGL background
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    canvas.style.display = 'none';
  }
}
