import { Editor } from "@tiptap/react";

interface InsertVideoProps {
  editor: Editor;
  children: (props: { onClick?: () => void }) => React.ReactNode;
}

const InsertVideo = ({ editor, children }: InsertVideoProps) => {
  const selectAndUploadVideo = () => {
    editor.chain().focus().selectAndUploadVideo().run();
  };

  return <>{children({ onClick: selectAndUploadVideo })}</>;
};

export default InsertVideo;
