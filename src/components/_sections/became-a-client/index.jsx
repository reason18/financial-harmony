import React from "react";
import { PageHeader } from "../../page-header";
import "./index.scss";
import Form from "../../form";

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
  console.log("submited");
};

const Steps = () => (
  <ul className="d-flex m-0 px-0 justify-content-center flex-wrap">
    <li className="col-4 px-0 order-1">
      <div className="text-center">
        <span className="text-center">1</span>
        <p className="default-paragraph m-0 text-left">
          Оставить заявку и пройти консультирование
        </p>
      </div>
    </li>
    <li className="col-4 px-0 order-4">
      <div className="text-center">
        <span className="text-center">2</span>
        <p className="default-paragraph m-0 text-left">
          Мы подберем идеальный вариант сотрудничества
        </p>
      </div>
    </li>
    <li className="col-4 px-0 order-2">
      <div className="text-center">
        <span className="text-center">3</span>
        <p className="default-paragraph m-0 text-left">Заключение договора</p>
      </div>
    </li>
    <li className="col-4 px-0 order-5">
      <div className="text-right">
        <span className="text-center">4</span>
        <p className="default-paragraph m-0 text-left">
          Мы подбираем для Вас специалистов
        </p>
      </div>
    </li>
    <li className="col-4 px-0 order-3">
      <div className="text-center">
        <span className="text-center">5</span>
        <p className="default-paragraph m-0 text-left">
          Мы приступаем к работе
        </p>
      </div>
    </li>
  </ul>
);

export const BecameAClient = () => {
  return (
    <section className="became-a-client">
      <div className="became-a-client-content">
        <div className="container-wrapper row no-gutters justify-content-center">
          <div className="col">
            <PageHeader className="aling-center">
              Как стать нашим клиентом
            </PageHeader>

            <div className="became-a-client-steps mx-auto">
              <Steps />
            </div>
            <div className="contact-form col-12">
              <div className="form-wrapper text-center mx-auto">
                <h3 className="text-center default-header">Мы готовы к сотрудничеству!</h3>
                <Form
                  fields={fields}
                  onSubmit={onSubmit}
                  buttonLabel={buttonLabel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
