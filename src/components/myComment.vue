<template>
  <div>
    <div class="myComment" v-for="comment in comments" :key="comment">
      <p>{{comment.creator}}</p>
      <button @click="removeComment(comment._id)" type="button" class="btn btn-outline-dark">Remove</button>
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
      removeComment(commentId) {
        this.$store.dispatch('removeComment', this.$store.state.activeGoal._id + '/notes/' + commentId)
      }
    },
    components: {}
  }
</script>