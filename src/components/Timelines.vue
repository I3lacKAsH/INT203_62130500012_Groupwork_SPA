<template>
    <div class="container">
        <div class="flex flex-col grid-cols-9 mx-auto md:grid text-blue-50">
            <div class="flex md:contents" v-bind:class="[state ? 'flex-row-reverse' : '']">
                <div
                    class="col-start-1 col-end-5 p-4 my-4 ml-auto bg-green-500 shadow-md rounded-xl"
                >
                    <h3 class="mb-1 text-lg font-semibold">{{ time.fname }} {{ time.lname }}</h3>
                    <p class="leading-tight text-justify">{{ time.desc }}</p>
                    <h5 class="text-lg">{{ time.dates }}</h5>
                    <button @click="showData(timeline)" class="mx-10 rounded-lg">
                        <img src="../assets/Edit.png" width="30" class />
                    </button>
                    <button @click="deleteTimeline(time.id)" class="mx-10 rounded-lg">
                        <img src="../assets/Delete.png" width="30" />
                    </button>
                </div>
                <div class="relative col-start-5 col-end-6 mr-10 md:mx-auto">
                    <div class="flex items-center justify-center w-6 h-full">
                        <div class="w-1 h-full bg-indigo-300 pointer-events-none"></div>
                    </div>
                    <div class="absolute w-6 h-6 -mt-3 bg-yellow-300 rounded-full shadow top-1/2"></div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            url: 'http://localhost:3000/timeLines',
            timeLines: [],
            state: (this.time.id % 2 == 0)
        }
    },

    props: {
        time: Object
    },

    methods: {
        async deleteTimeline(deleteId) {
            try {
                await fetch(`${this.url}/${deleteId}`,{
                    method: 'DELETE'
                })
                this.timeLines = this.timeLines.filter(
                    (time) => time.id !== deleteId
                )
            } catch (error){
                console.log(`Not delete because ${error} !`)
            }
        }
    }
}
</script>
    