import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user  = useLoaderData();
    const {name, email, phone, website} = user;
    return (
        <div className="border-3 bg-slate-400 p-7">
            <h2>Users details</h2>
            <h2>{name}</h2>
            <p>{email}</p>
            <h3>{phone}</h3>
            <p>{website}</p>
        </div>
    );
};

export default UserDetails;