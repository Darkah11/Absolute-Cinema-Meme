import "./globals.css";

export const metadata = {
  title: "Absolute Cinema",
  description: ` Do you know about the Absolute Cinema meme that our coin is based
              on?. Absolute Cinema is a reaction image of film director Martin
              Scorsese raising his hands captioned with the catchphrase.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased overflow-x-clip`}>{children}</body>
    </html>
  );
}
