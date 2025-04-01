import { useForm } from "react-hook-form";
import { useCommentsStore } from "../store/useCommentStore";
import { useFormStore } from "../store/useFormStore";
import { useEffect } from "react";

interface CommentFormValues {
  name: string;
  email: string;
  body: string;
}

export const useModalComment = () => {
  const onClose = useFormStore((state) => state.onClose);
  const isOpen = useFormStore((state) => state.isOpen);
  const data = useFormStore((state) => state.data);
  const mode = useFormStore((state) => state.mode);
  const addComment = useCommentsStore((state) => state.addComment);
  const updateComment = useCommentsStore((state) => state.updateComment);

  const { register, control, handleSubmit, reset } = useForm<CommentFormValues>(
    {
      defaultValues: {
        name: "",
        email: "",
        body: "",
      },
    }
  );

  const onSubmit = (values: CommentFormValues) => {
    if (mode === "create") {
      addComment({
        ...values,
        id: new Date().getTime(),
      });
    } else {
      updateComment({
        id: data!.id,
        ...values,
      });
    }

    onClose();
    reset();
  };

  useEffect(() => {
    if (isOpen) {
      if (mode === "edit" && data) {
        reset(data);
      } else {
        reset({
          name: "",
          email: "",
          body: "",
        });
      }
    }
  }, [isOpen, data, reset, mode]);

  return {
    isOpen,
    onClose,
    register,
    handleSubmit,
    onSubmit,
    control,
    mode,
  };
};
