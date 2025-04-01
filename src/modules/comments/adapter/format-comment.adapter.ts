import { Comment, CommentFormat } from "../interfaces/comments.interface";

export const formatCommentAdapter = (comments: Comment[]): CommentFormat[] => {
	return comments.map((comment) => ({
		id: comment.id,
		name: comment.name,
		email: comment.email,
		body: comment.body
	}));
};