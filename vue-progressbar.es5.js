'use strict';
module.exports.install = function (Vue, options) {
  var progressHolder = null;
  Vue.prototype.$progress = {
    setHolder: function setHolder(it) {
      this.progressHolder = it;
    },
    start: function start(time) {
      var _this = this;

      if (time == undefined) {
        time = 3000;
      }
      this.progressHolder.percent = 0;
      this.progressHolder.options.show = true;
      this.progressHolder.options.canSuccess = true;
      var cut = 10000 / Math.floor(time);
      var timer = setInterval(function () {
        _this.increase(cut * Math.random());
        if (_this.progressHolder.percent > 95) {
          _this.finish();
          clearInterval(timer);
        }
      }, 100);
    },
    set: function set(num) {
      this.progressHolder.options.show = true;
      this.progressHolder.options.canSuccess = true;
      this.progressHolder.percent = Math.floor(num);
    },
    get: function get(num) {
      return Math.floor(this.progressHolder.percent);
    },
    increase: function increase(num) {
      this.progressHolder.percent = this.progressHolder.percent + Math.floor(num);
    },
    decrease: function decrease(num) {
      this.progressHolder.percent = this.progressHolder.percent - Math.floor(num);
    },
    finish: function finish() {
      var _this2 = this;

      this.progressHolder.percent = 100;
      setTimeout(function () {
        _this2.progressHolder.options.show = false;
      }, 800);
    },
    failed: function failed() {
      var _this3 = this;

      this.progressHolder.options.canSuccess = false;
      this.progressHolder.percent = 100;
      setTimeout(function () {
        _this3.progressHolder.options.show = false;
      }, 800);
    }
  };
};
