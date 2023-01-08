import React from 'react'
// import book from './image/book.jpg'

const Sidebar = () => {
  return (
    <div className='row'>
        <div className="col-2 Sidebar navbar-brand">
        {/* <div className="rvm-v1-sidebar-logo-ctnr center-all">This is umar</div> */}
        <img src="https://cdn.pegasus.imarticus.org/images/imarticus-new-logo.svg" className='rrr'></img>
        <ul className='rvm-v1-sidebar-item-ctnr pll'>
          <li className='rvm-v1-sidebar-item active center-all'><div className='width-100'>Course</div></li>
          <li className='rvm-v1-sidebar-item active center-all'><div className='width-100'>Discussion</div></li>
        </ul>
        <div className='side-bar-freshdesk-container ll'>
          <p className='side-bar-freshdesk-heading fc'>Facing Problems</p>
          {/* <button className='class="side-bar-freshdesk-button'><button type="button" class="btn btn-success">Get Help</button></button> */}
          <button type="button" class="btn btn-success">Get Help</button>
        </div>
        {/* <span className='sb ml-10 rvm-v1-main-nav-sidebar-otr-ctnr'>This is sidebar</span> */}
        </div>
        <div className="col-10 ">
          {/* <span>All courses  </span><span>Introduction to Machine Learning</span> */}
          <div aria-label="breadcrumb brd">
            <div className='rvm-v1-header-brdsc-ctnr breadCrumbs-row ng-scope'>
          <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">All courses</a></li>
          <li className="breadcrumb-item active" aria-current="page">Introduction to Machine Learning</li>
          </ol>
          </div>
        </div>
        <div className="row">
  <div className='col-2'><img src='https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?format=jpg&width=960 ' className=" imm card" alt="..."/></div>
  <div className='col-3'>Intro to ml</div>
  {/* Navbar 1 */}
  <div className='row'>
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">1. Introduction to Machine Learning</a>
    <div className="dropdown">
  <a className="btn btn-secondary btn-sm" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    +
  </a>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" href="#">Action</a></li>
  </ul>
</div>
  </div>
</nav></div>
{/* Navbar 2 */}
<div className='row'>
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">2. Concepts of Machine Learning</a>
    <div className="dropdown">
  <a className="btn btn-secondary btn-sm" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    +
  </a>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" href="#">Action</a></li>
  </ul>
</div>
  </div>
</nav></div>
 {/* Navbar 1 */}
 <div className='row'>
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">3. Applications of Machine Learning</a>
    <div className="dropdown">
  <a className="btn btn-secondary btn-sm" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    +
  </a>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" href="#">Action</a></li>
  </ul>
</div>
  </div>
</nav></div>
 {/* Navbar 1 */}
 <div className='row'>
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">4. Neural Network and Deep learning</a>
    <div className="dropdown">
  <a className="btn btn-secondary btn-sm" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    +
  </a>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" href="#">Action</a></li>
  </ul>
</div>
  </div>
</nav></div>


</div>
        </div>
    </div>

  )
}

export default Sidebar