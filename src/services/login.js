import axios from 'axios';

export function login(data) {
    return axios({
        url: 'http://localhost:8080/api/auth/login',
        method: 'POST',
        data: data
    }).then(response => {
        const {statusText, status} = response
        let data = response.data
        if (data instanceof Array) {
            data = {
                list: data,
            }
        }
        return {
            success: true,
            message: statusText,
            statusCode: status,
            ...data,
        };
    }).catch(error => {
        const {response} = error;
        let msg;
        let statusCode;
        if (response && response instanceof Object) {
            const {data, statusText} = response;
            statusCode = response.status;
            msg = data.message || statusText
        } else {
            statusCode = 600;
            msg = error.message || 'Network Error'
        }
        return {success: false, statusCode, message: msg};
    })
}