const frames = [
  {
    image: 'https://about-moxie.vercel.app/moxiecover.png',
    buttons: [
      { label: 'Next' },
      { label: 'Moxie.xyz', action: 'link', target: 'https://moxie.xyz' }
    ],
  },
  {
    image: 'https://about-moxie.vercel.app/moxie2.png',
    buttons: [
      { label: 'Back' },
      { label: 'Next' }
    ],
  },
  {
    image: 'https://about-moxie.vercel.app/moxie3.png',
    buttons: [
      { label: 'Back' },
      { label: 'Next' }
    ],
  },
  {
    image: 'https://about-moxie.vercel.app/moxie4.png',
    buttons: [
      { label: 'Back' },
      { label: 'Next' }
    ],
  },
  {
    image: 'https://about-moxie.vercel.app/moxie5.png',
    buttons: [
      { label: 'Back' },
      { label: 'Moxie.xyz', action: 'link', target: 'https://moxie.xyz' }
    ],
  },
];

module.exports = (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Handle POST request
  if (req.method === 'POST') {
    const { untrustedData } = req.body;
    let currentIndex = 0;

    if (untrustedData && untrustedData.buttonIndex) {
      const buttonIndex = parseInt(untrustedData.buttonIndex);
      const previousFrame = frames[currentIndex];

      if (buttonIndex === 1 && previousFrame.buttons[0].label === 'Back') {
        currentIndex = Math.max(0, currentIndex - 1);
      } else if (buttonIndex === 2 && previousFrame.buttons[1].label === 'Next') {
        currentIndex = Math.min(frames.length - 1, currentIndex + 1);
      }
    }

    res.status(200).json({
      frames: [
        {
          version: 'vNext',
          ...frames[currentIndex]
        }
      ]
    });
  } else {
    // For debugging, allow GET requests to return a simple message
    res.status(200).json({ message: 'API is working' });
  }
};
