import React, { Component } from "react";

let style: React.CSSProperties = {
  margin: "0px 0px",
  padding: "5px",
  width: "100%",
  fontSize: "20px",
  textAlign: "center",
  wordWrap: "break-word"
};

let styleSpan: React.CSSProperties = {
  fontWeight: "bold"
};

export class Contacts extends React.Component {
  render() {
    return (
      <section id="contacts">
        <div className="light-bg section-offset-bottom">
          <div className="container">
            <div className="title-content">
              <h1>Контакты</h1>
              <hr />
              <hr />
              <div
                style={{
                  width: "50%",
                  margin: "auto",
                  marginTop: "20px"
                }}
              >
                {" "}
                <p className="service-content-text" style={style}>
                  <span style={styleSpan}>Cлужба поддержки:</span>{" "}
                  karakulov.web.deb@gmail.com
                </p>
                <p className="service-content-text" style={style}>
                  <span style={styleSpan}>Администрация:</span>{" "}
                  karakulov.web.deb@gmail.com
                </p>
                <p className="service-content-text" style={style}>
                  <span style={styleSpan}>Телефон:</span> 8-905-066-99-31
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
