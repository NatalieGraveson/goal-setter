<template>
  <div class="row">
    <div class="col-12">
      <div class="myComment" v-for="comment in comments" :key="comment">
        <div class="card bg-dark text-white mb-3">
          <h2>{{comment.creator}}</h2>
          <p>{{comment.content}}</p>
          <h6>{{comment.createdAt}}</h6>
          <button @click="removeComment(comment._id)" type="button" class="btn btn-outline-dark">Remove</button>
        </div>
      </div>
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

<style>
  .card {
    width: max-content;
    height: min-content;
  }

  h2 {
    font-size: 35px;
  }

  h6 {
    font-size: 10px;
  }

  p {
    font-size: 25px;
  }
</style>