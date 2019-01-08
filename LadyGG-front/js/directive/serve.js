angular.module("myApp")
    .factory("timeHour", function () {
        return {
            Hour: function (time) {
                let h = Math.floor(time / 3600);
                let m = Math.floor(time % 3600 / 60);
                let s = Math.floor(time % 60);
                let t = h > 0 ? h + "'" : "";
                t += m + '"'
                t += s;
                return t;
            }
        }
    })