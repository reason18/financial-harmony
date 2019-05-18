import React from "react";
import { PageHeader } from "../../page-header";

export const AboutUs = () => {
  return (
    <section className="about-us container-wrapper row no-gutters">
      <div className="about-us-illustration col-6">
        <div className="illustration-placeholder" />
      </div>
      <div className="col-6">
        <PageHeader className="aling-left">О нас</PageHeader>
        <p className="about-us-info">
          Financial Harmony — это «compliance» и аутсорсинговая команда
          сертифицированных бухгалтеров-практиков и налоговых экспертов с 15+
          лет опытом работы в индустрии и консалтинге. Мы предоставляем услуги
          как иностранным «well-known» компаниям, так и startups комьюнити.
        </p>
        <p className="about-us-goals">
          <h3>Наши цели</h3>
          <ul>
            <li>
              постоянно превышать Ваши ожидания; мы и Вы - это одна команда;
            </li>
            <li>
              приносить бизнесу практическую пользу, а не теоретические советы
            </li>
          </ul>
        </p>
      </div>
    </section>
  );
};
