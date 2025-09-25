import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostsPageProps } from "@/interfaces";

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
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
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Posts;

// Next.js data fetching

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const posts: PostProps[] = data.map((post: any) => ({
    id: post.id,
    userId: post.userId,
    title: post.title,
    content: post.body,
  }));

  return {
    props: { posts },
  };
}
