<template>
  <div class="details container-fluid">
    <div class="row">
      <h1 class="title mt-4 col-12 text-center">Goal Log</h1>
      <div class="col-3"></div>
      <div class="col-6">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Reported</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{goal.title}}</td>
              <td>{{goal.creator}}</td>
              <td>{{goal.description}}</td>
              <td>{{goal.closed ? 'Closed' : 'Active'}}</td>
              <td>{{goal.createdAt}}</td>
            </tr>
          </tbody>
        </table>
        <form @submit.prevent="addComment" class="mb-4">
          <div class="form-group my-4 col-12 d-flex justify-content-center flex-column">
            <input required v-model="newComment.creator" type="text" class="form-control" id placeholder=" Name...">
            <textarea required v-model="newComment.content" type="text-area" class="form-control" id
              placeholder="comment..."></textarea>
            <button :disabled="goal.closed" type="submit" class="btn btn-outline-dark btn-sm">Submit</button>
          </div>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
    <myComment></myComment>
    <footer class="footer mt-auto py-3">
      <div class="container">
        <img
          src="https://moyo-production.s3.amazonaws.com/uploads/critical_reflections/26/images/112/extra_wide_Ocean.jpg">
      </div>
    </footer>
  </div>
</template>

<script>
  import myComment from '@/components/myComment.vue'
  export default {
    name: "bugDetails",
    props: ['id'],
    mounted() {
      //If no goal in store
      if (!this.$store.state.activeGoal._id) {
        //go get goal by id
        this.$store.dispatch('getGoalbyId', this.id)
      } else {
        this.$store.dispatch('getAllComments')
      }

    },


    data() {
      return {
        newComment: {
          content: '',
          creator: '',
          flagged: 'pending'
        },
        flags: ['pending', 'completed', 'rejected']
      }
    },
    computed: {
      goal() {
        return this.$store.state.activeGoal
      }
    },
    methods: {
      addComment() {
        this.$store.dispatch('addComment', this.newComment)
      }
    },
    components: {
      myComment
    }
  }
</script>
<style>
  img {
    margin-top: 43px;
  }
</style>