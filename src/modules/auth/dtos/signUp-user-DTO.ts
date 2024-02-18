type SignUpUser = {
  name: string;
  email: string;
  password: string;
};

export class SignUpUserDTO {
  name: string;
  email: string;
  password: string;

  constructor(userData: SignUpUser) {
    this.name = userData.name;
    this.email = userData.email;
    this.password = userData.password;
  }
}
