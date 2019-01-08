angular.module("myApp").controller('RLDetailCtrl',
    function ($state, moduleRes) {
        /***********
         **常用数据**
         ***********/
        var vm = this;
        vm.params = $state.params;
        //获取模块列表
        getmodule = function () {
            moduleRes.moduleAll().then(res => {
                // console.log(res)
                if (res.data.code === 0) {
                    //主菜单
                    vm.roleSelect = [];
                    //菜单数据
                    let menu = res.data.data;
                    //1级菜单
                    let group = {};
                    //2级菜单
                    let second = {};
                    //遍历出1级菜单
                    angular.forEach(menu, i => {
                        if (i.parentId === 0) {
                            group = {
                                id: i.id,
                                title: i.moduleName,
                                submodule: [],
                                checked: false
                            };
                            //添加进菜单
                            vm.roleSelect.push(group);
                        };
                    });
                    // 遍历出2级菜单
                    angular.forEach(vm.roleSelect, o => {
                        angular.forEach(menu, i => {
                            if (o.id === i.parentId) {
                                second = {
                                    title: i.moduleName,
                                    id: i.id,
                                    checked: false
                                }
                                //添加进1级菜单
                                o.submodule.push(second);
                            };
                        });
                    });
                };
                // console.log(vm.roleSelect)
            }).catch(err => {
                console.log(err)
            })
        };
        getmodule();
        //获取角色模块列表
        getroleModule = function () {
            moduleRes.roldeLook(vm.params.id).then(res => {
                if (res.data.code === 0) {
                    vm.id = res.data.data.id;
                    vm.roleName = res.data.data.roleName;
                    //主菜单
                    vm.roleSelects = [];
                    //菜单数据
                    let menu = res.data.data.data;
                    console.log(menu)
                    //遍历出角色拥有的模块权限
                    angular.forEach(menu, i => {
                        if (i.moduleName) {
                            group = {
                                moduleName: i.moduleName,
                                checked: true
                            }
                            //添加进菜单
                            vm.roleSelects.push(group);
                        };
                    });
                    //编辑权限渲染
                    //1级渲染
                    angular.forEach(vm.roleSelect, i => {
                        angular.forEach(vm.roleSelects, o => {
                            if (i.title === o.moduleName) {
                                i.checked = o.checked
                            }
                        })
                    });
                    //2级渲染
                    angular.forEach(vm.roleSelect, i => {
                        angular.forEach(i.submodule, o => {
                            angular.forEach(vm.roleSelects, p => {
                                if (o.title === p.moduleName) {
                                    o.checked = p.checked
                                }
                            })
                        });
                    });
                }
            }).catch(err => {
                console.log(err);
            })
        }
        /************    
         **全选/取消**
         ************/
        //父级全选
        vm.fatherChange = function () {
            angular.forEach(vm.roleSelect, i => {
                angular.forEach(i.submodule, o => {
                    o.checked = i.checked
                });
            });
        }
        //子级判断父级全选
        vm.sonChange = function (index) {
            let parent = vm.roleSelect[index];
            let selCount = 0;
            let unSelCount = 0;
            angular.forEach(parent.submodule, i => {
                if (i.checked === true) {
                    selCount++;
                } else if (i.checked === false) {
                    unSelCount++;
                };
                if (selCount === parent.submodule.length) {
                    parent.checked = true;
                }
                if (unSelCount > 0) {
                    parent.checked = false;
                }
            })
        }
        //新增页面
        if (vm.params.Cstatus === '1') {
            vm.title = "新增";
        };
        //编辑页面
        if (vm.params.Cstatus === '2') {
            vm.title = "编辑";
            getroleModule();
        };
        /***********    
         **确定取消**
         ***********/
        //编辑or新增
        vm.decide = function () {
            //请求数据
            let roleData = {
                id: +vm.params.id,
                roleName: vm.roleName,
                data: []
            };
            angular.forEach(vm.roleSelect, i => {
                if (i.checked == true) {
                    roleData.data.push(i.id)
                }
                angular.forEach(i.submodule, o => {
                    if (o.checked == true) {
                        roleData.data.push(o.id)
                    }
                })
            });
            console.log(roleData)
            //新增
            if (vm.params.Cstatus === '1') {
                moduleRes.roleAdd(roleData).then(res => {
                    console.log(res)
                    if (res.data.code === 0) {
                        alert("新增用户成功");
                        $state.go('backstage.RL');
                    } else if (res.data.code === -8006) {
                        alert("不能新增同名用户");
                    }
                }).catch(err => {
                    console.log(err);
                });
            } //编辑
            else if (vm.params.Cstatus === '2') {
                moduleRes.rolePut(vm.params.id, roleData).then(res => {
                    console.log(res);
                    if (res.data.code === 0) {
                        alert("编辑用户成功");
                        $state.go('backstage.RL');
                    }
                }).catch(err => {
                    console.log(err);
                });
            };
        };
        //取消返回
        vm.gobay = function () {
            if (vm.params.Cstatus === "1") {
                let delMessage = confirm("确定退出新增页面？");
                if (delMessage === true) {
                    $state.go('backstage.RL');
                };
            } else if (vm.params.Cstatus === "2") {
                let delMessage = confirm("确定取消编辑文章内容？");
                if (delMessage === true) {
                    $state.go('backstage.RL');
                };
            };
        };
    });