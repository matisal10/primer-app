import { ROLES } from "./role.enum";

export class User {
    userName = '';
    email = '';
    password = '';
    role = ROLES

    constructor(userName, email, password, role) {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.role = role
    }
}
