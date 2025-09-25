import { ButtonHTMLAttributes, ReactNode } from "react";

export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: { title: string; content: string }) => void;
}

export interface Post {
  title: string;
  content: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

export interface PostsPageProps {
  posts: PostProps[];
}
