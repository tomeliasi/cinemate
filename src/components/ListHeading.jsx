import React from "react";
const ListHeading = (props) =>
{
    return (
        <div className="col">
            <h1 className="movielist-heading-title">{props.heading}</h1>
        </div>
    );
}

export default ListHeading;