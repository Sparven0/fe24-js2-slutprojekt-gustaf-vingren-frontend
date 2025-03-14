import { getAllTasks } from "./modules/Fetching Functions/getAllTasks";
import { Task } from "./modules/Rendering Functions/TaskClass";
import { displayNotLoggedInTasks } from "./modules/Rendering Functions/displayingFunction";

export async function filterTasksUsername(username: string):Promise<Task[]>{
    const inCompleteTasksList = document.querySelector('#incompleteTasks') as HTMLDListElement;
    inCompleteTasksList.innerHTML = '';
   const tasks = await getAllTasks();
    const filteredTasks = tasks.filter(task => task.username === username);
   filteredTasks.forEach(task => {
    if(task.username !== 'not-assigned'){
    displayNotLoggedInTasks(task);
   }}
   )
    return filteredTasks;
}

export async function filterTaskRole(role: string):Promise<Task[]>{
    const inCompleteTasksList = document.querySelector('#incompleteTasks') as HTMLDListElement;
    inCompleteTasksList.innerHTML = '';
    const tasks = await getAllTasks();
    const filteredTasks = tasks.filter(task => task.role === role);
    filteredTasks.forEach(task => {
        if(task.username !== 'not-assigned'){
        displayNotLoggedInTasks(task);
 } })
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
}
else if(
    timeAndAlph === 'z-a'){
    await sortTasksReversed();
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
    return 0; 
});
sortedTasks.forEach(task => {
displayNotLoggedInTasks(task);
})
return sortedTasks;  
}
export async function sortTasksByTimeStamp(): Promise<Task[]> {
const incompleteTasksList = document.querySelector('#incompleteTasks') as HTMLDListElement;
incompleteTasksList.innerHTML = '';
const tasks = await getAllTasks();
const sortedTasks = tasks.sort((a, b) => {
    const aDate = new Date(a.timeStamp).getTime();
    const bDate = new Date(b.timeStamp).getTime();
    if (aDate > bDate) return -1; 
    if (aDate < bDate) return 1; 
    return 0; 
});

sortedTasks.forEach(task => {
    displayNotLoggedInTasks(task);
})

return sortedTasks; 
}




export async function sortTasksReversed(): Promise<Task[]> {
const incompleteTasksList = document.querySelector('#incompleteTasks') as HTMLDListElement;
incompleteTasksList.innerHTML = '';
const tasks = await getAllTasks();
const sortedTasks = tasks.sort((a, b) => {
    const aDescription = a.description.toLowerCase();
    const bDescription = b.description.toLowerCase();

    if (aDescription > bDescription) return -1;
    if (aDescription < bDescription) return 1;
    return 0;
});
sortedTasks.forEach(task => {
    displayNotLoggedInTasks(task);
});
return sortedTasks;
}
