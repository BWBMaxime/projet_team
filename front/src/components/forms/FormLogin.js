import {  useContext } from "react";
import {CarNCoContext} from "../App";

const FormLogin = () => {
  const onClickSubmitLogin = useContext(CarNCoContext).handleClickSubmitLogin;
  return (
    <>
      <section className="container py-5 h-100 ">
        <div className="row d-flex justify-content-center  h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong">
              <form className="card-body p-5 text-center shadow" onSubmit={(event)=>{onClickSubmitLogin(event)}}>
                <h3 className="mb-5">Sign in</h3>
                <div className="form-outline mb-4">
                  <input type="email" id="login" name="login"  className="form-control form-control-lg" placeholder="Email" required />
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="password" name="password"  className="form-control form-control-lg" placeholder="Password" required/>
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