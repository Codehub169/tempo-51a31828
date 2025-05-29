<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  // State for scroll-triggered animations
  let elementInView = false;
  let sectionElement;

  // Function to check if element is in view (simplified)
  const handleScroll = () => {
    if (sectionElement) {
      // Basic check, for more robust solution use Intersection Observer
      const top = sectionElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight * 0.8) { // Trigger when 80% of the element is visible
        elementInView = true;
        window.removeEventListener('scroll', handleScroll);
      }
    }
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case element is already in view
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<!-- 
  Why hueneu? Section: Articulates the studio's unique value proposition with poetic copy.
  - Emotional brand pitch focusing on storytelling and lasting impact.
  - Highlights calm, mystery, and balance.
  - Uses scroll-triggered animations for text elements.
-->
<div bind:this={sectionElement} class="w-full text-center py-20 md:py-32 px-6 md:px-12 bg-soft-cream text-deep-charcoal">
  {#if elementInView}
    <h2 
      class="font-primary text-4xl md:text-5xl lg:text-6xl mb-10 text-muted-olive"
      in:fly={{ y: 50, duration: 1000, delay: 200, easing: quintOut }}
    >
      Why hueneu?
    </h2>
    
    <p 
      class="font-secondary text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-8 leading-relaxed md:leading-loose"
      in:fly={{ y: 40, duration: 1000, delay: 500, easing: quintOut }}
    >
      “We don’t just design—we decode stories.”
    </p>
    
    <p 
      class="font-secondary text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed md:leading-loose"
      in:fly={{ y: 30, duration: 1000, delay: 800, easing: quintOut }}
    >
      “Designs that speak quietly but stay with you.”
    </p>

    <div 
      class="mt-12 max-w-xl mx-auto space-y-4"
      in:fly={{ y: 20, duration: 1000, delay: 1100, easing: quintOut }}
    >
        <p class="font-secondary text-md md:text-lg text-deep-charcoal/80">
            At hueneu, we believe in the quiet power of intentional design. We delve into the heart of your narrative, crafting visuals that resonate with calm intensity and a touch of mystery. It's about finding that perfect balance – where hue meets neu, and your story finds its most evocative aesthetic.
        </p>
    </div>
  {/if}
</div>

<style>
  /* Custom easing function (quintOut) if not directly available or for consistency */
  /* 
  import { quintOut } from 'svelte/easing'; 
  Can be imported if needed, fly transition takes easing function directly.
  */
</style>