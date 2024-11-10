import React from "react";
import "./ClientsSection.css"; // External CSS for styling

const ClientsSection = () => {
  return (
    <section className="clients-section ">
      <div className="clients-content sec">
        <div className="clients-text">
          <h1 className="title_red">
            CLIENTS <br />
            <span className="title_white">WE'VE SERVED</span>
          </h1>

          <p className="text_p">
            We’re proud to have worked with a diverse range of clients across
            various industries, including
            <span className="highlight">
              {" "}
              restaurants, healthcare startups, podcasts, political campaigns,
              news media, wedding videography, and fitness influencers.
            </span>
          </p>
          <p className="text_p">
            From building powerful brand stories to enhancing audience
            engagement, we tailor each project to meet unique needs and bring
            impactful results.
          </p>
        </div>
        <div className="clients-image">
          <img src="/clients.png" alt="Clients" />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
