/* react */
import React from 'react';

/* overview component */
import Overview from './components/overview/Overview';

/* repositories component */
import Repositories from './components/repositories/Repositories';

/* error component if nothing to display send err through props */
import Error from './components/error/Error';

class GitHub {
    getProfile = async () => {
        const response = await fetch('https://api.github.com/users/anricoj1');
        const profile = await response.json();

        return await profile;
    }

    getStars = async () => {
        const response = await fetch('https://api.github.com/users/anricoj1/starred');
        const stars = await response.json();

        return await stars;
    }

    getRepos = async () => {
        const response = await fetch('https://api.github.com/users/anricoj1/repos');
        const repos = await response.json();

        return await repos;
    }

    setFlexBox = () => {
        return [
            { "name" : "Overview", "icon" : "fa fa-book-open fa-sm", "component" : <Overview />},
            { "name" : "Repositories", "icon" : "fa fa-code fa-sm", "component" : <Repositories /> },
            { "name" : "Projects", "icon" : "fa fa-list fa-sm", "component" : <Error msg="anricoj1 doesn't have any GitHub projects yet" />},
            { "name" : "Packages", "icon" : "fa fa-cube fa-sm", "component" : <Error msg="anricoj1 doesn't have any packages yet" />}
        ];
    }
}

export default GitHub;