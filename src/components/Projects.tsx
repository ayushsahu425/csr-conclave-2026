import { PROJECTS_DATA } from '../data/mockData';
import type { CSRProject } from '../types';

interface ProjectsProps {
  onSelectProject: (project: CSRProject) => void;
}

export default function Projects({
  onSelectProject,
}: ProjectsProps) {
  return (
    <section id="projects" className="bg-[#FAF6F0] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6B0C28]">
            CSR Opportunities
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#4A081B] md:text-4xl">
            Research Projects for Impact
          </h2>

          <p className="mt-4 text-gray-600">
            Explore CSR-ready projects and connect directly with
            the respective research leads.
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS_DATA.map((project) => (
            <article
              key={project.id}
              className="rounded-xl border border-[#D4AF37]/30 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Focus Area */}
              <span className="inline-block rounded-full bg-[#6B0C28]/5 px-3 py-1 text-xs font-semibold text-[#6B0C28]">
                {project.focusArea}
              </span>

              {/* Title */}
              <h3 className="mt-4 text-xl font-bold text-[#4A081B]">
                {project.title}
              </h3>

              {/* Problem */}
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {project.problemStatement}
              </p>

              {/* Project Information */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Proposed Budget
                  </p>
                  <p className="mt-1 font-semibold text-[#6B0C28]">
                    {project.budget}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Beneficiaries
                  </p>
                  <p className="mt-1 text-sm text-gray-700">
                    {project.beneficiaries}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Principal Investigator
                  </p>
                  <p className="mt-1 text-sm text-gray-700">
                    {project.piName}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Department
                  </p>
                  <p className="mt-1 text-sm text-gray-700">
                    {project.dept}
                  </p>
                </div>

              </div>

              {/* Schedule VII */}
              <div className="mt-5 rounded-lg bg-[#FAF6F0] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Schedule VII
                </p>

                <p className="mt-1 text-sm text-gray-700">
                  {project.scheduleVII}
                </p>
              </div>

              {/* Action */}
              <button
                onClick={() => onSelectProject(project)}
                className="mt-6 w-full rounded-md bg-[#6B0C28] px-5 py-3 font-semibold text-white transition hover:bg-[#4A081B]"
              >
                Express Interest
              </button>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}