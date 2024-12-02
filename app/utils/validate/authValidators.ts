import { ValidationErrors } from '@/types/common'
import { LoginForm, SignUpForm } from '@/types/users'
import { isEmail, isPassword } from '@/utils/validate/validators'

// 로그인
export const loginValidate = (data: LoginForm) => {
  const { email, password } = data
  const errors: ValidationErrors = {}

  if (!isEmail(email)) errors.email = '유효한 이메일 주소를 입력하세요.'
  if (!isPassword(password)) errors.password = '유효한 비밀번호를 입력하세요.'

  return errors
}

// 회원가입
export const signupValidate = (data: SignUpForm) => {
  const { email, password, passwordCheck, checkboxArr } = data
  const errors: ValidationErrors = {}

  if (!isEmail(email)) errors.email = '유효한 이메일 주소를 입력하세요.'
  if (password !== passwordCheck) errors.password = '비밀번호가 다르다.'
  if (!isPassword(password)) errors.password = '유효한 비밀번호를 입력하세요.'
  for (const item of checkboxArr) {
    if (item.isRequired && !item.isChecked) errors.checkboxArr = '체크해주세요'
  }

  return errors
}

// 메일 인증
export const emailVerification = (email: string) => {
  const errors: ValidationErrors = {}
  if (!isEmail(email)) errors.email = '유효한 이메일 주소를 입력하세요.'

  return errors
}
