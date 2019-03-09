<template>
  <div>
    <div class="myComment" v-for="comment in comments" :key="comment">
      <p>{{comment.creator}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "myComment",
    data() {
      return {}
    },
    computed: {
      comments() {
        return this.$store.state.comments
      }
    },
    methods: {

    },
    components: {}
  }
</script>