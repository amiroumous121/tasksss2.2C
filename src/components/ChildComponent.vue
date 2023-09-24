<template>
  <div>
    <p>{{ someProp }}</p>
    <button @click="emitEvent">Emit Event</button>
  </div>
</template>

<script>
export default {
  props: ["someProp"],
  methods: {
    emitEvent() {
      this.$emit("someEvent", "Event Data");
    },
  },
};
</script>
