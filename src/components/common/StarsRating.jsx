import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

function StarsRating() {
  const [rating, setRating] = useState(2) // Initialize rating to null
  const [hover, setHover] = useState(null) // Initialize hover to null

  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <label key={i}>
          <input
            type="radio"
            name="rating"
            value={i + 1}
            checked={rating === i + 1} // Use checked for radio button state
            onClick={() => setRating(i + 1)}
            className="hidden"
          />
          <FaStar
            className="cursor-pointer "
            color={i + 1 <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
            size={20}
            onMouseEnter={() => setHover(i + 1)}
            onMouseLeave={() => setHover(null)} // Reset hover to null
          />
        </label>
      ))}
      <span className="text-textLight ml-2">{hover || rating || 0} of 5</span>
    </div>
  )
}

export default StarsRating
