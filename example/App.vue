<template>
  <div id="app">
     <dom-screenshot
        :scale="2"
        :options="shotOptions"
        :beforeShot="onBeforeShot"
        @click="onClick"
        bgColor="#f00"
        ref="shotDom"
        id="shot_dom"
      />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      shotOptions: {}
    }
  },
  methods: {
    onClick () {
      this.$refs.shotDom.shot()
        .then(data => {
          window.console.log(data)
          const img = document.createElement('img')
          img.src = data
          img.style.width = '100%'
          document.getElementById('shot_dom').append(img)
        })
        .catch(err => {
          window.console.log(err)
        })
    },
    onBeforeShot () {
      window.console.log('截图前的钩子')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 60px;
}
</style>
