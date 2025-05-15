
import { blogPosts } from "../data/blogPosts";
import BlogPostCard from "../components/BlogPostCard";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to 9JAKOPA</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted source for NYSC news, updates, and community.
          </p>
        </section>

        {/* Blog Posts Section */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
