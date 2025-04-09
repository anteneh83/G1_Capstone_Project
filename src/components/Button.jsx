const Button = ({ children, onClick, className = '', btnType = 'small' }) => {
	const buttonType = {
		small: 'px-4 py-2 text-normal font-semibold',
		medium: 'py-2 px-5 text-lg sm:max-md:py-2.5 sm:max-md:px-6 sm:text-[1.3rem] md:text-[1.1rem] lg:font-medium lg:max-[1111px]:px-6 lg:max-[1111px]:py-2.5 lg:max-[1111px]:text-[1.3rem] xlm:px-8 xlm:py-3 xlm:text-[1.3rem]',
		large: 'py-2.5 px-6 text-lg sm:max-md:py-2.7 sm:max-md:px-8 sm:text-[24px] md:text-[1.1rem] lg:font-medium lg:max-[1111px]:px-6 lg:max-[1111px]:py-2.5 lg:max-[1111px]:text-[24px] xl:px-10 xl:py-3 xl:text-[24px]',
	}
	return (
		<button
			onClick={onClick}
			className={`w-fit whitespace-nowrap break-keep text-white bg-black rounded-full hover:bg-opacity-80 focus:outline-none ${className} ${buttonType[btnType]}`}
		>
			{children}
		</button>
	)
}
export default Button
