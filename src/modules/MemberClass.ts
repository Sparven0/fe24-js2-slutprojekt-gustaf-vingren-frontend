
export class Member {
    public username: string;
    public email: string;
    public role: string;

    constructor(username: string, email: string, role: string) {
        this.username = username;
        this.email = email;
        this.role = role;
    }

    // Display the current user info (assumed to be the logged-in user)
    displayUser(username: string, email: string, role: string): void {
        const loginWrapper = document.querySelector('.loginWrapper') as HTMLDivElement;
        const prevMember = document.querySelector('.member');
        if (prevMember) {
            prevMember.remove();
        }
        const member = document.createElement('div');
        member.classList.add('member');
        member.innerHTML = `
            <div>
                <h1>Current user</h1>
                <br></br>
                <h2>${username}</h2>
                <p>${email}</p>
                <p>${role}</p>
            </div>`;
        loginWrapper.append(member);
    }
    // Display member details
    displayMember(): void {
        const loginWrapper = document.querySelector('.loginWrapper') as HTMLDivElement;
        const prevMember = document.querySelector('.member');
        if (prevMember) {
            prevMember.remove();
        }
        const member = document.createElement('div');
        member.classList.add('member');
        member.innerHTML = `
            <div>
                <h1>Current user</h1>
                <br></br>
                <h2>${this.username}</h2>
                <p>${this.email}</p>
                <p>${this.role}</p>
            </div>`;
        loginWrapper.append(member);
    }
}
