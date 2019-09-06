<template>
  <carousel :per-page="1"
            paginationColor="#666"
            paginationActiveColor="#fff"
            :navigationEnabled="true"
            :navigationPrevLabel='`<img src="${publicPath}img/caret-left.svg" />`'
            :navigationNextLabel='`<img src="${publicPath}img/caret-left.svg" />`'
            v-on:page-change="checkButton">
    <slide class="single-slide"
           v-for="(slide, index) in step.frames"
           :key="index">
      <div class="flex relative single-slide justify-center items-bottom">
        <div class="md:absolute flex flex-col justify-end top-0 left-0 bg-black w-full h-full">
          <img :src="publicPath + 'img/slides/test_scene.jpg'" alt="">
        </div>
      </div>
    </slide>
  </carousel>

</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'Canvas',
  components: { Carousel, Slide },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      currentFrame: 0
    }
  },
  props: {
    story: Object
  },
  computed: {
    step () {
      return this.story.steps.find(x => x.id === this.$store.state.game.currentStep)
    },
    frames () {
      return this.step.frames
    }
  },
  methods: {
    checkButton (value) {
      this.currentFrame = value
      if (this.currentFrame === this.step.frames.length - 1) {
        this.$emit('readAll', true)
      }
    },
    resetFrame () {
      this.currentFrame = 0
    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    max-height: 100%;
    margin: 0 auto;
  }

  @screen md {
    .single-slide {
      @apply h-slide
    }
  }

</style>
