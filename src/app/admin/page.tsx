import { UserList } from "./components/userList.component";
import { searchUser } from "@/service/user/searchUser.service";
type SearchParams = Promise<{ searchName: string } | undefined>;
export default async function AdminPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const searchName = (await searchParams)?.searchName;
  const users = searchUser(searchName);

  return (
    <main className="grid p-2 gap-3 grid-cols-4 md:grid-cols-5 max-h-full overflow-y-auto">
      <UserList users={users} />
    </main>
  );
}
