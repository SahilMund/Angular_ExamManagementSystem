import { EmailValidator } from "@angular/forms";

export class User {
    constructor(
        public name: string,
        public emailId:string,
        public password: string,
        public repassword : string) {}
}
