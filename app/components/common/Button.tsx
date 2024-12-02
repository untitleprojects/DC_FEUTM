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
    primary: 'bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-500',
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
      {children}
    </button>
  )
}

export default Button
