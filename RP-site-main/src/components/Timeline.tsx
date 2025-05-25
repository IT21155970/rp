import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS once when importing the component
if (typeof window !== 'undefined') {
  AOS.init();
}

const StandaloneTimeline = ({ 
  title = "Project Timeline", 
  timelineData = defaultTimelineData,
  backgroundColor = "bg-white",
  stepColor = "bg-green-600",
  cardColor = "bg-gray-100"
}) => {
  return (
    <section id="timeline" className={`py-16 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 sm:text-4xl mb-12">
          {title}
        </h2>
        
        <div className="relative">
          <div className="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>
          <div className="space-y-8">
            {timelineData.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col sm:items-end hover:scale-105 duration-300 ${
                  index % 2 === 0
                    ? "sm:flex-row-reverse ml-4"
                    : "sm:flex-row mr-4"
                } sm:items-start`}
              >
                <div
                  data-aos="zoom-in-left"
                  data-aos-duration="3000"
                  className={`flex items-center justify-center w-8 h-8 ${stepColor} text-white rounded-full`}
                >
                  {event.step}
                </div>
                <div
                  className={`relative md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-8 md:pr-0" : "md:pr-8 md:pl-0"
                  } mt-4 md:mt-0`}
                >
                  <div
                    data-aos="zoom-in-left"
                    data-aos-duration="3000"
                    className={`${cardColor} p-6 rounded-lg shadow-lg m-1`}
                  >
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-500">{event.date}</p>
                    <p className="mt-2 text-gray-700">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const defaultTimelineData = [
  {
    step: "1",
    title: "Brainstorming Workshop",
    date: "July 2024",
    description: "Initial brainstorming session to explore potential project ideas.",
  },
  {
    step: "2",
    title: "Group Registration",
    date: "25 March 2025",
    description: "Official registration of project groups by students.",
  },
  {
    step: "3",
    title: "Topic Assessment Form (TAF)",
    date: "19 April 2025",
    description: "Submission of the Topic Assessment Form for project approval.",
  },
  {
    step: "4",
    title: "Project Charter",
    date: "13 May 2025",
    description: "Defines the objectives, scope, and stakeholders of the project.",
  },
  {
    step: "5",
    title: "Proposal Reports (Draft)",
    date: "24 May 2025",
    description: "Initial draft of the proposal report for review and feedback.",
  },
  {
    step: "6",
    title: "Proposal Presentation",
    date: "5–9 July 2025",
    description: "Presentation of the project proposal to the evaluation panel.",
  },
  {
    step: "7",
    title: "Proposal Reports (Final - for marking)",
    date: "16 August 2025",
    description: "Final version of the proposal submitted for assessment.",
  },
  {
    step: "8",
    title: "Progress Presentation I",
    date: "23 August 2025",
    description: "Midpoint presentation reviewing 50% progress of the project.",
  },
  {
    step: "9",
    title: "Check List I",
    date: "4–6 December 2025",
    description: "Check List I submission to ensure proper progress and documentation.",
  },
  {
    step: "10",
    title: "Research Paper",
    date: "20 March 2026",
    description: "Summarizes project research findings and contributions to knowledge.",
  },
  {
    step: "11",
    title: "Final Reports",
    date: "11 April 2026",
    description: "Comprehensive final report documenting the entire project.",
  },
  {
    step: "12",
    title: "Progress Presentation II",
    date: "18–20 March 2026",
    description: "Reviewing 90% completion of the project before final submission.",
  },
  {
    step: "13",
    title: "Check List II",
    date: "17 March 2026",
    description: "Final checklist for project compliance before submission.",
  },
  {
    step: "14",
    title: "Submission of RP + Acceptance Notification",
    date: "2 June 2026",
    description: "Final research project submitted and acceptance notification issued.",
  },
  {
    step: "15",
    title: "Final Presentation & Viva",
    date: "26–28 May 2026",
    description: "Final individual viva to evaluate student contributions and knowledge.",
  },
  {
    step: "16",
    title: "Project Website",
    date: "2 June 2026",
    description: "Final project website submitted showcasing outcomes and documentation.",
  },
  {
    step: "17",
    title: "Research Logbook",
    date: "9 June 2026",
    description: "Detailed log of research progress and activities during the project.",
  },
];

export default StandaloneTimeline;
