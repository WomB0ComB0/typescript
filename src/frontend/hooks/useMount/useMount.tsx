import { EffectCallback, useEffect } from "react";

const useMount = (cb: EffectCallback) => {
  useEffect(() => {
    cb && cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMount;
