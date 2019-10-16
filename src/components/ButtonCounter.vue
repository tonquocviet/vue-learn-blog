<template>
  <div>
    <p>{{message}}</p><span>{{time}}</span>
    <div>
      <button @click="inCrement">Increment</button><br/>
    </div>
  </div>
</template>
<script>
export default {
  name : 'ButtonCounter',
  props: {
    message: String,
  },
  data(){
    return {
      time: new Date().toLocaleTimeString(),
    }
  },
  methods: {
    inCrement() {
      this.$emit("clickIncrement")
    }
  },
}
</script>