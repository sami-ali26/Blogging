import { useNavigate } from "react-router-dom"

export const HomePage = () => {
  const navigate = useNavigate()
  const recentPosts = [
    {
      title: "Building Better User Experiences",
      excerpt: "A comprehensive guide to UX principles that actually matter in today's digital landscape.",
      author: "Alex Rivera",
      date: "Dec 12, 2024",
      readTime: "8 min read",
      category: "UX Design",
    },
    {
      title: "The Future of Web Development",
      excerpt:
        "Exploring emerging technologies and frameworks that are shaping the next generation of web applications.",
      author: "Jordan Kim",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Development",
    },
    {
      title: "Typography in Digital Design",
      excerpt: "How to choose and implement typography that enhances readability and user engagement.",
      author: "Maya Patel",
      date: "Dec 8, 2024",
      readTime: "4 min read",
      category: "Design",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Meduim Blog</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Medium Blog</h2>
          <p className="text-xl text-gray-600 mb-8">Create a blog worth sharing</p>
          <p className="text-lg text-gray-500 italic mb-8">"Blogging is a conversation, not a code."</p>
          <a
          className="bg-gray-900 cursor-pointer text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          onClick={() => {
            navigate("/signup")
          }}
        >
        Browse Articles
        </a>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {recentPosts.map((post, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-3">
                  <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="font-medium text-gray-700">{post.author}</span>
                  <div className="flex items-center space-x-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600">© 2024 Minimal Blog. A simple place for sharing ideas.</p>
        </div>
      </footer>
    </div>
  )
}
