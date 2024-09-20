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

    const test = (i: number) => {
      const totalHeight = (targets[0].offsetHeight || 0) * (targets.length - i);
      return totalHeight;
    };

    targets.forEach((slide: any, i: number) => {
      ScrollTrigger.create({
        trigger: slide,
        start: "top 10%", // Adjust to your needs
        // end: () => `+=${totalHeight}`,
        end: () => `+=${test(i)}`,
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
