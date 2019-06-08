import React from "react";
import "./index.scss";

const contacts = [
  {
    type: "mailto",
    value: "f.harmony@gmail.com",
  },
  {
    type: "tel",
    value: "+380-99-99-99-999",
  },
  {
    type: "tel",
    value: "+380-99-99-99-999",
  },
];

export const ContactsList = ({ className }) => {
  return (
    <ul className={`d-inline-block m-0 text-black ${className}`}>
      {contacts.map((contact, i) => (
        <li className="" key={i}>
          <a
            href={`${contact.type}:${contact.value}`}
            data-rel="external"
            className="m-0 d-block"
          >
            <span className={`icon d-inline-block ${contact.type}`} />
            <span className="text d-inline-block">{contact.value}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
