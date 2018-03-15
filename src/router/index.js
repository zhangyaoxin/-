import Vue from 'vue'
import Router from 'vue-router'
// 点位主模块
import SiteOwner from '@/components/site/siteOwner'   //点位租金信息
import AdComission from '@/components/site/adCommission'  //广告分佣
// 广告主模块
import Personal from '@/components/ad/personal/personal' //广告主登录
import Yanzheng from '@/components/ad/personal/yanzheng' //验证
import AdMsg from '@/components/ad/advert/adMsg' //查看广告
import MineWallet from '@/components/ad/advert/mineWallet' //我的钱包
import Recharge from '@/components/ad/recharge/recharge' //充值详情
import CreatAd from '@/components/ad/creatAd/creatAd' // 创建广告

Vue.use(Router)


export default new Router({
  routes: [
    // {path: '/',name: 'headerDiv',component: headerDiv},
    {path: '/site',name: 'SiteOwner',component: SiteOwner}, //点位租金信息
    {path: '/ad',name: 'AdComission',component: AdComission},  //点位广告分佣
    {path: '/personal',name: 'Personal',component: Personal},  // 广告主登录
    {path: '/yanzheng',name: 'Yanzheng',component: Yanzheng},  //验证
    {path: '/admsg',name: 'AdMsg',component: AdMsg},  //广告
    {path: '/mineWallet',name: 'MineWallet',component: MineWallet},  //我的钱包
    {path: '/recharge',name: 'Recharge',component: Recharge}, //充值详情
    {path: '/creatad',name: 'CreatAd',component: CreatAd}, // 创建广告

  ]
})

// 公共头部
// Vue.component('header-item', {
//   props: ['message'],
//   template: `<header class="evaluate-header"><div><span>{{message}}</span></div></header>`
// })
