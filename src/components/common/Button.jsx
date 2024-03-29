function Button({ text, onClick, size, type }) {
  const sizes = {
    sm: 'px-2 py-1 text-sm font-thin',
    md: 'px-6 py-2 text-base',
    lg: 'md:px-8 md:py-3 md:text-lg px-4 py-1 text-sm',
  }

  const types = {
    danger: 'bg-red-500 hover:bg-red-600 text-white ',
    primary:
      'bg-secondary-400 hover:bg-secondary-300 text-white hover:text-secondary-500 font-thin',
    secondary: 'bg-textDark hover:bg-textLight text-white  font-thin',
  }

  return (
    <button
      className={`${sizes[size]} text-base ${types[type]} rounded-md transition-all duration-300 ease-in-out active:scale-95 drop-shadow-lg tracking-widest`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
