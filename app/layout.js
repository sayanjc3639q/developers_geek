import "./styles/globals.css";

export const metadata = {
  title: "Developers Geek Hub",
  description: "Your one-stop hub for developer resources and AI tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}