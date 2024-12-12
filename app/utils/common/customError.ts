class CustomError extends Error {
  public message!: string
  public statusCode: number
  public name: string
  public meta: unknown

  constructor(message: string, statusCode = 500, name = 'INTERNAL_SERVER_ERROR', meta = {}) {
    super(message)
    this.statusCode = statusCode
    this.name = name
    this.meta = meta
  }
}

class NotFoundError extends CustomError {
  constructor(message = '요청한 리소스를 찾을 수 없습니다.') {
    super(message, 404, 'NOT_FOUND')
  }
}

class AuthError extends CustomError {
  constructor(message = '권한 없음.') {
    super(message, 401, 'UNAUTHORIZED')
  }
}

class DuplicateError extends CustomError {
  constructor(message = '중복된 데이터가 있습니다.') {
    super(message, 400, 'DUPLICATE')
  }
}

export { CustomError, NotFoundError, AuthError, DuplicateError }
