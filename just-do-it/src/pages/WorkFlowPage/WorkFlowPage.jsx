import React from "react";
import "./WorkFlowPage.css";

const workflowSteps = [
  {
    stepNumber: 1,
    title: "Discovery and Strategy",
    description:
      "This is where we gather insights, understand client needs, and set the overall strategy for the project.",
  },
  {
    stepNumber: 2,
    title: "Content Planning and Creation",
    description:
      "In this step, we plan the content structure and create compelling content that aligns with the strategy.",
  },
  {
    stepNumber: 3,
    title: "Execution and Distribution",
    description:
      "We execute the project and ensure that the content is distributed through appropriate channels.",
  },
  {
    stepNumber: 4,
    title: "Monitoring and Optimization",
    description:
      "We monitor the performance and make data-driven optimizations to maximize impact.",
  },
  {
    stepNumber: 5,
    title: "Reporting and Feedback",
    description:
      "We provide detailed reports and collect feedback to continuously improve our workflow.",
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
