import React from "react";

export const DefaultSection = ({title, className, headerAling, children}) => {
    let headerClassName;
    if(headerAling === "left") {
        headerClassName = "header-aling-left";
    } else if(headerAling === "center") {
        headerClassName = "header-aling-center";
    } else {
        headerClassName = "";
    }
    return (
        <section className={`default-section ${className ? className : ""}`}>
            <h2 className={`section-title m-0 ${headerClassName}`} >{title}</h2>
            {/* <div className="separator text-center">
                <span className="line left-line d-inline-block"></span>
                <span className="circle rounded-circle mx-2 d-inline-block"></span>
                <span className="line right-line d-inline-block"></span>
            </div>  */}
            <div className="section-content">
                {children}
            </div>
        </section>
    )
}