/* react */
import React from 'react';

/* components */
import GitHubComponent from './github/GitHubComponent';
import LinkedInComponent from './linkedin/LinkedInComponent';
import TwitterComponent from './twitter/TwitterComponent';

/* images */
import faLinkedIn from './images/icons/linkedIn.png';
import faGitHub from './images/icons/github.png';
import faTwitter from './images/icons/twitter.png';


class API {
    constructor(name, img, component) {
        this.name = name;
        this.img = img;
        this.component = component;
    }
}

const APIs = [
    new API('GitHub', faGitHub, <GitHubComponent />),
    new API('LinkedIn', faLinkedIn, <LinkedInComponent />),
    new API('Twitter', faTwitter, <TwitterComponent />)
];

export default APIs;