import React from "react";
import { PageHeader } from "../../page-header";

export const OutServices = () => {
  return (
    <section className="our-services">
      <div className="our-services-content">
        <div className="container-wrapper row no-gutters justify-content-center">
          <div className="col-6">
            <PageHeader className="aling-center">Наши клиенті</PageHeader>
            <p className="our-services-info">
              Financial Harmony — это «compliance» и аутсорсинговая команда
              сертифицированных бухгалтеров-практиков и налоговых экспертов с
              15+ лет опытом работы в индустрии и консалтинге. Мы предоставляем
              услуги как иностранным «well-known» компаниям, так и startups
              комьюнити.
            </p>
            <div className="our-services-cli">
              <h3>Наши цели</h3>
              <ul>
                <li>
                  постоянно превышать Ваши ожидания; мы и Вы - это одна команда;
                </li>
                <li>
                  приносить бизнесу практическую пользу, а не теоретические
                  советы
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
