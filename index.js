module.exports = {

    name: "P5 Template",

    directory: false,

    params: ["ProjectName"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "index.html", sourceTemplateFile: "index.template"},
          { destinationFile: "scripts/sketch.js", sourceTemplateFile: "scripts/sketch.template"},
          { destinationFile: "styles/style.css", sourceTemplateFile: "styles/style.template"},
          { destinationFile: ".jshintrc", sourceContentFile: ".jshintrc"},
          { destinationFile: "libraries/p5.js", sourceContentFile: "node_modules/p5/lib/p5.js"},
          { destinationFile: "libraries/p5.min.js", sourceContentFile: "node_modules/p5/lib/p5.min.js"},
          { destinationFile: "libraries/p5.dom.js", sourceContentFile: "node_modules/p5/lib/addons/p5.dom.js"},
          { destinationFile: "libraries/p5.dom.min.js", sourceContentFile: "node_modules/p5/lib/addons/p5.dom.min.js"},
          { destinationFile: "libraries/p5.sound.js", sourceContentFile: "node_modules/p5/lib/addons/p5.sound.js"},
          { destinationFile: "libraries/p5.sound.min.js", sourceContentFile: "node_modules/p5/lib/addons/p5.sound.min.js"}
        ]
      });

    }

};
