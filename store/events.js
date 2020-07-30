import EventService from '@/services/EventService.js'

export const state = () => ({
  events: [],
  eventsTotal: 0,
  event: {},
  perPage: 3
})

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENTS_TOTAL(state, eventsTotal) {
    state.eventsTotal = eventsTotal
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}

export const actions = {
  fetchEvents({ commit }, { page }) {
    return EventService.getEvents(3, page).then((response) => {
      commit('SET_EVENTS', response.data)
    })
  },
  fetchEvent({ commit }, id) {
    return EventService.getEvent(id).then((response) => {
      commit('SET_EVENT', response.data)
    })
  }
}
