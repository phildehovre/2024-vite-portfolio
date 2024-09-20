import { ScreenBlock } from "../components/ScreenBlock";

export const renderBackdrop = (length: number) => {
  let array: any[] = [];
  let count: number = 0;
  while (count <= length) {
    array.push(count);
    count++;
  }

  const colors = ["lavender", "salmon"];

  return array.map((_, i) => {
    return (
      <ScreenBlock
        bgColor={colors[i % 2]}
        gsapIndex={{ index: i, length: array.length }}
      />
    );
  });
};
