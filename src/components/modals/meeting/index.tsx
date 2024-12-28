"use client";

import { CALENDLY_LINK } from "@/config/env";
import useCSSVariable from "@/hooks/use-css-var";
import { useQueryRouter } from "@/hooks/use-query-router";
import { hslStringToHex } from "@/utils/color";
import { useSearchParams } from "next/navigation";
import { PopupModal } from "react-calendly";

type Props = {};

const MeetingModal = (props: Props) => {
  const bg = useCSSVariable("--background");
  const color = useCSSVariable("--foreground");
  const primary = useCSSVariable("--primary");

  const searchParams = useSearchParams();
  const queryRouter = useQueryRouter();
  const bookMeeting = searchParams.get("book_meeting");

  const onClose = () => {
    queryRouter.replace({ book_meeting: undefined });
  };

  if (typeof document === "undefined") return null;

  return (
    <PopupModal
      url={CALENDLY_LINK}
      rootElement={document.body}
      open={bookMeeting === "true"}
      onModalClose={onClose}
      pageSettings={{
        backgroundColor: hslStringToHex(bg),
        textColor: hslStringToHex(color),
        primaryColor: hslStringToHex(primary),
      }}
    />
  );
};

export default MeetingModal;
