import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";
import { EditWorkspacesForm } from "@/features/workspaces/components/edit-workspaces-form";
import { getWorkspace } from "@/features/workspaces/actions";

interface WorkSpaceIdSettingsPageProps {
  params: { workspaceId: string };
}

const WorkSpaceIdSettingsPage = async ({
  params,
}: WorkSpaceIdSettingsPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const initialValues = await getWorkspace({ workspaceId: params.workspaceId });

  if (!initialValues) redirect(`/workspaces/${params.workspaceId}`);

  return <div className="w-full lg:max-w-xl"><EditWorkspacesForm initialValues={initialValues}/></div>;
};

export default WorkSpaceIdSettingsPage;
