interface ButtonIconProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	name?: string;
	classname?: string;
	onClick: () => void;
}

export const ButtonIcon = ({
	children,
	name,
	className,
	onClick,
	...props
}: ButtonIconProps) => {
	return (
		<button
			onClick={onClick}
			className={`w-fit rounded-lg cursor-pointer group relative ${className}`}
			{...props}>
			{children}
			{name && (
				<span className='absolute -bottom-6 left-1/6 sm:left-1/2 -translate-x-1/2 w-fit text-nowrap px-2 block h-fit bg-[#9e9e9e]/50 backdrop-blur-2xl rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all ease-in-out duration-300 text-xs'>
					{name}
				</span>
			)}
		</button>
	);
};
