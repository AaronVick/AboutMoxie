export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle the POST request here
    res.status(200).json({ /* your response */ });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
