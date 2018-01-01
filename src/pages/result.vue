<template lang="html">
<div>


  <div class="result_animation">
    <canvas id="result_animation"></canvas>
  </div>

  <div v-show="fortune_result">
    <div class="result">
      <div class="result__in">
        <div class="result__result">
          <div class="result__short font-serif"><p>{{ fortune_result }}</p></div>
          <div class="result_message font-serif"><p>{{ fortune_result_message }}</p></div>
        </div>
      </div>
    </div>

    <p class="twitter"><a class="twitter__btn" v-bind:href="twitter_url" target="_blank"><span>結果をツイート</span></a></p>

  </div>

</div>
</template>

<style lang="scss" scoped>
</style>

<script>
  import Animation from '../animation.js'

  export default {
    mixins: [Animation],
    data() {
      return {
        fortune_result: '',
        fortune_result_message: '',
        twitter_url: ''
      }
    },
    mounted() {
//      mountedはDOMが作られた後。createdではまだDOMが作られてない注意。
      const scope = this;

      this.setup_canvas('result_animation', 640, 700, function (stage) {
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

          const result = new lib.result();
          stage.addChild(result);
          createjs.Ticker.addEventListener('tick', stage);
        });
        lib=comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);


      });

      setTimeout(function() {
        const random_number = scope.get_random_number(100);
        scope.fortune_result = scope.get_short_fortune_result(random_number);
        scope.fortune_result_message = scope.get_fortune_result_message();
        scope.twitter_url = scope.get_twitter_url(scope.get_fortune_result(random_number), scope.fortune_result_message);
      }, 200);
    },
    methods: {
      get_random_number(max_number) {
        return Math.floor(Math.random() * max_number);
      },
      get_fortune_result(random_number) {
        let fortune_result = '';

        if(random_number === 0) {
          fortune_result = fortune_result + 'ｷﾀ━━☆ﾟ*:｡:(ﾟ∀ﾟ)ﾟ･*:.*☆━━ﾂ!!'
          fortune_result = fortune_result + "\n\n今年の運勢は「神吉」です"
          fortune_result = fortune_result + "\nちょっと今年、神がかってるかも"
        }
        else if(random_number <= 9) {
          fortune_result = fortune_result + '今年の運勢は「大吉」です'
        }
        else if(random_number <= 24) {
          fortune_result = fortune_result + '今年の運勢は「中吉」です'
        }
        else if(random_number <= 49) {
          fortune_result = fortune_result + '今年の運勢は「小吉」です'
        }
        else if(random_number <= 74) {
          fortune_result = fortune_result + '今年の運勢は「吉」です'
        }
        else {
          fortune_result = fortune_result + '今年の運勢は「半吉」です'
        }

        return fortune_result;
      },
      get_short_fortune_result(random_number) {
        if(random_number === 0) {
          return '神吉';
        }
        else if(random_number <= 9) {
          return '大吉';
        }
        else if(random_number <= 24) {
          return '中吉';
        }
        else if(random_number <= 49) {
          return '小吉';
        }
        else if(random_number <= 74) {
          return '吉';
        }
        else {
          return '半吉';
        }
      },
      get_fortune_result_message() {
        const messages = [
          '待ち人くるかも',
          '勝負するといいかも',
          '立ち止まって考えるのもいいかも',
          '新しいことやってみるといいかも',
          'ついにアレが出現するかも',
          'やっとアレが見つかるかも',
          '仲間が増えるかも',
          '雨のち晴れかも',
          '周りの声に耳を傾けるといいかも',
          '自分の心に耳を傾けるといいかも',
          '抱えてた問題がなくなるかも',
          'チャレンジしてみるといいかも',
          'お財布があったかいかも',
          'お出かけするといいことあるかも',
          'すてきな便りが届くかも',
          'あの人と会えるかも',
          'アレが復活してほっとするかも',
          'ヒーローが現れるかも',
          '助けてくれる人が現れるかも',
          '打ち明けてみるといいかも',
          '楽しい変化があるかも',
          '願いごとをするといいことあるかも',
          'あの人と仲良くなれるかも',
          '楽しいことが見つかるかも',
          '流れに乗っかってみるのもいいかも',
          'コツコツやってたことが実るかも',
          '吹っ切れて走り出せるかも',
          'アレから解放されるかも',
          '自由になるかも',
          '脱皮できるかも',
          '自分を信じるといいかも',
          '行動してから考えるのもいいかも',
          '自分のことに集中するといいかも',
          '周りのことは気にしなくていいかも',
          'ついにその時がくるかも',
          '5000兆円に一歩近づけるかも'
        ];

        return messages[this.get_random_number(messages.length)];
      },
      get_twitter_url(fortune_result, fortune_result_message) {
        return 'http://twitter.com/share?url=https://omikuji.ginga.earth&text=' + fortune_result+ '。' + fortune_result_message + '&hashtags=銀河おみくじ';
      }
    }
  }
</script>
