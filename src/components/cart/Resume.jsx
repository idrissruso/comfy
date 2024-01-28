function Resume() {
  return (
    <div className="border border-text p-5">
      <div>
        <span>
          <span>Subtotal :</span>
          <span>$123</span>
        </span>
      </div>

      <div className="flex justify-between">
        <span>Shipping Fee :</span>
        <span>$5.34</span>
      </div>
      <hr className="border-1 text-secondary-500" />
      <div className="flex justify-between">
        <span>Order Total :</span>
        <span>$405.33</span>
      </div>
    </div>
  )
}

export default Resume
