angular.module("myApp").controller('ACDetailCtrl',
    function ($state, moduleRes) {
        /***********
         **常用数据**
         ***********/
        var vm = this;
        vm.params = $state.params;
        /***********
         **新增编辑**
         ***********/
        //获取角色列表
        getRole = function () {
            moduleRes.roleAll().then(res => {
                if (res.data.code === 0) {
                    //角色列表
                    vm.roleSclect = res.data.data;
                    vm.roleId == vm.roleSclect[0].roleId;
                }
            }).catch(err => {
                console.log(err);
                console.log("请求服务器失败，请检查原因后重试")
            });
        };
        //新增页面
        if (vm.params.Cstatus === '1') {
            vm.title = "新增账户";
            //角色列表
            getRole();
        };
        //编辑页面
        if (vm.params.Cstatus === '2') {
            vm.title = "编辑账户";
            //账号信息
            moduleRes.accountLook(vm.params.id).then(res => {
                // console.log(res);
                if (res.data.code === 0) {
                    getRole();
                    vm.account = res.data.data;
                    vm.accountName = vm.account.accountName;
                    vm.roleId = vm.account.roleId;
                }
            }).catch(err => {
                console.log(err);
            });
        };
        /***********    
         **确定取消**
         ***********/
        //编辑or新增
        vm.decide = function () {
            if (vm.password === vm.passwords) {
                vm.show = false;
                let accountData = {
                    id: vm.params.id,
                    accountName: vm.accountName,
                    roleId: vm.roleId,
                    password: vm.password
                };
                //新增
                if (vm.params.Cstatus === '1') {
                    moduleRes.accountAdd(accountData).then(res => {
                        console.log(res);
                        if (res.data.code === 0) {
                            alert("新增用户成功");
                            $state.go('backstage.AC');
                        }
                    }).catch(err => {
                        console.log("err")
                    })
                } //编辑
                else if (vm.params.Cstatus === '2') {
                    moduleRes.accountPut(vm.params.id, accountData).then(res => {
                        console.log(res);
                        if (res.data.code === 0) {
                            alert("编辑成功");
                            $state.go('backstage.AC');
                        }
                    })
                }
            } else {
                vm.show = true;
            }
        }
        //取消返回
        vm.gobay = function () {
            if (vm.params.Cstatus === "1") {
                let delMessage = confirm("确定退出新增页面？");
                if (delMessage === true) {
                    $state.go('backstage.AC');
                }
            } else if (vm.params.Cstatus === "2") {
                let delMessage = confirm("确定取消编辑文章内容？");
                if (delMessage === true) {
                    $state.go('backstage.AC');
                }
            }
        }
    })