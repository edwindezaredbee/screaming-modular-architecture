'use client';

import { PencilIcon } from 'lucide-react';
import { ButtonIcon } from '@/modules/global/components/ButtonIcon';
import { useComments } from '../hooks/useComments';
import { CommentsList } from './CommentsList';

export const CommentListSection = () => {
	const { comments, isFetchingComments, onOpen } = useComments();

	return (
		<section className='space-y-8 mt-8'>
			<div className='w-full flex items-center justify-between'>
				<h2 className='text-2xl sm:text-4xl text-center heading-color'>
					Comentarios
				</h2>

				<ButtonIcon
					name='Crear blog'
					type='button'
					onClick={() => onOpen('create')}
					className='bg-[#161B21] p-3 sm:p-4'>
					<PencilIcon className='size-5 sm:size-6' />
				</ButtonIcon>
			</div>

			<CommentsList
				comments={comments}
				isLoading={isFetchingComments}
			/>
		</section>
	);
};
