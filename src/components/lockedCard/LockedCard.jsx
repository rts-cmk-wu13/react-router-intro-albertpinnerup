import { IoMdLock } from "react-icons/io";
import "./_lockedCard.scss";

export default function LockedCard() {
    return (
        <>
            <div className="locked__card">
                <h1>Whitney's Scooter</h1>
                <p>Locked</p>
                <div className="lock__container">
                    <IoMdLock className="lock" />
                </div>
            </div>
        </>
    );
}
