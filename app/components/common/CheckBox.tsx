'use client'

import React, { InputHTMLAttributes } from 'react'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
}

const CheckBox = ({ label, error, ...props }: CheckboxProps) => {
  return (
    <div>
      <label className='flex items-center gap-2 '>
        <input type='checkbox' className={`h-5 w-5 `} {...props} />
        {label && <div className={`${error ? 'text-red-600' : 'text-black'}`}>{label}</div>}
      </label>
    </div>
  )
}

export default CheckBox
