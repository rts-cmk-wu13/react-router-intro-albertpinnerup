import { Link } from "react-router";
import { FiChevronsRight } from "react-icons/fi";
import "./_home.scss";

export default function Home() {

    // const [background, setBackground] = useState("home");

    return (
        <>
            <header>
                <div className="logo">
                    <img src="src/assets/imgs/Rockit-logo.svg" alt="" />
                </div>
                <h1>Rockit</h1>
            </header>

            <main>
                <h2>Your scooter in one app</h2>
                <div>
                    <img src="src/assets/imgs/home.svg" alt="" />
                </div>
                <p>
                    Everything you need to know about your scooter is available
                    here in your app
                </p>
                <Link to="/myscooter" className="chevron">
                    
                    <FiChevronsRight size='1.4rem'/>

                </Link>
            </main>
        </>
    );
}
