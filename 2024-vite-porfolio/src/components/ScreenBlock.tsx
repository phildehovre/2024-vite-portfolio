import "./ScreenBlock.scss";

export const ScreenBlock = ({
  bgColor,
  gsapIndex,
}: {
  bgColor: string;
  gsapIndex: { index: number; length: number };
}) => {
  const styles = {
    backgroundColor: bgColor,
  };

  let indexClass: number | string;

  switch (gsapIndex.index) {
    case 0:
      indexClass = "start";
      break;
    case gsapIndex.length - 1:
      indexClass = "end";
      break;
    default:
      indexClass = gsapIndex.index;
  }

  return <div className={`screenblock ${indexClass} `} style={styles}></div>;
};
