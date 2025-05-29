<script>
  import HeroSection from '$lib/components/HeroSection.svelte';
  import HueneuStorySection from '$lib/components/HueneuStorySection.svelte';
  import WhatWeDoSection from '$lib/components/WhatWeDoSection.svelte';
  import WhyHueneuSection from '$lib/components/WhyHueneuSection.svelte';
  import LetsWorkTogetherSection from '$lib/components/LetsWorkTogetherSection.svelte';

  // This is the main page, it will orchestrate the sections.
  // Smooth scroll behavior is handled globally in global.css
</script>

<svelte:head>
  <title>hueneu - Where stories find their aesthetic.</title>
  <meta name="description" content="hueneu is a graphic design studio that crafts designs that whisper loud stories. We specialize in branding, packaging, and creative projects with a story-first, intentional approach." />
  <meta property="og:title" content="hueneu - Where stories find their aesthetic." />
  <meta property="og:description" content="Designs that whisper loud stories. Discover hueneu's unique approach to graphic design." />
  <meta property="og:type" content="website" />
  <!-- TODO: Add og:image and og:url once available -->
</svelte:head>

<main class="w-full">
  <section id="hero" class="section-container bg-soft-cream">
    <HeroSection />
  </section>

  <section id="story" class="section-container bg-muted-olive text-soft-cream">
    <HueneuStorySection />
  </section>

  <section id="what-we-do" class="section-container bg-soft-cream">
    <WhatWeDoSection />
  </section>

  <section id="why-hueneu" class="section-container bg-muted-olive text-soft-cream">
    <WhyHueneuSection />
  </section>

  <section id="contact" class="section-container bg-soft-cream">
    <LetsWorkTogetherSection />
  </section>
</main>

<style>
  /* Styles specific to this page can go here, but most will be in global.css or components */
  /* Ensuring sections have distinct alternating background colors for visual separation */
  /* section:nth-child(even) {
    @apply bg-muted-olive text-soft-cream;
  }
  section:nth-child(odd) {
    @apply bg-soft-cream text-deep-charcoal;
  } */
  /* The above is now handled directly on section elements for clarity */
</style>
