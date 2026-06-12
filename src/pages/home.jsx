import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <div className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6">

                <span className="px-4 py-2 rounded-full border border-gray-700 text-gray-400 text-sm mb-6">
                    Resume Screening Made Simple
                </span>

                <h1 className="text-6xl md:text-7xl font-bold leading-tight max-w-5xl">
                    Analyze Your Resume
                    <br />
                    <span className="text-gray-400">
                        Before Recruiters Do
                    </span>
                </h1>

                <p className="mt-8 text-lg text-gray-500 max-w-2xl">
                    Upload your resume and instantly discover your ATS score,
                    detected skills, and missing keywords that can improve
                    your chances of getting shortlisted.
                </p>

                <div className="flex gap-4 mt-10">

                    <button
                        onClick={() => navigate("/upload")}
                        className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
                    >
                        Upload Resume
                    </button>

                    <button
                        className="border border-gray-700 px-8 py-4 rounded-xl text-gray-300 hover:bg-gray-900 transition"
                    >
                        Learn More
                    </button>

                </div>

                <div className="flex gap-10 mt-16 text-gray-500">

                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            ATS
                        </h3>
                        <p>Score Analysis</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            Skills
                        </h3>
                        <p>Detection</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            PDF
                        </h3>
                        <p>Resume Parsing</p>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Home;
