import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="shadow max-w-[30rem] px-5 py-2 m-3 hover:shadow-lg cursor-pointer rounded-lg bg-slate-200">
      <h1 className="font-semibold text-xl mb-3 text-slate-700">{title}</h1>
      <p className="font-extralight">{content}</p>
      <span className="flex justify-end mt-4">User ID: {userId}</span>
    </div>
  );
};
export default PostCard;
