export class ReturnUserDataUseCase {
  static execute() {
    const userData = {
      id: 'hello',
      name: 'Lucas',
      email: 'lucas@email.com'
    }

    return userData
  }
}