import { updateIsComplete } from "../Fetching Functions/updateFunctions";
import { getAllTasksUrl, getTasksForMemberUrl } from "../Fetching Functions/urls";
import { Task } from "./TaskClass";
import { getAll } from "../Fetching Functions/memberFunctions";
import { deleteTask } from "../Fetching Functions/updateFunctions";
import { updateAssignedUser } from "../Fetching Functions/updateFunctions";
import { getTasksForMember } from "../Fetching Functions/memberFunctions";
import { getAllTasks } from "../Fetching Functions/getAllTasks";


// visar användare som är "inloggad"

export function displayUser(username: string, email: string, role: string): void {
    const loginWrapper = document.querySelector('.loginWrapper') as HTMLDivElement;
   /* const prevMember = document.querySelector('.member');
    if (prevMember) {
        prevMember.remove();
    }*/
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


// kontrolerar status på tasks och visar de som är färdiga

export async function checkStatus():Promise<Task[]>{
    const raw = await fetch(`${getAllTasksUrl}`)
    const tasks = await raw.json()
    tasks.forEach(task => {
        const status = task.isComplete;
        if (status == true){
    console.log(task);
    displayTaskAsComplete(task)
        }
    })
    return tasks
}


// visar alla tasks för alla användare FÖRUTOM de som inte är not assigned

export async function checkTasksNotLoggedIn():Promise<Task[]>{
    const incompleteTasksList = document.querySelector('#incompleteTasks') as HTMLDListElement;
    incompleteTasksList.innerHTML = '';
    const raw = await fetch(`${getAllTasksUrl}`);
    const tasks = await raw.json();
    tasks.forEach(task => {
        if (task.username !== 'not-assigned' && task.isComplete == false){
            displayNotLoggedInTasks(task)
            
        }
    })
    return tasks
}


// kontrollerar tasks för användare och visar de som inte är färdiga när "inloggad"

export async function checkMemberTask(username):Promise<Task[]>{
    await removeElements();
    const raw  = await fetch( `${getTasksForMemberUrl}/${username}`);
    const tasks = await raw.json();
    tasks.forEach(task => {
        if (task.isComplete == false && task.username !== 'not-assigned'){
            displayTaskAsProgress(task)
            console.log(task)
    }
}
)
return tasks
}



// checkar inte assigned tasks och visar de


export async function checkNotAssignedTask():Promise<Task[]>{
    const tasks = await getAllTasks();
    tasks.forEach(task => {
        if (task.username == 'not-assigned'){
            displayNotAssignedTask(task)
        }
    })
    return tasks
}


// inte färdiga men assigned

async function removeElements(){
const inCompleteTasksList = document.querySelector('#incompleteTasks') as HTMLDListElement;
inCompleteTasksList.innerHTML = ''; 
}

export async function displayTaskAsProgress(task):Promise<any>{
    await removeElements();
    const inCompleteTasksList = document.querySelector('#incompleteTasks') as HTMLDListElement;
const taskElement = document.createElement('li');
taskElement.classList.add('taskElement');
const boxDiv = document.createElement('div');
boxDiv.classList.add('boxDiv');
const updateCheckbox = document.createElement('input');
const label = document.createElement('label');
label.innerText = 'Completed';
updateCheckbox.type = 'checkbox';
updateCheckbox.id = 'isCompletedBox';
updateCheckbox.addEventListener('change', async (e) => {
  await checkNotAssignedTask();
  await checkStatus();
  
    await updateIsComplete(task.id, updateCheckbox.checked);
     if (updateCheckbox.checked) {
       const prevDOM = document.querySelectorAll('.taskElementC');
        prevDOM.forEach((element) => {
            element.remove();
        });
        inCompleteTasksList.removeChild(taskElement);
        
    }

    console.log(task.id);
    await checkStatus();
});
boxDiv.append(updateCheckbox, label);
taskElement.innerHTML = `

<p class="taskElementText">Description:</p> ${task.description}
<p class="taskElementText">Assigned to: ${task.username}</p>
<p class="taskElementText">Due date: </p>${task.dueDate}
<p class="taskElementText">Created: </p>${task.timeStamp}`;;
taskElement.append(boxDiv);
inCompleteTasksList.append(taskElement);



}



// färdiga

export function displayTaskAsComplete(task):void{
    
const completedTasksList = document.querySelector('#completedTasks') as HTMLDListElement;
const taskElementC = document.createElement('li');
taskElementC.classList.add('taskElementC');
const removeBtn = document.createElement('button');
removeBtn.innerHTML = 'Remove task';
removeBtn.classList.add('removeBtn');
removeBtn.addEventListener('click', async (e) => {
    await deleteTask(task.id);
    taskElementC.remove();
    const inCompleteTasksList = document.querySelector('#incompleteTasks') as HTMLDListElement;
    const incompleteTaskElements = inCompleteTasksList.querySelectorAll('.taskElement');
    incompleteTaskElements.forEach((element) => {
        if (element.innerHTML.includes(task.description)) {
            inCompleteTasksList.removeChild(element);
        }
    });

});
taskElementC.innerHTML = `<p class="taskElementCtext">Description: ${task.description}, Completed by: ${task.username}</p>`;
taskElementC.append(removeBtn);

completedTasksList.append(taskElementC);
}


export function displayTaskAsPending(task):void{

}


// not assigned

export async function displayNotAssignedTask(task): Promise<any> {
    const notAssignedTasksList = document.querySelector('#notAssignedTasks') as HTMLDListElement;
    notAssignedTasksList.innerHTML = '';
    const taskElementN = document.createElement('li');
    taskElementN.classList.add('taskElementN');
    taskElementN.innerHTML = `Description: ${task.description}, Assigned to: ${task.username}. Role: ${task.role}`;
    const assignUsersForm = document.createElement('form');
    assignUsersForm.id = 'assignUserForm';
    const assignedMemberOptions = document.createElement('select');
    assignedMemberOptions.id = 'assignedMemberOptions2'; 
    const notAssignedOption = document.createElement('option');
    notAssignedOption.value = 'not-assigned';
    notAssignedOption.innerText = 'Not Assigned';
    assignedMemberOptions.append(notAssignedOption);

    const members = await getAll();
    members.forEach(member => {
        if (member.role === task.role) {
            const option = document.createElement('option');
            option.value = member.username;
            option.innerText = `${member.username} (Role: ${member.role})`;
            assignedMemberOptions.append(option);
        }
    });

    const saveBtn = document.createElement('button');
    saveBtn.id = 'saveBtn';
    saveBtn.type = 'submit'; 
    saveBtn.innerHTML = 'Save changes';

    saveBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const selectedUsername = assignedMemberOptions.value;
        const selectedMember = members.find(member => member.username === selectedUsername);
        
        if (selectedMember && selectedMember.role === task.role) {
            await updateAssignedUser(task.id, selectedUsername);
            taskElementN.remove();
            checkTasksNotLoggedIn();
        } else {
            alert(`Please select a user with the role: ${task.role}`);
        }
    });

    assignUsersForm.append(assignedMemberOptions, saveBtn);
    taskElementN.append(assignUsersForm);
    notAssignedTasksList.append(taskElementN);
}




