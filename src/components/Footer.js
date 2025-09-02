export default function Footer() {
  return (
    <footer className="p-4 bg-gray-800 text-gray-200 text-center mt-10 rounded-t-lg shadow-inner">
      © {new Date().getFullYear()} EduChat. Built for collaboration ✨
    </footer>
  );
}