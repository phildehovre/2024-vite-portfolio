import Slide from "./Slide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScreenBlock } from "./ScreenBlock";

const AnimationWrapper = (props: any) => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const { animationElements } = props;

  useGSAP(() => {
    let targets = gsap.utils.toArray(".slide") as HTMLElement[];

    const totalHeight = targets.length * (targets[0].offsetHeight || 0);

    targets.forEach((slide: any) => {
      ScrollTrigger.create({
        trigger: slide,
        start: "top 10%", // Adjust to your needs
        end: () => `+=${totalHeight}`,
        pin: true,
        scrub: true,
        markers: true,
      });
    });
  });

  return (
    <div className="screenblock">
      <div className="slide_ctn">
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </div>
      <ScreenBlock gsapIndex={{ index: -1, length: 0 }} bgColor="lavender" />
    </div>
  );
};

export default AnimationWrapper;
