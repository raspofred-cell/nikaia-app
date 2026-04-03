export async function POST(request) {
  const { email } = await request.json();

  const response = await fetch(
    "https://agent.nikaia-automations.com/webhook/unsubscribe",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }
  );

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}