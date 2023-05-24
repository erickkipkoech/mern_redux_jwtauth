import React from "react";
import logo from "../../assets/logo.png";

const ShowProjects = () => {
  return (
    <section className="slider projects_section">
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem
        </p>
        <button>Browse</button>
      </div>

      <img src={logo} />
    </section>
  );
};

export default ShowProjects;
