import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";
import { CreateWorkspacesForm } from "@/features/workspaces/components/create-workspaces-form";

const WorkSpaceCreatePage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return (
    <div className="w-full lg:max-w-xl">
      <CreateWorkspacesForm />
    </div>
  );
};

export default WorkSpaceCreatePage;
