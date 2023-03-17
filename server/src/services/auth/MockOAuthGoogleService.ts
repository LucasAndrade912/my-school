import { OAuthGoogleInterface } from './OAuthGoogleInterface'

export class MockOAuthGoogleService implements OAuthGoogleInterface {
	async execute(accessToken: string) {
		if (accessToken !== 'default-oauth-service-accesstoken') throw new Error('Access token not valid')

		return {
			id: 'g-2',
			name: 'João',
			email: 'joao@email.com'
		}
	}
}