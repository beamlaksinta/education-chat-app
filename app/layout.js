import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Educational Chat App",
  description: "Collaborative learning platform for students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
        {/* Navbar shared across all pages */}
        <Navbar />

        {/* Page content */}
        <main className="flex-1 p-4">{children}</main>

        {/* Footer shared across all pages */}
        <Footer />
      </body>
    </html>
  );
}
