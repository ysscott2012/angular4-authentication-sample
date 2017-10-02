export class User {
  username: '';
  password: '';

  /**
   *  constructor
   */
  constructor (user?: any) {
    if (user) {
      this.username = user.username;
    }
  }
}
