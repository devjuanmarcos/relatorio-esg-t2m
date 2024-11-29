interface DividingLineInterface {
  lineColor?: string;
}
export const DividingLine: React.FC<DividingLineInterface> = ({ lineColor }) => {
  return (
    <div
      className={`w-full max-w-[80vw] md:max-w-[32.5rem] h-1 ${lineColor || "bg-primary"} rounded-ss-[.75rem] mx-auto overflow-hidden`}
    />
  );
};
