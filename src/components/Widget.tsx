import React from "react";

//import AboutApp from "./../containers/aboutApp.jsx";

export class Widget extends React.Component {
  render() {
    return (
      <section id="about">
        <div className="dark-bg about-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-md-6 about-poster-container">
                <div className="about-poster">
                  <img src="img/about-img.jpeg" />
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <div className="title-content">
                      <h1>Добавь виджет</h1>
                      <hr />
                      <hr />
                    </div>
                    <div>content</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
