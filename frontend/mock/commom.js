'use strict';

module.exports = {

  'GET /leftMenu': function (req, res) {
    setTimeout(function () {
      res.json({
            items: [
                {
                    icon: 'el-icon-setting',
                    index: 'readme',
                    title: '自述'
                },
                {
                    icon: 'el-icon-menu',
                    index: 'user',
                    title: '用户管理',
                    subs: [
                        {
                            index: 'list',
                            title: '用户列表'
                        }
                    ]
                },
                {
                    icon: 'el-icon-menu',
                    index: 'news',
                    title: '新闻管理',
                    subs: [
                        {
                            index: 'public',
                            title: '发布新闻'
                        },
                        {
                            index: 'headlines',
                            title: '设置头条'
                        },
                        {
                            index: 'hadpublic',
                            title: '已发新闻'
                        },
                        {
                            index: 'commom',
                            title: '评论管理'
                        }
                    ]
                },
                {
                    icon: 'el-icon-star-on',
                    index: 'menus',
                    title: '导航栏管理',
                    subs: [
                        {
                            index: 'newstype',
                            title: '新闻类型'
                        },
                        {
                            index: 'nav',
                            title: '导航栏'
                        }
                    ]
                },
                {
                    icon: 'el-icon-star-on',
                    index: 'statistics',
                    title: '权限管理',
                    subs: [
                        {
                            index: 'browse',
                            title: '浏览量统计'
                        },
                        {
                            index: 'user',
                            title: '用户统计'
                        }
                    ]
                },
                {
                    icon: 'el-icon-star-on',
                    index: 'statistics',
                    title: '统计分析',
                    subs: [
                        {
                            index: 'browse',
                            title: '浏览量统计'
                        },
                        {
                            index: 'user',
                            title: '用户统计'
                        }
                    ]
                }
            ]
        }); }, 500);
  },
}  