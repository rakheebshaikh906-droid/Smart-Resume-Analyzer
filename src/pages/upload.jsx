import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { extractTextFromPDF } from "../utils/pdfParser";
import { calculateATS } from "../utils/atsCalculator";

function Upload() {
    const [file, setFile] = useState(null);

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

            const text = await extractTextFromPDF(file);

            console.log("PDF TEXT:", text);

            const result = calculateATS(text);

            console.log(result);

            navigate("/result", {
                state: result,
            });
        } catch (error) {
            console.error("PDF Error:", error);
            alert("PDF parsing failed");
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

                    <p className="text-gray-400 mb-8">
                        Upload your resume in PDF format and get an ATS score with skill analysis.
                    </p>

                    <div className="border-2 border-dashed border-gray-600 rounded-2xl p-10 mb-6">

                        <input
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                            className="mb-4"
                        />

                        <p className="text-gray-400">
                            Only PDF files are supported
                        </p>

                    </div>

                    {file && (
                        <div className="bg-gray-800 rounded-xl p-4 mb-6">
                            <p className="text-green-400 font-semibold">
                                Selected File:
                            </p>

                            <p className="mt-2">
                                {file.name}
                            </p>
                        </div>
                    )}

                    <button
                        onClick={handleAnalyze}
                        className="bg-blue-500 hover:bg-blue-600 transition-all px-8 py-4 rounded-xl text-white font-semibold text-lg"
                    >
                        Analyze Resume
                    </button>

                </div>

            </div>
        </>
    );
}

export default Upload;