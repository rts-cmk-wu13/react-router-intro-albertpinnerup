import './_stats.scss';

export default function Stats({headline, logo, stat}) {

    return (
        <div className="stats__container">
            <h1>{headline}</h1>
            <div className="logo">{logo}</div>
            <p>{stat}</p>
        </div>
    )
}