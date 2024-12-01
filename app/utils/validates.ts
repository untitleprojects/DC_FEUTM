import { ValidationErrors } from '@/types/common'
import { LoginForm, SignUpForm } from '@/types/users'

// TODO: 정규식 백엔드랑 맞추고 에러 내용 정리
// 로그인
export const loginValidate = (data: LoginForm) => {
  const { email, password } = data
  const errors: ValidationErrors = {}

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  if (!emailRegex.test(email)) {
    errors.email = '유효한 이메일 주소를 입력하세요.'
  }

  if (!passwordRegex.test(password)) {
    errors.password = '유효한 비밀번호를 입력하세요.'
  }

  return errors
}

// 회원가입
export const signupValidate = (data: SignUpForm) => {
  const { email, password, passwordCheck, authNumber, checkboxArr } = data
  const errors: ValidationErrors = {}

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  if (!emailRegex.test(email)) {
    errors.email = '유효한 이메일 주소를 입력하세요.'
  }

  if (!passwordRegex.test(password)) {
    errors.password = '유효한 비밀번호를 입력하세요.'
  }

  if (password !== passwordCheck) {
    errors.password = '비밀번호가 다르다.'
  }

  return errors
}
