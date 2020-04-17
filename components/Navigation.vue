<template>
<div class="navigation">
  <ul class="nav-list">
    <li v-for="item in list" :key="item.id" class="nav-item">
      <nuxt-link class="nav-link" :to="item.link">{{item.label}}</nuxt-link>
      <!-- <a :href="item.link" :class="{'nav-link': true}">
        {{item.label}} 
      </a>-->
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: 'Navigation',
  props: {
    list: Array,
  },
  // data() {
  //   return {
  //     user: {
  //       name: String,
  //       surname: String
  //     }
  //   }
  // }
  methods: {

  }
}
</script>
<style>
</style>
