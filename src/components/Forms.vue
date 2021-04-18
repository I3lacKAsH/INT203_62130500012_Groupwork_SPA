<template>
    <div class="flex flex-col px-8 pt-6 pb-8 my-2 mb-4 bg-white rounded shadow-md">
        <form @submit.prevent="submitTimeline">
            <div class="mb-6 -mx-3 md:flex">
                <div class="px-3 mb-6 md:w-1/2 md:mb-0">
                    <label
                        class="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker"
                        for="grid-first-name"
                    >First Name</label>
                    <input
                        class="block w-full px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-red"
                        id="grid-first-name"
                        type="text"
                        placeholder="FirstName"
                        v-model="data.fname"
                    />
                    <p
                        v-if="data.invalidFname"
                        class="text-xs italic text-red-400"
                    >Please fill you FirstName</p>
                </div>
                <div class="px-3 md:w-1/2">
                    <label
                        class="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker"
                        for="grid-last-name"
                    >Last Name</label>
                    <input
                        class="block w-full px-4 py-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
                        id="grid-last-name"
                        type="text"
                        placeholder="LatName"
                        v-model="data.lname"
                    />
                    <p
                        v-if="data.invalidLname"
                        class="text-xs italic text-red-400"
                    >Please fill you LastName</p>
                </div>
            </div>
            <div class="mb-6 -mx-3 md:flex">
                <div class="px-3 md:w-full">
                    <label
                        class="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker"
                        for="grid-description"
                    >Description</label>
                    <input
                        class="block w-full px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
                        id="grid-description"
                        type="text"
                        placeholder="My description"
                        v-model="data.desc"
                    />
                    <p
                        v-if="data.invalidDesc"
                        class="text-xs italic text-red-400"
                    >Please fill your TimeLine</p>
                </div>
            </div>
            <div class="mb-6 -mx-3 md:flex">
                <div class="px-3 md:w-full">
                    <label
                        class="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker"
                        for="grid-date"
                    >Date</label>
                    <input
                        class="block w-full px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
                        id="grid-date"
                        type="text"
                        placeholder="DD / MMM / YYYY"
                        v-model="data.dates"
                    />
                    <p v-if="data.invalidDate" class="text-xs italic text-red-400">Please fill Date</p>
                </div>
            </div>
            <button class="btn">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        dataTimeline: Object
    },
    data(){
        return{
            data:this.dataTimeline
        }
    },
    methods: {
        submitTimeline() {
            if(this.data.edit){
                this.$emit('wheneditFrom',this.data)
            }else{
                this.$emit('whenSaveFrom',this.data)
            }
        }
    },
 
}
</script>