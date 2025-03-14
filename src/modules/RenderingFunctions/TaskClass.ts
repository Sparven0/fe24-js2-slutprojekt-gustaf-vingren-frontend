import { writeTaskForMember } from "../Fetching Functions/memberFunctions";
import { getTasksForMember } from "../Fetching Functions/memberFunctions";
import { updateIsComplete } from "../Fetching Functions/updateFunctions";

export class Task {
    public title: string;
    public username: string;
    public readonly description: string;
    public readonly role: string;
    public readonly dueDate: string;
    public isComplete: boolean;
    public timeStamp: string;
    public id:number;

    constructor(
        title: string,
        username: string,
        role: string,
        description: string,
        dueDate: string,
        isComplete: boolean,
        timeStamp?: string
    ) {
        this.title = title;
        this.username = username;
        this.description = description;
        this.role = role;
        this.dueDate = dueDate;
        this.isComplete = isComplete;
        this.timeStamp = timeStamp || new Date().toISOString(); // Default to current time
    }

    // Create a new task and send it to the server using the writeTaskForMember function
    async createNewTask(): Promise<void> {
        const taskData = {
            title: this.title,
            username: this.username,
            role: this.role,
            description: this.description,
            dueDate: this.dueDate,
            isComplete: this.isComplete,
            timeStamp: this.timeStamp // Include the timestamp
        };
        await writeTaskForMember(taskData); // Send the task data to the server
    }
    static async displayTasks(username: string): Promise<void> {
        const previousDOM = document.querySelectorAll('.taskElement');
        previousDOM.forEach((element) => {
            element.remove();
        });

        const tasks = await getTasksForMember(username); // Assuming this fetches the tasks for the user
        tasks.forEach((task: Task) => {
            if (task.username === 'not-assigned') {
                const taskElement = document.createElement('div');
                taskElement.classList.add('taskElementLoggedIn');
                taskElement.innerHTML = `
                <p>Title: ${task.title}</p>
                    <p>Assigned to: ${task.username}</p>
                    <p>For role: ${task.role}</p>
                    <p>Task: ${task.description}</p>
                    <p>Deadline: ${task.dueDate}</p>
                    <p>Task ID: ${task.id}</p>
                    <input type="checkbox" id="isCompletedBox">Status: ${task.isComplete}</input>`;

                const isCompletedBox = taskElement.querySelector('#isCompletedBox') as HTMLInputElement;
                if (task.isComplete) {
                    isCompletedBox.checked = true;
                } else {
                    isCompletedBox.checked = false;
                }

                isCompletedBox.addEventListener('change', async (e) => {
                    await updateIsComplete(task.id, isCompletedBox.checked);
                    Task.displayTasks(task.username); // Refresh task list after update
                });

                document.body.appendChild(taskElement);
            }
        });
    }
}

