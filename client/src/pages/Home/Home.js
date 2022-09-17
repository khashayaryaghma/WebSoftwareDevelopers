import FirstSection from "../../components/FirstSection/FirstSection";
import FourthSection from "../../components/FourthSection/FourthSection";
import SecondSection from "../../components/SecondSection/SecondSection";
import ThirdSection from "../../components/ThirdSection/ThirdSection";
import FifthSection from "../../components/FifthSection/FifthSection";
import SixthSection from "../../components/SixthSection/SixthSection";
import SeventhSection from "../../components/SeventhSection/SeventhSection";

function Home() {
    return (
        <main>
            <FirstSection bgColor="purple" />
            <SecondSection />
            <ThirdSection bgColor="purple" />
            <FourthSection />
            <FifthSection bgColor="purple" />
            <SixthSection />
            <SeventhSection bgColor="purple" />
        </main>
    );
}

export default Home;
