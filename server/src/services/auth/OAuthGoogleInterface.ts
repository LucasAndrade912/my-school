export interface OAuthGoogleInterface {
  execute: (accessToken: string) => Promise<{
    id: string,
    name: string,
    email: string
  }>
}