const Child3 = (props) => {
//   console.log(props.a[1]);
const {a}=props
  return (
    <>
      <h1>Child3</h1>
      <h1>{a[0]}</h1>
      <h1>{a[1]}</h1>
      <h1>{a[2]}</h1>
      <h1>{a[3]}</h1>
    </>
  );
};

export default Child3;
