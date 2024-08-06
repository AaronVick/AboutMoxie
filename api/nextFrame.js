module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.status(200).json({
    frames: [
      {
        version: 'vNext',
        image: 'https://www.aaronvick.com/Moxie/moxie2.png',
        buttons: [
          { label: 'Next' },
          { label: 'Moxie.xyz', action: 'link', target: 'https://moxie.xyz' }
        ],
      }
    ]
  });
};
