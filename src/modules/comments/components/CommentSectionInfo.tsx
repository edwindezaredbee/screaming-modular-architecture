import Image from 'next/image';

export const CommentSectionInfo = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 bg-[#161B21] rounded-xl'>
			<article className='p-4 space-y-3 order-2 md:order-1'>
				<span className='text-[#97989c]'>{new Date().toDateString()}</span>
				<h2 className='text-2xl mt-1 font-medium'>
					Bienvenido a nuestra pagina de comentarios !!
				</h2>
				<p className='text-[#97989c]'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique dolore omnis blanditiis enim, ab esse, numquam eaque architecto eos mollitia modi itaque quasi accusantium earum doloremque molestiae quod nesciunt accusamus!
				</p>
			</article>

			<figure className='w-full rounded-xl order-1 md:order-2'>
				<Image
					className='max-w-full w-full h-50 md:h-auto object-cover block rounded-xl'
					width={500}
					height={500}
					src='/bg-abstract.jpg'
					alt='bg'
				/>
			</figure>
		</div>
	);
};
