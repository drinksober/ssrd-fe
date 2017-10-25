/**
 * API url集合
 */

import { apiUrl } from 'settings';

export default {
    // 登录注册相关接口
    login               :`${apiUrl}/login`,                                 // 登录接口
    logout               :`${apiUrl}/logout`,                               // 登出
    register            :`${apiUrl}/signup`,                                // 注册接口
    env                 :`${apiUrl}/env`,                                   // 获取系统配置

    // 新闻
    news                :`${apiUrl}/news`,                                  // 获取新闻

    // 关于我们
    recruitments        :`${apiUrl}/recruitments`,                          // 招聘
    jobs                :`${apiUrl}/jobs`,                                  // 提交简历

    // 行业链接
    industryLink        :`${apiUrl}/industryLinks`,                         // 获取行业链接

    // 文档列表(荣誉资质和合作伙伴)
    documents           :`${apiUrl}/documents`,                             // 获取行业链接

    // 系统展示
    systems             :`${apiUrl}/systems`,                               // 获取系统展示

    // 案例展示
    systemCase          :`${apiUrl}/systemCases`,                    // 获取案例展示
    faqs                :`${apiUrl}/faqs`,                                     // 获取常见问题解答
    opVideo             :`${apiUrl}/documents?source=2`,                                // 获取操作视频
    download            :`${apiUrl}/documents?source=3`,                                // 获取文档下载
    product             :`${apiUrl}/products`,                                // 获取产品
    collect             :`${apiUrl}/collects`                                // 收藏
};
