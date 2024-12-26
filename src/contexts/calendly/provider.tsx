"use client";
import { useColorMode, useTheme, useToken } from "@chakra-ui/system";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { PopupModal } from "react-calendly";
import { CalendlyContext, ICalendlyContext } from "./context";

type Props = {
  children: ReactNode;
};

const CalendlyProvider = (props: Props) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const { colorMode } = useColorMode();

  const colors = theme.styles.global().body;
  const _bg = colorMode === "dark" ? colors._dark.bg : colors.bg;
  const _color = colorMode === "dark" ? colors._dark.color : colors.color;
  const [bg, color, primary] = useToken("colors", [_bg, _color, "primary.500"]);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const value: ICalendlyContext = useMemo(
    () => ({
      isOpen,
      onClose,
      onOpen,
    }),
    [isOpen]
  );

  // ----------------------------------------------------------------------

  useEffect(() => {
    if (isOpen) {
      document.body.setAttribute("data-scroll-locked", "1");
    } else {
      document.body.removeAttribute("data-scroll-locked");
    }
  }, [isOpen]);

  return (
    <CalendlyContext.Provider value={value}>
      {children}
      {process.env.NEXT_PUBLIC_CALENDLY_LINK && (
        <PopupModal
          url={process.env.NEXT_PUBLIC_CALENDLY_LINK}
          rootElement={document.body}
          open={isOpen}
          onModalClose={onClose}
          pageSettings={{
            backgroundColor: bg,
            textColor: color,
            primaryColor: primary,
          }}
        />
      )}
    </CalendlyContext.Provider>
  );
};

export default CalendlyProvider;
