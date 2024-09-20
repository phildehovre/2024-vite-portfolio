import Slide from "./Slide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScreenBlock } from "./ScreenBlock";

const AnimationWrapper2 = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    let targets = gsap.utils.toArray(".slide") as HTMLElement[];
    let start = "slide_ctn-start";
    let end = document.querySelector(".slide_ctn-end") as HTMLElement;

    ScrollTrigger.defaults({
      markers: true,
    });

    targets.forEach((slide: any, i: number) => {
      ScrollTrigger.create({
        trigger: slide,
        start: "top 10%", // Adjust to your needs
        endTrigger: end,
        pin: slide,
        id: `slide-${i}`,
        scrub: 10,
      });
    });
  });

  return (
    <div className="screenblock">
      <div className="slide_ctn-start">
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </div>
      <div className="slide_ctn-end"></div>
      <ScreenBlock gsapIndex={{ index: -1, length: 0 }} bgColor="lavender" />
    </div>
  );
};

export default AnimationWrapper2;
