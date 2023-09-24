<template>
  <!-- 1. Template Syntax -->
  <p>{{ message }}</p>
  <p v-html="rawHtml"></p>
  <div v-bind:id="dynamicId"></div>
  <p>{{ reversedMessage }}</p>

  <!-- 2. Methods -->
  <button @click="reverseMessage">Reverse Message</button>

  <!-- 3. Reactivity Fundamentals -->
  <p>{{ count }}</p>
  <button @click="increment">Increment</button>

  <!-- 5. Class and Style Bindings -->
  <div :class="{ active: isActive }" :style="{ color: activeColor }">
    Styled Element
  </div>

  <!-- 6. List Rendering -->
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.text }}</li>
  </ul>

  <!-- 7. Event Handling -->
  <button @click="sayHello">Say Hello</button>

  <!-- 8. Form Input Bindings -->
  <input v-model="inputValue" type="text" />

  <!-- 10. Components -->
  <ChildComponent :someProp="message" @someEvent="handleEvent">
    <span>This is a slot content</span>
  </ChildComponent>

  <!-- 11. Router -->
  <!-- (Assuming you have Vue Router set up) -->
</template>

<script>
import { ref, watch } from "vue";
import ChildComponent from "./ChildComponent.vue"; // Make sure to import your child component

export default {
  components: {
    ChildComponent, // Register the child component
  },
  data() {
    return {
      message: "Hello Vue!",
      rawHtml: '<span style="color: red">This is raw HTML</span>',
      dynamicId: "myId",
      isActive: true,
      activeColor: "red",
      items: [
        { id: 1, text: "Item 1" },
        { id: 2, text: "Item 2" },
      ],
      inputValue: "",
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
    sayHello() {
      alert("Hello!");
    },
    handleEvent() {
      // Handle the event emitted by ChildComponent
    },
  },
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value++;
    };

    // 9. Watchers
    watch(count, (newVal, oldVal) => {
      console.log(`Count changed from ${oldVal} to ${newVal}`);
    });

    return { count, increment };
  },
};
</script>
