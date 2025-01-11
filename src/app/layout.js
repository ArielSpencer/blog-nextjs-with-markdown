import './globals.css'; // Import global styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blog in MarkDown</title>
      </head>
      <body>
        <header>
          <h1>Blog in MarkDown</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>© {new Date().getFullYear()} Blog in MarkDown. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}