import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
          <section className="footer-inner">
            <h2>footer-logo</h2>
          </section>
          <ul className="foot-menu">
            <li className="foot-menu__item">
              <a href="/">회사소개</a>
            </li>
            <li className="foot-menu__item">
              <a href="/">제휴광고문의</a>
            </li>
            <li className="foot-menu__item">
              <a href="/">인재채용</a>
            </li>
            <li className="foot-menu__item">
              <a href="/">이용약관</a>
            </li>
            <li className="foot-menu__item">
              <a href="/">개인정보처리방침</a>
            </li>
          </ul>
          <div className="foot-address">
            <address>(주)MOONGROUND<i></i>개발자: moong<i></i>주소: 안알랴줌<i></i>메일: <a href="mailto:moong@dot.com">moong@dot.com</a></address>
            <p>(주)MOONGROUND는 아무 책임도 지지않으며 모든 의무와 책임은 너에게 있습니다.</p>
          </div>
        </footer>
    );
  }
}

Footer.propTypes = {};

export default Footer;