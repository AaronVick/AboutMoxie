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

  // Farcaster frame response
  const frameResponse = {
    version: 'vNext',
    ogImage: 'https://www.aaronvick.com/Moxie/moxie2.png',
    frame: {
      version: 'vNext',
      image: 'https://www.aaronvick.com/Moxie/moxie2.png',
      buttons: [
        {
          label: 'Next',
          action: 'post'
        },
        {
          label: 'Moxie.xyz',
          action: 'link',
          target: 'https://moxie.xyz'
        }
      ],
      postUrl: 'https://about-moxie.vercel.app/api/nextFrame'
    }
  };

  res.status(200).json(frameResponse);
};
