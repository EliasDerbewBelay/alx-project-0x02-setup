import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="max-w-[25rem] px-10 py-5 hover:shadow-md hover:shadow cursor-pointer m-2 shadow">
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="font-extralight">{content}</p>
    </div>
  );
};

export default Card;
