import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";

import { CreateWorkspacesForm } from "@/features/workspaces/components/create-workspaces-form";

export default async function Home() {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return (
    <div className="bg-neutral-500 p-4 h-full">
      <CreateWorkspacesForm />
    </div>
  );
}
