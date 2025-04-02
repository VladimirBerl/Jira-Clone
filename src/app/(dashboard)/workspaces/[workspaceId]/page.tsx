import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";

const WorkSpaceIdPage = async ({params}: {params: {workspaceId: string}}) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <div>WorkSpaceIdPage {params.workspaceId}</div>;
};

export default WorkSpaceIdPage;
