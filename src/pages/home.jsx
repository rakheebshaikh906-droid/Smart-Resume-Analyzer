import Navbar from "../components/Navbar";

function Home() {
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center justify-center text-center mt-32 px-4">

                <p className="text-blue-500 font-semibold mb-4">
                    Powered Resume Analysis
                </p>

                <h1 className="text-6xl font-bold mb-6">
                    Smart Resume Analyzer
                </h1>

                <p className="text-xl text-gray-400 max-w-2xl mb-8">
                    Upload your resume and get ATS score, skill analysis,
                    and personalized recommendations to improve your chances
                    of getting shortlisted.
                </p>

                <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl text-white font-semibold">
                    Upload Resume
                </button>

            </div>
        </>
    );
}

export default Home;
