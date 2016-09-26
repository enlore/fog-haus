(function (window) {
  var CustomSelect = {
    template: "#custom-select",

    props: ["opts"],

    data: function data () {
      return {
        selection: "",
      }
    },

    methods: {
      onChange: function onChange () {
        this.$emit("select", this.selection);
      }
    }
  }

  var form = new Vue({
    el: "#hello-form",

    data: {
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
          "wearables"
      ],

      displayForm: false,
      hideButton: false,
      showName: false,
      showIndustry: false,
      showProduct: false,
      showContact: false
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
        console.log("woo woo")
        this.showContact = true;
      },

      onSelect: function onSelect (arg) {
        console.info(arg);
        this.industry = arg;
      },

      submitForm: function submitForm () {
        console.log("Form submitted")
        this.showName     = false;
        this.showIndustry = false;
        this.showContact  = false;
        this.showProduct  = false;
        this.displayForm  = false;
      }
    },

    components: {
      "product-select": CustomSelect
    }
  });
})(this)
