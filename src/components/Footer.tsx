import React from "react";
import { Link as ScrollLink } from "react-scroll";

export class Footer extends React.Component {
  render() {
    let scrollOptions = {
      duration: 1000,
      offset: -100,
      smooth: true,
      spy: true
    };
    return (
      <footer>
        <div className="dark-bg-tone">
          <div
            className="container footer-container"
            style={{
              height: "175px"
            }}
          >
            <p className="footer-text">
              Copyright 2019 | Voting
              <a className="text-highlight" href="javascript:void(0)">
                Pay
              </a>{" "}
            </p>
            <ScrollLink className="footer-btn" to="home" {...scrollOptions}>
              <i className="fa fa-angle-up" />
            </ScrollLink>
          </div>
        </div>
      </footer>
    );
  }
}
