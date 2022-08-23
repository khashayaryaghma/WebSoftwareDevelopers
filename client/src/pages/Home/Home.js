import FirstSection from "../../components/FirstSection/FirstSection";
import SecondSection from "../../components/SecondSection/SecondSection";
import ThirdSection from "../../components/ThirdSection/ThirdSection"
function Home() {
    return (
        <main>
            <FirstSection bgColor="purple" />
            <SecondSection />
            <ThirdSection bgColor="purple" />
        </main>
    );
}

export default Home;
