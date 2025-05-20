import { Link } from "react-router";
import User from "../../components/user/User";
import LockedCard from "../../components/lockedCard/LockedCard";
import MemoGroup from "../../assets/imgs/Group";
import "./_myscooter.scss";

import { FiMenu } from "react-icons/fi";
import { FiMap } from "react-icons/fi";
import { FiBatteryCharging } from "react-icons/fi";
import { FiZap } from "react-icons/fi";
import { FiShare } from "react-icons/fi";
import Stats from "../../components/stats/Stats";


export default function MyScooter() {
    return (
        <>
            <header>
                <User name='Whitney Leon' extra='Welcome back!'/>
                <Link to="/settings">
                    <FiMenu size='1.5rem'/>
                </Link>
            </header>
            <main>
                <div className="scooter__img">
                    <MemoGroup />
                </div>
                <LockedCard />
                <div className="stats">
                    <Stats
                        headline="Total distance"
                        logo={<FiMap />} 
                        stat="17.8 KM"
                    />
                    <Stats
                        headline="Total battery"
                        logo={<FiBatteryCharging size='1.7rem'/>}
                        stat="100%"
                    />
                    <Stats
                        headline="Average speed"
                        logo={<FiZap />}
                        stat="45 Km/h"
                    />
                    <Stats
                        headline="Ride Updated"
                        logo={<FiShare />}
                        stat="1 dag ago."
                    />
                </div>
            </main>
        </>
    );
}
