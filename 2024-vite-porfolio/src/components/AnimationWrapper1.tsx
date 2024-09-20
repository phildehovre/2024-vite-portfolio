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

    const calcHeight = (i: number) => {
      const totalHeight = (targets[0].offsetHeight || 0) * (targets.length - i);
      return totalHeight;
    };

    const tl = gsap.timeline({});
    targets.forEach((slide: any, i: number) => {
      ScrollTrigger.create({
        trigger: slide,
        start: "top 10%", // Adjust to your needs
        end: () => `+=${calcHeight(i)}`,
        pin: true,
        scrub: 5,
        markers: true,
        snap: {
          duration: 2,
          ease: "power1.inOut",
        },
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
