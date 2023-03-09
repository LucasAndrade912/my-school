import { z } from 'zod'

import { ValidatorAdapter, Options } from './ValidatorAdapter'

export class ZodAdapter implements ValidatorAdapter {
	string(options?: Options) {
		if (options?.nullable) {
			return z.string().nullable()
		}

		return z.string()
	}

	number() {
		return z.number()
	}

	numberRange(min: number, max: number) {
		return z.number().min(min).max(max)
	}

	numberRangeArray(min: number, max: number) {
		return z.array(this.numberRange(min, max))
	}

	boolean() {
		return z.boolean()
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