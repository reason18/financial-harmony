import React from "react";
import { PageHeader } from "../../page-header";
import "./index.scss";

export const OutClients = () => {
  return (
    <section className="our-clients">
      <div className="our-clients-content">
        <div className="container-wrapper row no-gutters justify-content-center">
          <div className="col">
            <PageHeader className="aling-center">Наши клиенты</PageHeader>
            <p className="our-clients-info">
              Давно выяснено, что при оценке дизайна и композиции читаемый текст
              мешает сосредоточиться. Lorem Ipsum используют потому, что тот
              обеспечивает более или менее стандартное заполнение шаблона, а
              также реальное распределение букв и пробелов в абзацах.
            </p>
            <div className="our-clients-list mx-auto">
              <ul className="d-flex m-0 px-0 justify-content-between flex-wrap">
                <li>
                    <div className="our-client-illustration"><span></span></div>
                    <h3>it-master</h3>
                </li>
                <li>
                    <div className="our-client-illustration"><span></span></div>
                    <h3>agro-man</h3>
                </li>
                <li>
                    <div className="our-client-illustration"><span></span></div>
                    <h3>agro-man agro-man</h3>
                </li>
                <li>
                    <div className="our-client-illustration"><span></span></div>
                    <h3>agro-man</h3>
                </li>
                <li>
                    <div className="our-client-illustration"><span></span></div>
                    <h3>agro-man agro-man</h3>
                </li>
                <li>
                    <div className="our-client-illustration"><span></span></div>
                    <h3>agro-man</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
