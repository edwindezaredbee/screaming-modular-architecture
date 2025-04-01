import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';

type InputElementProps =
	| InputHTMLAttributes<HTMLInputElement>
	| TextareaHTMLAttributes<HTMLTextAreaElement>;

interface ControlledInputProps<T extends FieldValues>
	extends Omit<InputElementProps, 'name' | 'defaultValue'> {
	name: Path<T>;
	control: Control<T>;
	label: string;
	className?: string;
	as?: 'input' | 'textarea';
}

export const ControlledInput = <T extends FieldValues>({
	name,
	control,
	label,
	className = '',
	as = 'input',
	...props
}: ControlledInputProps<T>) => {
	const commonClasses = 'mt-1 p-2 border rounded-md w-full outline-none';

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<div className={`mb-4 ${className}`}>
					<label
						htmlFor={name}
						className='block text-sm font-medium'>
						{label}
					</label>
					{as === 'textarea' ? (
						<textarea
							{...field}
							{...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
							id={name}
							className={`${commonClasses} min-h-[100px]`}
						/>
					) : (
						<input
							{...field}
							{...(props as InputHTMLAttributes<HTMLInputElement>)}
							id={name}
							className={commonClasses}
						/>
					)}
				</div>
			)}
		/>
	);
};
