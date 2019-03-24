import React from "react";
import { AboutSection } from "./AboutSection";
import { Link } from "react-router-dom";

export class About extends React.Component {
  constructor(props: any) {
    super(props);

    this.linkClick = this.linkClick.bind(this);
  }

  linkClick(num: any) {
    let activeLink = document.querySelector(".service-nav-item.active");
    if (activeLink) {
      activeLink.classList.remove("active");
    }

    document.querySelectorAll(".service-nav-item")[num].classList.add("active");
  }

  render() {
    return (
      <section id="service">
        <div className="light-bg section-offset-bottom">
          <div className="container">
            <div className="title-content">
              <h1>О сервисе</h1>
              <hr />
              <hr />
            </div>
            <div className="service-nav-container">
              <ul className="service-nav">
                <li
                  className="service-nav-item active"
                  onClick={() => this.linkClick(0)}
                >
                  <Link to="/about">
                    <span>О сервисе</span>
                  </Link>
                </li>
                <li
                  className="service-nav-item"
                  onClick={() => this.linkClick(1)}
                >
                  <Link to="/about/voting">
                    <span>Голосования</span>
                  </Link>
                </li>
                <li
                  className="service-nav-item"
                  onClick={() => this.linkClick(2)}
                >
                  <Link to="/about/how-use">
                    <span>Как пользоваться</span>
                  </Link>
                </li>
                <li
                  className="service-nav-item"
                  onClick={() => this.linkClick(3)}
                >
                  <Link to="/about/get-money">
                    <span>Снятие средств</span>
                  </Link>
                </li>
              </ul>
            </div>
            <AboutSection />
          </div>
        </div>
      </section>
    );
  }
}
