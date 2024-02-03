export function LogInComponent() {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-3xl font-bold">Login</h1>
      <div className="flex flex-col w-80">
        <label className="text-sm">Username</label>
        <input className="border border-gray-400 rounded-sm p-1" name="name" />
      </div>
      <div className="flex flex-col w-80">
        <label className="text-sm">Password</label>
        <input
          className="border border-gray-400 rounded-sm p-1"
          name="password"
        />
      </div>
      <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-sm p-1 w-80 mt-2">
        Login
      </button>
    </div>
  )
}
