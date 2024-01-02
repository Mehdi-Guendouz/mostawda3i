import { Icons } from "@/components/Icons";
import Contact from "@/components/landingPage/Contact";
import Container from "@/components/landingPage/Container";
import Features from "@/components/landingPage/Features";
import Footer from "@/components/landingPage/Footer";
import Functions from "@/components/landingPage/Functions";
import Hero from "@/components/landingPage/Hero";
import NaveBar from "@/components/landingPage/NaveBar";
import Stats from "@/components/landingPage/Stats";

const LandingPage = () => {
  return (
    <div>
      <NaveBar />
      <Hero />
      <Container>
        <Stats />
      </Container>
      <div className="relative h-fit overflow-hidden">
        <Icons.victor className="" />
        <Icons.victor />
      </div>
      <Container>
        <Features />
      </Container>
      <Container>
        <Functions />
      </Container>
      <div className="relative h-fit overflow-hidden">
        <Icons.victor className="" />
      </div>
      <Container>
        <Contact />
      </Container>
      <Footer />
    </div>
  );
};

export default LandingPage;
