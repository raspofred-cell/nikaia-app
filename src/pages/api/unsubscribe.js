export default function UnsubscribePage() {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Désinscription - NikaIA</title>
      </head>
      <body>
        <script dangerouslySetInnerHTML={{__html: `
          const email = new URLSearchParams(window.location.search).get('email');
          document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('btn').addEventListener('click', async function() {
              this.disabled = true;
              this.textContent = 'Traitement…';
              await fetch('/api/unsubscribe', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email})
              });
              document.getElementById('form').style.display = 'none';
              document.getElementById('confirm').style.display = 'block';
            });
          });
        `}} />
      </body>
    </html>
  );
}
