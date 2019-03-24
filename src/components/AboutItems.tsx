import React from "react";

export class AboutItem extends React.Component {
  render() {
    return (
      <div className="service-content clearfix">
        <div className="service-content-img">
          <img src="/img/about.jpg" />
        </div>
        <p className="service-content-text">
          VotingPay - это удобный, легкий и эффективный инструмент для
          взаимодействия с аудиторией и монетизации. Cозданный специально для
          сообществ и блогеров он оказался очень эффективен. Создавай платные и
          бесплатные голосования в несколько кликов, узнавай мнение аудитории и
          получай доход!
        </p>
      </div>
    );
  }
}

export class AboutItem_voting extends React.Component {
  render() {
    return (
      <div className="service-content clearfix">
        <div className="service-content-img">
          <img src="/img/about_voting.jpg" />
        </div>
        <p className="service-content-text">
          Голосования только набирают свою популярность. Проводить их с помощью
          нашего сервиса очень просто, по любым поводам и для разных целей. Это
          удобный инструмент для блогеров, сообществ и владельцев бизнеса,
          которым необходимо знать о потребностях своей аудитории. Опросы и
          голосования это действительно мощный и уникальный инструмент. Нет
          необходимости пытаться угадать что нужно аудитории, просто создавайте
          любые голосования и опросы в несколько кликов при помощи нашего
          сервиса. Опросы покажут мнение большинства, а так же принесут доход.
        </p>
      </div>
    );
  }
}

export class AboutItem_how_use extends React.Component {
  render() {
    return (
      <div className="service-content clearfix">
        <div className="service-content-img">
          <img src="/img/How-to-use.jpg" />
        </div>
        <p className="service-content-text">
          Создавать голосование при помощи нашего сервиса действительно очень
          просто, В личном кабинете голосования создаются с помощью интуитивно
          понятного интерфейса и могут гибко настраиваться. Все что вам
          останется это поделится ссылкой на голосование с вашей
          аудиторией,результат не заставит вас долго ждать.
        </p>
      </div>
    );
  }
}

export class AboutItem_get_money extends React.Component {
  render() {
    return (
      <div className="service-content clearfix">
        <div className="service-content-img">
          <img src="/img/getMoney.jpg" />
        </div>
        <p className="service-content-text">
          При проведении платных голосований деньги сразу зачисляются на ваш
          внутренний баланс в нашей системе. Снятие средств можно сделать в
          любое время (Все платежи обрабатываются нашими банками партнерами
          мгновенно, но выплаты могут идти до 24 часов в зависимости от
          платежной системы выбранной для вывода накопленных средств) на
          реквизиты заполненные вами в личном кабинете. При выводе на все
          платежные системы комиссия сервиса - 0% ( кроме стандартных комиссий
          за конвертацию между различными платежными системами, это касается
          Яндекса 0,5%, Вебмани 0,8% и карт 3 % )
        </p>
      </div>
    );
  }
}
