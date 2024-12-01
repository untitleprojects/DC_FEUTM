'use client'

import { FormEvent, useState } from 'react'
import { Button, Input } from '@/components/common'
import { useForm } from '@/hooks/useForm'
import { LoginForm } from '@/types/users'
import { loginValidate } from '@/utils/validates'

export default function Page() {
  const [isLoading, setIsLoading] = useState(false)

  const initForm = { email: '', password: '' }
  const { values, handleChange, handleBlur, resetForm, errors, validatedForm } = useForm<LoginForm>(
    initForm,
    (values) => loginValidate(values),
  )

  // 로그인
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // 입력값 에러있으면 취소
    if (!validatedForm()) return

    setIsLoading(true)
    setTimeout(() => {
      alert('로그인!!!')
      resetForm()
      setIsLoading(false)
    }, 1000)
  }

  return (
    <section className='flex flex-col gap-12 justify-center items-center w-full'>
      <h1 className='font-bold text-lg'>로그인</h1>
      <div className='flex flex-col w-full max-w-md gap-6'>
        <Input
          label='이메일'
          id='email'
          type='email'
          name='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
        />
        <Input
          label='비밀번호'
          id='password'
          type='password'
          name='password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
        />
        <Button variant='primary' onClick={onSubmit} isLoading={isLoading}>
          로그인
        </Button>
      </div>
    </section>
  )
}
