export default function handler(req, res) {
    if (req.method === 'POST') {
        res.status(200).json({
            image: 'https://www.aaronvick.com/Moxie/moxie2.png',
            buttons: [
                { label: 'Next', action: 'post', target: 'https://about-moxie.vercel.app/api/moxie3' },
                { label: 'Back', action: 'post', target: 'https://about-moxie.vercel.app' },
                { label: 'Check Your Moxie', action: 'link', target: 'https://moxie-frames.airstack.xyz/ctar' },
                { label: 'Aaron\'s FT', action: 'link', target: 'https://moxie-frames.airstack.xyz/sufta?t=235' }
            ]
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
