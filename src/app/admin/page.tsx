import { getUserInscription } from "@/service/inscription/getUserInscription.service";
import { UserList } from "./components/userList.component";
import { searchUser } from "@/service/user/searchUser.service";

type SearchParams = Promise<{ searchName: string; selected: string } | undefined>;

export default async function AdminPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const searchName = (await searchParams)?.searchName;
  const idSelected = (await searchParams)?.selected;
  const users = searchUser(searchName);
  const userInscription = getUserInscription(idSelected);

  return (
    <main className="max-w-7xl max-h-vh mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2 grid gap-3 grid-cols-5 md:grid-cols-6 overflow-hidden">
      <UserList users={users} inscriptions={userInscription} />
    </main>
  );
}
