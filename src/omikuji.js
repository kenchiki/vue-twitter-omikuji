(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"omikuji_atlas_", frames: [[612,0,553,553],[555,555,446,567],[1167,0,553,553],[0,546,553,553],[0,0,610,544]]}
];


// symbols:



(lib.小槌 = function() {
	this.spriteSheet = ss["omikuji_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.おみくじ = function() {
	this.spriteSheet = ss["omikuji_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.亀 = function() {
	this.spriteSheet = ss["omikuji_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.鯛 = function() {
	this.spriteSheet = ss["omikuji_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.鳥居 = function() {
	this.spriteSheet = ss["omikuji_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.鳥居mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#082433").s().p("AAYByQgHgBgBgHQAAgHAIAAIAcABQAIAAABgCQABgCAAgNIAAivIhrAAQgHAAAAgIQAAgHAHAAICMAAQAHAAAAAIQAAAHgHAAIgKAAIAACvQAAAVgFAFQgFAGgUAAgAhXBwIgFgEQgGgEADgFQANgcALgmQACgIAIADIAGADQAGADgCAGQgJAigRAjQgCAEgEAAQgCAAgCgBgAgiBGQgHAAAAgIIAAhrQAAgIAHAAIBFAAQAIAAAAAIIAABWQAAAIgIAAIg2AAIAAANQAAAIgHAAgAgTAkIAoAAIAAhMIgoAAgAhGgHQgMgPgQgQQgFgFAEgFIABgCQAFgIAHAIIAcAdQAFAFgEAGIgCADQgDADgCAAQgDAAgDgDgAhChIQgLgNgNgNQgFgFAEgGIACgBQAEgHAGAGIAaAbQAEAFgEAFIgCADQgDACgCAAQgDAAgDgDg");
	this.shape.setTransform(4.8,-101.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#082433").s().p("ABcBxQgXgRgQgeQgRgegHgkIgKAAIAABdIAggKQAHgCACAIQAAAFgGADQgnAMgeAFQgHACgCgHQgBgHAIgBIAQgDIAAjHQAAgHAGAAIBUAAQAHAAAAAHIAABfQAAAGgHAAIgmAAQAFAaAHAQQAKgKAOgTQAEgGAGAFIACACQAFAFgEAFQgMASgSAPQAOAaARAPQAGAEgDAGIgCADQgCAEgEAAQgCAAgCgCgAATgMIA3AAIAAgkIg3AAgAATg9IA3AAIAAghIg3AAgAhlBoQgBgHAHgBIAhgKIAAhWIgeAAQgHAAAAgGQAAgHAHAAIAeAAIAAgiIgNAAQgHAAAAgHQAAgFAHAAIA1AAQAIAAAAAHQAAAFgIAAIgSAAIAAAiIAbAAQAIAAAAAIQAAAFgIAAIgbAAIAABPIAagKQAHgEACAJQAAAGgFACQguATgkAJIgDAAQgFAAgBgGgAhWA+IgIgiQgBgHAGgCIAEgCQAIgCACAHIAIAjQABAIgGACIgEABIgDABQgFAAgCgHgAgaA7IgDgBQgHgCACgHIAHgdQACgHAHACIAEABQAHABgCAFIgIAgQgCAGgEAAIgDgBgAhjgwQgDgBgBgFIAAgCQgCgFAEgFQAUgSARgZQADgFAGAAIAKAAQAFAAAFAGQAQAUAKAJQAFAFgCAFIAAACQgDAJgHgGQgQgOgRgWQgRAZgbAYQgDADgCAAIgBAAg");
	this.shape_1.setTransform(4.5,-134);

	this.instance = new lib.鳥居();
	this.instance.parent = this;
	this.instance.setTransform(-240,-214,0.787,0.787);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.鳥居mc, new cjs.Rectangle(-240,-214,480,428.1), null);


(lib.後光mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9EE7D6").s().p("AADARMANAAoBQkNBXkcAfgEgNAAoTMAM+goCMgEUAp3QkagdkQhYgA8MfiIcL/VIgBAAIABgBIgEABMgiBAYzQimjjh1kGMAmYgRJMgpHAIvQg7kVAAkbMAqJgADIABgCIgDAAMgiFgYuQCmjlDSi+IcQfQIAAgBIgDgCIADAAIAAAAIAAAAIAAABIABABIAAAAIAAgCIgCgCIABACIgBAAIAAgBMgEagp4QCpgSBzAAQBwAACkARMgESAp4IAAACIABAAIAAACIcI/VQDSC8CoDmMgiAAY1IgCgCIgBACIACAAMAqIgADIAAAFQAAEZg7EXMgpHgIsMAmZARHQh0EDinDmMgiDgYxIgCgBIcMfTQjUDAjzCMMgVFgkaIgDgEIgCAEIAAAAMgVCAkcQj3iOjRi9gAABALIAAgBIAAAAIAAAAgAAAAJIAAABIABAAIAAgDIAAgBIAAgCIAAADIgBABIAAAAgAAAAHIAAAAIAAgDIAAAAgEAmggRFQB1EFA8EVMgpHAIygEgpRgIiQA6kYB0kDMAmaAREgAgBAEIABAAIAAABgEAM+gn/QEPBYD2COMgVAAkcgEgVJgkVQDziOEQhZMANEAn/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.後光mc, new cjs.Rectangle(-270,-269.5,540,539.2), null);


(lib.鯛mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.鯛();
	this.instance.parent = this;
	this.instance.setTransform(-49.7,-52.9,0.199,0.199);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FED944","rgba(254,217,68,0.2)","rgba(254,217,68,0)"],[0,0.91,1],0,0,0,0,0,75).s().p("AkjKzQiGg5hohnQhohog5iHQg7iMAAiYQAAiYA7iLQA5iGBohoQBohoCGg5QCLg7CYAAQCYAACMA7QCHA5BoBoQBnBoA5CGQA7CLAACYQAACYg7CMQg5CHhnBoQhoBniHA5QiMA7iYAAQiYAAiLg7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.鯛mc, new cjs.Rectangle(-75,-75,150,150), null);


(lib.トップ見出しmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#402118").s().p("AgREzIgOgLQgOgLAKgNICojSIg2grQhABHg0AlQgyAjhAAUQgRAFgEgTIgDgLQgDgOAOgFQAqgPAmgbQAogcAxg0QA1g3BDhXQAJgMAQAKQBiA+BEAaQAUAIgHAQIgBADQgFAOgRgHQg6gZhVg0IhABPQA6ArBLA/QAOANgKAMQgKAMgPgNIghgcIisDQQgFAGgGAAQgFAAgHgFgAk2BaQgGgDgEgHIgHgPQgHgNAHgFQBAguBKhvIBEhmQAJgNAQAKQBJAyBLA4QAQALgJANIhaB4QgJANgPgLQg2gng7gpQg/BXhCArQgEADgFAAIgEAAgAiYhCIBXA9IBIhmQghgZg3gmgABkiWQhbhDhfhAQgQgLAJgNQAIgMAQALQBVA4BmBMQAQAMgKAMQgEAGgGAAQgGAAgIgGg");
	this.shape.setTransform(239.6,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#402118").s().p("AA+EwQgng+gShHQgRhHAEhGIgIgFIhLCRIBHASQASADgFARQgFALgPgDQhCgPhJgXQgQgFAFgPQAEgNAQAFIAQAGIBOibIgGgCQgRgIAHgOQAGgMARAIIAGAEIBijFQAHgOASAIQB0A8BsBAQARAKgIANQgGALgRgJQhgg5hegxIgYAtQBVAsBaA1QARAKgJANQgEAIgRgJQhRgwhdgxIgYAvQBOAoBeA2QAQAJgIAOQgEAIgRgKQhZgzhRgqIgZAvQBdAxBnA9QAPAJgIAOQgGAKgQgJQhFgphHgmQgDA/AMA0QAkgNAngWQAQgIAJAQIAFAKQAIAPgOAHQgqAWgtAMQAPAtASAfQAIAOgLAIIgEADQgFAEgFAAQgIAAgFgKgAjUCYQgJgBgIgEIhEgkQgPgIAGgNQAHgOAQAIQAfASARAHQAKAFAVgfQAMgSAig/IAIgMIACgFIgxgXQgHALgHAMQgIANgQgIIgNgHQgPgJAHgOQA2hfAZgvQAGgOARAIIBLAjIAqhZIhYgpQgRgIAGgOQAGgMARAHQBBAeA3AbQARAJgHAOIg2BwQgHAOgRgJIhLgkQgdA3gTAfIBTAnQANAIgHAOQgoBKgeAqQgTAdgQAJIgGABIgGgBg");
	this.shape_1.setTransform(184.3,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#402118").s().p("ABuEOIgQgHQgQgFAFgPIAHgTQiOg1iWgrIgFATQgFAPgQgFIgRgEQgQgFAEgPIAxi0QAEgPARAEIASAFQARAFgEAPIgmCEQA2APBGAWIA/jDQg+gVhPgWQgSgFAEgPIAmiJQAFgPASAFIATAFQASAGgFAPIgkB7QBEATAmANIA2ioQAFgPASAGIATAHQASAFgEAQIg5CnQBCAWAoAPIAsh5QAFgPASAHIATAHQARAHgFAOIgzCFQgGAOgRgGQg+gXhNgaIhBDDQA6ATA/AYIAwiCQAGgPARAHIARAHQARAGgGAPIhECvQgEALgJAAQgEAAgFgCg");
	this.shape_2.setTransform(122.4,-21.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B7EC1").s().p("AhBDuQg6gFgeguQgbgrAEhAQAGhLAejnQACgOARADIAZADQARADgDANQggDEgJBqQgEAwAQAeQATAkAwgCQAlgCAqgXQAdgPAggcQAegaAageQAJgLAKAHQALAIgIANQg5BahTAmQguAVgrAAIgKAAgABoglIgBAAQgRgDACgOIALg9QACgOASADIACABQAQADgCAOIgMA9QgCALgMAAIgFgBgAAwgvIgBAAQgRgDADgOIAKg9QACgOARADIACAAQASAEgDANIgLA9QgCALgMAAIgGAAg");
	this.shape_3.setTransform(63.9,-40.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B7EC1").s().p("ABUDrQgbgjgkgsQgug2grglIgigbQgTgPgFgLQgHgMAAgNQgBgNAGgLQAVghA2g4QAggfBUhOQANgNAOANIAQARQAMALgOALQhYBBhWBTQgWAVAAAOQAAANAXAPIAdAVQBmBLBEBZQAKAMgNAKIgTAPQgGAFgFAAQgHAAgGgHg");
	this.shape_4.setTransform(-2.7,-44.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B7EC1").s().p("AA0DaQgLgIAFgLQAZgxAOgpQAOgpAHgwQhVgZg0gCIgSA/QgVBBgdAmQgWAdgiAAQglABgOgoQgJgaAEgcQAEgcAQgaQASgfAhgTQAcgRAigHIAKhIQADgoAAgnQhDALhVARQgQAEgDgOIAAgBQgDgNAQgEQBsgWBYgNQAIgCAFAEQAFADAAAHQABBPgRBaQAfgBAXACQAmAEAtAOQAHg7gEhIQgBgOAQgBIAZgBQARgBAAAOQADBIgOBOQAnANAcAMQAOAGgGANIgJARQgHAOgOgJQgWgMgfgPQgWBbg7BWQgFAIgHAAQgEAAgEgDgAh4ASQgWARgKAXQgUArALAgQAFAQAJAAQAHAAAIgNQAVgfAQg1IAOg1QgUAFgTAOg");
	this.shape_5.setTransform(-65.2,-38.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1B7EC1").s().p("AhWDfQghgNgOgiQgOgjAVgtQAQgiAgghIg1iTIhXAgQgQAHgFgOQgFgNAQgHIBXggIgTg1QgGgQARgGIARgGQAQgFAFAQIATA1IBgggQARgFAEANQAFAOgRAFQglAMg7AUIAtCBQA4gvBAgOQBSgSArA1QApAzgMA4QgLA4g2AaQg8AehFgyQgKgHAIgMQAJgMALAHQA9AlAsgsQAVgWgCgpQgOhMhMAEQhCADg4AyIAjBoQAKAdgHAYQgIAZgZANQgRAJgSAAQgOAAgOgFgAhjBrQgOAeAIAbQAHASAQAHQARAHAOgJQAMgIACgNQACgLgEgSIgchMQgYAegIAQgADQhnQgsgVgcgDQgXgCgdAKQgPAEgDgIQgEgKAMgHQApgYAjgCQAkgDAtASQAPAGgGALIgKAXQgDAIgGACIgEAAQgEAAgFgCg");
	this.shape_6.setTransform(-129.8,-21.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1B7EC1").s().p("Ag+EzQgPgCAAgMQgEhEgRhRQgEgRATgCIAPgDQAQgBADAOQAQBNACBOQABARgTAAgACdC1QgIgNASgIIA7gbQAPgHAAgFQABgFgMgZIiclMQiBA9h0BAQgRAJgHgNQgIgNARgJQCmhbCehGQARgJAGAPQAHAOgSAHIgYALICYFOQASApgFAPQgGAOgqAUIg/AdQgFACgFAAQgIAAgFgJgAgGCkIhtjHQgIgOARgIQBRgtBKgkQARgIAHAOIBPCkQAHAOgQAIQg2Aag/AhIAOAaQAIAOgQAIIgQAJQgFADgFAAQgHAAgFgJgAg9gzIBLCNIBWgtIhIiPgAiKBFQgogLg2gJQgQgCADgPIABgGQACgJAHgEQAHgEALACQAtAHAuAMQAPAEgDAOIgCAIQgDAPgLAAIgIgCgAjGg0QgqgLgmgGQgQgDADgQIACgEQAEgSASADQAoAGAuAKQAPAEgFAPIgBAHQgFAOgNAAIgIgBg");
	this.shape_7.setTransform(-189.1,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1B7EC1").s().p("AhRFCQgKgJAKgNQAggoARgaIhyiMIg6AvQgOANgKgMQgJgKAPgNIA6gwIgtg3IgaAVQgPAMgKgMQgGgJAPgMQA9gxAugjQAPgMAKAMQAHAJgQAMIgkAcIAsA3IA3gpQAPgMAJANQAIAKgPALIg2AqIBmCBIAjg3QAFgIAHgBQAGgBAGAGQAJAJgIANQg9Bfg3BIQgHAJgHAAQgFAAgGgFgAhsDnIg+gqQgNgIAKgPIAGgIQAKgQAOAIQAhAWAeAWQAMAKgJAOIgGAIQgGAJgIAAQgFAAgGgEgABEDWQgLgMANgLIAbgbIj6lOQgJgMAQgMQBTg+BfhBQARgLAIAOIBtCkQAIAOgPAKIhPA1QAsAlAfARQAJglAFgtQACgSASACIAHABQAQACgCAPQgHAxgPAwQA6AaAzADQAPABABAOIAAAHQABASgSgBQhAgBhEgcQhFgdg6gyIgUAPIByCbQAbgeAWgdQAMgPANAMQAIAJgKAMQg0BBg8A/QgHAHgGAAQgGAAgEgEgAgrhzIAsA9QAvgiBAgsIgrg/QgtAfhDAxgAhkjBIAqA5QA7gsA2gkIgog7QgwAihDAwgAgcCDQgIgXgPgkQgGgPARgIIAIgEQAQgHADAJQAKAYAOArQAGAQgRAGIgHADQgFACgEAAQgIAAgEgKgAksBIIgEgCQgKgIADgNQAMg4ADhLQAAgMANgLIAUgQQAMgJASACQBBAIAbgBQAQgBADANIABAEQADAJgFAFQgFAGgKAAQgzADhAgJQgCBAgVBYQgCAKgHADIgGACQgEAAgFgEg");
	this.shape_8.setTransform(-241.4,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.トップ見出しmc, new cjs.Rectangle(-272.7,-68.7,545.5,137.6), null);


(lib.亀mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.亀();
	this.instance.parent = this;
	this.instance.setTransform(-62.5,-37.5,0.192,0.192,-15);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FED944","rgba(254,217,68,0.2)","rgba(254,217,68,0)"],[0,0.91,1],0,0,0,0,0,75).s().p("AkjKzQiGg5hohnQhohog5iHQg7iMAAiYQAAiYA7iLQA5iGBohoQBohoCGg5QCLg7CYAAQCYAACMA7QCHA5BoBoQBnBoA5CGQA7CLAACYQAACYg7CMQg5CHhnBoQhoBniHA5QiMA7iYAAQiYAAiLg7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.亀mc, new cjs.Rectangle(-75,-75,150,150), null);


(lib.結果見出し = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#402118").s().p("AifC/IgUgPQgNgLAJgNIARgXQAKgNAOALIAUAPQAOALgJANIgTAXQgFAHgGAAQgGAAgGgFgAhZBiIgRgNQgQgMALgMQAWgUAkgGQAQgCAOAAQAOAAAbAEQAbADAJAAQAPAAAVgGQAQgFAPgRQAVgYgLgcQgLgbgrghQgugkg+gZQgTgIAGgQQAGgOAQAGQBAAbA7AuQA9AvASAxQASAsgZAeQgNAPgNAGQgOAHgVABQgUABgugGIghgEIgfACQgXADgXAXQgGAGgGAAQgGAAgHgGg");
	this.shape.setTransform(218,37.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#402118").s().p("AiHDIIgWgLQgPgIAHgOIANgbQAHgOAQAIIAVALQAQAIgHAOIgOAbQgEAJgIAAQgFAAgFgDgAhUBgIgTgKQgRgJAJgNQARgYAigNQAQgGANgCIAogFQAagBAJgDQAOgDATgJQAQgIAKgUQAQgcgPgZQgPgYgvgYQgxgZhCgNQgUgEADgQIAAgBQADgPASAEQBDANA/AhQBDAiAaArQAZApgTAiQgKAQgLAJQgMAKgUAFQgUAFgtADIggADQgKACgTAGQgWAHgTAcQgFAIgIAAQgFAAgGgDg");
	this.shape_1.setTransform(162.5,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#402118").s().p("ABoD1QgOgbgQgXQgLgPgFgGQgQAkgiALQgbAKgjgHQgggHgZgSQgjgbACgkQABgUAMgPQALgQATgHQA3gUBKAwIA7i4Ih8gmQgRgEAEgOQAEgNAQAEQBDATA7ATIAZhPQAEgOARAGIAZAJQAQAFgEANIgcBOIBXAfQAPAGgEANQgFANgQgGIhXgeIhCDFQAmAeAlA5QAHANgNAGIgUAKQgEACgDAAQgIAAgFgKgAhUBtQgQAJgBAUQAAAUAPALQAQAMAUAEQAWAEARgJQAMgHAQgjQgrgjggAAQgOAAgMAGgAj1CVQgNhdAchqQAYhZA4hrQAGgMAQAHIATAJQAPAGgGANQhTCSgXCKQALgeAhgmQAJgMAMAJQALAJgLAMQgUAWgTAmQgTAkAAAmQgBANgNACIgPACIgDAAQgLAAgDgNg");
	this.shape_2.setTransform(100.3,-18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#402118").s().p("ABSEBQgXgDhHgNQgPgDAAgPQABgPASAEQAqAIAqAGQARADAGgFQAHgEAKgVQAHgQAKguQhVgMhAgHQgsBUidAjQgPADgGgOQgHgQASgEQA8gMAngWQAogXAWgkQhNgHhOgEQgRgBAAgPQABgNARABQBOADBWAIIAEgPQAFgOAQADIASADQAQAEgEAQIgDAIQBPAJBlAQQARADgDAQQgMA0gLAdQgLAcgTAKQgMAGgTAAQgLAAgNgCgAC6BaQgXgDgFgWQgFgQgBgYQgBgWAEgqQAEgvAIg9IgqgGQgIA6gRArIApA+QAHALgJAKIgEAEQgHAHgHAAQgHgBgFgIQgVgjgJgMQgaAhgpAhQgNALgLgOIgNgPIjRAJQgTABAAgQQAAgMARgBIBQgDIADgrIgsgCQgSgBABgQQABgJASACIAsACIABgZQABgPATABIASABIADgtIgNgBQgSAzhaAeQgUgEgCgHQgCgMAQgFQAwgRASgoIg6gCQgSgBAAgQQABgJASAAIBVAFIACgjIhAgEQgTgBABgPQABgJASABIBAAEIACgSQABgPATABIAUABQATACgBAPIgCASIA+AFQATACgBAQQgBAIgTgCIg9gFIgDAjIBIAGQARACgBAQQgBAJgSgCIglgDIgCAYQgBAIACADQADADAKACQAKABADgBQAEgDACgLQADgRASADIANACQAJABAEAFQAFAFgDAIIgIAOQgHAMgLACQgNADgggDQgWgBgagGIgCAdIBGAGQASACgCAQQAAAIgTgCIhFgGIgDAmIBJgEQASgBAAAQQAAgHAJgJQAagXAWgkQgIgHgJgNQgJgLAKgLQAOgOAGAJIAIAJQADgJAJg8IgtgFQgSgCABgPQACgOATADIAsAFIAEgjQADgPATACIARACQATADgCAQIgFAiIBQAMQATADgDAQQghDCAIABQAFABADgIIAJgmQAEgRATAFQAQAGgDANQgKAqgNATQgOAWgWAAIgIAAg");
	this.shape_3.setTransform(35.9,-31.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#402118").s().p("AizD+QgGAAgFgHIgFgGQgHgLAJgLQAfgiASgbIgXidIgwAHQgSACgDgOQgBgOARgDIBUgLQATgCABAQIASCbQAZAlAeALQAgALBGgFQBOgGBhgBQASAAgBAQQgBANgQAAQhUACg8AEQhVAFgtgIQgwgIgagZQgUAdggAkQgGAGgGAAIgBAAgAA5CiIgCghQhPAGgmAEQgRACgCgQQAAgLAQgCQBBgGA1gEIgDgqIhsAJQgRACgCgQIgOiJQgCgQATgCQBKgHAngCIgDgjQgtACg5AGQgTACgBgQQgBgHATgCQAugFA4gEIgBgYQgBgQATgBIAPgBQAUgBAAAPIABAYIBkgCQATgBAAAQQABAHgUAAIhiAEIACAkIBwgFQASAAABAQIACCKQAAAQgRAAQgwABg7ADIACAqQApgCBQgCQARAAAAAPQAAAMgRAAQg1AAhDAEIACAhQABAPgRACIgOAAIgCAAQgPAAgBgOgAgegIIAEAyIBKgGIgDgygABggRIACAyIBKgDIgCgyIhKADgAglhPIAFAxIBLgGIgDgxgABchYIADAxIBLgDIgCgygAiqh3QgrgmgfgXQgMgKALgMIAEgGQAOgOANALQAmAdArAlQALALgKAMIgGAGQgFAGgHAAQgJAAgLgJgAh+iwIgEgmQgBgQATgCQCogSCmgDQATAAAAAQIABAlQAAAQgTAAIgSABQgTAAAAgQIgBgaQh6ADiHAMIACAcQACAPgTADIgSACIgDAAQgQAAgCgOg");
	this.shape_4.setTransform(-30.3,-30.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#402118").s().p("AAaDKQgFgLAOgGQBQgkAihAQARghACgqQACgpgOgnQgOgogegbQgegdgogIQgHgCgYABQgcABgRAFQAWBcgJBZQgSCjhLALQg0AIghg8Qgcg0ACg6QAAhiBVhIQBWhJBqAMQA1AGArAfQArAgAUAwQATAvgEAzQgFA3geAqQgaAkgmAaQgiAXgwASIgIACQgIAAgDgIgAiShRQgbAwABA3QAAAmANAlQAQAvAZAAQAigBAPiFQAIhJgRhZQgqAYgaAvg");
	this.shape_5.setTransform(-92.7,-21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#402118").s().p("ABVDqIgxhlQhpAzhbAzQgQAJgIgNQgHgNAQgJIBDglIhAh4QgIgPARgIQA0gbBFghIgshdQg0AYg4AdQAHBMgHBXQgDASgSgCIgPgCQgPgDABgMQAHhqgThqQgCgQASgGIARgFQATgFADAQIAFAiQCShLCYg/QASgHAGAPQAFANgSAHQhBAahQAlIAqBeQBNgiAygVQARgHAGAPQAGANgSAHQg0AVhKAhIAzBvQBagpBGgbQARgHAFAPQAGAOgRAGQhMAehSAlIAvBnQAHAOgQAHIgRAIQgFADgFAAQgIAAgEgKgAh0AmIA4BtIBTgpIg0huIhXAqg");
	this.shape_6.setTransform(-152.7,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#402118").s().p("ACFDbIgLgFQgOgGAGgQQA0iBAHh3QiPBfiGBwQgQAMgJgMIgDgDQgKgNAPgLQCUh8CthwQAQgLAIAOIAFAIQAFAIAAAMQgMCJg8CYQgEANgKAAQgEAAgFgCgAjQBsIgKgDQgNgGAFgPQAxh9Adh7QACgNANgJIAjgaQANgJAMABQCBAKCAgIQAQAAACAOIAAAKQADARgVADQiUALiEgKQgfCCg5CLQgFAOgLAAQgEAAgEgCgAiIAlIgCgCQgKgNAPgMQBthVBwhNQAQgLAJANIABACQAKANgRALQhwBNhqBUQgIAGgGAAQgGAAgFgGg");
	this.shape_7.setTransform(-214,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.結果見出し, new cjs.Rectangle(-236.8,-57.5,473.6,115.1), null);


(lib.おみくじmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.おみくじ();
	this.instance.parent = this;
	this.instance.setTransform(-120,-152.5,0.538,0.538);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.おみくじmc, new cjs.Rectangle(-120,-152.5,240,305.1), null);


(lib.小槌mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.小槌();
	this.instance.parent = this;
	this.instance.setTransform(-50.7,-55.2,0.199,0.199);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FED944","rgba(254,217,68,0.2)","rgba(254,217,68,0)"],[0,0.91,1],0,0,0,0,0,75).s().p("AkjKzQiGg5hohnQhohog5iHQg7iMAAiYQAAiYA7iLQA5iGBohoQBohoCGg5QCLg7CYAAQCYAACMA7QCHA5BoBoQBnBoA5CGQA7CLAACYQAACYg7CMQg5CHhnBoQhoBniHA5QiMA7iYAAQiYAAiLg7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.小槌mc, new cjs.Rectangle(-75,-75,150,150), null);


(lib.後光アニメーションmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_RotateContinuously.bind(this));
		
		function fl_RotateContinuously() {
			// 自由変形ツールの丸いぽっちの位置で回転する
			this.goko.rotation += 0.5;
		}
		
		// vuejsで読み込むと高速回転するので必要
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// レイヤー_1
	this.goko = new lib.後光mc();
	this.goko.name = "goko";
	this.goko.parent = this;
	this.goko.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.goko).wait(1));

}).prototype = getMCSymbolPrototype(lib.後光アニメーションmc, new cjs.Rectangle(-270,-269.5,540,539.2), null);


(lib.top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// レイヤー 1
	this.instance = new lib.トップ見出しmc();
	this.instance.parent = this;
	this.instance.setTransform(320.3,116.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:126.9,alpha:1},14,cjs.Ease.quadOut).wait(17));

	// レイヤー 1
	this.instance_1 = new lib.おみくじmc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(308.8,452.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({y:496.7},16,cjs.Ease.elasticOut).wait(1));

	// レイヤー 1
	this.instance_2 = new lib.鳥居mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(313,411.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:421.9,alpha:1},14,cjs.Ease.quadOut).wait(17));

	// レイヤー 1
	this.instance_3 = new lib.後光アニメーションmc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(320,430.4);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},14,cjs.Ease.quadOut).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47.6,48.2,545.5,651.9);


(lib.result = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_45 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(1));

	// レイヤー 1
	this.instance = new lib.結果見出し();
	this.instance.parent = this;
	this.instance.setTransform(322,115.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14,cjs.Ease.quadOut).wait(32));

	// レイヤー 1
	this.instance_1 = new lib.おみくじmc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(308.8,412.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({y:436.7},3,cjs.Ease.quadIn).to({y:412.9},3,cjs.Ease.quadIn).to({y:436.7},3,cjs.Ease.quadIn).to({y:412.9},3,cjs.Ease.quadIn).wait(20));

	// レイヤー 1
	this.instance_2 = new lib.鯛mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(306.8,427.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).to({x:101.5,y:461.8},13,cjs.Ease.quintOut).wait(1));

	// レイヤー 1
	this.instance_3 = new lib.小槌mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(306.8,427.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({x:462.6,y:611.8},13,cjs.Ease.quintOut).wait(1));

	// レイヤー 1
	this.instance_4 = new lib.亀mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(306.8,407.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(32).to({_off:false},0).to({x:420.9,y:248.3},13,cjs.Ease.quintOut).wait(1));

	// レイヤー 1
	this.instance_5 = new lib.後光アニメーションmc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(320,430.4);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},14,cjs.Ease.quadOut).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50,58.2,540,641.9);


// stage content:
(lib.omikuji = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// result
	this.instance = new lib.result();
	this.instance.parent = this;
	this.instance.setTransform(320.3,374.1,1,1,0,0,0,320.3,374.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// top
	this.instance_1 = new lib.top();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(367.6,398.2,545.5,651.9);
// library properties:
lib.properties = {
	id: '798C17A546944C47AA6005C6BA94C561',
	width: 640,
	height: 700,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/omikuji_atlas_.png", id:"omikuji_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['798C17A546944C47AA6005C6BA94C561'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


})(createjs = createjs||{}, this.AdobeAn = this.AdobeAn||{});

// })(createjs = createjs||{}, AdobeAn = AdobeAn||{});
// var createjs, AdobeAn;
