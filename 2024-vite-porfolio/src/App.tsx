import "./App.css";
import AnimationWrapper from "./components/AnimationWrapper1";
import { ScreenBlock } from "./components/ScreenBlock";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

function App() {
  const slide = [1, 2, 3, 4];
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
  return (
    <>
      <ScreenBlock gsapIndex={{ index: -1, length: 0 }} bgColor="lavender" />
      <AnimationWrapper animationElements={slide} />
      {/* <AnimationWrapper2 /> */}
      <ScreenBlock gsapIndex={{ index: -1, length: 0 }} bgColor="lavender" />
      <ScreenBlock gsapIndex={{ index: -1, length: 0 }} bgColor="lavender" />
    </>
  );
}

export default App;
