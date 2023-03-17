import { OAuthGoogleInterface } from './OAuthGoogleInterface'

export class OAuthGoogleService implements OAuthGoogleInterface {
	async execute(accessToken: string) {
		const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		})

		const data = await response.json()
		return data
	}
}