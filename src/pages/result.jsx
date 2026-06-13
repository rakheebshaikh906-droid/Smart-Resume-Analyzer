import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Result() {
    const location = useLocation();
    const navigate = useNavigate();

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

                    <p
                        className={`text-lg font-semibold mt-2 ${score >= 80
                            ? "text-green-400"
                            : score >= 60
                                ? "text-yellow-400"
                                : "text-red-400"
                            }`}
                    >
                        {score >= 80
                            ? "Excellent Resume"
                            : score >= 60
                                ? "Good Resume"
                                : "Needs Improvement"}
                    </p>

                    <div className="w-full bg-gray-700 rounded-full h-4 mt-4">
                        <div
                            className="h-4 rounded-full bg-green-500"
                            style={{ width: `${score}%` }}
                        ></div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
                        <h3 className="text-2xl font-semibold text-green-400 mb-4">
                            Skills Found
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {foundSkills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-green-900 text-green-300 px-4 py-2 rounded-full"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
                        <h3 className="text-2xl font-semibold text-red-400 mb-4">
                            Missing Skills
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {missingSkills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-red-900 text-red-300 px-4 py-2 rounded-full"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-2xl p-6 shadow-lg mt-6">
                        <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                            Suggestions
                        </h3>

                        <ul className="space-y-2 text-gray-300">
                            {missingSkills.map((skill) => (
                                <li key={skill}>
                                    add {skill} to strengthen your resume.
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="mt-10 text-center">
                    <button
                        onClick={() => navigate("/upload")}
                        className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                    >
                        Analyze Another Resume
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Result;