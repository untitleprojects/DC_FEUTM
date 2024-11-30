'use client'

import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
  isLoading?: boolean
}

const Button = ({
  children,
  variant = 'primary',
  isLoading = false,
  className = '',
  ...props
}: ButtonProps) => {
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-500',
    danger: 'bg-red-500 hover:bg-red-600 focus:ring-red-500',
  }

  return (
    <button
      className={`px-4 py-2 rounded text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2
        ${variants[variant]} 
        ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? <span className='flex items-center justify-center'>Loading...</span> : children}
    </button>
  )
}

export default Button
