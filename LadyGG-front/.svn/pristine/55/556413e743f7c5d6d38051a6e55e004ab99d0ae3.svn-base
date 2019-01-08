angular.module("myApp").controller('videoListCtrl',
    function ($state, contentRes, classify, grade, subject, videoStatus, $rootScope) {
        /***********
         **常用数据**
         ***********/
        var vm = this;
        vm.params = $state.params;
        //分类(类别）数据
        vm.classifySelect = classify;
        //年级数据
        vm.gradeSelect = grade;
        //科目数据
        vm.subjectSelect = subject;
        //状态数据
        vm.videoStatusSelect = videoStatus;
        /***********
         **列表请求**
         ***********/
        function getList() {
            contentRes.videoList(vm.params).then(res => {
                if (res.data.code === 0) {
                    //列表数据
                    vm.video = res.data.data;
                    //分页数据
                    vm.total = res.data.total;
                    vm.Tpage = Math.ceil(vm.total / 10);
                } else {
                    console.log(res.data.message);

                }
            }).catch(res => {
                console.log("请求服务器失败，请检查原因后重试")
            });
        };
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
                $state.go('backstage.videoList', vm.params, {
                    reload: true
                })
            }
        };
        //重置
        vm.reset = function () {
            $state.go('backstage.videoList', $rootScope.reset(vm.params), {
                reload: true
            })
        };
        /***********
         **分页跳转**
         ***********/
        //分页
        vm.maxSize = 5;
        vm.pagechang = function () {
            $state.go('backstage.videoList', {
                page: vm.params.page
            }, {
                reload: true
            })
        };
        //分页跳转
        vm.submit = function () {
            $state.go('backstage.videoList', {
                page: vm.params.inputPage,
            }, {
                reload: true
            })
        };
        /***********
         **编辑上架**
         ***********/
        //查看
        vm.examine = function (id) {
            vm.Cstatus = 1;
            $state.go('backstage.videoDetail', {
                id: id,
                Cstatus: vm.Cstatus
            })
        };
        //编辑
        vm.edit = function (id) {
            vm.Cstatus = 2;
            $state.go('backstage.videoDetail', {
                id: id,
                Cstatus: vm.Cstatus
            })
        };
        //新增
        vm.add = function () {
            vm.Cstatus = 3;
            $state.go('backstage.videoDetail', {
                Cstatus: vm.Cstatus
            })
        };
        //上架or下架
        vm.UpDown = function (id) {
            contentRes.videoUpDown(id).then(res => {
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
    });