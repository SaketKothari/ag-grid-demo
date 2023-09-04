import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

export default forwardRef((props, ref) => {
  const [filterState, setFilterState] = useState('off');

  useImperativeHandle(ref, () => {
    return {
      isFilterActive() {
        return filterState == 'on';
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

  useEffect(() => {
    props.filterChangedCallback();
  }, [filterState]);

  const onListener = useCallback(() => setFilterState('on'));
  const offListener = useCallback(() => setFilterState('off'));

  return (
    <>
      <div>Price filter</div>
      <label>
        Filter Off
        <input
          type="radio"
          name="rbPriceFilter"
          onChange={offListener}
          checked={filterState == 'off'}
        />
      </label>
      <label>
        Filter On
        <input
          type="radio"
          name="rbPriceFilter"
          onChange={onListener}
          checked={filterState == 'on'}
        />
      </label>
    </>
  );
});
