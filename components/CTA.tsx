import Image from "next/image";
import Link from "next/link";

const Cta = ()  => {
    return <section className={"cta-section"}>
        <div className={"cta-badge"}>
            Start learning your way
        </div>
        <h2 className={"text-3xl font-bold"}>
            Build and personalize Learning companion
        </h2>
        <p>Pick a name, subject, voice, & personality - and start learning through voice conversations that feel natural and fun.</p>
        <Image src={"images/cta.svg"} alt={"call to action"} height={232} width={362} />
        <button className={"btn-primary"}>
            <Image src={"/icons/plus.svg"} alt={"plus"} height={12} width={12} />
            <Link href={"/companions/new"}>
                <p>Build a New Companion</p>
            </Link>
        </button>
    </section>
}

export default Cta;