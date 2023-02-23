export interface Options {
  subject: string
  expiresIn: string
}

export interface JsonWebTokenAdapter {
  sign: (payload: object, options: Options) => string
  verify: (token: string) => string
}