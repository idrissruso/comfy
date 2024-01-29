function Resume() {
  return (
    <div className="border border-textLight px-10 py-5 flex flex-col gap-3">
      <div className="flex gap-[5rem]">
        <span className="flex flex-col gap-3">
          <span className="font-bold">Subtotal :</span>
          <span>Shipping Fee :</span>
        </span>
        <span className="flex flex-col gap-3">
          <span className="font-bold">$5.34</span>
          <span>$123</span>
        </span>
      </div>
      <hr className="border-1 text-secondary-500" />
      <div className="flex justify-between font-extrabold text-lg">
        <span>Order Total :</span>
        <span>$405.33</span>
      </div>
    </div>
  )
}

export default Resume
