import { CheckboxItem } from '@/types/common'

// 유저 타입
export interface BaseUser {
  email: string
}

// 로그인 폼
export interface LoginForm extends BaseUser {
  password: string
}

// 회원가입 폼
export interface SignUpForm extends BaseUser {
  password: string
  passwordCheck: string
  authNumber: number
  checkboxArr: CheckboxItem[]
}
