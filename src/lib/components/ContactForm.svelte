<script>
  import { quintOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';

  let name = '';
  let email = '';
  let message = '';
  let submitting = false;
  let submissionStatus = null; // null, 'success', or 'error'
  let statusMessage = '';

  async function handleSubmit() {
    if (!name || !email || !message) {
      submissionStatus = 'error';
      statusMessage = 'Please fill in all fields.';
      return;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      submissionStatus = 'error';
      statusMessage = 'Please enter a valid email address.';
      return;
    }

    submitting = true;
    submissionStatus = null;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        submissionStatus = 'success';
        statusMessage = result.message || 'Your message has been sent! We\'ll be in touch soon.';
        name = '';
        email = '';
        message = '';
      } else {
        submissionStatus = 'error';
        statusMessage = result.message || 'Something went wrong. Please try again.';
      }
    } catch (error) {
      submissionStatus = 'error';
      statusMessage = 'An unexpected error occurred. Please try again later.';
      console.error('Contact form submission error:', error);
    }

    submitting = false;
  }
</script>

<form 
  on:submit|preventDefault={handleSubmit} 
  class="contact-form-note bg-soft-cream p-8 md:p-12 rounded-lg shadow-lg w-full max-w-2xl mx-auto space-y-6 relative"
  aria-labelledby="contact-form-title"
>
  <div class="absolute -top-4 -left-4 w-16 h-16 bg-vibrant-coral rounded-full opacity-20 -z-10" />
  <div class="absolute -bottom-4 -right-4 w-20 h-20 bg-muted-olive rounded-tl-full opacity-20 -z-10" />

  <h3 id="contact-form-title" class="font-primary text-3xl text-deep-charcoal text-center mb-4">Send a Note</h3>
  
  <div class="form-field-group">
    <label for="name" class="block font-secondary text-sm font-medium text-muted-olive mb-1">Your Name</label>
    <input 
      type="text" 
      id="name" 
      bind:value={name} 
      placeholder="What should we call you?"
      class="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:ring-2 focus:ring-vibrant-coral focus:border-vibrant-coral transition-all duration-300 ease-in-out shadow-sm font-secondary text-deep-charcoal placeholder-gray-400"
      aria-required="true"
    />
  </div>

  <div class="form-field-group">
    <label for="email" class="block font-secondary text-sm font-medium text-muted-olive mb-1">Your Email</label>
    <input 
      type="email" 
      id="email" 
      bind:value={email} 
      placeholder="Where can we reach you?"
      class="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:ring-2 focus:ring-vibrant-coral focus:border-vibrant-coral transition-all duration-300 ease-in-out shadow-sm font-secondary text-deep-charcoal placeholder-gray-400"
      aria-required="true"
    />
  </div>

  <div class="form-field-group">
    <label for="message" class="block font-secondary text-sm font-medium text-muted-olive mb-1">Your Story (or just a hello!)</label>
    <textarea 
      id="message" 
      bind:value={message} 
      rows="6" 
      placeholder="Tell us about your project, your dreams, or your favorite color..."
      class="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:ring-2 focus:ring-vibrant-coral focus:border-vibrant-coral transition-all duration-300 ease-in-out shadow-sm font-secondary text-deep-charcoal placeholder-gray-400 resize-none"
      aria-required="true"
    ></textarea>
  </div>

  <div class="text-center pt-4">
    <button 
      type="submit" 
      disabled={submitting}
      class="btn-primary group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-soft-cream bg-vibrant-coral rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vibrant-coral transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
    >
      <span class="absolute left-0 top-0 h-full w-0 bg-white opacity-20 transition-all duration-500 ease-out group-hover:w-full"></span>
      {#if submitting}
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-soft-cream" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
      {:else}
        Let's design your story
      {/if}
    </button>
  </div>

  {#if submissionStatus}
    <div 
      in:fly={{ y: 10, duration: 300, easing: quintOut }}
      class={`mt-4 p-3 rounded-md text-center font-secondary text-sm ${submissionStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
      role="alert"
    >
      {statusMessage}
    </div>
  {/if}
</form>

<style>
  /* Enhancing the 'note' feel and focus states further */
  .contact-form-note {
    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1), 0 20px 40px -10px rgba(0,0,0,0.1);
    /* Consider a very subtle paper texture background image if available */
  }

  input[type="text"]:focus,
  input[type="email"]:focus,
  textarea:focus {
    box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.3); /* vibrant-coral with opacity */
  }

  .btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.3));
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: inherit;
  }

  .btn-primary:hover::before {
    opacity: 1;
  }

  /* Add subtle decorative elements to enhance the 'note' feel */
  .contact-form-note::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: -10px;
    width: 50px;
    height: 50px;
    /* background-image: url("data:image/svg+xml,%3Csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0 L50 25 L25 50 L0 25 Z' fill='%23A0A083' fill-opacity='0.1'/%3E%3C/svg%3E"); */
    /* A simple SVG shape, keeping it minimal for now */
    /* Example for a corner fold effect if desired, but keeping it clean as per current implementation */
  }

</style>
