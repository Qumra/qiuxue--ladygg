angular.module("myApp")
    .factory("urlAPI", function () {
        return {
            //登陆
            login: function () {
                return '/a/a/login';
            },
            //退出登陆
            logout: function () {
                return '/a/a/doLogout'
            },
            //account列表
            account: function (id) {
                if (id === undefined) {
                    id = "";
                }
                return '/a/a/account/' + id;
            },
            //role列表
            roleAll: function (id) {
                if (id === undefined) {
                    id = "";
                }
                return '/a/a/role/' + id;
            },
            //修改PW密码
            password: function () {
                return '/a/a/account/password';
            },
            //获取所有模块
            moduleAll: function (id) {
                if (id === undefined) {
                    id = "";
                }
                return '/a/a/module/' + id;
            },
            //user列表（用户详情）
            userAll: function (id) {
                if (id === undefined) {
                    id = "";
                }
                return '/a/a/user/' + id;
            },
            //put冻结or解冻
            userFreeze: function (id) {
                return '/a/a/user/status/' + id;
            },
            //视频列表，查看、编辑单个视频
            videoAll: function (id) {
                if (id === undefined) {
                    id = "";
                }
                return '/a/a/video/' + id;
            },
            //put视频上架or下架
            videoUpDown: function (id) {
                return '/a/a/video/status/' + id;
            },
            //获取(新增、删除)老师信息
            teacherAll: function (id) {
                if (id === undefined) {
                    id = "";
                }
                return '/a/a/teacher/' + id;
            },
            //图片上传
            imgLoad: function (modules) {
                return '/a/a/upload/' + modules
            },
            //获取文章列表
            articleList: function () {
                return '/a/a/article';
            },
            //put文章上架or下架
            articleUpDown: function (id) {
                return '/a/a/article/status/' + id;
            },
            //文章列表，查看、编辑单个视频
            articleAll: function (id) {
                if (id === undefined) {
                    id = "";
                }
                return '/a/a/article/' + id;
            },
            //获取所有模块权限
            moduleALL: function () {
                return '/a/a/module/all'
            }
        }
    })