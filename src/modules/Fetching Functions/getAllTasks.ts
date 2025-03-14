import { getAllTasksUrl } from "./urls";
import { Task } from "../RenderingFunctions/TaskClass";

export async function getAllTasks():Promise<Task[]>{
    try{
        const response = await fetch(getAllTasksUrl);
        const tasks = await response.json();
        return tasks;
    } catch(e){
        console.log('Error getting tasks', e);
        return [];
    }
}