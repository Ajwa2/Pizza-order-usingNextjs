import "./globals.css";

export const metadata = {
  title: "Pizza Ordering Service",
  description: "Order Your Pizza from your favorite restaurant",
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
