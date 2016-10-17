(function (window) {
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

    components: {
      "hello-form": form
    },

    methods: {
      arrowClick: function () {
        console.info("woo");
      }
    }
  });

})(this);
