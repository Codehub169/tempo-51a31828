<script>
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';

  // Prop for animation delay, allowing customization from parent
  export let delay = 500; // Default delay

  // State to trigger animation
  let visible = false;
  onMount(() => {
    // Trigger animation after a short delay to simulate reveal
    const timer = setTimeout(() => {
      visible = true;
    }, delay);
    return () => clearTimeout(timer);
  });
</script>

<!-- 
  AnimatedLogo Component: Displays the hueneu logo with an animation.
  - Placeholder for the actual animated SVG (`hueneu-logo-animated.svg`).
  - Uses Svelte's scale transition for a reveal effect.
  - Designed to be visually impactful for the Hero section.
-->
{#if visible}
  <div 
    class="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto"
    in:scale={{ duration: 1200, delay: 100, start: 0.5, opacity: 0, easing: quintOut }}
  >
    <!-- 
      The 'hueneu-logo-animated.svg' is expected to be an SVG file that might contain its own SMIL animations 
      or be a static asset. This component wraps it with a Svelte scale transition for its appearance.
      For a complex reveal like Instagram's, the SVG itself would need to be designed with specific 
      path animations, or a JS animation library (e.g., GSAP) would be used to animate SVG elements.
    -->
    <img 
      src="/hueneu-logo-animated.svg" 
      alt="hueneu animated logo" 
      class="w-full h-full object-contain"
    />
    <!-- Fallback text if image doesn't load, or for assistive tech -->
    <span class="sr-only">hueneu</span>
  </div>
{/if}

<style>
  /* Custom easing function (quintOut) if not directly available */
  /* import { quintOut } from 'svelte/easing'; */
</style>