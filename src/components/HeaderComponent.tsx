import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
        <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <a className="navbar-brand" href="#">Customer Spike</a>
            {/* <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to='/employees'>Employees</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/departments'>Departments</NavLink>
                </li>
              </ul>
            </div> */}
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent
