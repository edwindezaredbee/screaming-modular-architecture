import { create } from "zustand";
import { CommentFormat } from "../interfaces/comments.interface";

type FormMode = "create" | "edit";

interface FormState {
	isOpen: boolean;
	mode: FormMode;
	data?: CommentFormat;
	onOpen: (mode: FormMode, data?: CommentFormat) => void;
	onClose: () => void;
}

export const useFormStore = create<FormState>((set) => ({
	isOpen: false,
	mode: "create",
	data: undefined,
	onOpen: (mode, data) => set({
		isOpen: true,
		mode,
		data: mode === 'edit' ? data : undefined,
	}),
	onClose: () => set({ isOpen: false, data: undefined }),
}));