import {useLocation} from "react-router-dom";

const ProfilePage = () => {
    const {state} = useLocation()


        return (
            <div>Welcome {state}</div>
        );
}

export default ProfilePage;