// Compiled using marko@4.5.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = ({
    onInput: function (input) {
        this.state = { checked: input.checked === true };
    },
    isChecked: function () {
        return this.state.checked === true;
    },
    setChecked: function (newChecked) {
        this.state.checked = newChecked;
    },
    toggle: function () {
        this.state.checked = !this.state.checked;
    },
    getData: function () {
        return this.input.data;
    },
    handleClick: function () {
        var newChecked = !this.state.checked;
        var defaultPrevented = false;
        this.emit('toggle', {
            checked: newChecked,
            data: this.getData(),
            preventDefault: function () {
                defaultPrevented = true;
            }
        });
        if (!defaultPrevented) {
            this.state.checked = newChecked;
        }
    }
}),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-webpack$1.0.0/src/components/app-checkbox/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_keyAttr = require("marko/src/components/taglib/helpers/markoKeyAttr"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    marko_attr = marko_helpers.a,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    app_button_template = marko_loadTemplate(require.resolve("../app-button")),
    app_button_tag = marko_loadTag(app_button_template);

function render(input, out, __component, component, state) {
  var data = input;

  var classNames=[
      'app-checkbox',
      input['class'],
      state.checked && 'checked'
  ];

  app_button_tag({
      class: classNames,
      renderBody: function renderBody(out) {
        out.w("<span class=\"app-checkbox-icon\"></span><span" +
          marko_attr("data-marko-key", marko_keyAttr("checkboxLabel", __component)) +
          ">");

        include_tag({
            _target: input.label || input.renderBody
          }, out, __component, "1");

        out.w("</span>");
      }
    }, out, __component, "button", [
    [
      "click",
      "handleClick"
    ]
  ]);
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      "./style.less",
      {
          type: "require",
          path: "./"
        }
    ],
    tags: [
      "marko/src/taglibs/core/include-tag",
      "../app-button"
    ]
  };
