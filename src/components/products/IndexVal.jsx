function IndexVal({ stock, code, brand }) {
  return (
    <div className="flex gap-5 mt-2 text-md ml-auto">
      <p className="flex flex-col gap-3 flex-nowrap">
        <span className="text-text font-bold ">Available : </span>
        <span className="text-text font-bold ">SKU : </span>
        <span className="text-text font-bold  ">Brand : </span>
      </p>
      <p className="flex flex-col gap-3 flex-nowrap">
        <span className="text-textLight">{stock}</span>
        <span className="text-textLight">{code}</span>
        <span className="text-textLight">{brand}</span>
      </p>
    </div>
  )
}

export default IndexVal
