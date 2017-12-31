<template lang="html">
  <div>

  <div class="top_animation">
    <canvas id="top_animation"></canvas>
  </div>

    <p class="start-btn">
  <router-link to="/result">おみくじをひく</router-link>
</p>






</div>
</template>

<style lang="scss" scoped>

</style>

<script>
  import Animation from '../animation.js'

  export default {
    mixins: [Animation],
    mounted() {
//      mountedはDOMが作られた後。createdではまだDOMが作られてない注意。
      const scope = this;

      this.setup_canvas('top_animation', 640, 700, function (stage) {
        const comp = AdobeAn.getComposition("798C17A546944C47AA6005C6BA94C561");
        let lib = comp.getLibrary();

        const loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", function(evt){
          var images=comp.getImages();
          if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
        });
        loader.addEventListener("complete", function(evt){
          var lib=comp.getLibrary();
          var ss=comp.getSpriteSheet();
          var queue = evt.target;
          var ssMetadata = lib.ssMetadata;
          for(let i=0; i<ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
          }

          const top = new lib.top();
          stage.addChild(top);
          createjs.Ticker.addEventListener('tick', stage);
        });
        lib=comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);
      });
    },
  }
</script>
