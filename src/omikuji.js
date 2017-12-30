(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
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


(lib.シンボル2コピー = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjSEtIAAkAIAqAcIEzAAIAQgWIAnAcQARAOgcAFIAAC6QgkAhAAgeIAAgcIlBAAIAAAnQgTARgJAAQgIAAAAgOgAiuDyIFBAAIAAiYIlBAAgAjwgRIAAgRIDKAAIAAiCIkSAAIAAgRIESAAIAAiFIAxAIQAfALgsALIAABnIDVAAIAqgqIA0AnQARAOgRAGIkzAAIAACCICjAAIAkgkIAsAhQARAOgRAGg");
	this.shape.setTransform(36.8,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgjEtIAAj9IjCAAIAAAfQgkAhAAgeIAAkjIAqAZIC8AAIAAiCIAxAIQAfALgtALIAABkIDDAAIATgZIAsAfQAXARgqAFIAADlQgkAiAAgfIAAgcIjLAAIAAD6QgSARgJAAQgIAAAAgOgAAAAgIDLAAIAAjHIjLAAgAjlAgIDCAAIAAjHIjCAAg");
	this.shape_1.setTransform(-34,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル2コピー, new cjs.Rectangle(-73.1,-41.3,146.2,82.6), null);


(lib.シンボル2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjSEtIAAkAIAqAcIEzAAIAQgWIAnAcQARAOgcAFIAAC6QgkAhAAgeIAAgcIlBAAIAAAnQgTARgJAAQgIAAAAgOgAiuDyIFBAAIAAiYIlBAAgAjwgRIAAgRIDKAAIAAiCIkSAAIAAgRIESAAIAAiFIAxAIQAfALgsALIAABnIDVAAIAqgqIA0AnQARAOgRAGIkzAAIAACCICjAAIAkgkIAsAhQARAOgRAGg");
	this.shape.setTransform(36.8,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ak1EkQD/hxAFkMIj/AAIAAgRID/AAIAAjIIAwAJQAVAOghAFIAACsIDdAAIAqgpIA1AmQAQAOgQAGIkeAAQAvDzD8BvQgsAIgWAWQjWh/gkkBIgNAAQADEfkmBsIgFABQgMAAAMgPg");
	this.shape_1.setTransform(-35.1,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル2, new cjs.Rectangle(-73.1,-41.3,146.2,82.6), null);


(lib.シンボル1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AnftCIO/AAIAAaFIu/AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC4B7").s().p("AnfNDIAA6FIO/AAIAAaFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.シンボル1, new cjs.Rectangle(-49,-84.5,98,169), null);


(lib.daikichi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// レイヤー_3
	this.instance = new lib.シンボル2();
	this.instance.parent = this;
	this.instance.setTransform(272.1,210.6,0.616,0.615,0,0,0,-0.1,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1},9,cjs.Ease.elasticOut).wait(1));

	// レイヤー_2
	this.instance_1 = new lib.シンボル1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(256,180.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:221.6},14,cjs.Ease.elasticOut).to({alpha:0},5).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(207.5,96.6,97,168);


(lib.chukichi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// レイヤー_3
	this.instance = new lib.シンボル2コピー();
	this.instance.parent = this;
	this.instance.setTransform(269.1,201.6,0.616,0.615,0,0,0,-0.1,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1},9,cjs.Ease.elasticOut).wait(1));

	// レイヤー_2
	this.instance_1 = new lib.シンボル1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(253,171.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:212.6},14,cjs.Ease.elasticOut).to({alpha:0},5).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(204.5,87.6,97,168);


// stage content:
(lib.omikuji = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chukichi
	this.instance = new lib.chukichi();
	this.instance.parent = this;
	this.instance.setTransform(-25,-33.5,1,1,0,0,0,-25,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// daikichi
	this.instance_1 = new lib.daikichi();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-25,-33.5,1,1,0,0,0,-25,-33.5);

	this.instance_2 = new lib.daikichi();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-25,-33.5,1,1,0,0,0,-25,-33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(479.5,287.6,100,177);
// library properties:
lib.properties = {
	id: '798C17A546944C47AA6005C6BA94C561',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
