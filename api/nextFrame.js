module.exports = (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Log the request method and body for debugging
  console.log('Request method:', req.method);
  console.log('Request body:', req.body);

  // HTML response with meta tags
  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://www.aaronvick.com/Moxie/moxie2.png" />
        <meta property="og:image" content="https://www.aaronvick.com/Moxie/moxie2.png" />
        <meta property="fc:frame:post_url" content="https://about-moxie.vercel.app/api/nextFrame" />
        <meta property="fc:frame:button:1" content="Next" />
        <meta property="fc:frame:button:2" content="Moxie.xyz" />
        <meta property="fc:frame:button:2:action" content="link" />
        <meta property="fc:frame:button:2:target" content="https://moxie.xyz" />
        <title>How To Earn Moxie - Next Frame</title>
    </head>
    <body>
        <h1>How To Earn Moxie - Next Frame</h1>
        <img src="https://www.aaronvick.com/Moxie/moxie2.png" alt="Moxie Next Image">
    </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(htmlResponse);
};
