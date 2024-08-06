const frames = [
  {
    image: 'https://www.aaronvick.com/Moxie/moxiecover.png',
    button1: { content: 'Moxie.xyz', action: 'link', target: 'https://moxie.xyz' },
    button2: { content: 'Next', action: 'post' },
    button3: { content: 'Share', action: 'link', target: 'https://warpcast.com/~/compose?text=Earning+Moxie+Frame+Created+by+%40aaronv.eth+&embeds%5B%5D=https://about-moxie.vercel.app/' }
  },
  {
    image: 'https://www.aaronvick.com/Moxie/moxie1.png',
    button1: { content: 'Back', action: 'post' },
    button2: { content: 'Next', action: 'post' },
    button3: { content: 'Share', action: 'link', target: 'https://warpcast.com/~/compose?text=Earning+Moxie+Frame+Created+by+%40aaronv.eth+&embeds%5B%5D=https://about-moxie.vercel.app/' }
  },
  // ... (other frames remain the same)
];

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  let currentIndex = 0;

  if (req.method === 'POST' && req.body && req.body.untrustedData) {
    const buttonIndex = parseInt(req.body.untrustedData.buttonIndex);
    const lastFrame = parseInt(req.body.untrustedData.lastFrameIndex) || 0;

    console.log('Button clicked:', buttonIndex);
    console.log('Last frame:', lastFrame);

    if (buttonIndex === 1 && lastFrame > 0) {
      currentIndex = Math.max(0, lastFrame - 1);
    } else if (buttonIndex === 2) {
      currentIndex = Math.min(frames.length - 1, lastFrame + 1);
    } else {
      currentIndex = lastFrame;
    }
  }

  console.log('Current index:', currentIndex);

  const frame = frames[currentIndex];
  const timestamp = Date.now();

  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${frame.image}?t=${timestamp}" />
        <meta property="og:image" content="${frame.image}?t=${timestamp}" />
        <meta property="fc:frame:post_url" content="https://about-moxie.vercel.app/api/nextFrame" />
        <meta property="fc:frame:button:1" content="${frame.button1.content}" />
        <meta property="fc:frame:button:1:action" content="${frame.button1.action}" />
        ${frame.button1.target ? `<meta property="fc:frame:button:1:target" content="${frame.button1.target}" />` : ''}
        <meta property="fc:frame:button:2" content="${frame.button2.content}" />
        <meta property="fc:frame:button:2:action" content="${frame.button2.action}" />
        ${frame.button2.target ? `<meta property="fc:frame:button:2:target" content="${frame.button2.target}" />` : ''}
        <meta property="fc:frame:button:3" content="${frame.button3.content}" />
        <meta property="fc:frame:button:3:action" content="${frame.button3.action}" />
        <meta property="fc:frame:button:3:target" content="${frame.button3.target}" />
        <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
        <meta property="fc:frame:index" content="${currentIndex}" />
        <title>How To Earn Moxie - Frame ${currentIndex + 1}</title>
    </head>
    <body>
        <h1>How To Earn Moxie - Frame ${currentIndex + 1}</h1>
        <img src="${frame.image}?t=${timestamp}" alt="Moxie Frame ${currentIndex + 1}" width="1200" height="628">
    </body>
    </html>
  `;

  console.log('Sending HTML response for frame:', currentIndex);
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(htmlResponse);
};
