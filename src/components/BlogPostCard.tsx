
import { Link } from "react-router-dom";
import { BlogPost } from "../data/blogPosts";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/post/${post.slug}`}>
        <div className="h-48 overflow-hidden">
          <img 
            src={post.thumbnail} 
            alt={post.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-5">
        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
        
        <Link to={`/post/${post.slug}`}>
          <h2 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <Link 
          to={`/post/${post.slug}`}
          className="text-primary font-medium hover:underline inline-flex items-center"
        >
          Read More 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard;
