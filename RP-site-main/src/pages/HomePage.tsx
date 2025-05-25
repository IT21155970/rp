import Navebar from '../components/Navebar';
import TopPage from '../components/TopPage';
import LiteratureReview from '../components/LiteratureReview';
import ResearchGap from '../components/ResearchGap';
import ResearchObjectives from '../components/ResearchObjectives';
import Timeline from '../components/Timeline';
import TeamMembers from '../components/TeamMembers';
import Docuement from '../components/Docuement';
import ResearchProblem from '../components/ResearchProblem';
import Methodology from '../components/Methodology';
import Technology from '../components/Technology';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {  return (
    <div className="w-full overflow-x-hidden">
      <Navebar />
      <div className="pt-15"> {/* Added padding-top to account for fixed navbar */}
        <TopPage />
        <div id="literature">
          <LiteratureReview />
        </div>
        <div id="gap">
          <ResearchGap />
        </div>
        <div id="problem">
          <ResearchProblem />
        </div>
        <div id="objectives">
          <ResearchObjectives />
        </div>
        <div id="methodology">
          <Methodology />
        </div>
        <div id="teachnology">
          <Technology />
        </div>
        <div id="time">
          <Timeline />
        </div>
        <div id="doc">
          <Docuement />
        </div>      
        <div id="team">
          <TeamMembers />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}
