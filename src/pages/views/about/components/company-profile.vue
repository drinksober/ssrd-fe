<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ path: '/about' }") 关于我们
                el-breadcrumb-item 公司简介
        .about-wrap.mt10
            h3.about-title.p15 公司简介
            div.p15
                 p.about-content-text 深圳市盛世润达智能科技有限公司成立于2006年，注册资金1000万，是一家全国最早专注于数字化建筑工地技术研发、系统集成、工程服务的高新技术产业公司之一。
                 div.img-wrap
                    img(src="~assets/robt.png")
                 p.about-content-text 公司多年来，通过自身努力、勤奋与探索，打造出一批各个技术领域的资深工程师和一支技术精湛的标准化施工队伍。目前公司正职员工60余人，拥有自主知识产权及软件开发团队，其中软件开发团队分为硬件开发、互联网+平台开发、常规监控门禁软件开发、塔吊防碰撞开发等方向，具备系统独立开发能力及定制化配套服务能力。同时公司配备1000多平米多功能、复合式办公场地，场地内设有系统功能展示厅、多仓位存储的物流调配室、员工活动室等，为工程有效实施、员工高效办公提供可靠保证。
                 p.about-content-text 公司项目案例已达200个左右，涵盖广东、广西、福建、海南、江西、陕西等多个省份，深知建筑工地其环境特殊，后期变更多等情况，不仅对系统的技术方案、施工工艺、施工质量提出了高要求，而且其售后服务也是重中之重，因此多年来公司始终以服务第一、诚信第一的经营理念打造完善的售后体系，以保证用户放心无忧的使用。   
                 p.about-content-text 我们坚持以“推动数字化建筑工地进程”为企业使命，为客户量身定制全方位数字化、智能化系统解决方案，并提供优质的服务，成为您最贴心、最放心的助手。
        .about-wrap.mt10
            h3.about-title.p15 公司优势
            div.p15
                 p.about-content-text 1、公司拥有自己的研发部及软件著作权，其人员均具有丰富的工作经验，可为客户量身定制各种需求，以保证系统的先进性实用性。
                 p.about-content-text 2、公司经营多年，已培养出技术精湛的标准化施工队伍，以保证工程质量及工期。
                 p.about-content-text 3、公司一直专注于全方位数字化建筑工地系统解决方案多年，深入了解建筑工地的特性，可向贵司交“钥匙工程”，目前主要涉及视频监控系统、实名制劳务管理系统、塔吊防碰撞系统、升降机安全管理系统、环境监测系统、综合布线系统、远程视频会议系统、车辆管理系统、LED屏显示系统、食堂消费系统等多个系统，各系统统一安装及维护可大大降低用户的整体成本。
        .about-wrap.mt10
            h3.about-title.p15 目前公司正在倾力打造两个大数据平台
            div.p15
                 h3.about-title.p10 1、智慧工地平台
                 p.about-content-text 此平台是集视频监控、门禁管理、塔吊及升降机管理、环境监测、车辆管理、实测实量等业务模块一体的多功能集成平台，并配套开发手机移动端（如微信、APP等）。通过资源整合，用户只需登陆一个地址即可了解每个工地每个系统的运行状况，解决了由于系统多，后台地址多而导致的登陆繁琐，大大提高了工作效率，降低了管理成本。如图：
                 div.img-wrap
                    img(src="~assets/智慧工地.png")
                 h3.about-title.p10 2、互联网+平台
                 p.about-content-text   此平台集客户需求、系统设计、工程销售、售后服务、在线查询为一体的网络服务平台。同时配套开发手机移动端（如微信、APP等），给客户提供更高效、更便捷的服务：通过大数据，实现工程透明化、精细化管理，实现网上网下互动；我司将工程实施团队和售后服务团队融合进互联网+平台让客户通过PC端或移动端实时掌控项目实时进度及维护进度；每个项目从立项开始到整个项目完结，都能通过平台清晰的直观的看到各事项的完成情况及相关电子文件的存档，可永久性保存。
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
@Component
export default class CompanyProfile extends Vue
{
}
</script>
<style lang="scss">
    
</style>
