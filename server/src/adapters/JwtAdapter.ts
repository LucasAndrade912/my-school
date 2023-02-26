import jwt from 'jsonwebtoken'

import { JsonWebTokenAdapter, Options } from './JsonWebTokenAdapter'

export class JWTAdapter implements JsonWebTokenAdapter {
	private SECRET = String(process.env.SECRET)

	sign(payload: object, options: Options) {
		const token = jwt.sign(payload, this.SECRET, {
			subject: options.subject,
			expiresIn: options.expiresIn
		})

		return token
	}

	verify(token: string) {
		const { sub } = jwt.verify(token, this.SECRET)

		return { subject: sub as string }
	}
}