import React from "react";
import { Link as ScrollLink } from "react-scroll";

class SliderItem1 extends React.Component {
  render() {
    let scrollOptions = {
      duration: 1000,
      offset: -100,
      smooth: true,
      spy: true
    };

    let sliderItemBg = {
      background:
        'linear-gradient(to bottom, rgba(30, 30, 30, .5) 0%, rgba(30, 30, 30, .5) 100%), url("./img/home-bg1.jpg") no-repeat center',
      backgroundSize: "cover"
    };

    return (
      <li className="slider-item" style={sliderItemBg}>
        <div className="slider-content">
          <div className="container slider-content-container">
            <h1 className="slider-text1">
              Создавай
              <span className="text-highlight"> Платные Голосования</span>
            </h1>
            <h2 className="slider-text2">Больше интерактива</h2>
            <p className="slider-text3">Дай подписчикам возможности</p>
            <div className="slider-btn-container">
              <ScrollLink className="btn home-btn" to="work" {...scrollOptions}>
                Войти и Начать
              </ScrollLink>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default SliderItem1;
