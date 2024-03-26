// Define a custom Handlebars helper for conditionals


const hbs = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

const handlebars = hbs.create({
  helpers: {
    // Custom helper to compare two values
    ifCond: function (v1, v2, options) {
      if (v1 === v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
  },
  // Allow insecure prototype access
  // This may be required depending on your setup
  handlebars: allowInsecurePrototypeAccess(hbs.handlebars)
});
