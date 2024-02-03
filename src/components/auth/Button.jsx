export function Button({ children, onClick, active }) {
  return (
    <button
      className={`transition-colors duration-300 text-lg font-semibold  px-4 py-2 flex-1 ${
        active
          ? 'bg-gradient-to-r from-secondary-500 via-secondary-300 to-secondary-100 text-wite'
          : 'text-secondary-500 border border-secondary-500'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
