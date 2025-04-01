import { ButtonIcon } from '@/modules/global/components/ButtonIcon';
import { PencilLineIcon, TrashIcon } from 'lucide-react';
import { CommentFormat } from '../interfaces/comments.interface';
import { useCommentsStore } from '../store/useCommentStore';
import { useFormStore } from '../store/useFormStore';

export const CommentCard = ({ comment }: { comment: CommentFormat }) => {
	const deleteComment = useCommentsStore((state) => state.deleteComment);
	const onOpen = useFormStore((state) => state.onOpen);

	return (
		<div className='bg-[#161B21] p-4 space-y-2 rounded-lg'>
			<div className='flex items-center justify-between'>
				<span className='paragraph-color text-xs font-medium'>
					{comment.email}
				</span>

				<div className='space-x-2'>
					<ButtonIcon
						name='Editar comentario'
						className='p-2 hover:bg-neutral-800'
						onClick={() => onOpen('edit', comment)}>
						<PencilLineIcon size={20} />
					</ButtonIcon>
					<ButtonIcon
						name='Eliminar comentario'
						className='p-2 hover:bg-neutral-800'
						onClick={() => deleteComment(comment.id)}>
						<TrashIcon size={20} />
					</ButtonIcon>
				</div>
			</div>
			<h3 className='mt-1 text-lg md:text-xl font-bold'>{comment.name}</h3>
			<p className='paragraph-color text-sm'>{comment.body}</p>
		</div>
	);
};
