import "./globals.scss";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <Head />
      <body> {children}</body>
    </html>
  );
}
