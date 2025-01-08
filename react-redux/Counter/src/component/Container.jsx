const Container = ({ children }) => {
  return (
    <div className="card m-auto mt-5 text-center" style={{ width: "70%" }}>
      <div className="card-body">{children}</div>
    </div>
  );
};
export default Container;
