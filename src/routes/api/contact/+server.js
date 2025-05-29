import { json } from '@sveltejs/kit';

// Regular expression for basic email validation
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return json(
        { success: false, message: 'Name is required.', field: 'name' },
        { status: 400 }
      );
    }
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
      return json(
        { success: false, message: 'A valid email is required.', field: 'email' },
        { status: 400 }
      );
    }
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return json(
        { success: false, message: 'Message cannot be empty.', field: 'message' },
        { status: 400 }
      );
    }

    // Simulate sending an email or saving to a database
    // In a real application, you would integrate with an email service (e.g., SendGrid, Postmark)
    // or save the data to a database here.
    console.log('Contact form submission received:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // For now, we'll just simulate a successful submission
    // You might want to add a slight delay to simulate network latency for UX testing
    // await new Promise(resolve => setTimeout(resolve, 1000));

    return json(
      { success: true, message: 'Your message has been sent successfully! We\'ll be in touch soon.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    // Check if it's a JSON parsing error
    if (error instanceof SyntaxError) {
        return json(
            { success: false, message: 'Invalid request format.' },
            { status: 400 }
        );
    }
    return json(
      { success: false, message: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
