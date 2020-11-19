/* react */
import React, { useEffect, useState } from 'react';

/* components */
import ProfileContainer from './components/ProfileContainer';
import FlexBox from './components/flexbox/FlexBox';
import Overview from './components/overview/Overview';

/* css */
import './components/GitHub.css';

/* class */
import GitHub from './GitHub';

const GitHubComponent = () => {
    const [profile, setProfile] = useState([]);
    const [component, setComponent] = useState(<Overview />);

    useEffect(async () => {
        return setProfile(await new GitHub().getProfile());
    },[]);

    return (
        <div className="GitHubComponent">
            <ProfileContainer profile={profile} />
            <div className="middleDiv">
                <nav className="navbar navbar-expand-lg navbar-dark" id="flexbox">
                    <FlexBox links={new GitHub().setFlexBox()} setComponent={e => setComponent(e)} publicRepos={profile.public_repos} />
                </nav>
                {component}
            </div>
        </div>
    )
}

export default GitHubComponent;