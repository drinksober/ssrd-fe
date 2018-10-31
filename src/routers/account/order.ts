const index = (r: any) =>
    require.ensure([], () => r(require("src/pages/account/order/index")), "order");
const projectCreate = (r: any) =>
    require.ensure([], () => r(require("src/pages/account/order/projectCreate")), "order");
const projectCreateDetail = (r: any) =>
    require.ensure([], () => r(require("src/pages/account/order/projectCreateDetail")), "order");
const afterMarket = (r: any) =>
    require.ensure([], () => r(require("src/pages/account/order/afterMarket")), "order"); //售后申请
const quick = (r: any) =>
    require.ensure([], () => r(require("src/pages/account/order/quick")), "order"); //快捷下单
const mineOrder = (r: any) =>
    require.ensure([], () => r(require("src/pages/account/order/mineOrder")), "order"); //我的订单
const orderDetail = (r: any) =>
    require.ensure([], () => r(require("src/pages/account/order/orderDetail")), "order"); //订单详情
const cart = (r: any) => require.ensure([], () => r(require("src/pages/account/order/cart")), "Cart"); //我的购物车
const settleCart = (r: any) =>
    require.ensure([], () => r(require("src/pages/account/order/settleCart")), "settleCart"); //结算购物车
const collect = (r: any) =>
    require.ensure([], () => r(require("src/pages/account/order/collect")), "order"); //我的收藏
const history = (r: any) =>
    require.ensure([], () => r(require("src/pages/account/order/history")), "order"); //我的浏览记录
export default [
    {
        path: "order",
        name: "order",
        component: index,
        redirect: { name: "projectCreate" },
        children: [
            {
                path: "afterMarket",
                name: "afterMarket",
                component: afterMarket
            },
            {
                path: "quick",
                name: "quick",
                component: quick
            },
            {
                path: "cart",
                name: "cart",
                component: cart
            },
            {
                path: "settleCart",
                name: "settleCart",
                component: settleCart
            },
            {
                path: "collect",
                name: "collect",
                component: collect
            },
            {
                path: "history",
                name: "history",
                component: history
            },
            {
                path: "",
                name: "projectCreate",
                component: projectCreate
            },
            {
                path: "project/:id",
                name: "projectCreateDetail",
                component: projectCreateDetail
            },
            {
                path: "mine",
                name: "mineOrder",
                component: mineOrder
            },
            {
                path: "orderDetail/:id",
                name: "orderDetail",
                component: orderDetail
            }
        ]
    }
];
