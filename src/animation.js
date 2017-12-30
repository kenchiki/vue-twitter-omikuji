export default {
  methods: {
    window_resize($parent, stage, width, height) {
      var parent_width = $parent.width();
      var scale = parent_width / width;
      stage.scaleX = scale;
      stage.scaleY = scale;
      stage.canvas.width = width * scale;
      stage.canvas.height = height * scale;
    },
    setup_canvas(canvas, width, height, init) {
      var stage = new createjs.Stage(canvas);
      var $parent = $('#' + canvas).parent();
      window.addEventListener('resize', this.window_resize($parent, stage, width, height));
      this.window_resize($parent, stage, width, height);
      init(stage);
    }
  }
}
