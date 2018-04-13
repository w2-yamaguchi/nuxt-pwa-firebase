<template>
<div>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <NavigationHeader/>
    <NavigationDrawer/>
    <div class="mdl-layout__content">
      <nuxt/>
    </div>
  </div>
</div>
</template>

<script>
import NavigationDrawer from '~/components/NavigationDrawer.vue'
import NavigationHeader from '~/components/NavigationHeader.vue'

export default {
  components: {
    NavigationDrawer,
    NavigationHeader
  }
}
</script>
