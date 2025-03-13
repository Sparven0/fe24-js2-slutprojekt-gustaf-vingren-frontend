import { checkNotAssignedTask } from "../Rendering Functions/displayingFunction";
import { updateIsCompleteUrl } from "./urls"
import { deleteTaskUrl } from "./urls";
import { updateAssignedUserUrl } from "./urls";




export async function updateIsComplete(taskID:number, taskStatus:boolean):Promise<void>{
const body = {
    isComplete: taskStatus,
}
const options = {
    method: 'PATCH',
    headers:{
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
}
try{
    const response = await fetch(updateIsCompleteUrl + taskID, options);
    const data = await response.json();
    console.log(data);
  
   }
   catch(e){
    console.log('Error updating task', e);
   }
}


export async function deleteTask(taskID:number):Promise<void>{

const options = {
    method: 'DELETE',
    headers:{
        'Content-Type': 'application/json',
    }
}
try{
    const response = await fetch(deleteTaskUrl + taskID, options);
    const data = await response.json();
    await checkNotAssignedTask()
    console.log(data);
} catch(e){
    console.log('Error deleting task', e);
}
}


export async function updateAssignedUser(taskID:number, username:string){
    const body = {
        username: username
    }
    const options = {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    }
    try{
        const response = await fetch(updateAssignedUserUrl + taskID, options);
        const data = await response.json();
        console.log(data);
    } catch(e){
        console.log('Error updating task', e);
    }
}



