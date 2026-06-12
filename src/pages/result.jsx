import { useLocation } from "react-router-dom";

function Result() {
    const location = useLocation();

    const {
        score,
        foundSkills,
        missingSkills
    } = location.state || {
        score: 0,
        foundSkills: [],
        missingSkills: [],
    };
    return (
        <div className="min-h-screen bg-gray-950 text-white p-10">
            <div className="max-w-4xl mx-auto">

                <h1 className="text-5xl font-bold text-center mb-10">
                    Resume Analysis
                </h1>

                <div className="bg-gray-900 rounded-2xl p-8 mb-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-green-400">
                        ATS Score: {score}%
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
                        <h3 className="text-2xl font-semibold text-green-400 mb-4">
                            Skills Found
                        </h3>

                        <ul className="space-y-2">
                            {foundSkills.map((skill) => (
                                <li key={skill}>
                                    ✓ {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
                        <h3 className="text-2xl font-semibold text-red-400 mb-4">
                            Missing Skills
                        </h3>

                        <ul className="space-y-2">
                            {missingSkills.map((skill) => (
                                <li key={skill}>
                                    ✗ {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Result;