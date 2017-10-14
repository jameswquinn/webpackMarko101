// Compiled using marko@4.5.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-webpack$1.0.0/src/components/app-overlay/index.marko", function() {
      return module.exports;
    }),
    marko_component = require("./component"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_keyAttr = require("marko/src/components/taglib/helpers/markoKeyAttr"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    app_button_template = marko_loadTemplate(require.resolve("../app-button")),
    app_button_tag = marko_loadTag(app_button_template),
    marko_styleAttr = marko_helpers.sa,
    marko_classAttr = marko_helpers.ca;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div" +
    marko_classAttr([
      "app-overlay",
      state.visible && "visible"
    ]) +
    "><div class=\"app-overlay-mask\"" +
    marko_attr("data-marko", {
      onclick: __component.d("handleMaskClick")
    }, false) +
    "></div><div class=\"app-overlay-container\"" +
    marko_styleAttr({
      width: state.width
    }) +
    "><div class=\"app-overlay-body\"" +
    marko_attr("data-marko-key", marko_keyAttr("body", __component)) +
    ">");

  include_tag({
      _target: state.body
    }, out, __component, "3");

  out.w("</div><div class=\"app-overlay-footer\">");

  app_button_tag({
      label: "Cancel",
      size: "large",
      variant: "secondary"
    }, out, __component, "5", [
    [
      "click",
      "handleCancelButtonClick"
    ]
  ]);

  out.w(" &nbsp; ");

  app_button_tag({
      label: "Done",
      size: "large",
      variant: "primary"
    }, out, __component, "6", [
    [
      "click",
      "handleDoneButtonClick"
    ]
  ]);

  out.w("</div></div></div>");
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
