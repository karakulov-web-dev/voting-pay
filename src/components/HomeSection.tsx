import React from "react";

import SliderApp from "./../containers/sliderApp";

class HomeSection extends React.Component {
  render() {
    return (
      <section id="home">
        <SliderApp />
        <ul className="home-options clearfix">
          <li className="home-options-item">
            <div className="option-item" />
            <p className="option-text">Создавай голосования</p>
          </li>
          <li className="home-options-item">
            <div className="option-item" />
            <h2 className="option-text">Предлагай подписчикам выбор</h2>
          </li>
          <li className="home-options-item">
            <div className="option-item" />
            <h2 className="option-text">Подписчики голосуют</h2>
          </li>
          <li className="home-options-item">
            <div className="option-item" />
            <h2 className="option-text">Получай финансовую поддержку</h2>
          </li>
        </ul>
      </section>
    );
  }
}

export default HomeSection;
