import { ScreenBlock } from "../components/ScreenBlock";

export const renderBackdrop = (length: number) => {
  let array: any[] = [];
  let count: number = 0;
  while (count <= length) {
    array.push(count);
    count++;
  }
  return array.map((_, i) => {
    return (
      <ScreenBlock
        bgColor={i % 2 == 0 ? "lavender" : "salmon"}
        gsapIndex={{ index: i, length: array.length }}
      />
    );
  });
};
