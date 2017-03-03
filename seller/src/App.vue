<template>
  <div id='app'>
    <keep-alive>
      <router-view class="router-view"></router-view>
    </keep-alive>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
import list from './components/list/list.vue';
import footer from './components/footer/footer.vue';
export default {
  components: {
      'v-list': list,
      'v-footer': footer
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  
}
</style>
