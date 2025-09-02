import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Education Chat App",
  description: "A modern, collaborative learning platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1 p-6 max-w-6xl mx-auto">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}