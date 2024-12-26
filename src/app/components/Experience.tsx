const Experience = () => {
    return (
        <div className="-my-6">

            <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">Edu Plan Pro</div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Mar, 2024</time>
                    <div className="text-xl font-bold text-slate-900">Desarrollo del Proyecto de Ingeniería</div>
                </div>
                <div className="text-slate-500">
                    Desde febrero de 2024, se encuentra en desarrollo un proyecto titulado
                    <strong> Edu Plan Pro</strong>, enfocado en la <strong>digitalización de programas de cursos y planes de estudio</strong>.
                    Este ambicioso proyecto abarca:
                    <ul className="list-disc list-inside mt-2">
                        <li>Investigación y análisis exhaustivo de datos relacionados con programas educativos y planes curriculares.</li>
                        <li>Desarrollo de soluciones utilizando tecnologías modernas como React, Tailwind CSS, JSX, Node.js y PostgreSQL.</li>
                        <li>Diseño de prototipos interactivos y realización de pruebas funcionales para garantizar su efectividad.</li>
                    </ul>
                    El proyecto está en progreso y su finalización está prevista para marzo de 2025.
                </div>
            </div>

        </div>
    );
};

export default Experience;
