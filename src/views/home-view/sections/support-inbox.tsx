/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import dynamic from "next/dynamic";

const TawkMessengerReact = dynamic(
  () => import("@tawk.to/tawk-messenger-react").then((v) => v.default),
  { ssr: false }
);

type Props = {};

const SupportInbox = (props: Props) => {
  return (
    <TawkMessengerReact
      propertyId={process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID}
      widgetId={process.env.NEXT_PUBLIC_TAWK_WIDGET_ID}
    />
  );
};

export default SupportInbox;
