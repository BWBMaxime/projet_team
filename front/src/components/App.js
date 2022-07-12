import "../css/App.css";
function App() {
  return (
    <>
      <section className=" container">
        <div class="m-5 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Login</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="email" />
          </div>
        </div>
        <div class="m-5 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
        </div>
      </section>

    </>

  );
}

export default App;