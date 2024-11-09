import React from "react";
import "./TeamSection.css"; // External CSS for styling

// Sample team member data
const teamMembers = [
  {
    name: "MANISH",
    role: "DIGITAL MARKETING & CREATIVE STRATEGIST",
    description:
      "Passionate about blending strategy and creativity to bring brands to life through engaging digital experiences that connect and drive growth.",
    image: "/Manish.png",
  },
  {
    name: "MADHU",
    role: "SENIOR VIDEO EDITOR",
    description:
      "Expert in Adobe Premiere Pro and Photoshop, with experience creating polished, professional videos for diverse industries.",
    image: "/Madhu.png",
  },
  {
    name: "SOURAJIT",
    role: "SENIOR CONTENT WRITER & CREATIVE STRATEGIST",
    description:
      "Expert in Adobe Premiere Pro and Photoshop, with experience creating polished, professional videos for diverse industries.",
    image: "/Sourajit.png",
  },
  {
    name: "MADHU",
    role: "SENIOR VIDEO EDITOR",
    description:
      "Expert in Adobe Premiere Pro and Photoshop, with experience creating polished, professional videos for diverse industries.",
    image: "/Madhu.png",
  },
  {
    name: "PIYUSH",
    role: "JUNIOR VIDEO EDITOR",
    description:
      "Expert in Adobe Premiere Pro and Photoshop, with experience creating polished, professional videos for diverse industries.",
    image: "/Piyush.png",
  },
  {
    name: "NIKHIL",
    role: "INFLUENCER MARKETING SPECIALIST",
    description:
      "Expert in Adobe Premiere Pro and Photoshop, with experience creating polished, professional videos for diverse industries.",
    image: "/Nikhil.png",
  },
  {
    name: "SAGAR",
    role: "PHOTOGRAPHER",
    description:
      "Expert in Adobe Premiere Pro and Photoshop, with experience creating polished, professional videos for diverse industries.",
    image: "/Sagar.png",
  },
  {
    name: "PRAVEEN",
    role: "CONTENT SCRIPT SPECIALIST",
    description:
      "Expert in Adobe Premiere Pro and Photoshop, with experience creating polished, professional videos for diverse industries.",
    image: "/Praveen.png",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className="team-heading">MEET OUR TEAM</h2>
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
