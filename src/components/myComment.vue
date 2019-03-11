<template>
  <div class="row">
    <div class="col-12">
      <div class="myComment" v-for="comment in comments" :key="comment">
        <div class="card bg-dark text-white mb-3">
          <h2>{{comment.creator}}</h2>
          <p>{{comment.content}}</p>
          <h6>{{comment.createdAt}}</h6>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Status
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" @click="editBug(comment._id, 'completed')">Completed</a>
              <a class="dropdown-item" @click="editBug(comment._id,'rejected')">Rejected</a>
            </div>
          </div>
          <h5>Status:{{comment.flagged}}</h5>
          <hr>
          <button @click="removeComment(comment._id)" type="button" class="btn btn-outline-light">Remove</button>
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
      },
      editBug(commentId, status) {
        this.$store.dispatch('editBug', { commentId, status })
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