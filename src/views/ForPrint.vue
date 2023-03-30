<template>
  <div id="button-wrap" class="d-flex flex-column align-start w-75 mx-auto mt-5">
    <v-btn @click="print()">
      Print
    </v-btn>
  </div>
  <div id="wrapper" class="d-flex flex-column align-center w-75 mx-auto">
    <img style="width:8%;" class="" src="@/assets/logo.svg" alt="">
    <h3 class="mb-2">Vuetify Organization</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi quam aperiam expedita sequi. Sint ex in
      distinctio aut dicta adipisci! Itaque aliquid pariatur unde ex rerum. A, accusantium. Porro! Lorem ipsum dolor, sit
      amet consectetur adipisicing elit. Quia, itaque hic, quam ex earum dolorum, vitae omnis quibusdam id placeat
      necessitatibus deserunt reiciendis. Sed libero accusamus perferendis quaerat ullam provident.</p>


    <v-table class="w-100">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Contact No.</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.address }}</td>
          <td>{{ user.contact_no  }}</td>
        </tr>
      </tbody>
    </v-table>


  </div>
</template>

<script>

export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
   console.log(window);
  },
  created() {
    this.getUsers();
  },
  methods: {
    print() {
      if (window){
        window.print();
      }
    },
    async getUsers(){
      let response = await fetch('http://localhost:3000/users.json');
      response = await response.json();
      this.users = response;
    }
  }
}
</script>

<style>
.page-break {
  page-break-after: always;
}

@media print {
  #button-wrap {
    display: none !important;
  }
  
  #wrapper {
    margin: 0 !important;
    width: 100% !important;
    text-align: justify;
  }
}
</style>