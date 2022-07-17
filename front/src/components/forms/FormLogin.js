const FormLogin = (props) => {

  return (
    <>


      <section className="container py-5 h-100 ">
        <div className="row d-flex justify-content-center  h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong">
              <form className="card-body p-5 text-center shadow" onSubmit={props.handleClickSubmitFormLogin}>
                <h3 className="mb-5">Sign in</h3>
                <div className="form-outline mb-4">
                  <input type="text" id="typeEmail" name="typeEmail" className="form-control form-control-lg" placeholder="Email"/>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="typePassword" name="typePassword" className="form-control form-control-lg" placeholder="Password" />
                </div>
                <div className="row justify-content-center">
                  <a className="mb-3" href="#">Mot de passe oublié</a>
                  <button className="btn btn-success btn-lg w-25 text-center" type="submit" >Login</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FormLogin;