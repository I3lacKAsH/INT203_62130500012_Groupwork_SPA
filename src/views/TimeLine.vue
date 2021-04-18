<template>
  <nav-bar />
  <p class="py-8 font-sans text-4xl">MY TimeLine</p>
  <div v-if="!renderUpdate">
    <time-line
      v-for="timeline in timelines"
      :key="timeline.id"
      :time="timeline"
      @whenEdit="renderUpdated"
    />
  </div>
  <div v-else>
    <forms @wheneditFrom="updateTimeline" :dataTimeline="dataUpdate" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'http://localhost:3000/timeLines',
      timelines: [],
      renderUpdate: false,
      dataUpdate: Object
    }
  },
  methods: {
    async getTimeline() {
      try {
        const res = await fetch(this.url)
        const data = await res.json()
        return data
      }
      catch (error) {
        console.log(`Not get because ${error} !`)
      }
    },
    renderUpdated(data) {
      this.renderUpdate = !this.renderUpdate
      this.dataUpdate = data
    },

    async updateTimeline(editTimeline) {
      try {
        let updateData = {
          fname: editTimeline.fname,
          lname: editTimeline.lname,
          desc: editTimeline.desc,
          dates: editTimeline.dates
        }
        console.log("🚀 ~ file: About.vue ~ line 54 ~ updateTimeline ~ updateData", updateData)
        const res = await fetch(`${this.url}/${editTimeline.id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(updateData)
        })
        const data = await res.json()
        console.log("🚀 ~ file: About.vue ~ line 61 ~ updateTimeline ~ data", data)
      } catch (error) {
        console.log(`Not edit because ${error} !`)
      }
    },
  },
  
  async created() {
    this.timelines = await this.getTimeline()
  }
}
</script>
