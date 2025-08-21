const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 p-btn border mt mb lg:p-btn-xl font-montserrat text-lg leading-none rounded-full transition-all duration-200 hover:scale-105 ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red hover:bg-opacity-90"
      } ${fullWidth ? "w-full" : ""}`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5 p-1'
        />
      )}
    </button>
  );
};

export default Button;