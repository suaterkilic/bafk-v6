import React, { Fragment, useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Overlay from "../components/ui/Overlay";
import SearchModal from "../components/ui/SearchModal";
import CartModal from "../components/ui/CartModal";
import { array } from "prop-types";

function Layout({ children }) {

  const closeLoginModal = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.remove("zf-has-scroll", "is-reveal-open");

    const headLoginModal = document.getElementById("head_loginModal");
    headLoginModal.classList.remove("modalFadeIn");
    headLoginModal.classList.add("animated", "fadeOut");

    setTimeout(() => {
      headLoginModal.style.display = "none";
      const accountModalOverlay = document.getElementById(
        "accountModalOverlay"
      );
      accountModalOverlay.style.display = "none";

      headLoginModal.classList.remove("animated", "fadeOut");
    }, 700);

    document.getElementById("myBody").classList.remove("photoswipe-blur");

    if(localStorage.getItem('isLoginModal') !== null || localStorage.getItem('isLoginModal') !== ''){
      localStorage.removeItem('isLoginModal');
    }

  };

  const closeSizeTable = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.remove("zf-has-scroll", "is-reveal-open");

    let myRevealBefore = Array.from(document.getElementsByClassName('myReveal'))
    myRevealBefore.map(el => el.classList.add("animated", "fadeOut"))

    setTimeout(() => {
      const sizeGuideOverlay = document.getElementById(
        "sizeGuideOverlay"
      );
      sizeGuideOverlay.style.display = "none";

      let myRevealAfter = Array.from(document.getElementsByClassName('myReveal'))
      myRevealAfter.map(el => el.classList.remove("animated", "fadeOut"))

    }, 700);

    document.getElementById("myBody").classList.remove("photoswipe-blur");
  }

  const loginModalHideEvent = (e) => {
    const accountModalOverlay = document.getElementById(
      "accountModalOverlay"
    );

    if (e.target === accountModalOverlay) {
      if (localStorage.getItem('isLoginModal') !== null || localStorage.getItem('isLoginModal') !== '') {
        closeLoginModal()
      }
    }
  }

  useEffect(() => {
    window.addEventListener("click", loginModalHideEvent)
  }, [])

  return (
    <Fragment>
      <div className="bb-container" id="bb-container">
        <Header/>
        <div className="offcanvas_container">
          <div className="offcanvas_main_content">
            {children}
            <Footer />
          </div>
          <Overlay />
          <SearchModal />
          <CartModal />
        </div>
      </div>
      <div id="sizeGuideOverlay" className="sizeTableReveal reveal-overlay" style={{ display: "none" }}>
        <div
          className="myReveal modalFadeIn reveal sizeGuideTablePosition"
          id="sizeGuideModal"
          data-reveal
          data-close-on-click="true"
          data-animation-in="fade-in"
          data-animation-out="fade-out"
          role="dialog"
          aria-hidden="true"
          data-yeti-box="sizeGuideModal"
          data-resize="sizeGuideModal"
          data-n="sk6te9-n"
          tabIndex={-1}
          data-events="resize"
          style={{ display: 'block', top: '15%'}}
        >
          <div className="nano has-scrollbar">
            <div
              className="nano-content"
              tabIndex={0}
              style={{ right: "-19px" }}
            >
              <h3 className="barberry-sizeguide-title">Tişört Beden Tablosu</h3>
              <div className="barberry-sizeguide-content">

              </div>
              
              <div className="table-scroll">
                <table className="barberry-sizeguide-table">
                  <tbody>
                    <tr>
                      <td>Size</td>
                      <td>UK</td>
                      <td>US</td>
                      <td>EU</td>
                      <td>Japan</td>
                    </tr>
                    <tr>
                      <td>XS</td>
                      <td>6 - 8</td>
                      <td>4</td>
                      <td>34</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>S</td>
                      <td>8 -10</td>
                      <td>6</td>
                      <td>36</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>10 - 12</td>
                      <td>8</td>
                      <td>38</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <td>L</td>
                      <td>12 - 14</td>
                      <td>10</td>
                      <td>40</td>
                      <td>13</td>
                    </tr>
                    <tr>
                      <td>XL</td>
                      <td>14 - 16</td>
                      <td>12</td>
                      <td>42</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td>XXL</td>
                      <td>16 - 28</td>
                      <td>14</td>
                      <td>44</td>
                      <td>17</td>
                    </tr>
                    {/*  CSS YÜKSEKLİK AYARLANACAK */}
                  </tbody>
                </table>
              </div>
              <div onClick={() => closeSizeTable()} className="close-icon" data-close aria-label="Close modal">
                <span className="close-icon_top" />
                <span className="close-icon_bottom" />
              </div>
            </div>
            <div className="nano-pane" style={{ display: "none" }}>
              <div
                className="nano-slider"
                style={{ height: "20px", transform: "translate(0px, 0px)" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        id="accountModalOverlay"
        className="reveal-overlay"
        style={{ display: "none" }}
      >
        <div
          className="reveal"
          id="head_loginModal"
          data-reveal
          data-close-on-click="true"
          data-animation-in="fade-in"
          data-animation-out="fade-out"
          role="dialog"
          aria-hidden="true"
          data-yeti-box="head_loginModal"
          data-resize="head_loginModal"
          data-n="j14pjq-n"
          style={{ display: "none", top: '3%'}}
          tabIndex={-1}
        >
          <h3 className="login-title">Giriş Yap</h3>
          <form
            method="post"
            className="login woocommerce-form woocommerce-form-login "
            action="https://bafk.com.tr/hesabim/"
          >
            <p className="form-row form-row-first">
              <label htmlFor="username">
                Kullanıcı adı veya e-posta adresi&nbsp;
                <span className="required">*</span>
              </label>
              <input
                type="text"
                className="woocommerce-Input woocommerce-Input--text input-text"
                name="username"
                id="username"
                autoComplete="username"
                defaultValue
              />
            </p>
            <p className="form-row form-row-last">
              <label htmlFor="password">
                Parola&nbsp;<span className="required">*</span>
              </label>
              <span className="password-input">
                <input
                  className="woocommerce-Input woocommerce-Input--text input-text"
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                />
                <span className="show-password-input" />
              </span>
            </p>
            <div className="clear" />
            <p className="form-row form-group login-form-footer">
              <label className="woocommerce-form__label woocommerce-form__label-for-checkbox inline">
                <input
                  className="woocommerce-form__input woocommerce-form__input-checkbox"
                  name="rememberme"
                  type="checkbox"
                  id="rememberme"
                  defaultValue="forever"
                />{" "}
                <span>Beni hatırla</span>
              </label>
              <span className="woocommerce-LostPassword lost_password">
                <a href="https://bafk.com.tr/hesabim/lost-password/">
                  Parolanızı mı unuttunuz?
                </a>
              </span>
            </p>
            <p className="form-actions">
              <input
                type="hidden"
                id="woocommerce-login-nonce"
                name="woocommerce-login-nonce"
                defaultValue="b9501e72fd"
              />
              <input
                type="hidden"
                name="_wp_http_referer"
                defaultValue="/product/basis-zip-through-hooide-grey/"
              />
              <button
                type="submit"
                className="woocommerce-Button button"
                name="login"
                value="Giriş Yap"
              >
                Giriş Yap
              </button>
            </p>
          </form>
          <div className="create-account-qs">
            <div className="bb-login-form-divider">
              <span>Or</span>
            </div>
            <a
              className="button btn--border"
              href="https://bafk.com.tr/hesabim/#register"
            >
              Create an Account
            </a>{" "}
          </div>
          <div
            onClick={() => closeLoginModal()}
            className="close-icon"
            data-close
            aria-label="Close modal"
          >
            <span className="close-icon_top" />
            <span className="close-icon_bottom" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Layout;
