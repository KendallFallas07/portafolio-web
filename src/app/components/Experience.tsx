const Experience = () => {
  return (
    <div className="-my-6">
      <div className="relative pl-8 sm:pl-32 py-6 group">
        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
          Edu Plan Pro
        </div>
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
           June, 2025
          </time>
          <div className="text-xl font-bold text-slate-900">
            Engineering Project Development
          </div>
        </div>
        <div className="text-slate-500">
          Since February 2024, a project titled <strong> Edu Plan Pro </strong>
          has been under development, focused on the <strong> digitalization of course curricula and academic programs. </strong>
          This ambitious project encompasses:
          <ul className="list-disc list-inside mt-2">
            <li>
              Thorough research and data analysis related to educational
              programs and curriculum plans.
            </li>
            <li>
              Development of solutions using modern technologies such as React,
              Tailwind CSS, JSX, Node.js, and PostgreSQL.
            </li>
            <li>
              Design of interactive prototypes and execution of functional tests
              to ensure their effectiveness.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
