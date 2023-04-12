import React, { useEffect, useState } from "react";
import {
  SIDEBAR_POSITION,
  SIDEBAR_BEHAVIOR,
  LAYOUT,
  THEME,
} from "../../constants";

import useTheme from "../../hooks/useTheme";
import useSidebar from "../../hooks/useSidebar";
import useLayout from "../../hooks/useLayout";
import { useTranslation } from 'react-i18next';


const Landing = () => {
  const { setTheme } = useTheme();
  // const { setPosition, setBehavior } = useSidebar();
  const { setLayout } = useLayout();

  useEffect(() => {
    setTheme(THEME.DEFAULT);
    // setPosition(SIDEBAR_POSITION.LEFT);
    // setBehavior(SIDEBAR_BEHAVIOR.STICKY);
    setLayout(LAYOUT.FLUID);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
<div>this is Home page !!!</div>
    </React.Fragment>
  );
};

export default Landing;
