import CaseStudies from "../features/caseStudies/CaseStudies";
import Hero from "../features/hero/Hero";
import Proposal from "../features/proposal/Proposal";
import Services from "../features/services/Services";

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Proposal />
            <CaseStudies />
        </>
    )
}

export default Home;