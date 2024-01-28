export function Action({ label, count, children, onClick }) {
  return (
    <div
      className="flex items-center relative cursor-pointer"
      onClick={onClick}
    >
      <span className="text-xl">{label}</span>
      {children}
      {count > 0 && (
        <span className="absolute right-[-7px] top-[-7px] z-10 bg-text rounded-full text-xs min-w-[1.2rem] min-h-[1.2rem] flex justify-center items-center text-white">
          99
        </span>
      )}
    </div>
  )
}
