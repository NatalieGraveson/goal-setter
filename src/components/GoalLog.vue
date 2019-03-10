<template>
   <div class="GoalLog">
      <div class="row">
         <div class="col-2"></div>
         <div class="col-8">
            <table class="table table-hover">
               <thead>
                  <tr>
                     <th scope="col">Title</th>
                     <th scope="col">Reported</th>
                     <th scope="col">Status</th>
                     <th scope="col">Date</th>
                  </tr>
               </thead>
               <tbody v-for="log in allLogs" :key="log.id">
                  <tr :class="{'bg-primary': !log.closed}"
                     @click="setActive(log); $router.push({name: 'logDetails', params: {id: log._id}})">
                     <td>{{log.title}}</td>
                     <td>{{log.creator}}</td>
                     <td>{{log.closed ? 'Closed' : 'Active'}}<button v-if="!log.closed" class="btn btn-outline-danger"
                           @click="changeIt(log._id)">close
                           task</button></td>
                     <td>{{log.createdAt}}</td>

                  </tr>
               </tbody>
            </table>
         </div>
         <div class="col-2"></div>
      </div>
   </div>
</template>

<script>
   export default {
      name: "GoalLog",
      props: [],
      data() {
         return {}
      },
      computed: {
         allLogs() {
            return this.$store.state.goals
         }
      },
      methods: {
         setActive(log) {
            this.$store.dispatch('setActive', log)
         },
         changeIt(log) {
            this.$store.dispatch('changeIt', log)
         }
      },
      components: {

      }
   }
</script>

<style>

</style>