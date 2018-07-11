import axios from 'axios';

const fetch = (options) => {
    return axios(options);
};

const request = options => {
    return fetch(options).then(response => {
        const {statusText, status} = response
        let data = options.fetchType === 'YQL' ? response.data.query.results.json : response.data
        if (data instanceof Array) {
            data = {
                list: data,
            }
        }
        return Promise.resolve({
            success: true,
            message: statusText,
            statusCode: status,
            ...data,
        })
    }).catch(error => {
        const {response} = error
        let msg
        let statusCode
        if (response && response instanceof Object) {
            const {data, statusText} = response
            statusCode = response.status
            msg = data.message || statusText
        } else {
            statusCode = 600
            msg = error.message || 'Network Error'
        }

        /* eslint-disable */
        return Promise.reject({success: false, statusCode, message: msg})
    });
};

export default request;