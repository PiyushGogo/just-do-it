import React from "react";
import "./WorkFlowPage.css";
import {
  FaLightbulb,
  FaPenFancy,
  FaRocket,
  FaChartLine,
  FaComments,
} from "react-icons/fa";

const workflowSteps = [
  {
    stepNumber: 1,
    title: "Discovery & Strategy",
    description:
      "We begin by understanding your goals, target audience, and brand identity. This foundational insight shapes our tailored approach.",
  },
  {
    stepNumber: 2,
    title: "Content Planning & Creation",
    description:
      "Our team crafts a strategy, selects formats, and produces content that resonates, aligning with your brand’s objectives.",
  },
  {
    stepNumber: 3,
    title: "Execution & Distribution",
    description:
      "We seamlessly launch and distribute content across selected channels, ensuring maximum reach and engagement.",
  },
  {
    stepNumber: 4,
    title: "Monitoring & Optimization",
    description:
      "We track performance, analyze metrics, and refine strategies to enhance impact and drive continuous growth.",
  },
  {
    stepNumber: 5,
    title: "Reporting & Feedback",
    description:
      "Regular updates and transparent communication keep you informed, helping us align further with your evolving needs.",
  },
];

const WorkFlowPage = () => {
  return (
    <div className="workflow-page">
      <h1>Our Workflow</h1>
      <div className="workflow-steps">
        {workflowSteps.map((step) => (
          <div key={step.stepNumber} className="workflow-step">
            <h2>
              Step {step.stepNumber}: {step.title}
            </h2>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkFlowPage;
