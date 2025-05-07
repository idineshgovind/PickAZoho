/**
 * Utility functions for animations and transitions
 */

/**
 * Adds a class to an element and removes it after a specified duration
 * @param {HTMLElement} element - The element to animate
 * @param {string} className - The class to add temporarily
 * @param {number} duration - Duration in milliseconds
 * @returns {Promise} Resolves when animation is complete
 */
export function animateElement(element, className, duration = 1000) {
  return new Promise(resolve => {
    element.classList.add(className);
    
    setTimeout(() => {
      element.classList.remove(className);
      resolve();
    }, duration);
  });
}

/**
 * Creates a shaking animation effect
 * @param {HTMLElement} element - The element to animate
 * @param {number} intensity - Shake intensity (pixels)
 * @param {number} duration - Duration in milliseconds
 * @returns {Promise} Resolves when animation is complete
 */
export function shakeElement(element, intensity = 5, duration = 500) {
  const originalPosition = element.style.transform;
  const steps = 10;
  const interval = duration / steps;
  
  return new Promise(resolve => {
    let count = 0;
    
    const shake = setInterval(() => {
      count++;
      if (count >= steps) {
        clearInterval(shake);
        element.style.transform = originalPosition;
        resolve();
        return;
      }
      
      const xPos = Math.random() * intensity * 2 - intensity;
      const yPos = Math.random() * intensity * 2 - intensity;
      element.style.transform = `translate(${xPos}px, ${yPos}px)`;
    }, interval);
  });
}

/**
 * Creates a pulse animation effect
 * @param {HTMLElement} element - The element to animate
 * @param {number} scale - Maximum scale factor
 * @param {number} duration - Duration in milliseconds
 * @returns {Promise} Resolves when animation is complete
 */
export function pulseElement(element, scale = 1.1, duration = 500) {
  const originalTransform = element.style.transform;
  
  return new Promise(resolve => {
    // Scale up
    element.style.transition = `transform ${duration/2}ms ease-out`;
    element.style.transform = `scale(${scale})`;
    
    setTimeout(() => {
      // Scale back down
      element.style.transform = originalTransform || 'scale(1)';
      
      setTimeout(() => {
        element.style.transition = '';
        resolve();
      }, duration/2);
    }, duration/2);
  });
}

/**
 * Adds a confetti effect to celebrate a win
 * @param {HTMLElement} container - The container element for confetti
 * @param {number} particleCount - Number of confetti particles
 * @param {number} duration - Duration in milliseconds
 */
export function showConfetti(container, particleCount = 50, duration = 2000) {
  const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4'];
  const confettiContainer = document.createElement('div');
  
  confettiContainer.style.position = 'absolute';
  confettiContainer.style.top = '0';
  confettiContainer.style.left = '0';
  confettiContainer.style.width = '100%';
  confettiContainer.style.height = '100%';
  confettiContainer.style.overflow = 'hidden';
  confettiContainer.style.pointerEvents = 'none';
  
  container.appendChild(confettiContainer);
  
  // Create confetti particles
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.position = 'absolute';
    particle.style.width = '10px';
    particle.style.height = '10px';
    particle.style.backgroundColor = color;
    particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    particle.style.top = '-10px';
    particle.style.left = `${Math.random() * 100}%`;
    
    confettiContainer.appendChild(particle);
    
    // Animate particle
    const speed = 5 + Math.random() * 5;
    const angle = Math.random() * Math.PI * 2;
    const spinSpeed = Math.random() * 360;
    
    let posY = -10;
    let posX = parseFloat(particle.style.left);
    const maxY = container.offsetHeight;
    
    const moveParticle = () => {
      posY += speed;
      posX += Math.sin(angle) * 2;
      
      particle.style.transform = `translateY(${posY}px) translateX(${posX - parseFloat(particle.style.left)}px) rotate(${spinSpeed * (posY / maxY)}deg)`;
      
      if (posY < maxY) {
        requestAnimationFrame(moveParticle);
      } else {
        particle.remove();
      }
    };
    
    requestAnimationFrame(moveParticle);
  }
  
  // Remove container after duration
  setTimeout(() => {
    confettiContainer.remove();
  }, duration);
}