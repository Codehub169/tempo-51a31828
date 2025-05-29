<script>
  import { onMount } from 'svelte';
  import { quintOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';

  let elementInView = false;
  let elementRef;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elementInView = true;
          observer.unobserve(entry.target); // Observe only once
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (elementRef) {
      observer.observe(elementRef);
    }

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  });

  // Simple SVG for a playful sparkle or idea lightbulb
  const sparkleIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="sparkle-icon">
      <path d="M12 2L15.09 8.09L22 9.91L16.91 15.09L18.18 22L12 18.36L5.82 22L7.09 15.09L2 9.91L8.91 8.09L12 2z"/>
      <line x1="12" y1="2" x2="12" y2="6"/>
      <line x1="12" y1="18" x2="12" y2="22"/>
      <line x1="4.22" y1="4.22" x2="7.76" y2="7.76"/>
      <line x1="16.24" y1="16.24" x2="19.78" y2="19.78"/>
      <line x1="2" y1="12" x2="6" y2="12"/>
      <line x1="18" y1="12" x2="22" y2="12"/>
      <line x1="4.22" y1="19.78" x2="7.76" y2="16.24"/>
      <line x1="16.24" y1="7.76" x2="19.78" y2="4.22"/>
    </svg>
  `;

</script>

<div bind:this={elementRef} class="who-knew-container relative text-center py-16 overflow-hidden min-h-[200px]">
  {#if elementInView}
    <div class="flex flex-col items-center justify-center space-y-6">
      <div 
        class="flex items-center justify-center space-x-4"
        in:fly={{ y: 50, duration: 1000, easing: quintOut, delay: 200 }}
      >
        <h3 class="font-primary text-5xl md:text-6xl text-vibrant-coral">
          Who Knew?
        </h3>
        <div 
          class="text-vibrant-coral opacity-0 animate-fadeInSparkle"
          style="animation-delay: 800ms;"
        >
          {@html sparkleIcon}
        </div>
      </div>
      <p 
        class="font-secondary text-xl md:text-2xl text-deep-charcoal max-w-md leading-relaxed"
        in:fly={{ y: 30, duration: 1000, easing: quintOut, delay: 600 }}
      >
        That quiet calm could hide such a vibrant spark. We love the delightful paradox, the unexpected twist that makes a story memorable.
      </p>
    </div>
  {/if}
</div>

<style>
  .sparkle-icon {
    width: 3rem; /* 48px */
    height: 3rem; /* 48px */
    transform: rotate(0deg) scale(0.8);
    transition: transform 0.5s ease-out;
  }

  .who-knew-container:hover .sparkle-icon {
    transform: rotate(15deg) scale(1);
  }

  @keyframes fadeInSparkle {
    0% { opacity: 0; transform: scale(0.5) rotate(-30deg); }
    60% { opacity: 1; transform: scale(1.2) rotate(10deg); }
    100% { opacity: 1; transform: scale(1) rotate(0deg); }
  }

  .animate-fadeInSparkle {
    animation-name: fadeInSparkle;
    animation-duration: 0.8s;
    animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
    animation-fill-mode: forwards;
  }
</style>
