import React from "react";
import { PageHeader } from "../../page-header";
import Form from "../../form";
import "./index.scss";

const fields = [
  {
    name: "userName",
    defaultValue: "",
    placeholder: "Имя",
  },
  {
    name: "phoneNumber",
    defaultValue: "",
    placeholder: "Номер телефона",
  },
];

const buttonLabel = "Отправить заявку";

const onSubmit = () => {
  console.log("submited")
}

export const Garanties = () => {
  return (
    <section className="garanties">
      <div className="garanties-content">
        <div className="container-wrapper row no-gutters">
          <div className="col-12">
            <PageHeader className="aling-left">Наши гарантии</PageHeader>
          </div>

          <div className="col-6 pr-4">
            <div className="garanties-item">
              <h3 className="default-header">Гарантия 1</h3>
              <p className="default-paragraph">
                Есть много вариантов Lorem Ipsum, но большинство из них имеет не
                всегда приемлемые модификации, например, юмористические вставки
                или слова, которые даже отдалённо не напоминают латынь.
              </p>
            </div>
            <div className="garanties-item">
              <h3 className="default-header">Гарантия 2</h3>
              <p className="default-paragraph">
                Есть много вариантов Lorem Ipsum, но большинство из них имеет не
                всегда приемлемые модификации, например, юмористические вставки
                или слова, которые даже отдалённо не напоминают латынь.
              </p>
            </div>
            <div className="garanties-item">
              <h3 className="default-header">Гарантия 3</h3>
              <p className="default-paragraph">
                Есть много вариантов Lorem Ipsum, но большинство из них имеет не
                всегда приемлемые модификации, например, юмористические вставки
                или слова, которые даже отдалённо не напоминают латынь.
              </p>
            </div>
          </div>
          <div className="garanties-form col-6 pl-4">
            <h3>Оставьте заявку чтобы убедиться в нашей надежности</h3>
            <Form fields={fields} onSubmit={onSubmit} buttonLabel={buttonLabel}/>
          </div>
        </div>
      </div>
    </section>
  );
};