// visar tasks utan att vara inloggad = går inte att ändra status



export function displayNotLoggedInTasks(task):void{
const inCompleteTasksList = document.querySelector('#incompleteTasks') as HTMLDListElement;
const taskElementP = document.createElement('li');
taskElementP.classList.add('taskElement');
taskElementP.innerHTML = `<p class ="taskElementText">Role: ${task.role}</p><p class="taskElementPtext">Description:</p> ${task.description}, <p class="taskElementPtext">Assigned to: ${task.username}</p><p class="taskElementPtext">Created: ${task.timeStamp}</p><p class=""taskElementPtext>Due: ${task.dueDate}</p>`;
inCompleteTasksList.append(taskElementP);   
console.log(task, 'here!!');
}


// visar options (medlemmar) för att assigna tasks



export async function displayOptions(selectElement):Promise<void>{
    selectElement.innerHTML = '';
    const members = await getAll();
    const notAssignedOption = document.createElement('option');
    notAssignedOption.value = 'not-assigned';
    notAssignedOption.innerText = 'Not Assigned';
    const anyOptions = document.createElement('option');
    anyOptions.value = 'any';
    anyOptions.innerText = 'any';
    members.forEach(member => {
        const option = document.createElement('option');
        option.value = member.username, member.role;
        option.innerText = `Member: ${member.username}, Role: ${member.role}`;
        selectElement.append(notAssignedOption, option, anyOptions);
    
    })};
    


    // får ej att fungera i annan modul


   
   export async function filterTasksUsername(username: string):Promise<Task[]>{
        const inCompleteTasksList = document.querySelector('#incompleteTasks') as HTMLDListElement;
        inCompleteTasksList.innerHTML = '';
       const tasks = await getAllTasks();
        const filteredTasks = tasks.filter(task => task.username === username);
       filteredTasks.forEach(task => {
        displayNotLoggedInTasks(task);
        console.log(task);
       }
       )
        return filteredTasks;
    }

    export async function filterTaskRole(role: string):Promise<Task[]>{
        const inCompleteTasksList = document.querySelector('#incompleteTasks') as HTMLDListElement;
        inCompleteTasksList.innerHTML = '';
        const tasks = await getAllTasks();
        const filteredTasks = tasks.filter(task => task.role === role);
        filteredTasks.forEach(task => {
            displayNotLoggedInTasks(task);
        })
        return filteredTasks;
    }


    
    const filterForm = document.querySelector('#filterForm') as HTMLFormElement;
    filterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(filterForm);
    const username = formData.get('userFilter');
    const role = formData.get('role');
    const timeAndAlph = formData.get('timeAndAlph');
    if(timeAndAlph === 'a-z'){
        await sortTasksAZ();
    }else{
        await sortTasksByTimeStamp();
    }

    if(role === 'any' && username === 'any'){
    return
    }if(role === 'any'){
        await filterTasksUsername(username as string);
    }
    if (username === 'any') {
        await filterTaskRole(role as string);
        return;
    }
    })


