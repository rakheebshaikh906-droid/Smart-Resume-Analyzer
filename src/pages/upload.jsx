import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Upload() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    const navigate = useNavigate();

    const handleAnalyze = () => {
        if (!file) {
            alert("Please select a resume first!");
            return;
        }

        navigate("/result");
    };

    return (
        <>
            <Navbar />

            <div className="flex justify-center items-center mt-20">
                <div className="w-[600px] p-8 border border-gray-700 rounded-2xl text-center">

                    <h1 className="text-5xl font-bold mb-8">
                        Upload Your Resume
                    </h1>

                    <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="mb-6"
                    />

                    {file && (
                        <p className="mb-6 text-green-400">
                            Selected File: {file.name}
                        </p>
                    )}

                    <button
                        onClick={handleAnalyze}
                        className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl text-white font-semibold"

                    >
                        Analyze Resume
                    </button>

                </div>
            </div>
        </>
    );
}

export default Upload;