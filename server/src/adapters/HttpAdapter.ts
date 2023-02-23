export interface HttpAdapter<K> {
  createServer: (routes: K) => {
    startServer: (port: number) => void
  }
}