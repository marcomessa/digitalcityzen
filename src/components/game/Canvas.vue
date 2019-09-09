<template>
  <div class="page">
    <div v-for="(item, index) in story.steps" :key="index">
      <transition name="fade" mode="out-in">
        <carousel :per-page="1"
            paginationColor="#666"
            paginationActiveColor="#fff"
            :navigationEnabled="true"
            v-on:page-change="checkButton"
            v-if="index === currentStep">
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
      </transition>
    </div>
  </div>

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
    },
    currentStep () {
      return this.$store.state.game.currentStep - 1
    }
  },
  methods: {
    checkButton (value) {
      this.currentFrame = value
      if (this.currentFrame === this.step.frames.length - 1) {
        this.$store.dispatch('bottomBar/showOptions', true)
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

  .fade-enter-active, .fade-leave-active {
    transition: all 1s;
  }
  .fade-enter, .fade-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(100%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @screen md {
    .single-slide {
      @apply h-slide
    }
  }

</style>
