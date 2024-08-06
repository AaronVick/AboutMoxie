export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle the post request
    res.status(200).json({ message: 'Frame received' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
