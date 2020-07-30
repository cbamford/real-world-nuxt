<template>
  <div>
    <h1>Events</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  components: {
    EventCard
  },
  async asyncData({ error }) {
    try {
      const { data } = await EventService.getEvents(3, 1)
      return { events: data }
    } catch (e) {
      error({
        statusCode: 503, // Service Unavailable
        message: 'Unable to fetch events at this time. Please try again later.'
      })
    }
  },
  head() {
    return {
      title: 'Event Listing'
    }
  }
}
</script>

<style></style>
