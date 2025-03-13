import { initMember } from "./Rendering Functions/initializeMember";
import { displayOptions } from "./Rendering Functions/displayingFunction";
import { writeTaskForMember } from "./Fetching Functions/memberFunctions";
import { checkMemberTask } from "./Rendering Functions/displayingFunction";
import { Task } from "./Rendering Functions/TaskClass";
import { checkNotAssignedTask } from "./Rendering Functions/displayingFunction";
import { checkTasksNotLoggedIn } from "./Rendering Functions/displayingFunction";
import { checkStatus } from "./Rendering Functions/displayingFunction";
import { postNew } from "./Fetching Functions/memberFunctions";



// main.ts importerar och kör alla funktioner som körs "villkorslöst", dvs de som körs oavsett användarinteraktion.
// main.ts hanterar även de mest basala interaktioner såsom att logga in, skapa nya tasks samt skapa nya användare


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
  const username = formData.get("assignedMember") as string;
  const description = formData.get("description") as string;
  const dueDate = formData.get("due") as string;
  const role = formData.get("role") as string;
  const newTask = new Task(username, role, description, dueDate, false);

  await writeTaskForMember(newTask, await checkNotAssignedTask());
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
