import { DailyQuest } from '../apps-components/DailyQuest';
import AllQuests from '../apps-components/AllQuests';
export default function Quests() {
    return (
        <div className="quests-scroll">
            <div>
                <DailyQuest />
            </div>
            <div>

            </div>
            <div>
                <AllQuests />
            </div>


            <div>
            </div>
        </div>
    )
}