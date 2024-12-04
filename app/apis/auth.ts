import axios from '@/apis/axios'
import { LoginForm, SignUpForm } from '@/types/users'

// 로그인
export const postLogin = async (data: LoginForm) => {
  try {
    const response = await axios.post(`/login`, data)
    return response.data
  } catch (error) {
    console.error('로그인 실패:', error)
    throw error
  }
}

// 회원가입
export const postSignUp = async (data: SignUpForm) => {
  try {
    const response = await axios.post(`/signup`, data)
    return response.data
  } catch (error) {
    console.error('회원가입 실패:', error)
    throw error
  }
}
