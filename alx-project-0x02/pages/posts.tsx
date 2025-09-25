import Header from "@/components/layout/Header";
import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error("Fetching Error: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading)
    return (
      <div min-h-screen>
        {" "}
        <Header />
        <p className="font-extralight text-5xl flex justify-center items-center">
          Loading Posts ...
        </p>
      </div>
    );
  return (
    <div>
      <Header />

      <main className="m-4">
        <h1 className="font-bold text-3xl text-slate-500">New Posts</h1>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.body}
              userId={post.id}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Posts;
