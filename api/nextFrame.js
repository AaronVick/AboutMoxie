export default function handler(req, res) {
  if (req.method === 'POST') {
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
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
