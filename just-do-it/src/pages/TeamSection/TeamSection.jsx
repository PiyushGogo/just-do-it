import React from "react";
import "./TeamSection.css"; // External CSS for styling

// Sample team member data
const teamMembers = [
  {
    name: "MANISH",
    role: "DIGITAL MARKETING & CREATIVE STRATEGIST",
    description:
      "Passionate about blending strategy and creativity to bring brands to life through engaging digital experiences that connect and drive growth.",
    image: "/Manish.webp",
  },
  {
    name: "MADHU",
    role: "SENIOR VIDEO EDITOR",
    description:
      "Expert in Adobe Premiere Pro and Photoshop, with experience creating polished, professional videos for diverse industries.",
    image: "/Madhu.webp",
  },
  {
    name: "SOURAJIT",
    role: "SENIOR CONTENT WRITER & CREATIVE STRATEGIST",
    description:
      "Expert in Adobe Premiere Pro and Photoshop, with experience creating polished, professional videos for diverse industries.",
    image: "/Sourajit.webp",
  },
  {
    name: "MADHU",
    role: "SENIOR VIDEO EDITOR",
    description:
      "Expert in Adobe Premiere Pro and Photoshop, with experience creating polished, professional videos for diverse industries.",
    image: "/Madhu.webp",
  },
  {
    name: "PIYUSH",
    role: "JUNIOR VIDEO EDITOR",
    description:
      "Expert in Adobe Premiere Pro and Photoshop, with experience creating polished, professional videos for diverse industries.",
    image: "/Piyush.webp",
  },
  {
    name: "NIKHIL",
    role: "INFLUENCER MARKETING SPECIALIST",
    description:
      "Expert in Adobe Premiere Pro and Photoshop, with experience creating polished, professional videos for diverse industries.",
    image: "/Nikhil.webp",
  },
  {
    name: "SAGAR",
    role: "PHOTOGRAPHER",
    description:
      "Expert in Adobe Premiere Pro and Photoshop, with experience creating polished, professional videos for diverse industries.",
    image: "/Sagar.webp",
  },
  {
    name: "PRAVEEN",
    role: "CONTENT SCRIPT SPECIALIST",
    description:
      "Expert in Adobe Premiere Pro and Photoshop, with experience creating polished, professional videos for diverse industries.",
    image: "/Praveen.webp",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className="team-heading">
        MEET <span className="team-highlight"> OUR </span> TEAM
      </h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="image-wrapper">
              <img src={member.image} alt={member.name} />
              <div className="name-overlay">{member.name}</div>
            </div>
            <div className="member-info">
              <h3>{member.role}</h3>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
