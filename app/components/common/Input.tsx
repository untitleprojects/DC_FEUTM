'use client'

import React, { useRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string | null
  icon?: React.ReactNode
}

const Input = ({ label, error, icon, className, ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <div
        className={`relative w-full flex items-center border rounded-md gap-2 px-4 py-2 focus-within:outline focus-within:outline-black ${className} `}
      >
        {icon && <div className='text-gray-500 w-6 h-6'>{icon}</div>}
        <div className='flex-1 relative '>
          <input
            ref={inputRef}
            autoComplete='off'
            placeholder=' '
            className='block w-full bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 py-2'
            {...props}
          />
          {label && (
            <label
              htmlFor={props.id}
              className='absolute duration-300 top-2 left-0 text-gray-500 -z-10'
            >
              {label}
            </label>
          )}
        </div>
      </div>
      {error && <p className='text-sm text-neutral-500 pl-1 pt-1'>{error}</p>}
    </div>
  )
}

export default Input
