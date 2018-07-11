import {login} from '../services/login';
import {routerRedux} from 'dva/router'

export default {
    namespace: 'login',
    state : [],
    effects: {
        *login({payload}, {put, call}) {
            const data = yield call(login, payload);
            if (data.success) {
                yield put(routerRedux.push('/dashboard'));
            } else {
                throw data;
            }
        }
    }
}