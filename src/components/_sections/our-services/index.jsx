import React from "react";
import { PageHeader } from "../../page-header";
import "./index.scss";

const services = [
  {
    title: "Услуга 1",
    text:
      "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.",
  },
  {
    title: "Услуга 2",
    text:
      "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.",
  },
  {
    title: "Услуга 3",
    text:
      "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.",
  },
  {
    title: "Услуга 4",
    text:
      "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.",
  },
];

const CollapseListItem = ({ item, index, expandedIndex, onClick }) => {
  return (
    <div className={expandedIndex === index ? "item expanded" : "item"}>
      <h3 className="default-header" onClick={() => onClick(index)}>
        <label>
          <span>{item.title}</span>
          <input type="radio" name="services" defaultChecked />
        </label>
      </h3>
      <p>{item.text}</p>
    </div>
  );
};

class CollapseList extends React.Component {
  state = {
    espanded: 1,
  };
  onClick = index => {
    this.setState({ espanded: index });
  };
  render() {
    return (
      <div className="">
        { services.map((item, i) => <CollapseListItem expandedIndex={this.state.espanded} key={i} item={item} index={i+1} onClick={this.onClick}/>) }
      </div>
    );
  }
}

export const OutServices = () => {
  return (
    <section className="our-services">
      <div className="our-services-content">
        <div className="container-wrapper row no-gutters">
          <div className="col-12">
            <PageHeader className="aling-left">Наши услуги</PageHeader>
          </div>

          <div className="col-6 pr-4">
            <div className="our-services-list">
              <CollapseList />
            </div>
          </div>
          <div className="our-services-illustration col-6 pl-4">
            <div className="illustration-placeholder" />
          </div>
        </div>
      </div>
    </section>
  );
};
