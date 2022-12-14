import FirstSection from "../../components/FirstSection/FirstSection";
import FourthSection from "../../components/FourthSection/FourthSection";
import SecondSection from "../../components/SecondSection/SecondSection";
import ThirdSection from "../../components/ThirdSection/ThirdSection";
import FifthSection from "../../components/FifthSection/FifthSection";
import SixthSection from "../../components/SixthSection/SixthSection";
import SeventhSection from "../../components/SeventhSection/SeventhSection";
import EighthSection from "../../components/EighthSection/EighthSection";

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
            <EighthSection />
        </main>
    );
}

export default Home;
