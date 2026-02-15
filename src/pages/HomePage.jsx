import Hero from "../components/Hero";
import WhyIValueYou from "../components/WhyIValueYou";
import Memories from "../components/Memories";
import Letter from "../components/Letter";
import Closing from "../components/Closing";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyIValueYou />
      <Memories />
      <Letter />
      <Closing />
    </main>
  );
}
