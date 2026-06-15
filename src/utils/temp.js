import { skillsList } from "./skills";

export const calculateATS = (resumeText) => {
    const foundSkills = [];

    skillsList.forEach((skill) => {
        if (
            resumeText.toLowerCase().includes(skill.toLowerCase())
        ) {
            foundSkills.push(skill);
        }
    });

    const score = Math.round(
        (foundSkills.length / skillsList.length) * 100
    );

    return {
        score,
        foundSkills,
        missingSkills: skillsList.filter(
            skill => !foundSkills.includes(skill)
        ),
    };
};