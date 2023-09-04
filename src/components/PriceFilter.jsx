import { forwardRef, useImperativeHandle } from 'react';

export default forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      isFilterActive() {
        return false;
      },
      doesFilterPass(params) {
        return false;
      },
      getModel() {
        return undefined;
      },
      setModal() {},
    };
  });

  return <>Hello World!!!</>;
});
