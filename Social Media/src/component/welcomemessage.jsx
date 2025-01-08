const Welcomemessage = ({ onGetPost }) => {
  return (
    <>
      <div className="col-lg-6 mx-auto mt-2">
        <p className="lead mb-4 text-center fs-2">There are no post</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
            fdprocessedid="2bup3b"
            onClick={onGetPost}
          >
            get post from server
          </button>
        </div>
      </div>
    </>
  );
};

export default Welcomemessage;
