(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"visual.jpg", id:"visual"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.visual = function() {
	this.initialize(img.visual);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,326,90);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1F2F2").s().p("AgNAoIAAgMIANAAIAAhDIAOAAIAABPg");
	this.shape.setTransform(173.3,8.6,1.607,1.607);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AggAbIAAgMIApAAIABgJQAAgUgUAAIgNABIAAgMIAOgBQAiAAAAAgIgBAJIAJAAIAAAMg");
	this.shape_1.setTransform(165.8,10.7,1.607,1.607);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1F2F2").s().p("AgMAoIAAhPIANAAIAABDIAMAAIAAAMg");
	this.shape_2.setTransform(158.4,8.6,1.607,1.607);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1F2F2").s().p("AgVAoIAAgMIAhAAIAAhDIAPAAIAABPgAgKAUIgQg5IAPgCIAOA7g");
	this.shape_3.setTransform(148.9,8.5,1.607,1.607);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1F2F2").s().p("AAEAmQgoAAAAgiQAAgGAEgJIAPgDQgDAJAAAIQAAAMAGAGQAHAFANAAIAQAAIAAgnIAPAAIAAAzgAAEgeQABgDACgCQACgCADAAQAIAAAAAHQAAAIgIAAQgHAAgBgIgAgMgeQAAgHAIAAQAFAAAAAHQAAADgBADQgBACgDAAQgIAAAAgIg");
	this.shape_4.setTransform(136.6,8.8,1.607,1.607);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1F2F2").s().p("AgGAoIAAhPIANAAIAABPg");
	this.shape_5.setTransform(122.6,8.6,1.607,1.607);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1F2F2").s().p("AgSAmIAAgMIAQAAIAAgnIANAAIAAAzgAAGgYQgCgCAAgEQAAgDACgCQACgCADAAQAHAAAAAHQAAADgCADQgCACgDAAQgDAAgCgCgAgOgeQAAgDADgCQACgCADAAQAGAAAAAHQAAADAAADQgCACgEAAQgIAAAAgIg");
	this.shape_6.setTransform(116.6,8.8,1.607,1.607);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1F2F2").s().p("AgfATQgDAJgNAAIgDAAIAAgMIAEAAQAFAAACgDQADgDAAgIIAAgTIAPAAIAAAUQAAAOAJAAQAIAAAAgNIAAgaIAMAAIAAAZQAAAHADAEQACACAIAAIAEAAIAAgOQAAgLgCgRIAOgCQADAQAAANIAAAPIALAAIAAAMIgiAAQgOAAgDgJQgDAKgMAAQgOAAgCgKg");
	this.shape_7.setTransform(105.5,10.5,1.607,1.607);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F1F2F2").s().p("AgMAoIAAhPIANAAIAABDIAMAAIAAAMg");
	this.shape_8.setTransform(95.4,8.6,1.607,1.607);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F1F2F2").s().p("AgYAWQAAgQARgFQgNgDAAgPQAAgNAIgGQAIgIANAAQAHAAAFABIgCAMQgFgCgFAAQgNAAgBAQQABAQATAAIAIAAIAAAKIgNAAQgTAAAAANQAAALARABQAIAAAIgCIABAMQgJABgLAAQgdAAAAgXg");
	this.shape_9.setTransform(87,13.5,1.607,1.607);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F1F2F2").s().p("AgdAnIAAgMIAMABQgGgFAAgLQAAgMAHgFQAJgJAMAAQAaAAAAAYIAAAdgAgIALQAAAQAPAAIAIAAIAAgPQABgOgMAAQgMAAAAANgAAAgZQgDgCABgDQgBgDADgDQAAgCADAAQADAAACACQADADAAADQAAAIgIAAQgDAAAAgDg");
	this.shape_10.setTransform(72.1,8.6,1.607,1.607);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F1F2F2").s().p("AgTAmIAAgMIAQAAIAAgnIANAAIAAAnIAKAAIAAAMgAACgeQAAgDADgCQABgCADAAQAIAAAAAHQAAAIgIAAQgHAAAAgIgAgPgeQAAgDADgCQABgCADAAQAIAAAAAHQAAADgCADQgCACgEAAQgHAAAAgIg");
	this.shape_11.setTransform(64.1,8.8,1.607,1.607);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1F2F2").s().p("AggAbIAAgMIAqAAIAAgJQAAgUgUAAIgNABIAAgMIAOgBQAiAAAAAgIAAAJIAIAAIAAAMg");
	this.shape_12.setTransform(55.6,10.7,1.607,1.607);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F1F2F2").s().p("AAAAmQgfAAAAgaQAAgMAIgGQAIgJAOAAQALAAALAEIAAAlIALAAIAAAMgAgQAKQAAAQAQAAIAHAAIAAgbQgFgCgFAAQgNAAAAANgAAAgYQAAgCAAgEQAAgDAAgCQACgCADAAQAHAAAAAHQAAAIgHAAQgDAAgCgCgAgTgeQAAgHAHAAQAIAAAAAHQAAADgCADQgCACgEAAQgHAAAAgIg");
	this.shape_13.setTransform(45.2,8.8,1.607,1.607);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F1F2F2").s().p("AgGAoIAAhPIANAAIAABPg");
	this.shape_14.setTransform(32.1,8.6,1.607,1.607);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F1F2F2").s().p("AgNAoIAAgMIANAAIAAhDIAOAAIAABPg");
	this.shape_15.setTransform(25.5,8.6,1.607,1.607);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F1F2F2").s().p("AACAbQgQAAgGgJQgDAJgMAAIgBAAIAAgMIACAAQAIAAAAgOQAAgKAIgJQAHgIAMAAQAbAAAAAaIAAAPIAJAAIAAAMgAgHgKQgEAFAAAFQAAAPAOAAIAKAAIAAgPQAAgPgNAAQgEAAgDAFg");
	this.shape_16.setTransform(17.4,10.6,1.607,1.607);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F1F2F2").s().p("AgrAdIAAgMIAPABQgDgDAAgFQAAgJAFgDQAHgFAKAAQASgBAAAWIAAADIAMAAIAAgBQAAgigeABQgLgBgOAFIgBgLQAMgEAPAAQArAAAAAtIAAAAIAJAAIAAAMgAgTAJQAAAJALAAIAHAAIAAgEQAAgOgJAAQgJAAAAAJg");
	this.shape_17.setTransform(4.5,10.3,1.607,1.607);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F1F2F2").s().p("AgJAlQgDgDAAgDQAAgIAHAAQAHAAgBAIQABADgCADQgBACgEAAQgDAAgBgCgAgTAOIAAgMIAPAAIAAgoIANAAIAAAoIALAAIAAAMg");
	this.shape_18.setTransform(-5.8,12.7,1.607,1.607);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F1F2F2").s().p("AgiAUQAAgKADgKIAPgBQgDAJAAALQAAAWAQAAQAMAAAAgWIAAhHIAPAAIAABDIALAAIAAAMIgMAAQgDAagYAAQgeAAAAghg");
	this.shape_19.setTransform(-14.5,10.7,1.607,1.607);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.2,2,195.8,18.8);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1F2F2").s().p("AgaAlQgDAIgMAAIgEAAIAAgLIAEAAQAGAAACgDQACgDAAgJIAAgTIAPAAIAAAVQAAANAJAAQAHAAAAgNIAAgZIAOAAIAAAZQAAAHACADQADADAHAAIAEAAIABgOQAAgNgDgQIAOgCQAEAPAAAPQAAAOgCAMIgVAAQgPAAgDgIQgFAJgKAAQgNAAgDgJgAAIgWQAAgIAHAAQAIAAAAAIQAAAHgIAAQgHAAAAgHgAgHgRQgCgCAAgDQAAgEACgCQACgCADAAQAGAAAAAIQAAAHgGAAQgDAAgCgCgAAAgmQAAgHAGAAQAHAAAAAHQAAAHgHAAQgGAAAAgHg");
	this.shape.setTransform(156.2,9.4,1.69,1.69);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AgrAdIAAgMIAKAAIAFABQgDgDAAgEQAAgJAFgEQAGgFAKAAQATAAAAAVIAAADIAMAAIAAgBQAAghgeAAQgKAAgOAEIgCgKQAPgFANAAQAqAAAAAtIAAAAIAJAAIAAAMgAgTAIQAAAJALAAIAHAAIAAgDQAAgOgKAAQgIABAAAHg");
	this.shape_1.setTransform(141.2,12.2,1.69,1.69);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1F2F2").s().p("AgXAoIABgMIAJABQANAAAAgQIAAg1IAMAAIAAAoIAMAAIAAAMIgMAAIAAAAQAAAdgaAAg");
	this.shape_2.setTransform(129.9,15.1,1.69,1.69);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1F2F2").s().p("AgGAnIAAhOIANAAIAABOg");
	this.shape_3.setTransform(118.4,10.4,1.69,1.69);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1F2F2").s().p("AgNAnIAAgLIANAAIAAhDIAOAAIAABOg");
	this.shape_4.setTransform(111.4,10.4,1.69,1.69);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1F2F2").s().p("AAbAbQgMAAgMgHQgNAHgWAAIgDAAIAAgMIAEAAQAOABAMgEQgOgMgJgDIABgKQARgNAOAAQAMAAAGAFQAGAFAAAJQAAAKgMAJQAIADAFAAIAHAAIAAAMgAgNgJQAFADAOALQAHgFAAgFQAAgKgLAAQgFAAgKAGg");
	this.shape_5.setTransform(103,12.5,1.69,1.69);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1F2F2").s().p("AgfAUQgDAIgNAAIgDAAIAAgMIADAAQAHAAABgDQADgCAAgJIAAgTIAPAAIAAAVQAAANAIAAQAJAAAAgNIAAgZIAMAAIAAAZQAAAHADACQACADAIAAIADAAIABgNQAAgNgDgQIAPgCQADAPAAAPIAAAOIALAAIAAAMIghAAQgQAAgCgIQgCAJgNAAQgNAAgDgJg");
	this.shape_6.setTransform(88.5,12.3,1.69,1.69);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1F2F2").s().p("AgiAUQAAgMADgIIAPAAQgDAIAAALQAAAWAQAAQAMAAAAgWIAAhHIAPAAIAABDIALAAIAAALIgMAAQgDAagZAAQgdABAAghg");
	this.shape_7.setTransform(74.1,12.6,1.69,1.69);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F1F2F2").s().p("AgcAaIAAgLIAqAAIAAgJQAAgJgFgFQgFgGgKAAIgNACIAAgNIAPgBQAhAAAAAgQAAAKgCAKg");
	this.shape_8.setTransform(56.5,12.6,1.69,1.69);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F1F2F2").s().p("AgBAfQAAgDABgCQABgDADAAQADAAADADQACACAAADQAAADgCACQgDADgDAAQgFAAAAgIgAgSAkQgCgCAAgDQAAgDACgCQACgDADAAQAIAAAAAIQAAAIgIAAQgDAAgCgDgAgWAOIAAgMIAVAAIAAgoIANAAIAAAoIALAAIAAAMg");
	this.shape_9.setTransform(47.8,14.7,1.69,1.69);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F1F2F2").s().p("AgXAoIABgMIAKABQAMAAAAgQIAAg1IANAAIAAAoIALAAIAAAMIgLAAIAAAAQAAAdgaAAg");
	this.shape_10.setTransform(39.9,15.1,1.69,1.69);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F1F2F2").s().p("AgJAfQAAgIAIABQAFgBAAAIQAAADgCACQgCADgBAAQgIAAAAgIgAgcAOIAAgMIAqAAIAAgHQAAgVgUAAIgNABIAAgMIAOgBQAiAAAAAhQAAAJgCAKg");
	this.shape_11.setTransform(32,14.7,1.69,1.69);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1F2F2").s().p("AghAVQAAgJAIgHQAFgEANgDQgOgMgJgDIABgLQASgNANAAQAYAAAAATQAAAMgNAJQAHACAHAAIAHAAIAAALIgJAAQgOAAgLgIIgMAHQgGAFAAAEQAAAKASAAIAQgBIAAAKQgJACgIAAQggABAAgVgAgPgXQAEACAOANQAIgGAAgGQAAgKgLAAQgEABgLAGg");
	this.shape_12.setTransform(21.4,14.9,1.69,1.69);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F1F2F2").s().p("AgSAmIAAgLIAQAAIAAgoIANAAIAAAzgAAEgdQAAgIAHAAQADAAADACQACACAAAEQAAADgCACQgDACgDAAQgHAAAAgHgAgLgYQgCgCAAgDQAAgIAHAAQAGAAAAAIQAAAHgGAAQgDAAgCgCg");
	this.shape_13.setTransform(6.9,10.6,1.69,1.69);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F1F2F2").s().p("AgMAnIAAhOIANAAIAABDIAMAAIAAALg");
	this.shape_14.setTransform(1.7,10.4,1.69,1.69);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F1F2F2").s().p("AgOAnIAAgMIAOAAIAAgoIAPAAIAAA0gAAAgeQAAgIAHAAQAIAAAAAIQAAADgCADQgCACgEAAQgHAAAAgIg");
	this.shape_15.setTransform(-6.2,10.5,1.69,1.69);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F1F2F2").s().p("AgNAfQAAgDADgCQACgCADAAQAFAAAAAHQAAAIgFAAQgIAAAAgIgAgfAfQAAgHAHAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgHAAAAgIgAAeAOIAAgaQAAgPgNAAIgHABIAAAoIgWAAQgpAAAAgfQAAgLADgHIAQgDQgEAJAAAKQAAANAGAFQAGAEAQAAIAIAAIAAgnIAUgCQAbAAAAAZIAAAQIAJAAIAAALg");
	this.shape_16.setTransform(-17.7,14.6,1.69,1.69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,1.5,191,20.6);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.visual();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,326,90);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A94B87").s().p("Ag+APIAAgdIB9AAIAAAdg");
	this.shape.setTransform(6.4,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A94B87").s().p("AgOBBIAAiBIAdAAIAACBg");
	this.shape_1.setTransform(6.4,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.7,13.1);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#838587").s().p("AgUAqIAAgMIASAAIAAgsIAPAAIAAA4gAAGgbQgCgCAAgDQAAgEACgDQADgDADABQAEgBACADQADADAAAEQAAADgDACQgCADgEAAQgDAAgDgDgAgMgbQgDgCAAgDQAAgEADgDQACgDADABQAHgBAAAKQAAAIgHAAQgDAAgCgDg");
	this.shape.setTransform(83.5,-20.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#838587").s().p("AgNAsIAAhXIAPAAIAABKIAMAAIAAANg");
	this.shape_1.setTransform(80.1,-20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#838587").s().p("AACAiQAAgIAJAAQAEAAACACQACADAAADQAAAEgCACQgCADgEAAQgJAAAAgJgAgQAiQgBgDADgDQADgCADAAQAIAAAAAIQAAAEgCACQgCADgEAAQgIAAAAgJgAgSAPIAAgNIAVAAIAAgsIAQAAIAAA5g");
	this.shape_2.setTransform(74.7,-17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#838587").s().p("AACAeQgSAAgGgKQgFAKgMAAIgBAAIAAgNIACAAQAKAAAAgPQAAgMAIgJQAJgKANAAQAdAAAAAdIAAARIAKAAIAAANgAgMAAQAAARAQAAIALAAIAAgQQAAgRgOAAQgNAAAAAQg");
	this.shape_3.setTransform(68.6,-19);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#838587").s().p("AgiAsIABgOIAHACIANABQAUAAAAgRIAAgCIgIAAQgiAAAAgbQAAgOAIgIQAJgKARAAQANAAALAEIAAAqIANAAIAAANIgNAAIAAAAQAAAOgJAJQgKAJgSAAgAgOgbQgEAFAAAHQAAAQASAAIAHAAIAAgfQgFgCgFAAQgHAAgEAFg");
	this.shape_4.setTransform(61,-17.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#838587").s().p("AgQArIAAgNIAQAAIAAgsIARAAIAAA5gAACgbQgCgDAAgEQAAgDACgDQADgCADAAQADAAADACQADADAAADQAAAEgDADQgCADgEgBQgDABgDgDg");
	this.shape_5.setTransform(54.3,-20.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#838587").s().p("AAiAeIAAgeQAAgIgDgEQgDgEgIAAIgJABIAAAtIgYAAQguAAAAgjQAAgKADgKIASgDQgFALAAAKQAAALAHAGQAIAHARAAIAIAAIAAgsIAYgCQAdAAAAAcIAAASIAKAAIAAANg");
	this.shape_6.setTransform(46.7,-19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6C6D6F").s().p("AgFAbQgBgFAGAAQACAAAAAFQAAAEgCAAQgGAAABgEgAAAAQQAAgFAEAAQAGAAAAAFQAAAGgGgBQgEABAAgGgAgNAQQABgFAFAAQAFAAAAAFQAAAGgFgBQgFABgBgGgAgVAHIAAgHIAfAAIAAgGQAAgQgOAAIgKABIAAgJIALAAQAZgBgBAZIgBANg");
	this.shape_7.setTransform(81.8,21.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6C6D6F").s().p("AgZAPQAAgJACgGIAMgBQgDAIAAAHQAAAQAMAAQAJAAAAgQIAAgzIAKAAIAAAvIAJAAIAAAJIgJAAQgCATgSABQgVAAgBgYg");
	this.shape_8.setTransform(77.1,20.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6C6D6F").s().p("AgJAdIAAgJIAJAAIAAgwIAKAAIAAA5g");
	this.shape_9.setTransform(70.3,19.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6C6D6F").s().p("AgOAcIAAgJIAMAAIAAgcIAJAAIAAAcIAIAAIAAAJgAACgVQAAgGAFAAQAGAAAAAGQAAAGgGgBQgFABAAgGgAgKgVQAAgGAFAAQAFAAAAAGQAAAGgFgBQgFABAAgGg");
	this.shape_10.setTransform(67.8,19.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6C6D6F").s().p("AggAcIAAgIIALAAIAAgdIALAAIAAACIgBALQAGgOANAAQARAAAAASIAAAMIAIAAIAAAIgAgEAEQgFAHgBAJIAYAAIAAgKQAAgLgIAAQgGAAgEAFgAABgWQAAgFAGAAQAGAAAAAFQAAAGgGAAQgGAAAAgGg");
	this.shape_11.setTransform(63.1,19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6C6D6F").s().p("AAAAXQAAgGADAAQAFAAAAAGQAAAFgFAAQgDAAAAgFgAgPAXQAAgGAGAAQAGAAAAAGQAAAFgGAAQgGAAAAgFgAgQAKIAAgJIAQAAIAAgcIAJAAIAAAcIAIAAIAAAJg");
	this.shape_12.setTransform(58.2,21.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6C6D6F").s().p("AAAAXQgBgGAEAAQAFAAABAGQgBAFgFAAQgEAAABgFgAgPAXQABgGAFAAQAGAAgBAGQABAFgGAAQgFAAgBgFgAgQAKIAAgJIAQAAIAAgcIAJAAIAAAcIAIAAIAAAJg");
	this.shape_13.setTransform(54.9,21.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6C6D6F").s().p("AgaAhQgJgHABgNQAAgJACgEIALgCQgDAHABAHQAAAKAFAEQAHAEANAAIAOgBIAAgLIgGAAQgUgBgBgRQABgJAFgFQAFgHAKAAQAJABAJADIAAAaIAIAAIAAAJIgIAAIAAATIgbABQgSAAgJgFgAAAAAQAAAJALAAIAFAAIAAgTQgDgCgEAAQgJAAAAAMgAAKggQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGgAgCggQABgFADAAQAGAAgBAFQABAGgGAAQgDAAgBgGg");
	this.shape_14.setTransform(49.6,20.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6C6D6F").s().p("AgEAdIAAg5IAJAAIAAA5g");
	this.shape_15.setTransform(42.3,19.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6C6D6F").s().p("AgJAdIAAgJIAJAAIAAgwIAKAAIAAA5g");
	this.shape_16.setTransform(39.3,19.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6C6D6F").s().p("AABAUQgLAAgEgHQgDAHgIAAIgBAAIAAgJIABAAQAHAAAAgKQAAgHAFgGQAGgHAIAAQATABAAASIAAALIAHAAIAAAJgAgHAAQAAALAJAAIAIAAIAAgKQAAgLgKAAQgHAAAAAKg");
	this.shape_17.setTransform(35.5,20.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6C6D6F").s().p("AgfAVIAAgJIAHAAIADABQgCgCAAgDQAAgHAFgBQAEgFAHAAQANAAAAAPIAAACIAJAAIAAgBQAAgXgVAAQgLAAgHADIgBgIQAJgDALAAQAfAAAAAgIAGAAIAAAJgAgOAGQAAAHAIAAIAFAAIAAgDQAAgKgHAAQgGAAAAAGg");
	this.shape_18.setTransform(29.6,20.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6C6D6F").s().p("AgJAXQABgGAFAAQAEAAAAAGQAAAFgEAAQgFAAgBgFgAgOAKIAAgJIAMAAIAAgcIAJAAIAAAcIAIAAIAAAJg");
	this.shape_19.setTransform(24.9,21.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6C6D6F").s().p("AgYAPQAAgJACgGIALgBQgCAIgBAHQABAQALAAQAJAAgBgQIAAgzIAMAAIAAAvIAIAAIAAAJIgJAAQgCATgSABQgWAAABgYg");
	this.shape_20.setTransform(20.9,20.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A94B87").s().p("AgWAXQgJgKAAgNQAAgMAKgKQAJgJAMAAQANAAAKAJQAJAKAAAMQAAANgJAKQgKAJgNAAQgMAAgKgJgAgOgOQgGAGAAAIQAAAJAGAGQAGAHAIAAQAJAAAGgHQAGgGAAgJQAAgIgGgGQgGgHgJAAQgIAAgGAHgAADAPIgDgMIgBAAIAAAMIgJAAIAAgeIALAAQALAAAAAJQAAAGgGABIACAEIAFAKgAgBgBIABAAQADAAAAgEQAAgDgDAAIgBAAg");
	this.shape_21.setTransform(92,-13.2);

	this.instance = new lib.Group();
	this.instance.setTransform(3.8,18.2,1,1,0,0,0,6.5,6.4);
	this.instance.alpha = 0.27;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A94B87").s().p("AgOB/IAAixIAeAAIAACxgAgOhdIAAghIAeAAIAAAhg");
	this.shape_22.setTransform(82.7,-0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A94B87").s().p("ABUBbIAAhwQAAgXgLgJQgPgMgrAAIgIAAQg1AAgTAMQgSALAAAhIAABkIggAAIAAiyIAeAAIAAAfIAAAAQAJgUATgHQARgHAgAAIAuAAQApAAAUATQARAPAAAbIAAB4g");
	this.shape_23.setTransform(62.9,3.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A94B87").s().p("AgkBbQgqAAgUgTQgRgPAAgbIAAh4IAgAAIAABwQAAAUAIAJQALALAeADIAdABQA1AAASgMQASgLAAghIAAhkIAgAAIAACyIgdAAIAAgfIgBAAQgIATgUAIQgRAHggAAg");
	this.shape_24.setTransform(33.6,3.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A94B87").s().p("AgWBcQgyAAgYgOQgegRAAgqIAAglQAAgqAegRQAYgOAyAAIAsAAQAzAAAZAOQAdARAAAqIAAAlQAAAqgdARQgZAOgzAAgAhMg5QgSALAAAdIAAAiQAAAeASALQAOAJAfAAIA/AAQAfAAAOgJQASgLAAgeIAAgiQAAgdgSgLQgOgKgfAAIg/AAQgfAAgOAKg");
	this.shape_25.setTransform(3.8,3.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A94B87").s().p("ACnBbIAAhzQAAgpg8AAIgYAAQgoAAgOAPQgLALAAAZIAABpIgeAAIAAhrQAAgbgMgLQgNgLglAAIggAAQg8AAAAAtIAABvIgfAAIAAiyIAdAAIAAAVIABAAQAKgOAPgFQANgFAZAAIA0AAQAvAAAMAhQAQghA3AAIAmAAQAnAAAWAQQAVAQAAAeIAAB3g");
	this.shape_26.setTransform(-34.2,3.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A94B87").s().p("AgOB/IAAixIAdAAIAACxgAgOhdIAAghIAdAAIAAAhg");
	this.shape_27.setTransform(-62.2,-0.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A94B87").s().p("AgEB/IAAjhIiIAAIAAgcIEZAAIAAAcIhvAAIAADhg");
	this.shape_28.setTransform(-81.1,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.instance},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.2,-24.8,190.6,49.7);


// stage content:
(lib._728x90 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_94 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(2));

	// Layer 3
	this.instance = new lib.Symbol3("synched",0);
	this.instance.setTransform(622.4,44.8,0.267,0.267,0,0,0,77.8,7.5);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 177, 99, 170, 0)];
	this.instance.cache(-22,0,200,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({regX:77.9,scaleX:1,scaleY:1,x:612.4},15).wait(2));

	// Layer 1
	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.setTransform(605.1,45,0.286,0.286,0,0,0,71.5,7.7);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 177, 99, 170, 0)];
	this.instance_1.cache(-29,0,195,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({scaleX:1,scaleY:1,x:615.1},14).to({_off:true},47).wait(17));

	// logo
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(390.5,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:381.7,y:43},13).to({_off:true},82).wait(1));

	// bg
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.setTransform(163,45,1,1,0,0,0,163,45);
	this.instance_3.alpha = 0;

	this.instance_4 = new lib.visual();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},12).to({state:[{t:this.instance_4}]},1).to({state:[]},82).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},12).to({_off:true},1).wait(83));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,-22.8,485.8,157.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;