'use client'

import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface ModalProps {
  children: ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const router = useRouter()

  const closeModal = () => {
    router.back()
  }

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center'
      onClick={closeModal}
    >
      <div
        className='relative w-full max-w-lg mx-auto p-6 bg-white rounded-lg z-60'
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
