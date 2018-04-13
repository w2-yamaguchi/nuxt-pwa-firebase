<template>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Title</span>
    <nav class="mdl-navigation">
      <nuxt-link to="/"
         class="mdl-navigation__link typcn typcn-home"
         @click.native="closeDrawer"
         >
         Home
       </nuxt-link>
     </nav>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
