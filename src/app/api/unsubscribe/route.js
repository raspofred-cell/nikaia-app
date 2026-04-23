export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email") || "";

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Désinscription - NikaIA</title>
  <style>
    body { font-family: sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #0a0a0a; color: #fff; }
    .card { background: #1a1a1a; border-radius: 12px; padding: 2rem; max-width: 400px; width: 90%; text-align: center; }
    button { background: #de0917; color: #fff; border: none; padding: 0.75rem 2rem; border-radius: 9999px; cursor: pointer; font-size: 1rem; margin-top: 1rem; }
    button:disabled { opacity: 0.6; cursor: not-allowed; }
    #confirm { display: none; color: #4ade80; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Se désinscrire</h1>
    <div id="form">
      <p>Confirmer la désinscription pour <strong>${email}</strong> ?</p>
      <button id="btn">Confirmer la désinscription</button>
    </div>
    <p id="confirm">Vous avez bien été désinscrit(e).</p>
  </div>
  <script>
    document.getElementById('btn').addEventListener('click', async function() {
      this.disabled = true;
      this.textContent = 'Traitement…';
      await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: '${email}' })
      });
      document.getElementById('form').style.display = 'none';
      document.getElementById('confirm').style.display = 'block';
    });
  </script>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

export async function POST(request) {
  const { email } = await request.json();

  await fetch("https://agent.nikaia-automations.com/webhook/unsubscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

