import { NextFunction, Request, Response } from 'express'

import { JWTAdapter } from '../adapters/JwtAdapter'

export class AuthMiddleware {
	static handle(req: Request, res: Response, next: NextFunction) {
		const token = req.headers.authorization?.split(' ')[1]
		const jwt = new JWTAdapter()

		if (!token) {
			return res.status(401).json({ error: 'Token is required' })
		}

		try {
			const { subject } = jwt.verify(token)
			req.sub = subject

			next()
		} catch (err) {
			console.log(err)
			return res.status(401).json({ error: 'JWT is invalid' })
		}
	}
}