import { X } from 'lucide-react';
import { ButtonIcon } from './ButtonIcon';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

export const CustomModal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center 
			bg-black/50'
			onClick={onClose}>
			<div
				onClick={(e) => e.stopPropagation()}
				className='bg-[#161B21] p-4 rounded max-w-md w-full'>
				<div className='w-full flex justify-end'>
					<ButtonIcon
						name='Cerrar'
						onClick={onClose}>
						<X size={20} />
					</ButtonIcon>
				</div>

				{children}
			</div>
		</div>
	);
};
