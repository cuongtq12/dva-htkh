import React from 'react';
import {Route, Router as DefaultRouter} from 'react-router-dom';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;


let routes = [
    {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
    },
    {
        "path": "/products",
        "exact": true,
        "component": require('../routes/Products.js').default
    },
    {
        "component": () => React.createElement(require('C:/Users/cuongtq12/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, {
            pagesPath: 'src/pages',
            routes: '[{"path":"/","exact":true,"component":"./src/pages/index.js"},{"path":"/routes/Products","exact":true,"component":"./src/pages/routes/Products.js"}]'
        })
    }
];


export default function () {
    return (
        <Router history={window.g_history}>
            <Route render={({location}) =>
                renderRoutes(routes, {}, {location})
            }/>
        </Router>
    );
}
