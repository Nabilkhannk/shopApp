import React, { useState } from 'react';

const Navbar = () => {

    const [show,setShow] = useState(false);

  return( 
        <>  
        <section className='navbar-bg'>
        <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="#">Shop List App</a>
    <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
      <span className="navbar-toggler-icon btn-primary"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a href="#" className="nav-link active">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Contact Us</a>
        </li>
      </ul>
      <form className="d-flex">
         <button className="btn btn1-style" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>
</section>
        </>
  )
};

export default Navbar;
