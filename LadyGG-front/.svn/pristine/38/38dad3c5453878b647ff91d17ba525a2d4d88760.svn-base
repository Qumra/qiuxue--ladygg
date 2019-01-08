angular.module("myApp").controller('articleListCtrl', function ( $state,contentRes, classify_a, videoStatus, $rootScope) {
 /***********
         **常用数据**
         ***********/
        var vm = this;
        vm.params = $state.params;
        //分类(类别）数据
        vm.classifySelect = classify_a;
        //状态数据
        vm.articleStatusSelect = videoStatus;

        function getList() {
            contentRes.articleList(vm.params).then(res => {
                //列表数据
                vm.article = res.data.data;
                console.log(res)
                console.log(vm.article)
                //分页数据
                vm.total = res.data.total;
                vm.Tpage = Math.ceil(vm.total / 10);
            }).catch(res => {
                console.log("请求失败")
            });
        }
        getList();
        

        /***********
         **搜索重置**
         ***********/
        //搜索
        vm.search = function () {
            if (vm.params.praiseBegin > vm.params.praiseEnd) {
                alert("最小点赞数不能大于最大点赞数")
            } else if (vm.params.collectionBegin > vm.params.collectionEnd) {
                alert("最小收藏数不能大于最大收藏数")
            } else {
                vm.params.page = "";
                $state.go('backstage.articleList', vm.params, {
                    reload: true
                })
            }
        }
        //重置
        vm.reset = function () {
            $state.go('backstage.articleList', $rootScope.reset(vm.params), {
                reload: true
            })
        }

        /***********
         **分页跳转**
         ***********/
        //分页
        vm.maxSize = 5;
        vm.pagechang = function () {
            $state.go('backstage.articleList', {
                page: vm.params.page
            }, {
                reload: true
            })
        };

          //分页跳转
          vm.submit = function () {
            $state.go('backstage.articleList', {
                page: vm.params.inputPage,
            }, {
                reload: true
            });
        };
         /***********
         **编辑上架**
         ***********/
           //上架or下架
           vm.UpDown = function (id) {
            contentRes.articleUpDown(id).then(res => {
                    if (res.data.code === 0) {
                        $state.reload();
                    } else {
                        console.log(res.data.message);
                    }
                })
                .catch(res => {
                    console.log("请求服务器失败，请检查原因后重试")
                })
        };

         //查看
         vm.examine = function (id) {
            vm.Cstatus = 1;
            $state.go('backstage.articleDetail', {
                id: id,
                Cstatus:vm.Cstatus
            })
        };
         //编辑
         vm.edit = function (id) {
            vm.Cstatus = 2;
            $state.go('backstage.articleDetail', {
                id: id,
                Cstatus: vm.Cstatus
            })
        };
        //新增
        vm.add = function () {
            vm.Cstatus = 3;
            $state.go('backstage.articleDetail', {
                Cstatus: vm.Cstatus
            })
        };
})