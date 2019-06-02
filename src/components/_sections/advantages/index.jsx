import React from "react";
import { PageHeader } from "../../page-header";
import "./index.scss";

export const Advantages = () => {
  return (
    <section className="advantages">
      <div className="advantages-content">
        <div className="container-wrapper row no-gutters justify-content-center">
          <div className="col">
            <PageHeader className="aling-center">Преимущества</PageHeader>
            <p className="advantages-info">
              Давно выяснено, что при оценке дизайна и композиции читаемый текст
              мешает сосредоточиться. Lorem Ipsum используют потому, что тот
              обеспечивает более или менее стандартное заполнение шаблона, а
              также реальное распределение букв и пробелов в абзацах.
            </p>
            <div className="advantages-list mx-auto">
              <ul className="d-flex m-0 px-0 justify-content-between ">
                <li>
                    <div className="advantages-illustration"><span></span></div>
                    <h3 className="text-center">Преимущество 1</h3>
                    <p className="text-center">Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации</p>
                </li>
                <li>
                    <div className="advantages-illustration"><span></span></div>
                    <h3 className="text-center">Преимущество 2</h3>
                    <p className="text-center">Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации</p>
                </li>
                <li>
                    <div className="advantages-illustration"><span></span></div>
                    <h3 className="text-center">Преимущество 3</h3>
                    <p className="text-center">Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации</p>
                </li>
                <li>
                    <div className="advantages-illustration"><span></span></div>
                    <h3 className="text-center">Преимущество 4</h3>
                    <p className="text-center">Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
