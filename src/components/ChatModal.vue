<template>
  <div id="chatWrapper">
    <div id="chatHeader">
      <div class="inner-width">
        <div 
          class="menu-icon"
          @click="isActiveIcon = !isActiveIcon; isActiveNav = !isActiveNav">
          <i :class="[isActiveIcon ? 'fa fa-times' : 'fa fa-bars']">
          </i>
        </div>
        <span>{{ lstore.settings.title }}</span>
      </div>
    </div>
    <div id="chatLog" ref="chatLog">
      <div
        class="messageContain"
        v-for="(chat, index) in chatScript"
        :key="index"
      >
        <span :class="chat.botResp ? 'response' : 'call'" class="bubble">
          <div v-if="chat.type != 'text'">
            <div v-if="chat.type === 'WeatherCard'">
              <WeatherCard :compData="compDataWeather" />
            </div>
            <div v-if="chat.type === 'WaterLevelCard'">
              <WaterLevelCard :compData="compDataWater" />
            </div>
            <div v-if="chat.type === 'UploadFileCard'">
              <UploadFileCard />
            </div>
            <div v-if="chat.type === 'SingleChoiceCard'">
              <SingleChoiceCard :compData="compDataSingleChoice" @receiveFromChild="onReceiveFromChild"/>
            </div>
          </div>
          <div v-else>{{chat.message}}</div>
        </span>
      </div>
 
      <div v-if="msgLoading" class="respLoading">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="24px"
          height="30px"
          viewBox="0 0 24 30"
          style="enable-background:new 0 0 50 50;"
          xml:space="preserve"
        >
          <rect x="0" y="13" width="4" height="5" fill="#333">
            <animate
              attributeName="height"
              attributeType="XML"
              values="5;21;5"
              begin="0s"
              dur="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              attributeType="XML"
              values="13; 5; 13"
              begin="0s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="10" y="13" width="4" height="5" fill="#333">
            <animate
              attributeName="height"
              attributeType="XML"
              values="5;21;5"
              begin="0.15s"
              dur="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              attributeType="XML"
              values="13; 5; 13"
              begin="0.15s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="20" y="13" width="4" height="5" fill="#333">
            <animate
              attributeName="height"
              attributeType="XML"
              values="5;21;5"
              begin="0.3s"
              dur="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              attributeType="XML"
              values="13; 5; 13"
              begin="0.3s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
    </div>
    <div 
      class="navigation-menu"
      :class="[isActiveNav ? 'active' : '']">
      <nav>
          <a 
            v-for="(link, index) in lstore.favorites"
            :key="index"
            href="#">
            <figure>
              <img :src="lstore.favorites[index].image" :alt="lstore.favorites[index].alttext">
              <figcaption>{{ lstore.favorites[index].label }}</figcaption>
            </figure>
          </a>
      </nav>
    </div>
    <div id="chatFooter">
      <div id="chatInput">
        <input
          v-model="tempMessage"
          placeholder="Sag etwas zu Tünnes"
          @keyup.enter="submit"
        />
        <button class="sendButton" @click="submit">
          Senden
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store.js'
import { getBotpress } from '../services/apiservices.js';
import WeatherCard from './WeatherCard.vue';
import WaterLevelCard from './WaterLevelCard.vue';
import UploadFileCard from './UploadFileCard.vue';
import SingleChoiceCard from './SingleChoiceCard.vue';

export default {
  name: "ChatModal",
  components: {
    WeatherCard,
    WaterLevelCard,
    UploadFileCard,
    SingleChoiceCard
  },
  data() {
    let time = new Date().getHours() + ":" + new Date().getMinutes();
    return {
      lstore: store,
      isActiveIcon: false,
      isActiveNav: false,
      component:"",
      tempMessage: "",
      msgLoading: false,
      chatScript: [],
      compDataWeather: {},
      compDataWater: {},
      compDataSingleChoice: {},
      ReceiveFromChild: ""
    };
  },
  mounted() {
    if (this.lstore.settings.offline) {
        let botInput = {
        message: "Hallo, \nich bin Tünnes, dein digitaler Helfer. Leider bin ich zur Zeit offline und kann dir nicht weiterhelfen.",
        botResp: true,
        type: "text"
      };
      this.chatScript.push(Object.assign(botInput));
    }
    else if (this.lstore.settings.userlogin) {
      let botInput = {
        message: "Hallo " + this.lstore.settings.userlogin + ", \nich bin Tünnes, dein digitaler Helfer. Was kann ich für dich tun?",
        botResp: true,
        type: "text"
      };
    this.chatScript.push(Object.assign(botInput));
    }
  },
  updated() {
    var chatLog = this.$refs.chatLog;
    chatLog.scrollTop = chatLog.scrollHeight;
  },
  methods: {
    submit: async function() {
      if (this.tempMessage.length > 0) {
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        var msgSent = this.tempMessage;
        this.tempMessage = "";
        let chatInput = {
          message: msgSent,
          botResp: false,
          time: h + ":" + m + ":" + s,
          type: "text"
        };
        this.chatScript.push(Object.assign(chatInput));
        this.msgLoading = true;
        var botInput;

        let url = this.lstore.settings.host
        let userid = this.lstore.settings.userlogin
        let respBot = await getBotpress(url, userid, msgSent);
        
        let messageType = "";
        let messageText = "";

        if (typeof respBot.error != "undefined") {
          if (respBot.error == false) {
            if (respBot.type == "component") {
              messageText = "";
              if (respBot.typeName == "weather-with-forecast" || respBot.typeName == "weather-without-forecast") {
                this.compDataWeather = respBot;
                messageType = "WeatherCard";
                console.log ("WeatherCard sent to frontend")
              }
              else if (respBot.typeName == "water-level") {
                this.compDataWater = respBot;
                messageType = "WaterLevelCard";
                console.log ("WaterLevelCard sent to frontend")
              }
              else if (respBot.typeName == "upload-file") {
                messageType = "UploadFileCard";
                console.log ("UploadFileCard sent to frontend")
              }
            }
          }
          else {
            messageText = respBot.errorText;
            messageType = "text";
          }
        }
        else if (respBot.type == "single-choice") {
          this.compDataSingleChoice = respBot;
          messageType = "SingleChoiceCard";
          console.log ("SingleChoiceCard sent to frontend")
        }
        else {
            messageText = respBot.text;
            messageType = "text";
        }

        botInput = {
          message: messageText,
          botResp: true,
          time: h + ":" + m + ":" + s,
          type: messageType
        };
 
        this.chatScript.push(Object.assign(botInput));
      }
        
      if (!botInput) {
        botInput = {
          message:
            "I'm sorry, I do not understand that. Please type 'help' for a list of suggested questions.",
          botResp: true,
          time: h + ":" + m + ":" + s,
          type: "text"
        };
        this.chatScript.push(Object.assign(botInput));
      }
      this.msgLoading = false;
      this.tempMessage = "";
    },
    onReceiveFromChild(value) {
      this.receiveFromChild = value;
      console.log("onReceiveFromChild: " + value);
      this.tempMessage = value;
      this.submit();
    }
  }
};
</script>
