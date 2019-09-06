<template>
  <footer class="footer">
    <div class="flex justify-end -mx-4">
      <div class="flex-initial px-4">
        <img src="./../../assets/img/liceo.png" alt="">
      </div>
      <div class="flex-initial px-4">
        <img src="./../../assets/img/fondi.jpeg" alt="">
      </div>
      <div class="flex-initial px-4">
        <img src="./../../assets/img/poc.jpeg" alt="">
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'VueFooter'
}
</script>

<style lang="scss" scoped>
  footer {
    @apply p-4 bg-palette1-fifth;
    img {
      height: 40px;
    }
  }
</style>
