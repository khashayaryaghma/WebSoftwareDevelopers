import FirstSection from "../../components/FirstSection/FirstSection";
import FourthSection from "../../components/FourthSection/FourthSection";
import SecondSection from "../../components/SecondSection/SecondSection";
import ThirdSection from "../../components/ThirdSection/ThirdSection";

function Home() {
    return (
        <main>
            <FirstSection bgColor="purple" />
            <SecondSection />
            <ThirdSection bgColor="purple" />
            <FourthSection />
        </main>
    );
}

export default Home;
