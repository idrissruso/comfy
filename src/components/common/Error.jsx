function Error({ message }) {
  return (
    <div class="bg-gray-100 py-16 px-4">
      <div class="max-w-2xl mx-auto text-center">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">
          Oops! Something went wrong.
        </h1>
        <p class="text-gray-600 mb-8">
          The page you're looking for couldn't be found. It may have been
          removed, or you might have mistyped the address.
        </p>
        <p class="text-gray-600 mb-8">{message}</p>
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
        >
          Back to Home
          <svg
            class="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l9-9 9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Error
