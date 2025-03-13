export class Task {
    public username: string;
    public readonly description: string;
    public readonly role: string;
    public readonly dueDate: string;
    public isComplete: boolean;
    public timeStamp: string;

    constructor(username:string, role:string, description:string, dueDate:string, isComplete:boolean, timeStamp?:string) {
        this.username = username;
        this.description = description;
        this.role = role;
        this.dueDate = dueDate;
        this.isComplete = isComplete;
        this.timeStamp = ''
    }
}