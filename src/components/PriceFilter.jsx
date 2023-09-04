import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

export default forwardRef((props, ref) => {
  //   console.log(props);
  const [filterState, setFilterState] = useState('off');

  useImperativeHandle(ref, () => {
    return {
      isFilterActive() {
        return filterState != 'off';
      },
      doesFilterPass(params) {
        // console.log(params);
        const field = props.colDef.field;
        return params.data[field] == filterState;
      },
      getModel() {
        return undefined;
      },
      setModal() {},
    };
  });

  useEffect(() => {
    props.filterChangedCallback();
  }, [filterState]);

  return (
    <>
      <div>{props.title}</div>
      <label>
        Filter Off
        <input
          type="radio"
          name="rbPriceFilter"
          onChange={() => setFilterState('off')}
          checked={filterState == 'off'}
        />
      </label>
      <label>
        32000
        <input
          type="radio"
          name="rbPriceFilter"
          onChange={() => setFilterState(32000)}
          checked={filterState == '32000'}
        />
      </label>
    </>
  );
});
