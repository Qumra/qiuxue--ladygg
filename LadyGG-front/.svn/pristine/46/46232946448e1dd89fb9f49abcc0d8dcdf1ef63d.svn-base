angular.module("myApp").controller('MODDetailCtrl',
    function ($state, moduleRes) {
        /***********
         **常用数据**
         ***********/
        var vm = this;
        vm.params = $state.params;
        /***********
         **模块数据**
         ***********/
        getmodule = function () {
            moduleRes.moduleLook(vm.params.id).then(res => {
                console.log(res);
                if (res.data.code === 0) {
                    vm.module = res.data.data;
                    vm.moduleName = vm.module.moduleName;
                    vm.sortId = vm.module.sortId;
                    vm.moduleUrl = vm.module.moduleUrl;
                    vm.parentId = vm.module.parentId;
                }
            })
        }
        //新增页面
        if (vm.params.Cstatus === '1') {
            vm.title = "新增模块";
        } //编辑页面
        else if (vm.params.Cstatus === '2') {
            vm.title = "编辑模块";
            getmodule();
        }
        /***********    
         **确定取消**
         ***********/
        //新增编辑
        vm.decide = function () {
            // let modData
            // if (vm.params.id === undefined) {
            //     modData = {
            //         moduleName: vm.moduleName,
            //         moduleUrl: vm.moduleUrl,
            //         parentId: +vm.parentId,
            //         sortId: +vm.sortId,
            //         // url: vm.url
            //     }
            // } else {
            //     modData = {
            //         id: +vm.params.id,
            //         moduleName: vm.moduleName,
            //         moduleUrl: vm.moduleUrl,
            //         parentId: +vm.parentId,
            //         sortId: +vm.sortId,
            //         // url: vm.url
            //     }
            // }
            let modData = {
                id: +vm.params.id,
                moduleName: vm.moduleName,
                moduleUrl: vm.moduleUrl,
                parentId: +vm.parentId,
                sortId: +vm.sortId,
                // url: vm.url
            }
            if (vm.params.Cstatus === '1') {
                moduleRes.moduleAdd(modData).then(res => {
                    console.log(res)
                    if (res.data.code === 0) {
                        alert("新增模块成功");
                        $state.go('backstage.MOD');
                    } else if (res.data.code === -9006) {
                        alert("不能新增同名模块");
                    }
                }).catch(err => {
                    console.log(err);
                });
            } //编辑
            else if (vm.params.Cstatus === '2') {
                moduleRes.modulePut(vm.params.id, modData).then(res => {
                    console.log(res);
                    if (res.data.code === 0) {
                        alert("编辑模块成功");
                        $state.go('backstage.MOD');
                    }
                }).catch(err => {
                    console.log(err);
                });
            };
        }
        //取消返回
        vm.gobay = function () {
            if (vm.params.Cstatus === "1") {
                let delMessage = confirm("确定退出新增页面？");
                if (delMessage === true) {
                    $state.go('backstage.MOD');
                };
            } else if (vm.params.Cstatus === "2") {
                let delMessage = confirm("确定取消编辑文章内容？");
                if (delMessage === true) {
                    $state.go('backstage.MOD');
                };
            };
        };
    })