import { RefObject, useCallback, useLayoutEffect, useState } from "react";

import type { ElementRect } from "./useElementRect.type";

const useElementRect = <T extends HTMLElement>(ref?: RefObject<T>): ElementRect => {
  const getRect = useCallback(<T extends HTMLElement>(element?: T) => {
    let rect: ElementRect = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      width: 0,
      height: 0,
    };

    if (element) {
      rect = element.getBoundingClientRect();
    }

    return rect;
  }, []);

  const [rect, setRect] = useState<ElementRect>(ref && ref.current ? getRect(ref.current) : getRect());

  const handleResize = useCallback(() => {
    if (!ref?.current) {
      return;
    }

    setRect(getRect(ref.current));
  }, [ref, getRect]);

  useLayoutEffect(() => {
    const element = ref?.current;
    if (!element) {
      return;
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref, handleResize]);

  return rect;
};

export default useElementRect;
