
export const sendWebhook = async (url, data) => {
  try {
    // using mode: 'no-cors' to bypass CORS policies.
    // This sends an opaque request. We cannot read the response status or body.
    // Content-Type must be text/plain to avoid preflight (application/json triggers preflight).
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(data),
    });

    // With no-cors, we assume success if no network error occurred.
    return true;
  } catch (error) {
    console.error('Webhook execution failed:', error);
    throw error;
  }
};
