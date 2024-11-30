'use client'

import React, { useRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = ({ label, error, className, ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className={`relative w-full ${className}`}>
      <input
        ref={inputRef}
        placeholder=' '
        className='pt-3 pb-2 block w-full px-1 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200'
        {...props}
      />
      {label && (
        <label
          htmlFor={props.id}
          className='absolute duration-300 top-2.5 left-0 text-gray-500 -z-10'
        >
          {label}
        </label>
      )}
      {error && <p className='text-sm text-red-600 hidden'>{error}</p>}
    </div>
  )
}

export default Input
