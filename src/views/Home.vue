<template>
  <div class="home container-fluid">
    <div class="row">
      <h1 class="title mt-4 col-12 text-center">Goal Log</h1>
    </div>
    <div class="row">
      <div class="col-3 lefty">
        <i class="fas fa-check fa-4x"></i>
      </div>
      <div class="col-6">
        <form @submit.prevent="addGoal" class="mb-4">
          <div class="form-group my-4 col-12 d-flex justify-content-center flex-column">
            <input required v-model="newGoal.creator" type="text" class="form-control" id placeholder=" Name...">
            <input required v-model="newGoal.title" type="text" class="form-control" id placeholder=" Title...">
            <textarea required v-model="newGoal.description" type="text-area" class="form-control" id
              placeholder=" Description..."></textarea>
            <button type="submit" class="btn btn-outline-dark btn-sm">Submit</button>
            <button @click="getAllGoalsSorted" type="button" class="btn btn-outline-dark btn-sm">Sort</button>
          </div>
        </form>
      </div>
      <div class="col-3 lefty">
        <i class="fas fa-check fa-4x"></i>
      </div>
    </div>
    <GoalLog></GoalLog>
    <footer class="footer mt-auto py-3">
      <div class="container">
        <img
          src="https://moyo-production.s3.amazonaws.com/uploads/critical_reflections/26/images/112/extra_wide_Ocean.jpg">
      </div>
    </footer>
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
      },
      getAllGoalsSorted() {
        this.$store.dispatch('getAllGoalsSorted')
      }
    }
  }
</script>

<style>
  button {
    margin-left: auto;
  }

  .lefty {
    display: flex;
    justify-content: center
  }

  h1 {
    font-weight: bolder;
    font-size: 421%;
  }

  i {
    animation: fa-spin 2s ease-in-out;
  }

  img {
    width: 98vw;
    height: 217px;
    border: 14px solid #ffffff47;
    margin-left: -386px;
  }
</style>