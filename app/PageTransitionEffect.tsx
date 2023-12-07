"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}


const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
  const key = usePathname();
  const variants = {
    hidden: { opacity: 0, y: key === "/projects" ? 200 : -200 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: key === "/projects" ? -200 : 200 },
  };

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={key}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration:1,type: "linear" }}
        style={{overflow:"hidden"}}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionEffect;
