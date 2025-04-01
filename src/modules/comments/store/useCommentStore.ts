import { create } from "zustand";
import { CommentFormat } from "../interfaces/comments.interface";
import { persist, createJSONStorage } from 'zustand/middleware';

interface CommentStore {
	comments: CommentFormat[];
	addComment: (comment: CommentFormat) => void;
	updateComment: (comment: CommentFormat) => void;
	deleteComment: (id: number) => void;
	setComments: (comments: CommentFormat[]) => void;
}

export const useCommentsStore = create<CommentStore>()(
	persist(
		(set) => ({
			comments: [],
			addComment: (comment: CommentFormat) => {
				set((state) => ({
					comments: [...state.comments, comment],
				}));
			},
			updateComment: (comment: CommentFormat) => {
				set((state) => ({
					comments: state.comments.map((c) => (c.id === comment.id ? comment : c)),
				}));
			},
			deleteComment: (id: number) => {
				set((state) => ({
					comments: state.comments.filter((c) => c.id !== id),
				}));
			},
			setComments: (comments: CommentFormat[]) => {
				set({ comments });
			},
		}),
		{
			name: 'comments',
			storage: createJSONStorage(() => localStorage),
		},
	));