import Hero from "@/components/Hero";
import Process from "@/components/Process/Process";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>

        <Benefits />
        <Section
          id="process"
          title="Process"
          description="Simple, transparent process."
        >
          <Process />
        </Section>

        <FAQ />

        <Stats />
        
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
