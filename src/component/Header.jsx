import React from 'react'

const Header = () => {
  return (
    <div>

          <nav className="navbar navbar-light bg-light light">
              <a className="navbar-brand  brand text-bold">Green<span>Earth</span> </a>
              <ul className="navbar-nav d-flex flex-row">
                  <li clasNames="nav-item active items">
                      <h6 className="text-button">Sign In</h6>
                  </li>
                  <li className="nav-item active items">
                      <button className="button">Sign Up</button>
                  </li>
              </ul>
          </nav>
    </div>
  )
}

export default Header