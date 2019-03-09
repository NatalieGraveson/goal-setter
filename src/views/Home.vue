<template>
  <div class="home container-fluid">
    <div class="row">
      <h1 class="title mt-4 col-12 text-center">Goal Log</h1>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form @submit.prevent="addGoal" class="mb-4">
          <div class="form-group my-4 col-12 d-flex justify-content-center flex-column">
            <input v-model="newGoal.creator" type="text" class="form-control" id placeholder=" Name...">
            <input v-model="newGoal.title" type="text" class="form-control" id placeholder=" Title...">
            <textarea v-model="newGoal.description" type="text-area" class="form-control" id
              placeholder=" Description..."></textarea>
            <button type="submit" class="btn btn-outline-dark btn-sm">Submit</button>
          </div>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
    <GoalLog></GoalLog>
  </div>
</template>

<script>
  import GoalLog from '@/components/GoalLog.vue'

  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch('getAllGoals')
    },

    data() {
      return {
        newGoal: {
          creator: '',
          title: '',
          description: ''
        }
      }
    },
    components: {
      GoalLog
    },
    methods: {
      addGoal() {
        this.$store.dispatch('addGoal', this.newGoal)
      }
    }
  }
</script>

<style>
  button {
    margin-left: auto;
  }
</style>