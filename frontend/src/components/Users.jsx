import CardUser from "./CardUser";

export default function Users({ users }) {
  return (
    <div className="text-white grid grid-cols-2 gap-4">
      {users.map((user) => (
        <CardUser key={user.id} user={user} />
      ))}
    </div>
  );
}
