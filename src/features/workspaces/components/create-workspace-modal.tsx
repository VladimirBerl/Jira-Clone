import { ResponsiveModal } from "@/components/responsive-modal";

import { CreateWorkspacesForm } from "@/features/workspaces/components/create-workspaces-form";
import { useCreateWorkspaceModal } from "@/features/workspaces/hook/use-create-workspace-modal";

export const CreateWorkspaceModal = () => {
  const { isOpen, setIsOpen, close } = useCreateWorkspaceModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateWorkspacesForm onCancel={close}/>
    </ResponsiveModal>
  );
};
