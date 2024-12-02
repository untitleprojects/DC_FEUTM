'use client'

import { FormEvent, useState } from 'react'
import { Button, CheckBox, Input, Timer } from '@/components/common'
import { useForm } from '@/hooks/useForm'
import { SignUpForm } from '@/types/users'
import { emailVerification, signupValidate } from '@/utils/validate/authValidators'
import { CheckboxItem } from '@/types/common'

export default function Page() {
  const [isAuthForm, setIsAuthForm] = useState(false)
  const [isEmailSendLoading, setEmailSendLoading] = useState(false)
  const [isEmailAuthLoading, setEmailAuthLoading] = useState(false)
  const [isEmailAuthSuccess, setEmailAuthSuccess] = useState(false)
  const [isSubmitLoading, setIsSubmitLoading] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)

  const checkboxArr: CheckboxItem[] = [
    { id: 0, label: '필수1', isRequired: true, isChecked: false },
    { id: 1, label: '필수2', isRequired: true, isChecked: false },
    { id: 2, label: '선택1', isRequired: false, isChecked: false },
    { id: 3, label: '선택2', isRequired: false, isChecked: false },
  ]

  const initForm = {
    email: '',
    password: '',
    passwordCheck: '',
    authNumber: '',
    checkboxArr,
  }

  const { values, handleChange, handleBlur, resetForm, errors, validatedForm, setErrors } =
    useForm<SignUpForm>(initForm, signupValidate)

  // 메일 전송
  const handleSendEmail = async (e: FormEvent) => {
    e.preventDefault()

    setIsAuthForm(false)
    setEmailAuthSuccess(false)
    values.authNumber = ''
    const error = emailVerification(values.email)
    if (Object.values(error).length > 0) {
      setErrors(error)
      return
    }

    setEmailSendLoading(true)
    // TODO: 메일 전송 API(중복 이메일 검사 등.)
    setTimeout(() => {
      alert('메일 전송 성공!')
      setEmailSendLoading(false)
      setIsAuthForm(true)
    }, 500)
  }

  // 메일 인증 확인
  const handleEmailAuth = async (e: FormEvent) => {
    e.preventDefault()

    setEmailAuthLoading(true)

    // TODO: 메일 인증 API
    setTimeout(() => {
      alert('메일 인증 성공!')
      setEmailAuthLoading(false)
      setEmailAuthSuccess(true)
    }, 500)
  }

  // 시간초과
  const handleTimeUp = () => {
    alert('시간초과')
    setIsAuthForm(false)
    setEmailAuthSuccess(false)
  }

  // 회원가입
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmit(true)

    // 입력값 에러있으면 취소
    if (!validatedForm()) return

    setIsSubmitLoading(true)

    // TODO: 회원가입 API
    setTimeout(() => {
      alert('회원가입 성공!')
      resetForm()
      setIsSubmit(false)
      setIsAuthForm(false)
      setEmailSendLoading(false)
      setEmailAuthLoading(false)
      setIsSubmitLoading(false)
    }, 1000)
  }

  return (
    <section className='flex flex-col gap-12 justify-center items-center w-full'>
      <h1 className='font-bold text-lg'>회원가입</h1>
      <div className='flex flex-col w-full max-w-md gap-6'>
        <div className='relative'>
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
          <Button
            variant='primary'
            className='absolute top-2 right-2 z-10'
            onClick={handleSendEmail}
            isLoading={isEmailSendLoading}
          >
            인증
          </Button>
        </div>
        {isAuthForm && (
          <div className='relative'>
            <Input
              label='인증번호'
              id='authNumber'
              type='text'
              name='authNumber'
              value={values.authNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.authNumber}
            />
            {isEmailAuthSuccess ? (
              <span className='absolute top-4 right-2 z-10'>인증성공</span>
            ) : (
              <div className='flex gap-2 items-center absolute top-2 right-2 z-10'>
                <Timer minutes={1} onTimeUp={handleTimeUp} />
                <Button variant='primary' onClick={handleEmailAuth} isLoading={isEmailAuthLoading}>
                  인증하기
                </Button>
              </div>
            )}
          </div>
        )}

        <div>
          <Input
            label='비밀번호'
            id='password'
            type='password'
            name='password'
            className='rounded-b-none'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            label='비밀번호 확인'
            id='passwordCheck'
            type='password'
            name='passwordCheck'
            className='rounded-t-none'
            value={values.passwordCheck}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
          />
        </div>
        {values.checkboxArr.map((checkbox) => (
          <CheckBox
            key={checkbox.id}
            label={checkbox.label}
            name='checkboxArr'
            value={checkbox.label}
            checked={checkbox.isChecked}
            onChange={handleChange}
            error={checkbox.isRequired && !checkbox.isChecked && isSubmit}
          />
        ))}

        <Button variant='primary' onClick={onSubmit} isLoading={isSubmitLoading}>
          가입하기
        </Button>
      </div>
    </section>
  )
}