// sortera tasks a-z samt senaste (timestamp)

export async function sortTasksAZ(): Promise<Task[]> {
    const incompleteTasksList = document.querySelector('#incompleteTasks') as HTMLDListElement;
    incompleteTasksList.innerHTML = '';
    const tasks = await getAllTasks(); 
    const sortedTasks = tasks.sort((a, b) => {
        const aDescription = a.description.toLowerCase();  
        const bDescription = b.description.toLowerCase();  
        
        if (aDescription < bDescription) return -1;
        if (aDescription > bDescription) return 1;
        console.log(sortedTasks)
        return 0; 
    });
   sortedTasks.forEach(task => {
    displayNotLoggedInTasks(task);
   })
    return sortedTasks;  
}
export async function sortTasksByTimeStamp(): Promise<Task[]> {
    const tasks = await getAllTasks();
    const sortedTasks = tasks.sort((a, b) => {
        const aDate = new Date(a.timeStamp).getTime();
        const bDate = new Date(b.timeStamp).getTime();
        console.log(a.timeStamp);

        if (aDate > bDate) return -1; 
        if (aDate < bDate) return 1; 
        return 0; 
    });

    sortedTasks.forEach(task => {
        displayNotLoggedInTasks(task);
    })

    return sortedTasks; 
}



    // tasks för användare som är inloggad


    export async function displayTasks(username: string): Promise<any> {
        const previousDOM = document.querySelectorAll('.taskElement');
        if(previousDOM){
            previousDOM.forEach((element) => {
                element.remove();
            });
        }
        const response = await getTasksForMember(username);
        response.forEach((task: any) => {
            if(task.username == 'not-assigned'){
            
            const taskElement= document.createElement('div');
            taskElement.classList.add('taskElementLoggedIn');
            taskElement.innerHTML = `
            <p>Assigned to: ${task.username}</p>
            <p>For role: ${task.role}</p>
            <p>Task: ${task.description}</p>
            <p>Deadline: ${task.dueDate}</p>
            <p>Task ID: ${task.id}</p>
            <input type="checkbox" id="isCompletedBox">Status: ${task.isComplete}</input>` 
    
            // konsultera med lärare om detta är rätt sätt att göra eller om mer modulering kan implementeras
    
            const isCompletedBox = taskElement.querySelector('#isCompletedBox') as HTMLInputElement;
            if(task.isComplete == true){
                isCompletedBox.checked = true;
            }else{
                isCompletedBox.checked = false;
            }
            isCompletedBox.addEventListener('change', async (e) => {
               await updateIsComplete(task.id, isCompletedBox.checked);
              displayTasks(task.username);
                console.log(task.id);
            })
    
            document.body.appendChild(taskElement);}
        });
    };
    
    

 
