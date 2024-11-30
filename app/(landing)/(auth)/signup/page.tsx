'use client'

import { useState } from 'react'
import { Button, Input } from '@/components/common'

export default function Page() {
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      alert('회원가입!!!')
      setIsLoading(false)
    }, 1000)
  }

  return (
    <section className='flex flex-col gap-12 justify-center items-center w-full'>
      <h1 className='font-bold text-lg'>회원가입</h1>
      <div className='flex flex-col w-full max-w-md gap-6'>
        <Input label='이메일' id='email' type='email' error='이메일을 입력해주세요.' />
        <Input label='비밀번호' id='password' type='password' error='비밀번호를 입력해주세요.' />
        <Button variant='primary' onClick={onSubmit} isLoading={isLoading}>
          회원가입
        </Button>
      </div>
    </section>
  )
}
