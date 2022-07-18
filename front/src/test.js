{!is_logged ? (
    <FormLogin handleClickSubmitFormLogin={handleClickSubmitFormLogin} />
  ) : (
  <>
  <div className="container-fluid">
      <CarNCoContext.Provider value={handleContext}> 
      <Header user={user}  />
      {(() => {
        switch (user) {
          case "patron":
            return <TableDevis />
          case "admin":
            return <div>Admin</div>
          case "commercial":
            return <Table />
        }
      })()}
       </CarNCoContext.Provider> 
      <Footer />
    </div>
  </>
    
  )}

  {props.user === "commercial" ? (    
    <ul className="navbar-nav">
      <li className="nav-item m-4 h5" >
        <a className="nav-link" href="#">Devis</a>
      </li>
      <li className="nav-item m-4 h5">
        <a className="nav-link" href="#">Liste Client</a>
      </li>
      <li className="nav-item m-4 h5">
        <a className="nav-link" href="#">Stock Véhicule</a>
      </li>
      <li className="nav-item m-4 h5">
        <a className="nav-link" href="#">Validation Devis</a>
      </li>
    </ul>       
  )
   : (
    <div> header magsinier </div>
  )
}
 