import Navbar from "../components/Navbar";

function Upload() {
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
                        className="mb-8"
                    />

                    <br />

                    <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl text-white font-semibold">
                        Analyze Resume
                    </button>

                </div>
            </div>
        </>
    );
}

export default Upload;