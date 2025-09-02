// app/resources/page.js
export default function ResourcesPage() {
  const resources = [
    {
      title: "Next.js Documentation",
      link: "https://nextjs.org/docs",
      desc: "Learn how to build modern apps with Next.js."
    },
    {
      title: "Tailwind CSS",
      link: "https://tailwindcss.com/docs",
      desc: "Utility-first CSS framework for styling your app."
    },
    {
      title: "MDN Web Docs",
      link: "https://developer.mozilla.org",
      desc: "Comprehensive resource for web technologies."
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-blue-600 text-center">
        📚 Resources
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res, i) => (
          <a
            key={i}
            href={res.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <h2 className="font-bold text-xl mb-2">{res.title}</h2>
            <p className="text-gray-600">{res.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}