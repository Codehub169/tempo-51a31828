<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  // Placeholder for AnimatedLogo component. Replace with actual import when available.
  // import AnimatedLogo from '$lib/components/AnimatedLogo.svelte';

  // Placeholder for ScrollIndicator component. Replace with actual import when available.
  // import ScrollIndicator from '$lib/components/ScrollIndicator.svelte';

  let showText = false;
  let showSubtext = false;
  let showScrollIndicator = false;

  onMount(() => {
    // Simulate logo animation delay before showing text
    setTimeout(() => {
      showText = true;
    }, 1500); // Adjust delay to match logo animation
    setTimeout(() => {
      showSubtext = true;
    }, 2000); // Adjust delay for subtext
    setTimeout(() => {
      showScrollIndicator = true;
    }, 2500); // Adjust delay for scroll indicator
  });
</script>

<div class="min-h-screen flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
  <!-- Placeholder for AnimatedLogo -->
  <div class="w-48 h-48 mb-12 text-deep-charcoal flex items-center justify-center">
    <!-- <AnimatedLogo /> -->
    <svg viewBox="0 0 100 100" class="w-full h-full fill-current text-vibrant-coral">
      <rect width="100" height="100" rx="10" ry="10" class="opacity-20"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" class="font-primary text-3xl text-deep-charcoal">
        hueneu
      </text>
    </svg>
    <p class="absolute text-xs -bottom-4 text-deep-charcoal/70">(AnimatedLogo Placeholder)</p>
  </div>

  {#if showText}
    <h1
      class="font-primary text-4xl md:text-6xl lg:text-7xl text-deep-charcoal mb-4"
      in:fly={{ y: 50, duration: 1000, delay: 200 }}
    >
      Where stories find their aesthetic.
    </h1>
  {/if}

  {#if showSubtext}
    <p
      class="font-secondary text-lg md:text-xl text-deep-charcoal/80 max-w-xl mx-auto"
      in:fly={{ y: 30, duration: 800, delay: 400 }}
    >
      Designs that whisper loud stories.
    </p>
  {/if}

  {#if showScrollIndicator}
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-deep-charcoal" in:fly={{ y: 20, duration: 600, delay: 600 }}>
      <!-- <ScrollIndicator /> -->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-bounce w-8 h-8 text-vibrant-coral">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
      <p class="text-xs mt-1">(ScrollIndicator Placeholder)</p>
    </div>
  {/if}
</div>
