import Services from './services';

const genericUrls = {
    domainName: 'travelnowhere.citybreakweb.com/api/gateway/'
};

const protocols = {
    https: 'https://'
}

const API_URLS = { ...protocols, ...genericUrls, ...Services };
export default API_URLS;
