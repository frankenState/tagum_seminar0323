<template>
  <div class="d-flex-row d-sm-flex flex-grow-1">
    <div class="pa-3 bg-deep-purple">
      <h1>Title 1</h1>
      <small>March 28, 2023</small>
      <p class="text-justify ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero eum illo
        laboriosam
        amet maiores, tenetur quam placeat, magni quod distinctio cupiditate quibusdam fugit repudiandae quia odio
        officiis! Tempore, id!</p>
    </div>
    <div class="pa-2 bg-black">
      <h1>Title 2</h1>
      <small>March 28, 2023</small>
      <p class="text-justify ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero eum illo
        laboriosam
        amet maiores, tenetur quam placeat, magni quod distinctio cupiditate quibusdam fugit repudiandae quia odio
        officiis! Tempore, id!</p>
    </div>
    <div class=" pa-2 bg-indigo">
      <h1>Title 3</h1>
      <small>March 28, 2023</small>
      <p class="text-justify ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero eum illo
        laboriosam
        amet maiores, tenetur quam placeat, magni quod distinctio cupiditate quibusdam fugit repudiandae quia odio
        officiis! Tempore, id!</p>
    </div>
  </div>
  <div class="d-flex justify-center bg-surface-variant h-50">
    <v-sheet class="pa-2 w-25 h-auto">
      <h1>Centered Element</h1>
      <small>March 28, 2023</small>
      <p class="text-justify ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero eum illo
        laboriosam
        amet maiores, tenetur quam placeat, magni quod distinctio cupiditate quibusdam fugit repudiandae quia odio
        officiis! Tempore, id!</p>
    </v-sheet>
    <v-sheet class="pa-2 align-self-center w-25 h-auto">
      <h1>Centered Element</h1>
      <small>March 28, 2023</small>
      <p class="text-justify ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero eum illo
        laboriosam
        amet maiores, tenetur quam placeat, magni quod distinctio cupiditate quibusdam fugit repudiandae quia odio
        officiis! Tempore, id!</p>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 0,
          title: 'Title',
          body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos amet possimus nemo facilis eius saepe doloremque quis, culpa`
        }
      ]
    }
  }
}
</script>
