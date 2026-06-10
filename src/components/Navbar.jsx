import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex justify-between items-center px-10 py-6">
            <h1 className="text-2xl font-bold text-blue-500">
            </h1>

            <div className="flex gap-8 text-lg">
                <Link to="/">Home</Link>
                <Link to="/upload">Upload</Link>
            </div>
        </nav>
    );
}

export default Navbar;