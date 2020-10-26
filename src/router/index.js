import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//创建组件---新建.vue文件---导入文件(通常组件名称为大写字母开头)
import Home from '../views/Home/Home.vue';
import Cart from '../views/Cart/Cart.vue';
import Category from '../views/Category/Category.vue';
import Mine from '../views/Mine/Mine.vue';
import Search from '../views/Search/Search.vue';
//配置首页的子组件
import Index from "../views/Home/children/Index.vue";
import Appliance from "../views/Home/children/Appliance.vue";
import Clothing from "../views/Home/children/Clothing.vue";
import ShoeBag from "../views/Home/children/ShoeBag.vue";
import MobileDigital from "../views/Home/children/MobileDigital.vue";
import ComputerOffice from "../views/Home/children/ComputerOffice.vue";
import HouseholdTextile from "../views/Home/children/HouseholdTextile.vue";
import PersonalMakeup from "../views/Home/children/PersonalMakeup.vue";
import Login from "../views/Login/Login.vue"
// 商品列表
import ListDetail from "../views/Category/components/ListDetail"
import GoodsDetail from "../views/GoodsDetail/GoodsDetail.vue"
import SearchList from "../views/Search/SearchList.vue"
const routes = [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [{
            path: '/home',
            redirect: '/home/index'
        }, {
            path: 'index',
            name: 'Index',
            component: Index
        }, {
            path: 'appliance',
            name: 'Appliance',
            component: Appliance
        }, {
            path: 'clothing',
            name: 'Clothing',
            component: Clothing
        }, {
            path: 'shoeBag',
            name: 'ShoeBag',
            component: ShoeBag
        }, {
            path: 'mobileDigital',
            name: 'MobileDigital',
            component: MobileDigital
        }, {
            path: 'computerOffice',
            name: 'ComputerOffice',
            component: ComputerOffice
        }, {
            path: 'householdTextile',
            name: 'HouseholdTextile',
            component: HouseholdTextile
        }, {
            path: 'personalMakeup',
            name: 'PersonalMakeup',
            component: PersonalMakeup
        }],
    }, {
        path: '/cart',
        name: 'Cart',
        component: Cart
    }, {
        path: '/category/:cid',
        name: 'Category',
        component: Category
    }, {
        path: '/mine',
        name: 'Mine',
        component: Mine
    }, {
        path: '/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: "/listdetail",
        name: "listdetail",
        component: ListDetail
    }, {
        path: "/goodsdetail",
        name: "goodsdetail",
        component: GoodsDetail
    }, {
        path: "/searchlist",
        name: "searchlist",
        component: SearchList
    },
]

const router = new VueRouter({
    routes
})

export default router