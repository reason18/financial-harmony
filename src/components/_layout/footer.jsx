import React from "react";
import { ContactsList } from "../contacts-list";

const Footer = () => {
  return (
    <footer className="layout-footer">
      <div className="row no-gutters">
        <div className="col-4">
          <div className="footer-col">
            <h3 className="default-header text-white">Финансовая гармония</h3>
            <p className="default-paragraph text-white">
              Защитим от штрафов и повысим эффективность бизнеса за счет
              инновационных технологий в области аутсорсинга и “Compliance”
              контроля
            </p>
          </div>
        </div>
        <div className="col-4">
          <div className="footer-col">
            <h3 className="default-header text-white">Контакты</h3>
            <ContactsList className="footer-contacts-list"/>
          </div>
        </div>
        <div className="col-4">
          <div className="footer-col">
            <h3 className="default-header text-white">Социальные сети</h3>
            <div>
              <a className="social-link d-inline-block bg-white rounded-circle" href="#" />
              <a className="social-link d-inline-block bg-white rounded-circle" href="#" />
              <a className="social-link d-inline-block bg-white rounded-circle" href="#" />
              <a className="social-link d-inline-block bg-white rounded-circle" href="#" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright default-paragraph text-center text-white">
        © {new Date().getFullYear()} All rights are reserved by Financial
        Harmony LLC
      </div>
    </footer>
  );
};

export default Footer;
