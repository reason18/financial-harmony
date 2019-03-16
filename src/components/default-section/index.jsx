import React from "react";

export const DefaultSection = ({title, children}) => {
    return (
        <section className="default-section">
            <h2 className="section-title m-0 text-center">{title}</h2>
            <div className="separator text-center">
                <span className="line left-line d-inline-block"></span>
                <span className="circle rounded-circle mx-2 d-inline-block"></span>
                <span className="line right-line d-inline-block"></span>
            </div> 
            <div className="section-content">
                {children}
            </div>
        </section>
    )
}