<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  // Placeholder for ContactForm component, assuming it will be created later.
  // import ContactForm from './ContactForm.svelte'; 

  // State for scroll-triggered animations
  let elementInView = false;
  let sectionElement;

  // Function to check if element is in view (simplified)
  const handleScroll = () => {
    if (sectionElement) {
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
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<!-- 
  Let's Work Together Section: Provides a contact point and social media link.
  - Features a placeholder for the ContactForm component.
  - Includes a playful CTA button and Instagram link.
  - Uses scroll-triggered animations for elements.
-->
<div bind:this={sectionElement} class="w-full text-center py-20 md:py-32 px-6 md:px-12 bg-muted-olive text-soft-cream">
  {#if elementInView}
    <h2 
      class="font-primary text-4xl md:text-5xl lg:text-6xl mb-12"
      in:fly={{ y: 50, duration: 1000, delay: 200, easing: quintOut }}
    >
      Let’s Work Together
    </h2>

    <div 
      class="max-w-lg mx-auto mb-12 bg-soft-cream p-8 md:p-12 rounded-lg shadow-xl text-deep-charcoal prose lg:prose-xl prose-headings:font-primary prose-p:font-secondary"
      in:fly={{ y: 40, duration: 1000, delay: 500, easing: quintOut }}
    >
      <!-- Placeholder for ContactForm.svelte -->
      <p class="text-center font-secondary text-lg mb-6">Send us a little note, we'd love to hear your story.</p>
      <div class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-deep-charcoal/80 text-left">Your Name</label>
          <input type="text" name="name" id="name" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-vibrant-coral focus:border-vibrant-coral sm:text-sm font-secondary" placeholder="Like a character from a novel...">
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-deep-charcoal/80 text-left">Your Email</label>
          <input type="email" name="email" id="email" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-vibrant-coral focus:border-vibrant-coral sm:text-sm font-secondary" placeholder="Where can we write back?">
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-deep-charcoal/80 text-left">Your Message</label>
          <textarea id="message" name="message" rows="4" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-vibrant-coral focus:border-vibrant-coral sm:text-sm font-secondary" placeholder="Tell us about your project, your dreams, or your favorite hue..."></textarea>
        </div>
      </div>
       <!-- End of ContactForm.svelte placeholder -->
      <button class="btn btn-primary mt-10 w-full md:w-auto transition-transform duration-300 ease-out hover:scale-105">
        Let's design your story
      </button>
    </div>

    <div 
      class="mt-16"
      in:fly={{ y: 30, duration: 1000, delay: 800, easing: quintOut }}
    >
      <p class="font-secondary text-lg mb-4">Find more inspiration (and occasional musings):</p>
      <a 
        href="https://instagram.com/hueneu_" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="inline-flex items-center font-secondary text-soft-cream hover:text-vibrant-coral transition-colors duration-300 group"
      >
        <img src="/instagram-icon.svg" alt="Instagram Icon" class="w-6 h-6 mr-2 filter-soft-cream group-hover:filter-vibrant-coral transition-all duration-300" />
        @hueneu_
      </a>
    </div>

    <!-- Optional: Embed a link to the services deck or a cute visual of the “Who Knew?” segment -->
    <!-- 
    <div class="mt-12">
      <a href="#" class="font-secondary text-soft-cream hover:text-vibrant-coral underline">
        Peek at our Services Deck
      </a>
    </div>
    -->
  {/if}
</div>

<style lang="postcss">
  /* Styles for Tailwind Typography plugin if used, or custom prose styles */
  /* For example, to ensure form elements within prose are styled correctly if not using a dedicated form component */
  /* Placeholder styles for the contact form, assuming ContactForm.svelte will handle its own styling */
  .filter-soft-cream {
    filter: invert(94%) sepia(13%) saturate(269%) hue-rotate(320deg) brightness(104%) contrast(91%); /* approx soft-cream */
  }
  .group-hover\:filter-vibrant-coral:hover {
    filter: invert(57%) sepia(45%) saturate(2938%) hue-rotate(325deg) brightness(101%) contrast(101%); /* approx vibrant-coral */
  }
  /* Add custom easing if needed */
  /* import { quintOut } from 'svelte/easing'; */
</style>