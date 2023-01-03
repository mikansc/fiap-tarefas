export type User = {
  _id?: string;
  name: string;
  email: string;
  password: string;
};

export interface IUserResponse {
  token: string;
  name: string;
  email: string;
}

export interface ILoginCredentials {
  login: string;
  password: string;
}

export interface ISignupCredentials {
  name: string;
  email: string;
  password: string;
}
