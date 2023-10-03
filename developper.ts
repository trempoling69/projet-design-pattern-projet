export interface developper {
  firstname: string;
  lastname: string;
  login(): void;
  notify(message: string): void;
}

export class developper {
  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getFullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  notify(message: string) {
    console.log(`en tant que ${this.firstname} ${this.lastname} je recois une notif pour ${message}`);
  }

  login(): void {
    console.log('je suis un dev');
  }
}
