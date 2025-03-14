import { getAll } from "../Fetching Functions/memberFunctions";
import { Member } from "../MemberClass";
import { getTasksForMember } from "../Fetching Functions/memberFunctions";


// initialisera membern

export async function initMember(username: string): Promise<void> {
    const members: Member[] = await getAll();
    const member = members.find(member => member.username === username);
    if (member) {
        member.displayMember();
    }
}

