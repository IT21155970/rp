import React from "react";
import { FaFilePdf, FaFilePowerpoint } from "react-icons/fa";

// Heading components
const PrimaryTypo = ({ text }: { text: string }) => (
  <h2 className="text-4xl font-extrabold text-green-700 sm:text-5xl text-center mb-8">
    <span className="block">{text}</span>
    <span className="block h-1 w-24 bg-green-500 mt-4 mx-auto rounded"></span>
  </h2>
);

const SecondaryTypo = ({ text }: { text: string }) => (
  <h3 className="text-3xl font-semibold text-green-600 mb-6 text-center">
    {text}
    <span className="block h-1 w-20 bg-green-400 mt-3 mx-auto rounded"></span>
  </h3>
);

// Document card component
const DocumentCard = ({
  href,
  downloadName,
  title,
  icon,
  iconBgColor,
}: {
  href: string;
  downloadName: string;
  title: string;
  icon: React.ReactNode;
  iconBgColor: string;
}) => (
  <a
    href={href}
    download={downloadName}
    className="bg-white w-full max-w-xs p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4
             transition transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-300"
  >
    <div
      className={`p-4 rounded-full text-white text-5xl flex items-center justify-center ${iconBgColor}`}
    >
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 text-center">{title}</h3>
    <span
      className="mt-2 px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition"
    >
      Download
    </span>
  </a>
);

// Main Document component
const Document: React.FC = () => {
  return (
    <section id="documents" className="py-20 bg-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <PrimaryTypo text="Documents" />

        {/* Research Paper */}
        <div className="mt-12" data-aos="fade-up">
          <SecondaryTypo text="Research Paper" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
            <DocumentCard
              href="/documents/TAF-24-25J-303_Research Paper (1).pdf"
              downloadName="TAF-24-25J-303_Research Paper (1).pdf"
              title="Research Paper"
              icon={<FaFilePdf />}
              iconBgColor="bg-red-600"
            />
          </div>
        </div>

        {/* Final Documents and Presentations */}
        <div className="mt-20 grid md:grid-cols-2 gap-16">
          {/* Final Documents */}
          <div data-aos="fade-up">
            <SecondaryTypo text="Final Documents" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
              <DocumentCard
                href="/documents/24-25J-303_Final Report.pdf"
                downloadName="24-25J-303_Final Report.pdf"
                title="Final Report"
                icon={<FaFilePdf />}
                iconBgColor="bg-red-600"
              />
              <DocumentCard
                href="/documents/CheckList1.pdf"
                downloadName="CheckList1.pdf"
                title="PP1 Checklist"
                icon={<FaFilePdf />}
                iconBgColor="bg-red-600"
              />
              <DocumentCard
                href="/documents/pp1.pdf"
                downloadName="PP2.pdf"
                title="PP2 Document"
                icon={<FaFilePdf />}
                iconBgColor="bg-red-600"
              />
            </div>
          </div>

          {/* Presentations */}
          <div data-aos="fade-up" data-aos-delay="100">
            <SecondaryTypo text="Presentations" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
              <DocumentCard
                href="/documents/TAF-24-25J-303_Final_PP.pptx"
                downloadName="Final_Presentation.pptx"
                title="Final PPT"
                icon={<FaFilePowerpoint />}
                iconBgColor="bg-orange-600"
              />
              <DocumentCard
                href="/documents/pp1_presentation.pdf"
                downloadName="pp1_presentation.pdf"
                title="PP1 PPT"
                icon={<FaFilePowerpoint />}
                iconBgColor="bg-orange-600"
              />
              <DocumentCard
                href="/documents/TAF-24-25J-303_PP2.pptx"
                downloadName="PP2_Presentation.pptx"
                title="PP2 PPT"
                icon={<FaFilePowerpoint />}
                iconBgColor="bg-orange-600"
              />
            </div>
          </div>
        </div>

        {/* Individual Reports */}
        <div className="mt-20" data-aos="fade-up" data-aos-delay="200">
          <SecondaryTypo text="Individual Documents" />
          <SecondaryTypo text="Final Report" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
            <DocumentCard
              href="/documents/IT21155970.pdf"
              downloadName="Madushan.pdf"
              title="Madushan S.M.P.K.G.S"
              icon={<FaFilePdf />}
              iconBgColor="bg-red-600"
            />
            <DocumentCard
              href="/documents/IT21106910.pdf"
              downloadName="Gimhani.pdf"
              title="Gimhani K.M.B.K"
              icon={<FaFilePdf />}
              iconBgColor="bg-red-600"
            />
            <DocumentCard
              href="/documents/IT21306990.pdf"
              downloadName="Wadigasinghe.pdf"
              title="Wadigasinghe U.K"
              icon={<FaFilePdf />}
              iconBgColor="bg-red-600"
            />
            <DocumentCard
              href="/documents/IT21372162.pdf"
              downloadName="Bandara.pdf"
              title="Bandara D.M.A.T"
              icon={<FaFilePdf />}
              iconBgColor="bg-red-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Document;
