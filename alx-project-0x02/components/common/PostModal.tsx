import { useState } from "react";
import { PostModalProps } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!title || !content) return;
    onSubmit({ title, content });
    setTitle("");
    setContent("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="shadow bg-slate-700 text-white m-4 px-10 py-5 rounded-sm max-w-[30rem]">
      <div className="">
        <h2 className="font-bold text-xl text-center mb-4">Create Post</h2>

        <form onSubmit={handleOnSubmit} className="flex flex-col max-w-[25rem]">
          <input
            type="text"
            placeholder="Title . . ."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-5 py-2 rounded-sm hover:shadow-lg m-2 bg-slate-200 text-black"
          />
          <textarea
            placeholder="Content . . ."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="px-5 py-2 rounded-sm hover:shadow-lg m-2 bg-slate-200 text-black"
            rows={4}
          ></textarea>

          <div className="flex gap-4 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-blue-500 rounded-full px-5 py-2 font-semibold hover:shadow-md cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 rounded-full px-5 py-2 font-semibold hover:shadow-md cursor-pointer"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PostModal;
