import ProjectRenderer from "./renderers/ProjectRenderer";
import SkillsRenderer from "./renderers/SkillsRenderer";
import ExperienceRenderer from "./renderers/ExperienceRenderer";
import CertificateRenderer from "./renderers/CertificateRenderer";
import EducationRenderer from "./renderers/EducationRenderer";
import ListRenderer from "./renderers/ListRenderer";
import ResumeRenderer from "./renderers/ResumeRenderer";
import ProjectTechRenderer from "./renderers/ProjectTechRenderer";
import ProjectFeaturesRenderer from "./renderers/ProjectFeaturesRenderer";
import ProjectProblemRenderer from "./renderers/ProjectProblemRenderer";
import ProjectHighlightsRenderer from "./renderers/ProjectHighlightsRenderer";
import ProjectResponsibilitiesRenderer from "./renderers/ProjectResponsibilitiesRenderer";
import ProjectLearningRenderer from "./renderers/ProjectLearningRenderer";
import ContactRenderer from "./renderers/ContactRenderer";
import ProjectFutureRenderer from "./renderers/ProjectFutureRenderer";
import ProjectCompareRenderer from "./renderers/ProjectCompareRenderer";
import ResumeSummaryRenderer from "./renderers/ResumeSummaryRenderer";
import TypingText from "./TypingText";
import CandidateSummaryRenderer from "./renderers/CandidateSummaryRenderer";
import DashboardRenderer from "./renderers/DashboardRenderer";

const AssistantRenderer = ({ message }) => {

  switch (message.type) {

    case "projects":
    case "project":
      return <ProjectRenderer message={message} />;

    case "project-tech":
      return <ProjectTechRenderer message={message} />;
    case "dashboard":
    return <DashboardRenderer message={message} />;
    case "project-features":
      return <ProjectFeaturesRenderer message={message} />;

    case "project-problem":
      return <ProjectProblemRenderer message={message} />;

    case "project-highlights":
      return <ProjectHighlightsRenderer message={message} />;

    case "project-responsibilities":
      return <ProjectResponsibilitiesRenderer message={message} />;

    case "project-learning":
      return <ProjectLearningRenderer message={message} />;

    case "project-future":
      return <ProjectFutureRenderer message={message} />;
    case "candidate-summary":
    return <CandidateSummaryRenderer message={message} />;
    case "compare-projects":
      return <ProjectCompareRenderer message={message} />;

    case "skills":
      return <SkillsRenderer message={message} />;

    case "experience":
      return <ExperienceRenderer message={message} />;

    case "certificate":
      return <CertificateRenderer message={message} />;

    case "education":
      return <EducationRenderer message={message} />;

    case "contact":
      return <ContactRenderer message={message} />;

    case "resume":
      return <ResumeRenderer message={message} />;

    case "resume_summary":
      return <ResumeSummaryRenderer message={message} />;

    case "list":
      return <ListRenderer message={message} />;

    default:
      return (
        <p className="whitespace-pre-line leading-7">
          <TypingText
            text={message.message || message.text || ""}
            speed={15}
          />
        </p>
      );

  }

};

export default AssistantRenderer;