/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // This is a SvelteKit server hook.
  // You can intercept and modify requests and responses here.
  // For example, you could add security headers.

  const response = await resolve(event);

  // Example: Add a Content-Security-Policy header (configure as needed)
  // response.headers.set(
  //   'Content-Security-Policy',
  //   "default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;"
  // );

  // Example: Add other security headers
  // response.headers.set('X-Content-Type-Options', 'nosniff');
  // response.headers.set('X-Frame-Options', 'DENY');
  // response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

  return response;
}

// You can also define other hooks like handleError if needed.
/** @type {import('@sveltejs/kit').HandleServerError} */
// export async function handleError({ error, event }) {
//   // Log errors or send them to an error tracking service
//   console.error('Server Error:', error, 'Event:', event);
//
//   return {
//     message: 'Whoops! Something went wrong on our end.',
//     // You can include an error ID for users to report
//     // errorId: 'XYZ123'
//   };
// }
