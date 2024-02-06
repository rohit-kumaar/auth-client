export interface IUserSignUp {
  name: string;
  email: string;
  password: any;
  cpassword: any;
}

export interface IUserLogin {
  email: string;
  password?: any;
}
