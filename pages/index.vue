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
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents', { page: 1 })
    } catch (e) {
      error({
        statusCode: 503, // Service Unavailable
        message: 'Unable to fetch events at this time. Please try again later.'
      })
    }
  },
  computed: {
    ...mapState({
      events: (state) => state.events.events
    })
  },
  head() {
    return {
      title: 'Event Listing'
    }
  }
}
</script>

<style></style>
