angular.module("myApp").controller('MODCtrl',
    function ($state, moduleRes) {
        /***********
         **常用数据**
         ***********/
        let vm = this;
        vm.params = $state.params;
        /***********
         **模块数据**
         ***********/
        getmodule = function () {
            moduleRes.moduleAll(vm.params).then(res => {
                console.log(res);
                if (res.data.code === 0) {
                    vm.module = res.data.data;
                    vm.total = res.data.total;
                    vm.Tpage = Math.ceil(vm.total / 10);
                }
            })
        }
        getmodule();
        /***************   
         **新增编辑删除**
         ***************/
        //新增
        vm.add = function () {
            vm.Cstatus = 1;
            $state.go('backstage.MODDetail', {
                Cstatus: vm.Cstatus
            });
        };
        //编辑
        vm.edit = function (id) {
            vm.Cstatus = 2;
            $state.go('backstage.MODDetail', {
                id: id,
                Cstatus: vm.Cstatus
            });
        };
        //删除
        vm.del = function (id) {
            console.log(id)
            let delMessage = confirm("确定删除选此模块？");
            if (delMessage === true) {
                moduleRes.moduleDel(id).then(res => {
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
            $state.go('backstage.MOD', {
                page: vm.params.page
            }, {
                reload: true
            })
        };
        //分页跳转
        vm.submit = function () {
            $state.go('backstage.MOD', {
                page: vm.params.inputPage,
            }, {
                reload: true
            });
        };
    })