import React from "react";
import logo from "../../../assets/images/logo-with-text.svg";

export class Promo extends React.Component {
  onScroll = e => {
    let finaleScrollPoint = 450;
    if (window.pageYOffset > finaleScrollPoint) return;
    let startScrollPoint = 0;
    let startScaleValue = 1;
    let fineleScaleValue = 0;
    let scrollDiff = Math.abs(startScrollPoint - finaleScrollPoint);
    let scaleDiff = Math.abs(startScaleValue - fineleScaleValue);

    let startTransformValue = 0;
    let finaleTransformValue = 100;
    let transformDiff = Math.abs(startTransformValue - finaleTransformValue);

    let startOpacityValue = 1;
    let finaleOpacityValue = 0.6;
    let opacityDiff = Math.abs(startOpacityValue - finaleOpacityValue);

    let transformFactor =
      Math.round((transformDiff / scrollDiff) * 10000) / 10000;
    let scaleFactor = Math.round((scaleDiff / scrollDiff) * 10000) / 10000;
    let opacityFactor = Math.round((opacityDiff / scrollDiff) * 10000) / 10000;

    let currentScaleValue = 1 - window.pageYOffset * scaleFactor;
    let currentTransformValue = window.pageYOffset * transformFactor;
    let currentOpacityValue = 1 - window.pageYOffset * opacityFactor;

    this.logo.style.transform = `translate(0,${currentTransformValue}px) scale(${currentScaleValue})`;
    this.logo.style.opacity = `${currentOpacityValue}`;
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.onScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.onScroll);
  };
  render() {
    return (
      <section className="row promo-section no-gutters">
        {/* <Image /> */}
        <div className="promo-content px-0">
          <div className="promo-logo text-center" ref={node => (this.logo = node)}>
            <img src={logo} />
          </div>

            <p className="promo-text col-12 text-center px-0">
              Защитим от штрафов и повысим эффективность бизнеса за счет
              инновационных технологий в области аутсорсинга и “Compliance”
              контроля
            </p>

        </div>
      </section>
    );
  }
}
