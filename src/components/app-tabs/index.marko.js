// Compiled using marko@4.5.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = ({
    onInput: function (input) {
        var activeIndex = 0;
        var tabs = input.tabs;
        if (tabs) {
            tabs.forEach(function (tab, i) {
                if (tab.active) {
                    activeIndex = i;
                }
            });
        }
        this.state = { activeIndex: activeIndex };
    },
    setActiveIndex: function (newActiveIndex) {
        this.state.activeIndex = newActiveIndex;
    },
    handleTabClick: function (tabIndex, event) {
        this.setActiveIndex(tabIndex);
        event.preventDefault();
    }
}),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-webpack$1.0.0/src/components/app-tabs/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_forEachProp = require("marko/src/runtime/helper-forEachProperty"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    marko_attr = marko_helpers.a,
    marko_classAttr = marko_helpers.ca;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"app-tabs\"><ul class=\"tab-nav\">");

  marko_forEachProp(input.tabs, function(tabIndex, tab) {
    out.w("<li" +
      marko_classAttr([
        "tab",
        (tabIndex === state.activeIndex) && "active"
      ]) +
      "><a href=\"#\"" +
      marko_attr("data-marko", {
        onclick: __component.d("handleTabClick", [
            tabIndex
          ])
      }, false) +
      ">");

    include_tag({
        _target: tab.label
      }, out, __component, "4");

    out.w("</a></li>");
  });

  out.w("</ul><div style=\"clear: both\"></div><div class=\"tab-panes\">");

  marko_forEachProp(input.tabs, function(tabIndex, tab) {
    out.w("<div" +
      marko_classAttr([
        "tab-pane",
        (tabIndex === state.activeIndex) && "active"
      ]) +
      ">");

    include_tag({
        _target: tab.renderBody
      }, out, __component, "8");

    out.w("</div>");
  });

  out.w("</div></div>");
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
      "marko/src/taglibs/core/include-tag"
    ]
  };
