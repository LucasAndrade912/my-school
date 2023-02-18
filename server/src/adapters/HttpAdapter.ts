export interface HttpAdapter<T, K> {
  createServer: (routes: K) => {
    startServer: (port: number) => void
  }
}