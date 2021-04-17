<template>
  <nav-bar />
  <p class="py-8 font-sans text-4xl">TimeLine Beta</p>
  <time-line v-for="timeline in timelines" :key="timeline.id" :time="timeline"/>
</template>


<script>
export default {
  data() {
    return {
      url: 'http://localhost:3000/timeLines',
      timelines: []
    }
  },
  methods: {
    async getTimeline() {
      try {
        const res = await fetch(this.url)
        const data = await res.json()
        this.timelines = data
        console.log(data);
      }
      catch (error) {
        console.log(`Not get because ${error} !`)
      }
    }
  },
  created(){
    this.getTimeline()
  }
}
</script>
