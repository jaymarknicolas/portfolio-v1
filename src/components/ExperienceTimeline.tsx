interface Experience {
  role: string;
  company: string;
  year: string;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-[24px] bottom-4 w-[2px] bg-foreground dark:bg-[#2A2A2A]" />
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative grid grid-cols-[20px,1fr,auto] items-center gap-4"
          >
            <div
              className={`w-4 h-4 rounded-full ${
                index === 0 ? "bg-[#FF4D00]" : "bg-[#1A1A1A]"
              } border-2 border-[#2A2A2A] z-10`}
            />
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                {exp.role}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {exp.company}
              </p>
            </div>
            <div className="px-3 py-1 rounded-full border border-[#2A2A2A] text-gray-700 dark:text-gray-300 text-sm">
              {exp.year}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
