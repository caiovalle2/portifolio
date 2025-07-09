interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto space-y-8 text-white">
        <h2 className="text-4xl font-bold">Experiência</h2>

        <div className="space-y-4 px-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-black shadow-lg rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">
                {exp.role} - {exp.company}
              </h3>
              <p className="text-gray-300 mb-2">{exp.period}</p>
              <p className="text-gray-400">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
