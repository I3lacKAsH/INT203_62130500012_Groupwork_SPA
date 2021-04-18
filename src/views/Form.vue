<template>
    <nav-bar />
    <br />

    <forms @whenSaveFrom="submitTimeline" :dataTimeline="dataTimelines" />
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            url: 'http://localhost:3000/timeLines',
            dataTimelines: {
                fname: '',
                lname: '',
                desc: '',
                dates: '',
                invalidFname: false,
                invalidLname: false,
                invalidDesc: false,
                invalidDate: false,
            },
            timeLines: []
        }

    },
    methods: {
        submitTimeline(data) {
            let scope = this
            scope.dataTimelines.invalidFname = data.fname === '' ? true : false
            scope.dataTimelines.invalidLname = data.lname === '' ? true : false
            scope.dataTimelines.invalidDesc = data.desc === '' ? true : false
            scope.dataTimelines.invalidDate = data.dates === '' ? true : false

            console.log(`fname Value: ${data.fname}`)
            console.log(`lname Value: ${data.lname}`)
            console.log(`desc Value: ${data.desc}`)
            console.log(`dates Value: ${data.dates}`)

            if (data.fname !== '' && data.lname !== '' && data.desc !== '' && data.dates !== '') {
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
                        fname: data.fname,
                        lname: data.lname,
                        desc: data.desc,
                        dates: data.dates
                    })
                }
            }
            this.fname = ""
            this.lname = ""
            this.desc = ""
            this.dates = ""
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
        },

        async updateTimeline(editTimeline) {
            try {
                let updateData = {
                    id: editTimeline.id,
                    fname: editTimeline.fname,
                    lname: editTimeline.lname,
                    desc: editTimeline.desc,
                    dates: editTimeline.dates
                }
                console.log("🚀 ~ file: About.vue ~ line 54 ~ updateTimeline ~ updateData", updateData)
                const res = await fetch(`${this.url}/${editTimeline.id}`, {
                    method: 'PUT',
                    header: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateData)
                })
                const data = await res.json()
                console.log("🚀 ~ file: About.vue ~ line 61 ~ updateTimeline ~ data", data)
                this.timelines = this.timelines.map(
                    (timeLines) => timeLines.id === editTimeline.id ?
                        { ...editTimeline, fname: data.fname, lname: data.lname, desc: data.desc, dates: data.dates } : timeLines)
                this.edit = false
                this.editId = ""
                this.fname = ""
                this.lname = ""
                this.desc = ""
                this.dates = ""
            } catch (error) {
                console.log(`Not edit because ${error} !`)
            }
        },

    }
}
</script>