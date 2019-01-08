angular.module("myApp").controller('articleDetailCtrl', function (imageRes, $state, classify_a, contentRes, ) {
    //富文本编辑器
    // var E = window.wangEditor
    // var editor = new E('#editor')
    // editor.create()

    /***********
            **常用数据**
            ***********/
    var vm = this;
    vm.params = $state.params;
    //分类select
    vm.classifySelect = classify_a;
    //图片
    vm.u = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544383788319&di=8a2c1a6a4122de4384f9b5610d1dcd81&imgtype=0&src=http%3A%2F%2Fwww.corp001.com%2Ftemplates%2Fdefault%2Fshop%2Fimages%2Ferrors.jpg";
    vm.vvsrc = vm.u;
    /***************
     **查看编辑新增**
     ***************/
    if (vm.params.Cstatus === "1") {
        vm.articleTitle = "文章查看"
        vm.if = false;
        vm.disabled = true;
        vm.button = "返回";
        vm.con = "保存";
        getDetail()
    } else if (vm.params.Cstatus === "2") {
        vm.articleTitle = "文章编辑";
        vm.if = true;
        vm.disabled = false;
        vm.button = "取消";
        vm.con = "修改";
        getDetail()
    } else if (vm.params.Cstatus === "3") {
        vm.articleTitle = "文章新增";
        vm.if = true;
        vm.disabled = false;
        vm.button = "返回";
        vm.con = "保存";
        getDetail()
    }
    //列表请求
    function getDetail() {
        contentRes.articleLook(vm.params.id).then(res => {
            console.log(res)
            if (res.data.code === 0) {
                vm.ov = true;
                vm.Detail = res.data.data;
                vm.title = vm.Detail.title;
                vm.summary = vm.Detail.summary;
                vm.classify = vm.Detail.classify.toString();
                vm.vvsrc = vm.Detail.coverUrl;
                vm.vimgUrl = vm.Detail.coverUrl;
                vm.author = vm.Detail.author;
                vm.content = vm.Detail.content;
            } else {
                console.log(res.data.message);
            }
        }).catch(err => {
            console.log("请求服务器失败，请检查原因后重试")
        });
    };

    //图片上传
    vm.vload = function () {
        console.log(234);
        let modules = 'article';
        vm.vpro = 60;
        vm.vupload = "上传中";
        console.log(vm.vfile);
        imageRes.imgLoad(modules, vm.vfile).then(res => {
            if (res.data.code === 0) {
                vm.vpro = 100;
                console.log("请求成功");
                vm.vupload = "上传成功";
                vm.vimgUrl = res.data.imgUrl;
                vm.loaddisabled = true;
            } else {
                vm.vpro = 70;
                vm.vupload = "上传异常，请检查异常原因后再试"
            }
        }).catch(err => {
            console.log("上传失败");
            vm.vpro = 0;
            vm.vupload = "上传失败";
            alert("上传失败，请确认图片大小不能大于2MB，或者其他原因")
        })
    }

    vm.vdel = function () {
        vm.vname = "";
        vm.vsize = "";
        vm.vpro = undefined;
        vm.vimgUrl = "";
        vm.loaddisabled = true;
        vm.vupload = "请选择上传图片";
        vm.vvsrc = vm.u;
    }
    //图片删除
    vm.del = function () {
        vm.name = "";
        vm.size = "";
        vm.pro = undefined;
        vm.loaddisabled = true;
        vm.imgUrl = "";
        vm.upload = "请选择上传图片";
        vm.vsrc = vm.u
    }

    /***********    
         **确定取消**
         ***********/
        //b编辑or新增
         //b编辑or新增
         vm.decide = function () {
            let articleData = {
                id: vm.params.id,
                title: vm.title,
                classify: vm.classify,
                coverUrl: vm.vimgUrl,
                summary: vm.summary,
                content: vm.content,
                author:vm.author
            } //编辑
            if (vm.params.Cstatus === "2") {
                contentRes.articlePut(vm.params.id, articleData).then(res => {
                    if (res.data.code === 0) {
                        console.log("编辑成功")
                        alert("内容修改成功")
                        $state.go('backstage.articleList');
                    } else {
                        console.log(res.data.message);
                    }
                }).catch(err => {
                    console.log("请求服务器失败，请检查原因后重试")
                });
            } //新增
            else if (vm.params.Cstatus === "3") {
                contentRes.articleAdd(articleData).then(res => {
                    if (res.data.code === 0) {
                        alert("保存成功")
                        $state.go('backstage.articleList');
                    } else {
                        console.log(res.data.message);
                    }
                }).catch(err => {
                    console.log("请求服务器失败，请检查原因后重试")
                });
            }
        };

    
    //取消
    vm.gobay = function () {
        if (vm.params.Cstatus === "1") {
            $state.go('backstage.articleList');
        } else if (vm.params.Cstatus === "2") {
            let delMessage = confirm("确定取消编辑文章内容？");
            if (delMessage === true) {
                $state.go('backstage.articleList');
            }
        } else if (vm.params.Cstatus === "3") {
            let delMessage = confirm("确定退出新增页面？");
            if (delMessage === true) {
                $state.go('backstage.articleList');
            }
        }
    }
})