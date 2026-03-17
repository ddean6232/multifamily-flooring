export async function onRequestPost({ request }) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // This is where you would normally send an email using a service like Postmark or SendGrid
    // For now, we'll just log it (Cloudflare logs) and return a success message
    console.log(`New Lead: ${name} (${email}) - ${message}`);

    // Return a response or redirect
    // For a simple static site, a redirect back to a success page or the home page is best
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/#contact-success',
      },
    });
  } catch (err) {
    return new Response('Error processing form', { status: 500 });
  }
}
