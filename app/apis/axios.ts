import _axios from 'axios'

const axios = _axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
})

// 요청 인터셉터
axios.interceptors.request.use(
  (config) => {
    // Authorization 토큰 추가
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    console.log(`[Request] ${config.method?.toUpperCase()} ${config.url}`)
    return config
  },
  (error) => {
    console.error('[Request Error]', error)
    return Promise.reject(error)
  },
)

// 응답 인터셉터
axios.interceptors.response.use(
  (response) => {
    // 성공적으로 응답 받았을 때
    console.log(`[Response] ${response.status} ${response.config.url}`, response.data)
    return response
  },
  (error) => {
    if (error.response) {
      // 서버가 응답을 반환한 경우 (4xx, 5xx)
      console.error('[Response Error]', error.response.data)
      if (error.response.status === 401) {
        alert('인증이 만료되었습니다. 다시 로그인해주세요.')
        window.location.href = '/login'
      }
    } else if (error.request) {
      // 요청이 전송되었지만 응답을 받지 못한 경우
      console.error('[No Response]', error.request)
    } else {
      // 기타 에러
      console.error('[Error]', error.message)
    }
    return Promise.reject(error)
  },
)

export default axios
