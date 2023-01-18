<script>
import axios from 'axios'

export default {
  data() {
    return {
      featuredProjects: [],
      organization: {
        image: "https://camo.githubusercontent.com/85053d4d21ae79cbcc8aeaa52fd9df47334cb7b892f8d281cba3fc3894a6a7e9/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3930373633313138323234303433363330352f313032343037383736393530373534393139342f756e6b6e6f776e2e706e673f77696474683d31303736266865696768743d363037"
      }
    }
  },
  created() {
    axios.get('https://api.github.com/orgs/bruh-boys/repos')
      .then(response => {
        this.featuredProjects = response.data
      })
      .catch(error => {
        console.log(error)
      })
      
  }
}
</script>

<template>
   <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      <div v-for="project in featuredProjects" :key="project.id" class="bg-white rounded-lg overflow-hidden shadow-2xl flex flex-wrap m-5">
        <img v-if="project.image" :src="project.image" class="w-full h-56 object-cover" alt="project image">
        <img v-else :src="organization.image" class="w-full h-56 object-cover opacity-75" alt="organization image">
        <div class="p-4">
          <h2 class="text-lg font-medium mb-2">{{ project.name }}</h2>
          <p class="text-gray-600">{{ project.description }}</p>
          <div class="mt-4">
            <a :href="project.url" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">See project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>