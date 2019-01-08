angular.module("myApp").controller('ACCtrl',
    function ($state, moduleRes, $rootScope) {
        /***********
         **常用数据**
         ***********/
        var vm = this;
        vm.params = $state.params;
        /***********
         **账号列表**
         ***********/
        getaAccount = function () {
            moduleRes.account(vm.params).then(res => {
                    console.log(res)
                    if (res.data.code === 0) {
                        vm.account = res.data.data;
                        vm.total = res.data.total;
                        vm.Tpage = Math.ceil(vm.total / 10);
                    }
                })
                .catch(err => {
                    console.log(err);
                    console.log("请求服务器失败，请检查原因后重试")
                });
        }
        getaAccount();
        getRole = function () {
            moduleRes.roleAll().then(res => {
                // console.log(res);
                if (res.data.code === 0) {
                    //角色列表
                    vm.roleSclect = res.data.data;
                    if (vm.params.roleId === undefined) {
                        vm.params.roleId = vm.roleSclect[0].roleId;
                    } else {
                        vm.params.roleId = parseInt(vm.params.roleId);
                    }
                }
            }).catch(err => {
                console.log(err);
                console.log("请求服务器失败，请检查原因后重试")
            });
        }
        getRole();
        /***********
         **搜索重置**
         ***********/
        //搜索
        vm.search = function () {
            vm.params.page = "";
            $state.go('backstage.AC', vm.params, {
                reload: true
            })
        }
        //重置
        vm.reset = function () {
            $state.go('backstage.AC', $rootScope.reset(vm.params), {
                reload: true
            })
        }
        /***********
         **分页跳转**
         ***********/
        //分页
        vm.maxSize = 5;
        vm.pagechang = function () {
            $state.go('backstage.AC', {
                page: vm.params.page
            }, {
                reload: true
            });
        };
        //分页跳转
        vm.submit = function () {
            $state.go('backstage.AC', {
                page: vm.params.inputPage,
            }, {
                reload: true
            });
        };
        /****************
         **新增编辑删除**
         ****************/
        //新增
        vm.add = function () {
            vm.Cstatus = 1;
            $state.go('backstage.ACDetail', {
                Cstatus: vm.Cstatus
            });
        };
        //编辑
        vm.edit = function (id) {
            vm.Cstatus = 2;
            $state.go('backstage.ACDetail', {
                id: id,
                Cstatus: vm.Cstatus
            });
        };
        //删除
        vm.del = function (id) {
            console.log(id)
            let delMessage = confirm("确定删除选此用户？");
            if (delMessage === true) {
                moduleRes.accountDel(id).then(res => {
                        // console.log(res);
                        alert('删除用户成功');
                        $state.reload();
                    })
                    .catch(err => {
                        console.log(err);
                        console.log("请求服务器失败，请检查原因后重试")
                    });
            };
        };
    });