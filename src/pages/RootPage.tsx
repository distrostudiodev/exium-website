import CContainer from "@/components/ui-custom/CContainer";
import WAWidget from "@/components/widget/WAWidget";
import HeroHome from "@/pages/section/HeroHome";
import Footer from "./section/Footer";
import ServicesHome from "./section/ServicesHome";
import StatsHome from "./section/StatsHome";
import TheWayWeWork from "./section/TheWayWeWork";
import WorksHome from "./section/WorksHome";

const RootPage = () => {
  // useScrollToTop();

  return (
    <CContainer>
      <HeroHome />
      <StatsHome />
      <WorksHome />
      <ServicesHome />
      <TheWayWeWork />
      {/* <ClientStory /> */}
      <Footer />

      <WAWidget />
    </CContainer>
  );
};

export default RootPage;
