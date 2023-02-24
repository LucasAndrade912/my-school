import { z } from 'zod'

import { ValidatorAdapter } from './ValidatorAdapter'

export class ZodAdapter extends ValidatorAdapter {
	public types: {
    string: () => unknown
  }

	constructor() {
		super()
		this.types = {
			string: this.string
		}
	}

	string() {
		return z.string()
	}

	createSchema(data: object) {
		const schema = z.object({ ...data })

		return {
			validate(data: object) {
				schema.parse(data)
			}
		}
	}
}