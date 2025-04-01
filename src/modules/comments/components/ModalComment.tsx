'use client';

import { CustomModal } from '@/modules/global/components/CustomModal';
import { useModalComment } from '../hooks/useModalComment';
import { ControlledInput } from '@/modules/global/components/ControlledInput';
export const ModalComment = () => {
	const { isOpen, onClose, control, handleSubmit, onSubmit, mode } =
		useModalComment();

	return (
		<CustomModal
			isOpen={isOpen}
			onClose={onClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2 className='text-2xl font-bold mb-4'>Crear Comentario</h2>

				<div className='flex flex-col gap-4'>
					<ControlledInput
						name='name'
						control={control}
						label='Titulo: '
					/>

					<ControlledInput
						name='email'
						control={control}
						label='Correo: '
					/>

					<ControlledInput
						name='body'
						as='textarea'
						control={control}
						label='Comentario: '
					/>
				</div>

				<button className='w-full p-4 bg-white/10 rounded-md mt-4 cursor-pointer'>
					{mode === 'create' ? 'Crear' : 'Actualizar'}
				</button>
			</form>
		</CustomModal>
	);
};
