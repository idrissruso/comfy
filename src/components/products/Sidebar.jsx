function Sidebar() {
  return (
    <aside className="flex flex-col gap-2 px-5">
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-1 rounded-md bg-primary-200"
      />
      <div>
        <h2>Categories</h2>
        <ul>
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
        </ul>
      </div>
      <div>
        <h2>Company</h2>
        <select>
          <option value="">Company 1</option>
          <option value="">Company 2</option>
          <option value="">Company 3</option>
        </select>
      </div>
      <div>
        <h2>Price</h2>
        <input
          type="range"
          min="0"
          max="100"
          value="50"
          className="slider"
          id="myRange"
        />
      </div>
    </aside>
  )
}

export default Sidebar
