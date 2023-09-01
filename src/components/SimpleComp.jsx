const SimpleComp = (params) => {
  const onDollar = () => alert('Dollar ' + params.value);
  const onAt = () => alert('At ' + params.value);

  return (
    <div>
      <button onClick={() => onAt()}>{params.buttonText}</button>
      {params.value}
    </div>
  );
};

export default SimpleComp;
