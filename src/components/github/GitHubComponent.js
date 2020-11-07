/* react */
import React, { useEffect, useState } from 'react';

/* components */
import ProfileContainer from './components/ProfileContainer';

/* css */
import './components/GitHub.css';

/* class */
import GitHub from './GitHub';

const GitHubComponent = () => {
    const [profile, setProfile] = useState([]);

    useEffect(async () => {
        return setProfile(await new GitHub().getProfile());
    },[]);

    return (
        <div className="GitHubComponent">
            <ProfileContainer profile={profile} />
            <div className="middleDiv">
                <FlexBox />
            </div>
        </div>
    )
}

export default GitHubComponent;