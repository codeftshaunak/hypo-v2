type Props = {};

const BgGradient = (props: Props) => {
  return (
    <div className="bg-hero absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-blend-saturation opacity-[0.3] -z-[1]">
      <div className="bg-hero-child absolute inset-0 z-[1]"></div>
    </div>
  );
};

export default BgGradient;
