export class UserModel {
  public constructor(
    public isAdmin?: boolean,
    public isLogged?: boolean,
    public userName?: "string",
    public password?: "string",
    public firstName?: String,
    public lastName?: String
  ) {}
}
export class NewUserModel {
  public constructor(
    public userName?: String,
    public password?: String,
    public firstName?: String,
    public lastName?: String
  ) {}
}
export class UserLog {
  public constructor(
    public userName?: String, 
  public password?: String) {}
}

// if (!request.session.isLoggedIn) {
