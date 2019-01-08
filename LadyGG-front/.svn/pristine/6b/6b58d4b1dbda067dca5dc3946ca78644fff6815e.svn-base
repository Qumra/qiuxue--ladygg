angular.module("myApp").controller('RLCtrl',
    function ($state, moduleRes) {
        /***********
         **常用数据**
         ***********/
        var vm = this;
        vm.params = $state.params;
        //获取角色列表
        getRole = function () {
            moduleRes.roleAll(vm.params).then(res => {
                if (res.data.code === 0) {
                    vm.role = res.data.data;
                    vm.total = res.data.total;
                    vm.Tpage = Math.ceil(vm.total / 10);
                }
            }).catch(err => {
                console.log(err);
            });
        };
        getRole();
        /***************   
         **新增编辑删除**
         ***************/
        //新增
        vm.add = function () {
            vm.Cstatus = 1;
            $state.go('backstage.RLDetail', {
                Cstatus: vm.Cstatus
            });
        };
        //编辑
        vm.edit = function (id) {
            vm.Cstatus = 2;
            $state.go('backstage.RLDetail', {
                id: id,
                Cstatus: vm.Cstatus
            });
        };
        //删除
        vm.del = function (id) {
            console.log(id)
            let delMessage = confirm("确定删除选此角色？");
            if (delMessage === true) {
                moduleRes.roleDel(id).then(res => {
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
        /***********
         **分页跳转**
         ***********/
        //分页
        vm.maxSize = 5;
        vm.pagechang = function () {
            $state.go('backstage.RL', {
                page: vm.params.page
            }, {
                reload: true
            })
        };
        //分页跳转
        vm.submit = function () {
            $state.go('backstage.RL', {
                page: vm.params.inputPage,
            }, {
                reload: true
            });
        };
    });