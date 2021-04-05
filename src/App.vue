<template>
  <div id="app">
    <button @click="openModel">アコーディオン</button>
    <div id="overlay" v-if="show">
      <p>アコーディオンの中身が入ります</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:false
    };
  },
  methods: {
      openModel(){
        this.show=true;
      }
    }
  };
</script>

<style>
#overlay {
  width: 300px;
  top: 0;
  left: 0;
  border: solid 1px;
  display: flex;
}
</style>