import { useId } from "react"
import React from 'react'


const Input = React.forwardRef(
  function Input({
    label,
    type = 'text',
    className = '',
    ...props
  },ref) {
      const id = useId()
      return (
        <div className="width-full">
          {label && <label htmlFor={id} className="inline-block pl-1 mb-1">{label}</label>}
          <input
              type={type}
              className={`px-3 py-2 rounded-lg bg-white
              text-black outline-none focus:bg-gray-50
              duration-200 border
               border-gray-200 w-full ${className}`}
               ref = {ref}
               id = {id}
               {...props}
          />
        </div>
      )
    }
)

export default Input