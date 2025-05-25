import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
        <h1 className={"text-2xl underline"}>Popular Companions</h1>
        <section className={"home-section"}>
            <CompanionCard
                id={1}
                subject={"Science"}
                duration={45  }
                topic={"Neural Network of the Brain"}
                name={"Neura the Brainy Explorer"}
                color={"#E5D0FF"}
            />
            <CompanionCard
                id={2}
                subject={"Maths"}
                duration={30}
                topic={"Derivatives & Integrals"}
                name={"Countsy the Numb er Wizard"}
                color={'#FFDA6E'}
            />
            <CompanionCard
                id={3}
                subject={"Language"}
                duration={30}
                topic={"English and Literature"}
                name={"Verba the vocabulary builder"}
                color={"#BDE7FF"}
            />
        </section>
        <section className={"home-section"}>
            <CompanionsList
                title={"Recently completed sessions"}
                companions={recentSessions}
                classNames={"w-2/3 max-lg:w-full"}
            />
            <CTA />
        </section>
    </main>
  )
}

export default Page