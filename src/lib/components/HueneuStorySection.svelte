<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  // Placeholder for WhoKnewElement component. Replace with actual import when available.
  // import WhoKnewElement from '$lib/components/WhoKnewElement.svelte';

  let elementInView = false;
  let sectionElement; // Bound to the DOM element for IntersectionObserver

  onMount(() => {
    // Ensure code runs only in browser where IntersectionObserver is available
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback for environments without IntersectionObserver (e.g., older browsers, SSR if not handled)
      // Setting to true makes content visible by default in such cases.
      elementInView = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            elementInView = true;
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        root: null, // observing intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      // Cleanup: Disconnect observer when component is destroyed
      if (observer) {
        observer.disconnect();
      }
    };
  });
</script>

<div bind:this={sectionElement} id="story" class="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden text-center">
  <div class="max-w-3xl mx-auto">
    {#if elementInView}
      <h2 
        class="font-primary text-3xl md:text-5xl lg:text-6xl mb-8"
        in:fly={{ y: 50, duration: 1000, easing: quintOut }}
      >
        Hue + Neu: The Balance Within
      </h2>
      <p 
        class="font-secondary text-lg md:text-xl leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto"
        in:fly={{ y: 40, duration: 1000, delay: 300, easing: quintOut }}
      >
        At hueneu, we believe in the power of duality. "Hue" represents the vibrant bursts of creativity, the unexpected pops of color, and the playful spirit that brings stories to life. "Neu" embodies the grounding neutrality, the calm intentionality, and the sophisticated balance that ensures every design resonates deeply and clearly.
      </p>
    {/if}
  </div>

  <!-- Placeholder for WhoKnewElement -->
  <div class="mt-8 md:mt-12 w-full max-w-md h-64 bg-soft-cream/20 rounded-lg flex items-center justify-center text-soft-cream/70 border border-soft-cream/30 relative">
    <!-- <WhoKnewElement /> -->
    <p class="font-primary text-2xl">(WhoKnewElement Placeholder)</p>
    <p class="absolute text-xs -bottom-6 text-center w-full">A scroll-triggered visual pop-out will appear here.</p>
  </div>
  
  {#if elementInView}
    <p 
      class="font-secondary text-md md:text-lg italic mt-12 md:mt-16 max-w-xl mx-auto"
      in:fly={{ y: 30, duration: 1000, delay: 600, easing: quintOut }}
    >
      It's this dance between the bold and the serene, the story and its aesthetic, that creates designs that not only speak but whisper loud stories. And sometimes, in that quiet space, a little surprise emerges... Who Knew?
    </p>
  {/if}
</div>
