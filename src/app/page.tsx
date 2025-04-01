import { CommentsMainContainer } from '@/modules/comments/components/CommentsMainContainer';
import { Suspense } from 'react';

export default function Home() {
	return (
		<Suspense>
			<CommentsMainContainer />
		</Suspense>
	);
}
