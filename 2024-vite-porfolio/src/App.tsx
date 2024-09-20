import "./App.css";
import AnimationWrapper from "./components/AnimationWrapper";
import { ScreenBlock } from "./components/ScreenBlock";

function App() {
  const slide = [1, 2, 3, 4];

  return (
    <>
      <ScreenBlock gsapIndex={{ index: -1, length: 0 }} bgColor="lavender" />
      <AnimationWrapper animationElements={slide} />
      <ScreenBlock gsapIndex={{ index: -1, length: 0 }} bgColor="lavender" />
      <ScreenBlock gsapIndex={{ index: -1, length: 0 }} bgColor="lavender" />
      {/* <Backdrop /> */}
    </>
  );
}

export default App;
