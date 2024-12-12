'use client'

import { FormEvent, useState } from 'react'
import { Button, Input } from '@/components/common'
import { useForm } from '@/hooks/useForm'
import { LoginForm } from '@/types/users'
import { loginValidate } from '@/utils/validate/authValidators'
import { postLogin } from '@/apis/auth'

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

    if (!validatedForm()) return

    setIsLoading(true)

    try {
      const data = await postLogin(values)
      if (data) {
        alert('로그인성공!')
        resetForm()
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
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
