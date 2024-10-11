import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id,name,email} = user;
    return (
        <div className="border-2 p-5 mt-5 rounded-md">
            <h2>{name}</h2>
            <p>{email}</p>
            <Link to={`/user/${id}`}><button>show details</button></Link>
        </div>
    );
};

export default User;