export class Coverage {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    cargo: string;
    token?: string;

    constructor(id: number, username: string, password: string, firstName: string, lastName: string, cargo: string, token?: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.cargo = cargo;
        this.token = token;

    }
}
