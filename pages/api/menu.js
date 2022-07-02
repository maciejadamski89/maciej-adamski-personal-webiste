export default function handler(req, res) {
  res.status(200).json({
    menu: [
      "Home",
      "About",
      "Experience",
      "Skills",
      "Awards",
      "Certs",
      "Contact",
    ],
  });
}
