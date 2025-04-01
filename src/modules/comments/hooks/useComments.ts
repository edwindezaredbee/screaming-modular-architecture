import { useQuery } from "@tanstack/react-query";
import { getAllCommentsService } from "../services/comments.service";
import { useCommentsStore } from "../store/useCommentStore";
import { formatCommentAdapter } from "../adapter/format-comment.adapter";
import { useFormStore } from "../store/useFormStore";

export const useComments = () => {
	const setComments = useCommentsStore((state) => state.setComments);
	const comments = useCommentsStore((state) => state.comments);
	const onOpen = useFormStore((state) => state.onOpen);

	const { isFetching: isFetchingComments } = useQuery({
		queryKey: ["comments"],
		queryFn: async () => {
			const comments = await getAllCommentsService();
			const formatComments = formatCommentAdapter(comments);
			setComments(formatComments);
			return comments;
		},
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		refetchOnMount: false,
	});

	return {
		comments,
		isFetchingComments,
		onOpen
	};
};
