<template>
  <transition name="modal" appear>
    <div class="modal-mask">
      <div class="modal-wrapper" @click="closeModal">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              {{ header }}
            </slot>
          </div>

          <div class="modal-body" v-html="body">
            <slot name="body">

            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              {{ footer }}
              <button class="modal-default-button" @click="toggleModal">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  computed: {
    showModal () {
      return this.$store.state.modal.showModal
    },
    header () {
      return this.$store.state.modal.header
    },
    body () {
      return this.$store.state.modal.body
    },
    footer () {
      return this.$store.state.modal.footer
    }
  },
  methods: {
    toggleModal () {
      this.$store.dispatch('modal/toggleModal')
    },
    closeModal (event) {
      if (event.target.classList.contains('modal-wrapper')) {
        this.$store.dispatch('modal/toggleModal')
      }
    }
  }
}
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  @apply w-2/3;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  a {
    color: #ffcc00;
    font-weight: bold;
    text-decoration: underline;
  }
}

.modal-header {
  @apply text-2xl;
  margin-top: 0;
  // color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter-active, .modal-leave-active {
  transition: all .3s ease;
  .modal-container {
    transition: all .3s ease;
  }
}
.modal-enter, .modal-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  .modal-container {
    transform: translateY(15%);
  }
}
</style>
