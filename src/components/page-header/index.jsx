import React from "react";

export const PageHeader = ({className ,children}) => {
    return (
        <h2 className={`page-header ${className}`}><span>{children}</span></h2>
    )
}