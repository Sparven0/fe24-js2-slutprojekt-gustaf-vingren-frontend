import { Member } from "../MemberClass";
import { getMembersUrl } from "./urls";
import { postNewMemberUrl } from "./urls";
import { getTasksForMemberUrl } from "./urls";
import { writeTaskForMemberUrl } from "./urls";
import { displayOptions } from "../RenderingFunctions/displayingFunction";
import { initMember } from "../RenderingFunctions/initializeMember";
import { memberSelect } from "../main";



// i denna filen finns funktioner för att hämta användare, lägga till användare och hämta tasks för användare


// läsa alla members

export async function getAll(): Promise<Member[]> {;
    const response = await fetch(getMembersUrl);
    const data = await response.json();
    console.log(data);
    return data.members.map(member => new Member(member.username, member.email, member.role));
}


// lägga till ny användare


export async function postNew(username: string, email: string, role: string): Promise<void> {
    const body = {
        username: username,
        email: email,
        role: role,
        id: Date.now()
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
    try {
        const currentMemebers = await getAll();
        currentMemebers.forEach(member => {
            if(username === member.username){
            alert('Username already exists');
        return;}
        })
        const response = await fetch(postNewMemberUrl, options);
        const data = await response.json();
        await initMember(username);
        await displayOptions(memberSelect)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// hämta tasks för användare

export async function getTasksForMember(username: string): Promise<any> {
    try {
        const res = await fetch(`${getTasksForMemberUrl}/${username}`);
        const data = await res.json();
        console.log(data)
        if (res.status === 404 || data.length === 0) {
            console.log('Username not found');
            // alert("Can't find any tasks for this user!");
            return data
        }
        return data;
    } catch (e) {
        console.log('Error getting tasks', e);
    }
}



// lägg till tasks för användare / not assigned to user yet

function formatTimestamp(timeStamp: string): string {
    const date = new Date(timeStamp);
    return date.toLocaleDateString('en-US', { // Change locale if needed
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
}

export async function writeTaskForMember(taskData): Promise<void> {
    const formattedTimestamp = formatTimestamp(new Date().toISOString());

    const members = await getAll(); 
    if (taskData.username === 'not-assigned') {
        const body = {
            title: taskData.title,
            username: taskData.username,
            role: taskData.role,
            description: taskData.description,
            dueDate: taskData.dueDate,
            id: Date.now(),
            isComplete: false,
            timeStamp: formattedTimestamp
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        };

        try {
            const response = await fetch(writeTaskForMemberUrl, options);
            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.log('Error writing task', e);
        }
        return;
    }

    // Case 2: Task username matches a member's username, proceed with POST request
    const user = members.find((member) => member.username === taskData.username);
    
    if (user) {
        // Check role mismatch
        if (user.role !== taskData.role && taskData.role !== 'not-assigned') {
            alert("Incorrect role.. not their job!")
            console.log('Role mismatch: User role does not match task role, user-role:', taskData.role);
            throw new Error('Role mismatch: User role does not match task role');
        }

        const body = {
            username: taskData.username,
            role: taskData.role,
            description: taskData.description,
            dueDate: taskData.dueDate,
            id: Date.now(),
            isComplete: false,
            timeStamp: formattedTimestamp
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        };

        try {
            const response = await fetch(writeTaskForMemberUrl, options);
            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.log('Error writing task', e);
        }

        return; // Exit the function after successfully writing the task
    }

    // Case 3: If no matching user and not 'not-assigned', throw an error
    console.log('User not found or task role mismatch');
    throw new Error('Username not found or task role mismatch');
}




