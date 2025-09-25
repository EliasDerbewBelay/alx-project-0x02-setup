import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import React, { useState } from "react";
import { CardProps } from "@/interfaces";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<CardProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: CardProps) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <Header />
      <main>
        <button
          className="bg-blue-500 text-white font-semibold text-xl px-4 py-2 rounded-sm m-4 cursor-pointer hover:shadow-md"
          onClick={() => setIsModalOpen(true)}
        >
          Add Post
        </button>

        <div className="grid grid-cols-4">
          <Card
            title="Card 1 title"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Card
            title="Card 2 title"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Card
            title="Card 3 title"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </div>
  );
};

export default Home;
