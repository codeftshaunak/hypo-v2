"use client";

import { useState } from "react";
import { NavLink } from "../type";
import MobileNavContent from "./content";
import OpenBtn from "./open-btn";

type Props = {
  logoText: string;
  links: NavLink[];
};

const MobileNav = (props: Props) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <OpenBtn onOpen={onOpen} />
      <MobileNavContent {...props} onClose={onClose} open={open} />
    </>
  );
};

export default MobileNav;
