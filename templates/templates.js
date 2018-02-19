(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['elevator'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "	<div id=elevator"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + " class=\"elevator\">\r\n		<div id=elevatorFloor"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + " class=\"elevatorFloor\"> "
    + alias2(alias1((depth0 != null ? depth0.floor : depth0), depth0))
    + " </div>\r\n		<div id=elevatorDoor"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + " class=\"elevatorDoor\"> Closed </div>\r\n	</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();