(function (window) {
  'use strict';

  var CustomSelect = {
    template: "#custom-select",

    props: ["opts"],

    data: function data () {
      return {
        selection: "",
      };
    },

    methods: {
      onChange: function onChange () {
        this.$emit("select", this.selection);
      }
    }
  };

  var form = {
    template: "#hello-form",

    data: function () {
      return {
          name: "",
          industry: "",
          productType: "",

          contactName: "",
          contactEmail: "",
          contactPhone: "",
          contactWebsite: "",

          productTypes: [
              "healthcare",
              "legal",
              "fintech",
              "e-sports",
              "wearables",
              "startup",
              "other"
          ],

          displayForm: false,
          hideButton: false,
          showName: false,
          showIndustry: false,
          showProduct: false,
          showContact: false
      };
    },

    methods: {
      sayHello: function sayHello () {
        this.showName = true;
        this.hideButton = true;
        this.displayForm = true;
      },

      showNext: function showNext (ev) {
        console.log(ev);
      },

      _showIndustry: function showIndustry (ev) {
        this.showIndustry = true;
      },

      _showProduct: function showProduct () {
        this.showProduct = true;
      },

      _showContact: function () {
        this.showContact = true;
      },

      onSelect: function onSelect (arg) {
        console.info(arg);
        this.productType = arg;
      },

      submitForm: function submitForm () {
        console.log("Form submitted")

        this.showName     = false;
        this.showIndustry = false;
        this.showContact  = false;
        this.showProduct  = false;
        this.displayForm  = false;

        var inquiry = {
          company: this.name,
          industry: this.industry,
          product: this.productType,
          name: this.contactName,
          email: this.contactEmail,
          phone: this.contactPhone,
          website: this.contactWebsite
        }

        fetch("/inquiry", {
          method: "post",
          headers: new Headers({ "content-type": "application/json" }),
          body: JSON.stringify(inquiry)
        }).then(function (resp) {
          console.info(resp)
        }).catch(function (err) {
          console.error(err)
        })
      }
    },

    components: {
      "product-select": CustomSelect
    }
  };

  var transitionManager = new Vue({
      el: "#transitionManagerContainer",

      data: {
          contentReady : false,
          interval: 2000,
          frame: 12,
          likeThatTop: 0,
          likeThatEl: null,
          isOnScreen: false,
          weLike: null
      },

      created: function created () {
          this.throttledOnScroll = _.throttle(this.onScroll, 40);

          window.addEventListener('scroll', this.throttledOnScroll);
      },

      destroyed: function destroyed () {
          window.removeEventListener('scroll', this.throttledOnScroll);
      },

      mounted: function mounted () {
        this.weLike = document.getElementById("we-like-that");
        setTimeout(this.onReady, 600);
      },

      computed: {
      },

      components: {
          "hello-form": form
      },

      methods: {
          onScroll: function (ev, arg) {
              if (this.checkForOnScreen())
                  this.showStuff();
          },

          checkForOnScreen: function () {
              var offset = this.weLike.offsetTop;
              return window.scrollY >= (offset * 0.6);
          },

          onReady: function () {
             this.contentReady = true;
             TweenLite.to("#content", 0.5, { opacity: 1 });
          },

          showStuff: function (ev) {
              this.isOnScreen = true;
          },

          arrowClick: function () {
              var tl = new TimelineLite();

              tl.to(window, 1, {
                  scrollTo: "#we-like-that",
                  ease: Sine.easeOut
              });

              tl.call(this.showStuff);

              tl.play();
          },
      }
  });

})(this);
