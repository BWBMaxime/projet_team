const FormLogin = (props) => {

    return (
        <>
        <section className="container py-5 h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong">
                <form className="card-body p-5 text-center shadow" onSubmit={props.handleClickSubmitFormLogin}>
                  <h3 className="mb-5">Sign in</h3>
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typeEmail">Email</label>
                    <input type="text" id="typeEmail" name="typeEmail" className="form-control form-control-lg" />
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typePassword">Password</label>
                    <input type="text" id="typePassword" name="typePassword" className="form-control form-control-lg" />
                  </div>
                  <input className="btn btn-success btn-lg btn-block px-5" type="submit" value="Login"/>
                </form>
              </div>
            </div>
          </div>
        </section>
        </>
    );
}

export default FormLogin;