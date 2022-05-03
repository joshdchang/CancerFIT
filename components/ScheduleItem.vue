<template>
    <div class="bg-gray-200 p-3 sm:p-4 rounded-xl grid grid-cols-1 mb-3 sm:mb-4">
        <p class="text-gray-900 sm:pb-3 pb-2 text-md sm:text-lg text-center">{{ new Date(upcoming.date_and_time).toLocaleString('en-US', {
            weekday: 'long', month: 'long', day: 'numeric', hour12: true, hour:'numeric', minute:'2-digit' }) }}</p>
        <span @click="open = !open">
            <PillButton theme="light" w="w-80">Add to Calendar</PillButton>
        </span>
        <div v-if="open" class="my-4">
            <PillButton w="w-80" v-for="calendar of calendars" class="my-2" :href="calendar.link">{{ calendar.service }}</PillButton>
            <a class="my-2" :href="ics" :download="upcoming.name + '.ics'">
                <PillButton w="w-80">ICS (Universal)</PillButton>
            </a>
        </div>
    </div>
</template>
<script>
    import { google, outlook, office365, yahoo, ics } from "calendar-link";
    export default {
        props: ['upcoming'],
        data() {
            let event = {
                title: this.upcoming.name,
                start: this.upcoming.date_and_time + '',
                duration: [this.upcoming.minutes, 'minutes']
            }
            return {
                open: false,
                calendars: [
                    {
                        service: 'Google',
                        link: google(event)
                    },
                    {
                        service: 'Outlook',
                        link: outlook(event)
                    },
                    {
                        service: 'Office 365',
                        link: office365(event)
                    },
                    {
                        service: 'Yahoo!',
                        link: yahoo(event)
                    }
                ],
                ics: ics(event)
            }
        }
    }
</script>