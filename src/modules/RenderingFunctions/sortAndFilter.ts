import { getAllTasks } from "../Fetching Functions/getAllTasks";
import { Task } from "./TaskClass";
import { displayNotLoggedInTasks } from "./displayingFunction";


export async function filterTasksUsername(username: string): Promise<Task[]> {
  const inCompleteTasksList = document.querySelector(
    "#incompleteTasks"
  ) as HTMLDListElement;
  inCompleteTasksList.innerHTML = "";
  const tasks = await getAllTasks();
  const filteredTasks = tasks.filter((task) => task.username === username);
  filteredTasks.forEach((task) => {
    if (task.username !== "not-assigned") {
      displayNotLoggedInTasks(task);
    }
  });
  return filteredTasks;
}

export async function filterTaskRole(role: string): Promise<Task[]> {
  const inCompleteTasksList = document.querySelector(
    "#incompleteTasks"
  ) as HTMLDListElement;
  inCompleteTasksList.innerHTML = "";
  const tasks = await getAllTasks();
  const filteredTasks = tasks.filter((task) => task.role === role);
  filteredTasks.forEach((task) => {
    if (task.username !== "not-assigned") {
      displayNotLoggedInTasks(task);
    }
  });
  return filteredTasks;
}


// sortera tasks a-z samt senaste (timestamp)

export async function sortTasksAZ(): Promise<Task[]> {
  const incompleteTasksList = document.querySelector(
    "#incompleteTasks"
  ) as HTMLDListElement;
  incompleteTasksList.innerHTML = "";
  const tasks = await getAllTasks();
  const sortedTasks = tasks.sort((a, b) => {
    const aDescription = a.description.toLowerCase();
    const bDescription = b.description.toLowerCase();

    if (aDescription < bDescription) return -1;
    if (aDescription > bDescription) return 1;
    return 0;
  });
  sortedTasks.forEach((task) => {
    displayNotLoggedInTasks(task);
  });
  return sortedTasks;
}
export async function sortTasksByTimeStamp(): Promise<Task[]> {
  const incompleteTasksList = document.querySelector(
    "#incompleteTasks"
  ) as HTMLDListElement;
  incompleteTasksList.innerHTML = "";
  const tasks = await getAllTasks();
  const sortedTasks = tasks.sort((a, b) => {
    const aDate = new Date(a.timeStamp).getTime();
    const bDate = new Date(b.timeStamp).getTime();
    if (aDate > bDate) return -1;
    if (aDate < bDate) return 1;
    return 0;
  });

  sortedTasks.forEach((task) => {
    displayNotLoggedInTasks(task);
  });

  return sortedTasks;
}

export async function sortTasksByTimeStampReversed(): Promise<Task[]> {
  const incompleteTasksList = document.querySelector(
    "#incompleteTasks"
  ) as HTMLDListElement;
  incompleteTasksList.innerHTML = "";
  const tasks = await getAllTasks();
  const sortedTasks = tasks.sort((a, b) => {
    const aDate = new Date(a.timeStamp).getTime();
    const bDate = new Date(b.timeStamp).getTime();
    if (aDate < bDate) return -1;
    if (aDate > bDate) return 1;
    return 0;
  });

  sortedTasks.forEach((task) => {
    displayNotLoggedInTasks(task);
  });

  return sortedTasks;
}

export async function sortTasksReversed(): Promise<Task[]> {
  const incompleteTasksList = document.querySelector(
    "#incompleteTasks"
  ) as HTMLDListElement;
  incompleteTasksList.innerHTML = "";
  const tasks = await getAllTasks();
  const sortedTasks = tasks.sort((a, b) => {
    const aDescription = a.description.toLowerCase();
    const bDescription = b.description.toLowerCase();

    if (aDescription > bDescription) return -1;
    if (aDescription < bDescription) return 1;
    return 0;
  });
  sortedTasks.forEach((task) => {
    displayNotLoggedInTasks(task);
  });
  return sortedTasks;
}
