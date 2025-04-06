const Button = ({ children, onClick, className = '', btnType = 'small' }) => {
	const buttonType = {
		small: 'px-4 py-2 text-normal font-semibold',
		medium: 'lg:text-[17px] lg:max-[69rem]:px-4 lg:px-5  xlm:px-8 lg:py-2 xl:text-[19px] xlm:text-[22px] xlm:font-medium lg:font-normal',
		large: 'px-10 py-3 text-[24px] font-medium',
	}
	return (
		<button
			onClick={onClick}
			className={`w-fit  text-white bg-black rounded-full hover:bg-opacity-80 focus:outline-none ${className} ${buttonType[btnType]}`}
		>
			{children}
		</button>
	)
}
export default Button
