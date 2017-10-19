/**
 * 该文件主要用来导出接口相关方法
 */

import API      from './api-urls';          // 接口URL
import Resource from './resource';          // 接口封装
import model    from './model';            // error model

/* 登录注册相关接口 */
export const login          = new Resource(API.login, model.Login);                    // 登录接口
export const register       = new Resource(API.register, model.Register);              // 注册接口
export const logout         = new Resource(API.logout);                                 // 注销接口

/* 关于我们 */
export const news           = new Resource(API.news);

/* 新闻 */
export const recruitments   = new Resource(API.recruitments);

/* 行业链接 */
export const industryLink   = new Resource(API.industryLink);                           // 获取行业链接
export const jobs           = new Resource(API.jobs, model.Job);                      // 提交简历

/* 文档列表(荣誉资质和合作伙伴) */
export const documents      = new Resource(API.documents);

/* 系统展示 */
export const systemDemonstrations = new Resource(API.systemDemonstrations);             // 获取案例展示
export const systems        = new Resource(API.systems);                                // 获取系统展示

/* 案例展示 */
export const caseDemon      = new Resource(API.caseDemontration);                       // 案例展示列表
