(function (window) {
  'use strict';

  var transitionManager = new Vue({
      el: "#transitionManagerContainer",

      data: {
          contentReady : false,
          //interval: 2000,
          //frame: 12,
          //likeThatTop: 0,
          //likeThatEl: null,
          //showWeLike: false,
          //showTenets: false,
          //weLike: null
      },

      created: function created () {
          //this.throttledOnScroll = _.throttle(this.onScroll, 40);

          //window.addEventListener('scroll', this.throttledOnScroll);
      },

      destroyed: function destroyed () {
          //window.removeEventListener('scroll', this.throttledOnScroll);
      },

      mounted: function mounted () {
        //this.weLike = document.getElementById("we-like-that");
        //this.tenets = document.getElementById("tenets");
        setTimeout(this.onReady, 800);
      },

      computed: {
      },

      components: {
          //"hello-form": form
      },

      methods: {
          onScroll: function (ev, arg) {
              //if (this.isWeLikeOnScreen())
                  //this._showWeLike();

              //if (this.isTenetsOnScreen())
                  //this._showTenets();
          },

          //isWeLikeOnScreen: function () {
              //var offset = this.weLike.offsetTop;
              //return window.scrollY >= (offset * 0.6);
          //},

          //isTenetsOnScreen: function () {
              //var offset = this.tenets.offsetTop;
              //return window.scrollY >= (offset * 0.95);
          //},

          onReady: function () {
             this.contentReady = true;
             TweenLite.to("#content", 0.5, { opacity: 1 });
          },

          //_showWeLike: function (ev) {
              //this.showWeLike = true;
          //},

          //_showTenets: function (ev) {
              //this.showTenets = true;

              //var cardOpts = {
                  //top: 0,
                  //opacity: 1,
                  //ease: Sine.easeOut
              //};

              //var dur = 0.60;

              //var tl = new TimelineLite();

              //tl.to("#card-empowerment",    dur, cardOpts);
              //tl.to("#card-social-good",    dur, cardOpts);
              //tl.to("#card-sustainability", dur, cardOpts);
              //tl.play();
          //},

          //arrowClick: function () {
              //var tl = new TimelineLite();

              //tl.to(window, 1, {
                  //scrollTo: "#we-like-that",
                  //ease: Sine.easeOut
              //});

              //tl.call(this._showWeLike);

              //tl.play();
          //},
      }
  });

})(this);
