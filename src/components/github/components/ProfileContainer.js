/* react */
import React from 'react';

/* css */
import './GitHub.css';

const ProfileContainer = ({ profile }) => {
    return (
        <div className="ProfileContainer">
            <div className="pfp">
                <img className="circleImg" src={profile.avatar_url} />
            </div>
            <div className="user">
                <h2 className="name">
                    {profile.name}
                </h2>
                <h3 className="username">
                    {profile.login}
                </h3>
            </div>
            <div className="about">
                <h4 className="bio">
                    {profile.bio}
                </h4>
                <a className="btn btn-dark btn-block link" href={profile.html_url}>Go to Profile</a>
                <div className="stats">
                    <span className="fa fa-users fa-sm span"></span>
                    {profile.followers} {profile.followers === 1 ? 'follower' : 'followers'} | {profile.following} following
                </div>
                <h6 className="company">
                    <span className="fa fa-building fa-sm span"></span>{profile.company}
                </h6>
                <h6 className="blog">
                    <span className="fa fa-link fa-sm span"></span>
                    <a style={{color : 'white' }} href={profile.blog}>{profile.blog}</a>
                </h6>
            </div>
        </div>
    )
}

export default ProfileContainer;