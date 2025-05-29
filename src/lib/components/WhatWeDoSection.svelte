<script>
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  const services = [
    {
      icon: '/icon-branding.svg',
      name: 'Branding',
      description: 'Logos that breathe, identities that speak.'
    },
    {
      icon: '/icon-packaging.svg',
      name: 'Packaging',
      description: 'Packaging, but make it poetic.'
    },
    {
      icon: '/icon-social-media.svg',
      name: 'Social Media',
      description: 'Scrolling stop-pers, authentically you.'
    },
    {
      icon: '/icon-stationery.svg',
      name: 'Stationery',
      description: 'Tangible stories, beautifully told.'
    },
    {
      icon: '/icon-coffee-table-books.svg',
      name: 'Coffee Table Books',
      description: 'Curated narratives, bound in beauty.'
    },
    {
      icon: '/icon-creative-projects.svg',
      name: 'Creative Projects',
      description: 'Your vision, our imaginative spark.'
    }
  ];

  let elementInView = false;
</script>

<div class="min-h-screen flex flex-col items-center justify-center p-8 text-center">
  <div use:elementInView>
    {#if elementInView}
      <h2 
        class="font-primary text-3xl md:text-5xl lg:text-6xl mb-12 md:mb-16"
        in:fly={{ y: 50, duration: 1000, easing: quintOut }}
      >
        What We Do
      </h2>
    {/if}
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-5xl w-full">
    {#each services as service, i}
      {#if elementInView}
        <div 
          class="bg-muted-olive/10 dark:bg-muted-olive/5 p-6 rounded-xl shadow-lg hover:shadow-vibrant-coral/30 transition-shadow duration-300 ease-out group transform hover:-translate-y-1"
          in:fly={{ y: 40, duration: 800, delay: i * 150 + 300, easing: quintOut }}
        >
          <img src="{service.icon}" alt="{service.name} icon" class="w-12 h-12 mx-auto mb-6 filter hue-rotate-[20deg] saturate-[0.8] brightness-[1.1] group-hover:hue-rotate-[0deg] group-hover:saturate-[1] group-hover:brightness-[1] transition-all duration-300 ease-out" />
          <h3 class="font-primary text-2xl text-deep-charcoal mb-2">{service.name}</h3>
          <p class="font-secondary text-deep-charcoal/80 text-sm">{service.description}</p>
        </div>
      {/if}
    {/each}
  </div>
</div>

<svelte:window on:scroll={() => elementInView = true} />
