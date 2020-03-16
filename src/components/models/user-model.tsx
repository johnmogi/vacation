export class UserModel {
  public constructor(
    public isAdmin?: boolean,
    public isLogged?: boolean,
    public userName?: "string",
    public password?: "string",
    public firstName?: "string",
    public lastName?: "string"
  ) {}
}
export class NewUserModel {
  public constructor(
    public userName?: string,
    public password?: string,
    public firstName?: string,
    public lastName?: string
  ) {}
}
export class UserLog {
  public constructor(public userName?: "string", public password?: "string") {}
}

// if (!request.session.isLoggedIn) {
