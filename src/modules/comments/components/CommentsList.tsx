import { CommentFormat } from '../interfaces/comments.interface';
import { CommentCard } from './CommentCard';

interface Props {
	comments?: CommentFormat[];
	isLoading: boolean;
}

export const CommentsList = ({ comments, isLoading }: Props) => {
	return (
		<div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'>
			{!isLoading &&
				comments &&
				comments.map((comment) => (
					<CommentCard
						key={comment.id}
						comment={comment}
					/>
				))}
		</div>
	);
};
