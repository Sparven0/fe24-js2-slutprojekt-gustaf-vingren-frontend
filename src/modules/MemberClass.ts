
import { displayUser } from "./Rendering Functions/displayingFunction";

export class Member {
    username: string;
    email: string;
    role: string;

    constructor(username: string, email: string, role: string) {
        this.username = username;
        this.email = email;
        this.role = role;
    }
        displayMember(username):void{
            displayUser(this.username, this.email, this.role);
        }
}

