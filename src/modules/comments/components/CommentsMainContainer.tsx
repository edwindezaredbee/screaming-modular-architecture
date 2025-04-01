import { CommentSectionInfo } from './CommentSectionInfo';
import { CommentListSection } from './CommentsListSection';
import { HeaderMainComment } from './HeaderMainComment';
import { ModalComment } from './ModalComment';

export const CommentsMainContainer = () => {
	return (
		<main className='w-full max-w-4xl mx-auto px-5 space-y-4 min-h-dvh py-7'>
			<HeaderMainComment />
			<CommentSectionInfo />
			<CommentListSection />
			<ModalComment />
		</main>
	);
};
