# Slutprojekt JS2

Slutprojekt i JavaScript 2. 
Målet med uppgiften är att skapa en scrumboard med FP och OOP. Projektet avser att uppnå G kraven och optimalt även VG kraven.

------------ **krav för G** : ------------

GUI

Det ska finnas tre kolumner.

**En för nya uppgifter där varje uppgift ska visa**

 - title
 - description
 - category
 - timestamp
 - ett sätt för användaren att tilldela uppgiften till en existerande medlem, så att uppgiften får status “in   progress”

**En för uppgifter som är in progress där varje uppgift ska visa**

 - title
 - description
 - category
 - timestamp
 - assigned member
 - ett sätt för användaren att uppdatera statusen till “done”

**En för uppgifter som är utförda där varje uppgift ska visa**

 - title
 - description
 - category
 - timestamp
 - assigned member
 - Ett sätt för användaren att radera uppgiften.

------------    ------------

------------ krav för VG ------------

**Använd node och express för att utveckla ett API för att hålla reda på alla uppgifter och medlemmar i en json-fil.**
 Du bestämmer själv vilken struktur json-filen ska ha men den här informationen behöver finnas med:
*assignments*
*id: bestäm själv hur du genererar ett id*
*title: string*
*description: string*
*category: “ux” / “dev frontend” / “dev backend” (lägg gärna till fler om du vill!)*
*status: “new” / “in progress” / “done”*
*assigned: undefined | en existerande medlem (ex namn eller id)*
*timestamp: välj själv vilket format*
*members*
*id: bestäm själv hur du genererar ett id*
*name: string*
*role: baseras på categories*

**Se till att där finns minst sex uppgifter och 3 medlemmar från början.**



## Installation

Projektet använder Parcel som bundler. 
- 
För att förhandsvisa projektet lokalt: 
npm i
npm run start
-


## Files

- `getAllTasks.ts`: Innehåller funktionen getAllTasks(). Funktionens syfte är att göra en API fetch för att hämta alla tasks som finns i JSON filen..

- `updateFunctions.ts`: Innehåller front-end funktioner för att uppdatera JSON filen. I denna filen finns API-fetch funktioner som uppdaterar task status, assigned members till tasks och ta bort tasks.

- `initializeMember.ts`: Innehåller funktionen för att displaya en member.

- `main.ts`: Denna filen lyssnar på ett "login form" och hämtar username för att sedan köra initMember(username) funktionen för att initialisera användaren, alltså hämta dennes information och visa den. 
Filen hanterar även andra eventlisteners för att skapa FormData objekt för att skapa nya användare, FormData för att skriva nya tasks, eventlisteners för drop-downs. Filen kör även de funktioner som ska köras direkt när användaren startar applikationen. 
Dessa är: 

**displayOptions** -- funktionen använder fetch funktioner för att hämta alla användare för att sedan skapa options med varje användare för att lägga till i select-element.

**checkTasksNotLoggedIn** -- funktionen hämtar alla tasks och använder display funktioner för att displaya alla tasks om användaren inte är inloggad. Då kan användaren inte ändra isComplete för någon task.

**checkNotAssignedTasks** -- denna funktionen hämtar alla tasks och använder display funktioner för att displaya de tasks som inte är assigned till en user.


- `sortAndFilter.ts`: Denna filen innehåller funktioner för att filtrera och sortera tasks på username, role, a-z, z-a, latest och newest. 


- `memberFunctions.ts`: Här finns funktioner för att hämta alla användare, lägga till nya användare och hämta tasks för användare. 


- `MemberClass.ts`: Denna filen innehåller klassen Member. Klassen säkerställer att members har korrekt format då members skapas med konstruktorn (new Member). Detta säkerställer att alla members som skapas har korrekt struktur. 
Klassen har metoder för att displaya memberns information när denne har loggat in. 


- `TaskClass.ts`: Denna filen innehåller klassen Task. Klassen säkerställer att alla tasks har korrekt format då tasks skapas med konstruktorn (new Task). Detta säkerställer att alla tasks har samma struktur. Klassen har även metoder för att skriva nya tasks till members och skriva dem till JSON filen med fetch funktioner. 


- `styles.css`: Denna filen innehåller all styling för sidan. 




