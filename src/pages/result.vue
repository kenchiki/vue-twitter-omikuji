<template lang="html">
<div>
  <p class="result">{{ result }}</p>
    <p class="result_message">{{ result_message }}</p>
</div>
</template>

<style lang="scss" scoped>
  .result {
    white-space: pre;
  }
  .result_message {
    white-space: pre;
    margin-top: 50px;
  }
</style>

<script>
  export default {
    data() {
      return {
        result: '',
        result_message: ''
      }
    },
    created() {
      const random_number = this.random_number(100);
      this.result = this.fortune_result(random_number);
      this.result_message = this.fortune_result_message();
    },
    methods: {
      random_number(max_number) {
        return Math.floor(Math.random() * max_number);
      },
      fortune_result(random_number) {
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
      fortune_result_message() {
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

        return messages[this.random_number(messages.length)];
      }
    }
  }
</script>
