import "./_settings.scss";
import User from "../../components/user/User";
import { Link, NavLink } from "react-router";
import { FiX } from "react-icons/fi";

export default function Settings() {
    return (
        <>
            <Link to='/myscooter' className="close">
                <FiX size="1.5rem" />
            </Link>

            <header>
                <User name="Whitney Leon" extra="+91 6787978287" />
            </header>
            <main>
                <nav>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/tomat"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Profile
                    </NavLink>

                    <NavLink
                        to="/tomat"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Travel History
                    </NavLink>

                    <NavLink
                        to="/tomat"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Scooter settings
                    </NavLink>

                    <NavLink
                        to="/tomat"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Help
                    </NavLink>

                    <NavLink
                        to="/tomat"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Privacy Policy
                    </NavLink>

                    <NavLink
                        to="/tomat"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Terms & Conditions
                    </NavLink>
                </nav>
                <div className="bg__img">
                    <img src="/src/assets/imgs/scooter.svg" alt="" />
                </div>
            </main>
        </>
    );
}
