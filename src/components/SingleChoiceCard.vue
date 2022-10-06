<template>
  <div class = "cgnSimpleCard" v-once>
    <div class = "cgnSimpleCardHeader">
      {{compData.text}}
    </div>
    <div class = "cgnSimpleCardBody">
        <div id="kbot-wrapper">
            <div class="flex w-full h-screen items-center justify-center text-center">
              <ul v-cloak>
                <li class="choose-item" v-for="(choice, index) in compData.choices" :key="index" @click="submit(choice.value)"> 
                    {{choice.title}}
                </li>
              </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store.js'

export default {
  name: "SingleChoiceCard",
  props: ['compData'],
  data: function() {
    return {
      lstore: store
    }
  },
  methods: {
    submit(value) {
      console.log("Choice Submit: " + value);
      let msgSent = value;
      this.$emit("receiveFromChild", msgSent);
    }
  }
};
</script>
