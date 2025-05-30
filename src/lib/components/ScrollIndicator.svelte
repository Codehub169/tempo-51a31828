<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  // State to control visibility for initial fade-in
  let visible = false;
  onMount(() => {
    const timer = setTimeout(() => {
      visible = true;
    }, 1500); // Delay appearance to follow hero text animations
    return () => clearTimeout(timer);
  });

  // Function to handle smooth scroll to the next section
  function scrollToNextSection() {
    const nextSection = document.querySelector('#story'); // Target the ID of the "HueneuStorySection"
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<!-- 
  ScrollIndicator Component: Provides a visual cue to scroll down.
  - Playful but minimal design.
  - Subtle animation to attract attention.
  - Clicking it smoothly scrolls to the next section.
-->
{#if visible}
  <button 
    on:click={scrollToNextSection}
    aria-label="Scroll to next section"
    class="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-vibrant-coral rounded-full"
    in:fly={{ y: 20, duration: 800, delay: 200, opacity: 0 }}
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="28" 
      height="28" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="1.5" 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      class="text-muted-olive group-hover:text-vibrant-coral transition-colors duration-300 animate-bounce-slow"
    >
      <path d="M12 5v14"></path>
      <path d="m19 12-7 7-7-7"></path>
    </svg>
  </button>
{/if}

<style lang="postcss">
  /* Custom animation for a slower, more gentle bounce */
  @keyframes bounce-slow {
    0%, 100% {
      transform: translateY(-15%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
  .animate-bounce-slow {
    animation: bounce-slow 2s infinite;
  }
</style>
