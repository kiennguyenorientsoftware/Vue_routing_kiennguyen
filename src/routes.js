import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';

import Home from './components/Home.vue';
import Form from './components/Form.vue';
import Header from './components/Header.vue';
import Table from './components/Table.vue';
import NotFound from './components/NotFound.vue';


export const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            default: Home,
            'header-top': Header
        }
    },
    {
        path: '/form', name: 'form', components: {
            default: Form,
            'header-top': Header
        }
    },
    {
        path: '/table', name: 'table', components: {
            default: Table,
            'header-top': Header
        }
    },
    {
        path: '/user', components: {
            default: User,
            'header-top': Header,
            // 'header-bottom': Header
        }
    },
    {
        path: '/user/:id', components: {
            default: UserDetail,
            'header-top': Header,
            // 'header-bottom': Header
        }
    },
    { path: '/redirect-me', redirect: { name: 'home' } },
    {
        path: '/not-found', name: 'notfound', components: {
            default: NotFound,
            'header-top': Header
        }
    },
    { path: '*', redirect: '/not-found' }
];