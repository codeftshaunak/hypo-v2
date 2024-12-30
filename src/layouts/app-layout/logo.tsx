import Link from "next/link";

type Props = {
  text: string;
};

const Logo = (props: Props) => {
  const { text } = props;
  return (
    <Link href={"/"}>
      <h1 className="text-lg font-bold">{text}</h1>
    </Link>
  );
};

export default Logo;
