// denna filen innehåller funktioner som körs direkt utan user-input. 
// checkTasksNotLoggedIn körs när sidan laddas och visar alla tasks när användaren inte är inloggad. 
// checkNotAssignedTask körs när sidan laddas för att visa alla tasks som inte är tilldelade någon användare.

import { initMember } from "./RenderingFunctions/initializeMember";
import {displayOptions } from "./RenderingFunctions/displayingFunction";
import { checkMemberTask } from "./RenderingFunctions/displayingFunction";
import { Task } from "./RenderingFunctions/TaskClass";
import { checkNotAssignedTask } from "./RenderingFunctions/displayingFunction";
import { checkTasksNotLoggedIn } from "./RenderingFunctions/displayingFunction";
import { checkStatus } from "./RenderingFunctions/displayingFunction";
import { postNew } from "./Fetching Functions/memberFunctions";
const filterForm = document.getElementById("filterForm") as HTMLFormElement;
import { sortTasksAZ } from "./RenderingFunctions/sortAndFilter";
import { sortTasksReversed } from "./RenderingFunctions/sortAndFilter";
import { sortTasksByTimeStamp } from "./RenderingFunctions/sortAndFilter";
import { sortTasksByTimeStampReversed } from "./RenderingFunctions/sortAndFilter";
import { filterTasksUsername } from "./RenderingFunctions/sortAndFilter";
import { filterTaskRole } from "./RenderingFunctions/sortAndFilter";





export const loginForm = document.querySelector(
  "#loginForm"
) as HTMLFormElement;
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const username = formData.get("username") as string;
  checkMemberTask(username);
  initMember(username);
});

const addTaskForm = document.querySelector("#addTaskForm") as HTMLFormElement;
addTaskForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const prevDOM = document.querySelectorAll(".taskElementP");
  if (prevDOM) {
    prevDOM.forEach((element) => {
      element.remove();
    });
  }
  
  const formData = new FormData(addTaskForm);
  const title = formData.get("title") as string;
  const username = formData.get("assignedMember") as string;
  const description = formData.get("description") as string;
  const dueDate = formData.get("due") as string;
  const role = formData.get("role") as string;
  
  const newTask = new Task(title, username, role, description, dueDate, false);
  await newTask.createNewTask(); 
  await checkNotAssignedTask();
  await checkTasksNotLoggedIn();
});


const createUserForm = document.querySelector('#createAccountForm') as HTMLFormElement;

createUserForm.addEventListener('submit', async (e) => {
        const formData = new FormData(createUserForm);
        const username = formData.get('username') as string;
        const email = formData.get('email') as string;
        const role = formData.get('role') as string;
    e.preventDefault();
    await postNew(username, email, role);
    
    }
)




checkStatus();
export const memberSelect = document.querySelector("#assignedMember") as HTMLSelectElement;
const memberSelectFilter = document.querySelector("#userFilter") as HTMLSelectElement;
displayOptions(memberSelect);
displayOptions(memberSelectFilter);
checkTasksNotLoggedIn();
checkNotAssignedTask();




const createAccountDropDown = document.querySelector('.createAccountDropDown') as HTMLDivElement;

const filterDropDown = document.querySelector('.filterDropDown') as HTMLDivElement;
const createAccountBox = document.querySelector('.createAccount') as HTMLDivElement;
const createAccountArrow = document.querySelector('.createAccountI');
const filterBox = document.querySelector('.filters') as HTMLDivElement;
const filterArrow = document.querySelector('.filterI');


createAccountDropDown.addEventListener('click', () => {
  createAccountBox.classList.toggle('createAccountShow')
createAccountArrow?.classList.toggle('createAccountI')
})

filterDropDown.addEventListener('click', () => {
filterBox.classList.toggle('filtersShow')
filterArrow?.classList.toggle('filterI')
})


filterForm.addEventListener("submit", async (e) => {
  const incompleteTasksList = document.querySelector(
    "#incompleteTasks"
  ) as HTMLDListElement;
  incompleteTasksList.innerHTML = "";
  e.preventDefault();
  const formData = new FormData(filterForm);
  const username = formData.get("userFilter");
  const role = formData.get("role");
  const timeAndAlph = formData.get("timeAndAlph");
  if (timeAndAlph === "a-z") {
    await sortTasksAZ();
  } else if (timeAndAlph === "z-a") {
    await sortTasksReversed();
  } else if (timeAndAlph == "oldest") {
    await sortTasksByTimeStampReversed();
  } else {
    await sortTasksByTimeStamp();
  }

  if (role === "any" && username === "any") {
    return;
 }
  if (role === "any" && username !== "any") {
    await filterTasksUsername(username as string);
  }
  if (username === "any" && role !== "any") {
    await filterTaskRole(role as string);
    return;
  }
});


