type Props = {
  text: string;
};

const Logo = (props: Props) => {
  const { text } = props;
  return <h1 className="text-lg font-bold">{text}</h1>;
};

export default Logo;
