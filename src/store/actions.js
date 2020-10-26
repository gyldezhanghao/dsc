//actions  定义方法来提交mutations中定义的方法
import {
    getHomeSwipe,
    getCategoryList,
    getGoodsList,
    getGoodsDetail,
    searchFn,
} from "@/api/index";
const actions = {
    async actGetSwipeDatas(context) {
        const result = await getHomeSwipe();
        context.commit("getSwipeDatas", result.data);
    },
    async actgetCategoryDatas(context) {
        const result = await getCategoryList();
        context.commit("getCategoryDatas", result.data)
    },
    actGetUserInfo(context, data) {
        context.commit("getuserInfo", data);
    },
    async getGoodsList(context, data) {
        const result = await getGoodsList(data);
        context.commit("getGoodsList", result.data)
    },
    async getGoodsDetails(context, params) {
        const result = await getGoodsDetail(params)
        context.commit("getGoodsDetails", result.data[0])
    },
    async searchKeywords(context, params) {
        const result = await searchFn(params)
        console.log(result);
        context.commit("searchKeywords", result.data)
    }
}

export default actions