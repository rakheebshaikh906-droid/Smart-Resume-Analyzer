export const calculateJobMatch = (
    foundSkills,
    jobDescription
) => {
    const jdText = jobDescription.toLowerCase();

    const matchedSkills = foundSkills.filter((skill) =>
        jdText.includes(skill.toLowerCase())
    );

    const matchScore = Math.round(
        (matchedSkills.length /
            Math.max(foundSkills.length, 1)) *
        100
    );

    return {
        matchScore,
        matchedSkills,
    };
};