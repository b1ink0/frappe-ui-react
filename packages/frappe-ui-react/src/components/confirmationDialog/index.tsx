/**
 * External dependencies.
 */
import { Description } from "@headlessui/react";
import { LoaderCircle, Trash2, X } from "lucide-react";
/**
 * External dependencies.
 */
import { Button } from "../button";
import { Dialog } from "../dialog";
/**
 * The resource delete allocation alert dialog.
 *
 * Why not use react-alert-dialog?
 * The above package was creating issues for form dynamic field selection, also it has bugs in recent versions: https://github.com/shadmergeClassNames-ui/ui/issues/1655 so for now I have used dialog only.
 *
 * @param props.onDelete The function to be called when delete dialog is clicked.
 * @param props.isOpen The state to open the dialog.
 * @param props.isLoading The state to show the loader.
 * @param props.onOpen The function to open the dialog.
 * @param props.onCancel The function to cancel the dialog.
 * @returns React.FC
 */
export const DeleteConfirmationDialog = ({
  onDelete,
  isOpen,
  isLoading,
  onCancel,
  title,
  description,
}: {
  onDelete: () => void;
  isOpen: boolean;
  isLoading: boolean;
  onOpen: () => void;
  onCancel: () => void;
  buttonClassName?: string;
  title: string;
  description: string;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open: boolean) => !open && onCancel()}>
      <div className="z-[1000] relative grid w-full max-w-lg gap-4 bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg md:w-full sm:max-w-[425px] z-[1000]">
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <Description>
            <p className="text-xl mb-2 mt-3 font-semibold">{title}</p>
            <p className="text-sm">{description}</p>
          </Description>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-start sm:space-x-2">
          <Button className="outline-none" variant="solid" onClick={onDelete}>
            {isLoading ? (
              <LoaderCircle className="animate-spin w-4 h-4 outline-none" />
            ) : (
              <Trash2 className="w-4 h-4" />
            )}
            Delete
          </Button>
          <Button type="button" className="outline-none" variant="solid" onClick={onCancel}>
            <X className="w-4 h-4" />
            Cancel
          </Button>
        </div>
      </div>
    </Dialog>
  );
};