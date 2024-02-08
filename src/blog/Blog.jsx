import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(
          "https://gnews.io/api/v4/search?q=crypto&lang=en&country=us&max=10&apikey=614497ccec25dcede986d69abd2fcdbf"
        );
        setBlogPosts(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <h2 className="text-3xl font-semibold mb-4 col-span-full mx-auto">
        Cryptocurrency News
      </h2>
      {blogPosts.map((post) => (
        <NavLink
          to={post.url}
          key={post.url}
          className="border rounded-md overflow-hidden hover:shadow-md"
        >
          {post.image && (
            <img
              src={post.image}
              alt={post.summary}
              className="w-full h-40 object-cover"
            />
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-500">{post.publishedAt}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Blog;
