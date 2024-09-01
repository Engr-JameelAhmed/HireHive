export class User {
  constructor(
    public username: string,
    public password: string,
    public email: string,
    public role: string,
    public gender: string,
    public cv?: string // Optional field
  ) {}
}

export interface UserResponse{
  email: null | string;
  password: null | string;
}