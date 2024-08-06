export default function handler(req, res) {
  const { buttonIndex } = req.body;

  let nextFrame;

  switch(buttonIndex) {
    case 1:
      nextFrame = "/api/nextFrame";
      break;
    case 2:
      nextFrame = "https://moxie.xyz";
      break;
    default:
      nextFrame = "/";
      break;
  }

  res.status(200).json({
    nextFrameUrl: nextFrame,
  });
}
