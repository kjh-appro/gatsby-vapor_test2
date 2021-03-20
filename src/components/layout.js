import React, { Component } from "react";
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class Layout extends Component {
  render() {
    const { title, children} = this.props
    const toggler = (
      <div className="toggler">
        <ThemeToggler>{({ theme, toggleTheme }) => (
          <label className="tog">
            <input
              type="checkbox"
              onChange={e =>
                toggleTheme(e.target.checked ? "dark" : "light")
              }
              checked={theme === "dark"}
              className="tog-checkbox"
            />
            {theme === "dark" ? (
              <div className="tog-text">
                Light
              </div>
            ) : (
              <div className="tog-text">
                Dark
              </div>
            )}
          </label>
        )}</ThemeToggler>
      </div>
    )

    return (
      <div className="site-container">
        <div className="header-container">
          <Link
            className="header-title"
            to={`/`}
          >
            {title}
          </Link>
          <div className="nav-container">
            <ul className="header-nav">
              <li id="header-nav-first"><Link to={`/tags`}>Tags</Link></li>
              <li><Link to={`/search`}>Search</Link></li>
              <li>{toggler}</li>
            </ul>
            <ul className="header-link">
              <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div ID="aside-bar" onClick="window.scrollTo(0,0);">
        <li><a href="#">TOP1</a></li>
        <li><a href="#">TOP2</a></li>
          </div>
        <main>{children}</main>
        <div className="footer">
          <div className="dropup">
          <button className="footerbtn">2009</button>
          <div className="dropup-content">
          <a href="#">2009.5.16</a> 
          </div>
          <button className="footerbtn">2011</button>
          <div className="dropup-content">
          <a href="#">2011.6.8-2012.2.28</a> 
          <a href="#">2011.9.5-12.15</a>
          </div>
          <button className="footerbtn">2012</button>
          <div className="dropup-content">
          <a href="#">2012.4.3-10.12</a>  
          <a href="#">2012.9.3-12.13</a> 
          <a href="#">2012.5.14</a> 
          <a href="#">2012.7.28</a> 
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Layout
