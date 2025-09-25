import Header from "@/components/layout/Header";
import { UserPageProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import { UsersProps } from "@/interfaces";

const User: React.FC<UserPageProps> = ({ users }) => {
  return (
    <div>
      <Header />
      <main className="m-4">
        <h1 className="font-bold text-5xl text-slate-700 mb-4">Users</h1>

        <div className="grid grid-cols-4 gap-4">
          {users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              username={user.username}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default User;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const users: UserProps[] = data.map((user: any) => ({
    name: user.name,
    username: user.username,
    email: user.email,
    address: user.address,
  }));

  return {
    props: {
      users,
    },
  };
}
