export type Options = { nullable?: boolean }

export interface ValidatorAdapter {
  string: (options?: Options) => unknown
  number: () => unknown
  numberRange: (min: number, max: number) => unknown
  numberRangeArray: (min: number, max: number) => unknown
  boolean: () => unknown
  createSchema: (data: object) => {
    validate: (data: object) => void
  }
}