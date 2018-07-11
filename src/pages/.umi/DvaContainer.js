import {Component} from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
    history: window.g_history,
    initialState: {
        products: [
            {name: 'dva', id: 1},
            {name: 'antd', id: 2},
        ]
    }
});

window.g_app = app;
app.use(createLoading());
app.model(require('../../models/products.js').default);
app.model({ namespace: 'login', ...(require('../../models/login.js').default) });

class DvaContainer extends Component {
    render() {
        app.router(() => this.props.children);
        return app.start()();
    }
}

export default DvaContainer;
