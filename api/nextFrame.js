import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['POST', 'HEAD'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    // Handle the POST request
    res.status(200).json({
      frames: [
        {
          version: 'vNext',
          image: 'https://www.aaronvick.com/Moxie/moxie2.png',
          buttons: [
            {
              label: 'Next',
            },
            {
              label: 'Moxie.xyz',
              action: 'link',
              target: 'https://moxie.xyz'
            }
          ],
        }
      ]
    });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle the POST request
    res.status(200).json({
      frames: [
        {
          version: 'vNext',
          image: 'https://www.aaronvick.com/Moxie/moxie2.png',
          buttons: [
            {
              label: 'Next',
            },
            {
              label: 'Moxie.xyz',
              action: 'link',
              target: 'https://moxie.xyz'
            }
          ],
        }
      ]
    });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
