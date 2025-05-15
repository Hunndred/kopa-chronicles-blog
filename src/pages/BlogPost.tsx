
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import Layout from "../components/Layout";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find((post) => post.slug === slug);
  
  useEffect(() => {
    if (!post) {
      navigate("/not-found", { replace: true });
    }
    
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) {
    return null;
  }
  
  return (
    <Layout>
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <p className="text-gray-500 mb-2">{post.date}</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="h-64 md:h-96 overflow-hidden rounded-lg mb-8">
            <img 
              src={post.thumbnail} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div 
            className="blog-content prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        
        <div className="border-t border-gray-200 pt-6 mt-12">
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            className="inline-flex items-center text-primary hover:underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to articles
          </a>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
