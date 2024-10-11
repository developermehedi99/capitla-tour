import { useLoaderData } from "react-router-dom";
import User from "./User";


const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h2>All users: {users.length}</h2>
           <div className="grid grid-cols-3 gap-6">
           {
                users.map(user=> <User key={user.id} user={user}></User>)
            }
           </div>
        </div>
    );
};

export default Users;