import "./globals.css";

export const metadata = {
  title: "Mary Nails",
  description: "Tu belleza, nuestro arte ✨",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

