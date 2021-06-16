import ENVIRONMENT from "./environment";



const currentEnvironment = {
    local: {
        url: 'https://fakestoreapi.com/',
    },
    development: {
        url: 'https://fakestoreapi.com/',
    },
    staging: {
        url: '',
    },
    production: {
        url: 'https://fakestoreapi.com/',
    },
};


export default process.env.REACT_APP_API_URL === ENVIRONMENT.LOCAL ? currentEnvironment.local
    : process.env.REACT_APP_API_URL === ENVIRONMENT.DEVELOPMENT ? currentEnvironment.development
        : process.env.REACT_APP_API_URL === ENVIRONMENT.STAGING ? currentEnvironment.staging
            : process.env.REACT_APP_API_URL === ENVIRONMENT.PRODUCTION ? currentEnvironment.production
                : currentEnvironment.local;