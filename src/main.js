import Vue from 'vue'
import Vonic from 'vonic/src/index.js'

// Sell Components
import Index from './components/Index'
import About from './components/About'
import login from './components/login'
import sellerInfo from './components/sellerInfo'
import addMenuSort from './components/addMenuSortModal'
import addMenuDetailModel from './components/addMenuDetailModel'
import addMyMenuDetailModal from './components/addMyMenuDetailModal'

// User Components
import sellerList from './components/users/sellerList'
import tabBar from './components/users/TabBar'
import TabbarHome from './components/users/home'
import TabbarOrders from './components/users/orders'
import TabbarUser from './components/users/user'
import PageFromTabbar from './components/users/PageFromTabbar'

import orderDetail from './components/users/orderDetail'

//foodDetail
import foodDetail from './components/users/foodDetail'
import cart from './components/users/cart'

// User Edit
import EditAddress from './components/edit/EditAddress'
import EditName from './components/edit/EditName'
import EditPhone from './components/edit/EditPhone'
import EditPwd from './components/edit/EditPwd'
import AddNewAddress from './components/edit/AddNewAddress'
import EditMyAddress from './components/edit/EditMyAddress'

// Routes
const routes = [
    { path: '/', component: Index },
    { path: '/about', component: About },
    { path: '/login', component: login },
    { path: '/sellerInfo', component: sellerInfo },
    { path: '/index', component: sellerList },
    { path: '/addMenuSort', component: addMenuSort },
    { path: '/addMenuDetailModel', component: addMenuDetailModel },
    { path: '/addMyMenuDetailModal', component: addMyMenuDetailModal },
    { path: '/PageFromTabbar', component: PageFromTabbar },

    { path: '/users/orderDetail', component: orderDetail },
    { path: '/users/foodDetail', component: foodDetail },
    { path: '/users/cart', component: cart },
    {
        path: '/users',
        component: tabBar,
        children: [
            { path: 'home', component: TabbarHome },
            { path: 'orders', component: TabbarOrders },
            { path: 'user', component: TabbarUser }
        ]
    },
     { path: '/edit/EditAddress', component: EditAddress },
     { path: '/edit/EditName', component: EditName },
     { path: '/edit/EditPhone', component: EditPhone },
     { path: '/edit/EditPwd', component: EditPwd },
     { path: '/edit/AddNewAddress', component: AddNewAddress },
     { path: '/edit/EditMyAddress', component: EditMyAddress }
]

Vue.use(Vonic.app, {
    routes: routes
})
