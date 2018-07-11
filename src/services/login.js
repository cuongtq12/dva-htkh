import request from '../utils/request';

export function login(data) {
    return request({
        url: 'http://localhost:8080/api/auth/login',
        method: 'POST',
        data: data,
    })
}