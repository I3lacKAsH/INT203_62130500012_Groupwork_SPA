<template>
    <nav-bar />
    <br />

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
                        placeholder="Jane"
                        v-model="fname"
                    />
                    <p
                        v-if="invalidFname"
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
                        placeholder="Doe"
                        v-model="lname"
                    />
                    <p
                        v-if="invalidLname"
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
                        v-model="desc"
                    />
                    <p
                        v-if="invalidDesc"
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
                        placeholder="My date"
                        v-model="dates"
                    />
                    <p v-if="invalidDate" class="text-xs italic text-red-400">Please fill Date</p>
                </div>
            </div>
            <button class="btn">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            url: 'http://localhost:3000/timeLines',
            edit: false,
            editId: '',
            fname: '',
            lname: '',
            desc: '',
            dates: '',
            invalidFname: false,
            invalidLname: false,
            invalidDesc: false,
            invalidDate: false,
            timeLines: []
        }
    },
    methods: {
        submitTimeline() {
            this.invalidFname = this.fname === '' ? true : false
            this.invalidLname = this.lname === '' ? true : false
            this.invalidDesc = this.desc === '' ? true : false
            this.invalidDate = this.dates === '' ? true : false

            console.log(`fname Value: ${this.fname}`)
            console.log(`lname Value: ${this.lname}`)
            console.log(`desc Value: ${this.desc}`)
            console.log(`dates Value: ${this.dates}`)
            console.log(`invalidFname: ${this.invalidFname}`)
            console.log(`invalidLname: ${this.invalidLname}`)
            console.log(`invalidDesc: ${this.invalidDesc}`)
            console.log(`invalidDate: ${this.invalidDate}`)

            if (this.fname !== '' && this.lname !== '' && this.desc !== '' && this.dates !== '') {
                if (this.editTimeline) {
                    this.edit({
                        id: this.editId,
                        fname: this.fname,
                        lname: this.lname,
                        desc: this.desc,
                        dates: this.dates
                    })
                } else {
                    this.addNewTimeline({
                        fname: this.fname,
                        lname: this.lname,
                        desc: this.desc,
                        dates: this.dates
                    })
                }
            }
            this.fname = ""
            this.lname = ""
            this.desc = ""
            this.dates = ""
        },

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

        async addNewTimeline(newTimeline) {
            try {
                const res = await fetch(this.url, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        fname: newTimeline.fname,
                        lname: newTimeline.lname,
                        desc: newTimeline.desc,
                        dates: newTimeline.dates
                    })
                })
                const data = await res.json()
                this.timeLines = [...this.timeLines, data]
            }
            catch (error) {
                console.log(`Not save because ${error} !`)
            }
        }
    },

    async created() {
        this.timeLines = await this.getTimeline()
    }
}
</script>