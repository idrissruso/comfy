export function Action({ label, count, children }) {
  return (
    <div className="flex items-center relative cursor-pointer">
      <span className="text-xl">{label}</span>
      {children}
      {count > 0 && (
        <span className="absolute right-[-7px] top-[-7px] z-10 bg-text rounded-full text-xs min-w-[1.5rem] min-h-[1.5rem] flex justify-center items-center text-white">
          {count}
        </span>
      )}
    </div>
  )
}
