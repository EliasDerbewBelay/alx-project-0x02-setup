import { UsersProps } from "@/interfaces";

const UserCard: React.FC<UsersProps> = ({ name, email, username, address }) => {
  return (
    <div className="shadow bg-slate-100 p-4 rounded-lg hover:shadow-lg cursor-pointer">
      <p>Name: {name}</p>
      <p>User Name: {username}</p>
      <p>Email: <span className="underline italic text-slate-500">{email}</span></p>

      <div className="h-0.5 bg-black/40 rounded-full m-4"></div>
      <div>
        <p>Address:</p>
        <p>{address.city}</p>
        <p>{address.street}</p>
        <p>{address.suite}</p>
      </div>
    </div>
  );
};

export default UserCard;
