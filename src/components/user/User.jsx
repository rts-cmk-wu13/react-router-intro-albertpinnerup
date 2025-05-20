import './user.scss'

export default function User({name, extra}) {

    return (
        <div className="user">
            <div className="user__img">
                <img src="src/assets/imgs/whitney.svg" alt="" />
            </div>
            <h4 className="user__name">{name}</h4>
            <p className="user__welcome">{extra}</p>
        </div>
    )
}