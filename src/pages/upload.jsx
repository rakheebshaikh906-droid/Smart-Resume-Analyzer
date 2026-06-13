import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { extractTextFromPDF } from "../utils/pdfParser";
import { calculateATS } from "../utils/atsCalculator";

function Upload() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    const navigate = useNavigate();

    const handleAnalyze = async () => {
        try {
            if (!file) {
                alert("Please select a resume first!");
                return;
            }

            setLoading(true);

            const text = await extractTextFromPDF(file);

            const result = calculateATS(text);

            navigate("/result", {
                state: result,
            });

        } catch (error) {
            console.error(error);
            alert("PDF parsing failed");
        } finally {
            setLoading(false);
        }
    };



    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-950 text-white flex justify-center items-center px-4">

                <div className="w-full max-w-2xl bg-gray-900 p-10 rounded-3xl shadow-xl text-center">

                    <h1 className="text-5xl font-bold mb-4">
                        Upload Your Resume
                    </h1>

                    <div className="border-2 border-dashed border-gray-700 rounded-2xl p-10 mb-6">

                        <label
                            htmlFor="resume-upload"
                            className="cursor-pointer bg-white text-black px-6 py-3 rounded-xl font-semibold inline-block hover:scale-105 transition"
                        >
                            Choose Resume
                        </label>

                        <input
                            id="resume-upload"
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                            className="hidden"
                        />

                        <p className="text-gray-500 mt-4">
                            <br></br>
                            Only PDF files are supported
                        </p>

                    </div>

                    {file && (
                        <div className="bg-gray-800 rounded-xl p-4 mb-6">
                            <p className="text-green-400 font-semibold">
                                Selected Resume
                            </p>

                            <p className="mt-2 text-gray-300 break-all">
                                {file.name}
                            </p>
                        </div>
                    )}

                    <button
                        onClick={handleAnalyze}
                        disabled={loading}
                        className="bg-white text-black px-8 py-4 rounded-xl font-semibold"
                    >
                        {loading ? "Analyzing Resume..." : "Analyze Resume"}
                    </button>

                </div>

            </div>
        </>
    );
}

export default Upload;