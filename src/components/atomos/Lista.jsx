const Lista = ({itmes, ...props}) => {
  return (
    <>
      <ul {...props}>
        {itmes.map((item, index) => (
          <li className="hover:text-slate-400 cursor-pointer flex-wrap" key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};
export default Lista;
