import React from "react";
import { Link as ScrollLink, scrollSpy } from "react-scroll";
import { Link } from "react-router-dom";

// 'react-scroll' have bugs with active class, todo: fix

class Header extends React.Component {
  componentDidMount() {
    scrollSpy.update();
  }
  render() {
    let options = {
      duration: 1000,
      offset: -100,
      smooth: true,
      spy: true,
      activeClass: "nav-active"
    };
    return (
      <div>
        <header id="header">
          <div className="container">
            <div className="logo-container">
              <ScrollLink
                style={{ cursor: "pointer" }}
                to="home"
                {...options}
                activeClass=""
              >
                <span
                  className="logo-img"
                  style={{
                    backgroundSize: "contain",
                    position: "relative",
                    top: "5px"
                  }}
                />
                <span className="logo-text logo-text-part1">Voting</span>
                <span className="logo-text logo-text-part2">Pay</span>
              </ScrollLink>
            </div>
            <nav className="nav-main">
              <ul>
                <li>
                  <ScrollLink to="home" {...options}>
                    Главная
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="service" {...options}>
                    О сервисе
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="contacts" {...options}>
                    Контакты
                  </ScrollLink>
                </li>
                <li>
                  <Link to="/panel">Вход</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
