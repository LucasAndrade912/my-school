export abstract class ValidatorAdapter {
  public abstract types: {
    string: () => unknown
  }

  abstract string(): unknown

  abstract createSchema(data: object): {
    validate: (data: object) => void
  }
}