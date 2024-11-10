import React from "react";
import "./TeamSection.css"; // External CSS for styling

// Sample team member data
const teamMembers = [
  {
    name: "MANISH",
    role: "DIGITAL MARKETING & CREATIVE STRATEGIST",
    description:
      "PASSIONATE ABOUT BLENDING STRATEGY AND CREATIVITY TO BRING BRANDS TO LIFE THROUGH ENGAGING DIGITAL EXPERIENCES THAT CONNECT AND DRIVE GROWTH.",
    image: "/Manish.webp",
  },
  {
    name: "MADHU",
    role: "SENIOR VIDEO EDITOR",
    description:
      "EXPERT IN ADOBE PREMIERE PRO AND PHOTOSHOP, WITH OF EXPERIENCE CREATING POLISHED, PROFESSIONAL VIDEOS FOR DIVERSE INDUSTRIES.",
    image: "/Madhu.webp",
  },
  {
    name: "SOURAJIT",
    role: "SENIOR CONTENT WRITER & CREATIVE STRATEGIST",
    description:
      "SKILLED IN DIFFERENT FORMS OF CONTENT WRITING INCLUDING SEO OPTIMIZED BLOGS, AD COPIES, AND CONTENT THAT SHINE ON SOCIAL PLATFORM. ALSO EXPERIENCED IN PERSONAL BRANDING.",
    image: "/Sourajit.webp",
  },
  // {
  //   name: "MADHU",
  //   role: "SENIOR VIDEO EDITOR",
  //   description:
  //     "Expert in Adobe Premiere Pro and Photoshop, with experience creating polished, professional videos for diverse industries.",
  //   image: "/Madhu.webp",
  // },
  {
    name: "PIYUSH",
    role: "JUNIOR VIDEO EDITOR",
    description:
      "SKILLED IN AFTER EFFECTS, CAPCUT, AND FILMORA, ADDING A FRESH EDGE TO PROJECTS WITH DYNAMIC EFFECTS AND MOTION GRAPHICS.",
    image: "/Piyush.webp",
  },
  {
    name: "NIKHIL",
    role: "INFLUENCER MARKETING SPECIALIST",
    description:
      "AN EXPERT IN CRAFTING AND EXECUTING CAMPAIGNS WITH INFLUENCERS TO ENHANCE BRAND REACH AND CREDIBILITY, UNIQUELY POSITIONING YOUR BRAND IN THE MARKET.",
    image: "/Nikhil.webp",
  },
  {
    name: "SAGAR",
    role: "PHOTOGRAPHER",
    description:
      "CAPTURES HIGH-QUALITY VISUALS THAT ELEVATE ANY VIDEO OR SOCIAL MEDIA PROJECT, ADDING A UNIQUE STORYTELLING ELEMENT.",
    image: "/Sagar.webp",
  },
  {
    name: "PRAVEEN",
    role: "CONTENT SCRIPT SPECIALIST",
    description:
      "DEDICATED TO REFINING AND ENHANCING SCRIPTS TO ENSURE CLARITY AND IMPACT, I CRAFT COMPELLING NARRATIVES THAT RESONATE WITH AUDIENCES AND ELEVATE BRAND MESSAGING.",
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
