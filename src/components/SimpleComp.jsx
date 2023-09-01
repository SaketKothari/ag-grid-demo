const SimpleComp = (params) => {
  const onDollar = () => alert('Dollar ' + params.value);
  const onAt = () => alert('At ' + params.value);

  return (
    <div>
      <button onClick={() => onDollar()}>$</button>
      <button onClick={() => onAt()}>@</button>
      {params.value}
    </div>
  );
};

export default SimpleComp;
