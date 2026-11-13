const Child2 = (props) => {
  //   console.log(props.o.clg);
  const {name,age,clg}=props.o
  return (
    <>
      <h1>Child2</h1>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{clg}</h1>
    </>
  );
};

export default Child2;
