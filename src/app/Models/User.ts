export class User{

  username: string;
  email: string;
  password: string;
  role: string;
  description: string;
  gender: string
  constructor(username: string, email: string, password: string, role: string, desc: string, gender: string){
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
    this.description = desc;
    this.gender = gender;
  }
}

export interface UserResponse{
  email: null | string;
  password: null | string;
}