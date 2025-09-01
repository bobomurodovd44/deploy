import { signIn } from "@/auth";
import { auth } from "@/auth";
import { signOut } from "@/auth";

export default async function Home() {
  const session = await auth();

  if (!session) {
    return (
      <div className="w-full rounded-md px-5 py-2 flex items-center justify-between bg-gray-300">
        <div className="flex gap-3">
          <h1 className="font-medium">Login qilmagansiz</h1>
        </div>
        <div>
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <button
              className="rounded-md text-white bg-blue-600 cursor-pointer px-4 py-2 shadow-md shadow-blue-600"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full rounded-md px-5 py-2 flex items-center justify-between bg-gray-300">
        <div className="flex gap-3">
          <h1 className="font-medium">{session.user?.name}</h1>
          <p className="text-gray-800">{session.user?.email}</p>
        </div>
        <div>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button
              className="rounded-md text-white bg-blue-600 cursor-pointer px-4 py-2 shadow-md shadow-blue-600"
              type="submit"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
