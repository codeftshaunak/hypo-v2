/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

"use client";

import dynamic from "next/dynamic";

const TawkMessengerReact = dynamic(
  () => import("@tawk.to/tawk-messenger-react"),
  { ssr: false }
);

const TawkChat = () => {
  return (
    <TawkMessengerReact
      propertyId={process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID}
      widgetId={process.env.NEXT_PUBLIC_TAWK_WIDGET_ID}
    />
  );
};

export default TawkChat;
