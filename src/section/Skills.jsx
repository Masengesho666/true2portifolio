import { useState } from "react";
import Card from "../components/Card";
import {
  FaReact,
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    {
      Name: "JavaScript",
      Level: "Expert",
      LevelBgColor: "bg-yellow-500",
      LevelTextColor: "text-white",
      LevelBorderColor: "border-yellow-500",
      NameColor: "text-yellow-700",
      SkillIcon: <FaJs className="text-4xl" />,
    },
    {
      Name: "React",
      Level: "Advanced",
      LevelBgColor: "bg-blue-500",
      LevelTextColor: "text-white",
      LevelBorderColor: "border-blue-500",
      NameColor: "text-blue-700",
      SkillIcon: <FaReact className="text-4xl" />,
    },
    {
      Name: "Responsive Design",
      Level: "Advanced",
      LevelBgColor: "bg-blue-500",
      LevelTextColor: "text-white",
      LevelBorderColor: "border-blue-500",
      NameColor: "text-blue-700",
      SkillIcon: <FaReact className="text-4xl" />,
    },
    {
      Name: "Tailwind CSS",
      Level: "Advanced",
      LevelBgColor: "bg-blue-500",
      LevelTextColor: "text-white",
      LevelBorderColor: "border-blue-500",
      NameColor: "text-blue-700",
      SkillIcon: <SiTailwindcss className="text-4xl" />,
    },
    {
      Name: "HTML",
      Level: "Advanced",
      LevelBgColor: "bg-yellow-500",
      LevelTextColor: "text-white",
      LevelBorderColor: "border-yellow-500",
      NameColor: "text-yellow-700",
      SkillIcon: <FaHtml5 className="text-4xl" />,
    },
    {
      Name: "CSS",
      Level: "Intermediate",
      LevelBgColor: "bg-purple-500",
      LevelTextColor: "text-white",
      LevelBorderColor: "border-purple-500",
      NameColor: "text-purple-700",
      SkillIcon: <FaCss3Alt className="text-4xl" />,
    },
    {
      Name: "Figma",
      Level: "Advanced",
      LevelBgColor: "bg-blue-500",
      LevelTextColor: "text-white",
      LevelBorderColor: "border-blue-500",
      NameColor: "text-blue-700",
      SkillIcon: <FaFigma className="text-4xl" />,
    },
    {
      Name: "Node.js",
      Level: "Advanced",
      LevelBgColor: "bg-green-500",
      LevelTextColor: "text-white",
      LevelBorderColor: "border-green-500",
      NameColor: "text-green-700",
      SkillIcon: <FaNodeJs className="text-4xl" />,
    },
  ];

  return (
    <main
      id="skills"
      className="min-h-screen bg-blue-100 py-10 flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto flex flex-wrap gap-6 justify-center px-4 sm:px-6 lg:px-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`relative transition-transform duration-300 ease-in-out cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2`}
            onClick={() =>
              setActiveSkill(activeSkill === skill.Name ? null : skill.Name)
            }
          >
            <Card
              SkillName={skill.Name}
              SkillNameColor={skill.NameColor}
              SkillLevel={skill.Level}
              SkillLevelBgColor={skill.LevelBgColor}
              SkillLevelTextColor={skill.LevelTextColor}
              SkillLevelBorderColor={skill.LevelBorderColor}
              SkillIcon={skill.SkillIcon}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Skills;