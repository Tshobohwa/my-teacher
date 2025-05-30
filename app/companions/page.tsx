import {getAllCompanions} from "@/lib/actions/companion.action";
import CompanionCard from "@/components/CompanionCard";
import {getSubjectColor} from "@/lib/utils";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";

const CompanionsLibrary = async ({searchParams}) => {
    const filters = await searchParams;

    const subject = filters.subject ? filters.subject : "";
    const topic = filters.topic ? filters.topic : "";

    const companions = await getAllCompanions({subject, topic});

    console.log(companions);
    return <main>
        <section>
            <h1>Companions Library</h1>
            <div>
                <SearchInput />
                <SubjectFilter />
            </div>
        </section>
        <section>
            {companions.map(companion => <CompanionCard
                id={companion.id}
                name={companion.name}
                topic={companion.topic}
                subject={companion.subject}
                duration={companion.duration}
                color={getSubjectColor(companion.subject)}
                key={companion.id}
                />
            )}
        </section>
    </main>
}

export default CompanionsLibrary;