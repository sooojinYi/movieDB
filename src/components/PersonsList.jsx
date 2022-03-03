import React from "react";

function PersonsList({ persons }) {
  return (
    <div className="row mt-3">
      {persons.slice(0, 4).map((person, index) => {
        return (
          <div className="col-md-3 text-center" key={index}>
            <img
              className="img-fluid rounded-circle mx-auto d-block"
              src={person.profileImg}
              alt={person.name}
            />
            <p
              className="mt-3"
              style={{ fontWeight: "bold", fontSize: "22px" }}
            >
              {person.name}
            </p>
            <p>Trending for {person.known}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PersonsList;
