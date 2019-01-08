angular.module("myApp").controller('userListCtrl',
    function ($state, userRes, grade, freezestatus, $rootScope) {
        /***********
         **常用数据**
         ***********/
        var vm = this;
        vm.params = $state.params;
        //年级数据
        vm.gradeSelect = grade;
        //状态数据
        vm.userStatusSelect = freezestatus;
        /***********
         **列表请求**
         ***********/
        function getList() {
            userRes.userList(vm.params).then(res => {
                if (res.data.code === 0) {
                    console.log('请求成功')
                    //列表数据
                    vm.user = res.data.data;
                    //分页数据
                    vm.total = res.data.total;
                    vm.Tpage = Math.ceil(vm.total / 10);
                } else {
                    console.log(res.data.message);
                }
            }).catch(err => {
                console.log(err);
                console.log("请求服务器失败，请检查原因后重试")
            });
        }
        getList();
        /***********
         **搜索重置**
         ***********/
        //搜索
        vm.search = function () {
            if (vm.params.scoreBegin > vm.params.scoreEnd) {
                alert("最小逆袭豆不能大于最大逆袭豆")
            } else {
                vm.params.page = "";
                $state.go('backstage.userList', vm.params, {
                    reload: true
                })
            }
        }
        //重置
        vm.reset = function () {
            $state.go('backstage.userList', $rootScope.reset(vm.params), {
                reload: true
            })
        }
        /***********
         **冻结查看**
         ***********/
        //查看
        vm.examine = function (id) {
            $state.go('backstage.userDetail', {
                id: id
            })
        }
        //冻结or解冻
        vm.freeze = function (id) {
            userRes.userFreeze(id).then(res => {
                console.log("解冻or冻结成功")
                $state.reload();
            })
        }
        /***********
         **分页跳转**
         ***********/
        //分页
        vm.maxSize = 5;
        vm.pagechang = function () {
            $state.go('backstage.userList', {
                page: vm.params.page
            }, {
                reload: true
            })
        }
        //分页跳转
        vm.submit = function () {
            $state.go('backstage.userList', {
                page: vm.params.inputPage,
            }, {
                reload: true
            });
        }
    })