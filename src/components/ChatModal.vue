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
        <span>Tünnes</span>
      </div>
    </div>
    <div id="chatLog" ref="chatLog">
      <div
        class="messageContain"
        v-for="(chat, index) in chatScript"
        :key="index"
      >
        <span :class="chat.botResp ? 'response' : 'call'" class="bubble">
          <div>{{chat.message}}</div>
        </span>
      </div>
    </div>
    <div 
      class="navigation-menu"
      :class="[isActiveNav ? 'active' : '']">
      <nav>
          <a href="#">
            <figure>
              <img src="/src/assets/intranet.jpg" alt="Intranet" width="70px">
              <figcaption>Intranet</figcaption>
            </figure>
          </a>
          <a href="#">
            <figure>
              <img src="/src/assets/intranet.jpg" alt="Intranet" width="70px">
              <figcaption>Intranet</figcaption>
            </figure>
          </a>
          <a href="#">
            <figure>
              <img src="/src/assets/intranet.jpg" alt="Intranet" width="70px">
              <figcaption>Intranet</figcaption>
            </figure>
          </a>
          <a href="#">
            <figure>
              <img src="/src/assets/intranet.jpg" alt="Intranet" width="70px">
              <figcaption>Intranet</figcaption>
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
export default {
  name: "ChatModal",
  components: {
    
  },
  data() {
    let time = new Date().getHours() + ":" + new Date().getMinutes();
    return {
      isActiveIcon: false,
      isActiveNav: false,
      component:"",
      tempMessage: "",
      userData: [
        {
          name: "Sam Jones",
          idNum: "123456789"
        }
      ],
      chatScript: [],
      response: [
        {
          call: "hello",
          response: "Hello there"
        },
        {
          call: "hey",
          response: "Hello there"
        },
        {
          call: "hi",
          response: "Hello there"
        },
        {
          call: "good bye",
          response: "See ya later!"
        },
        {
          call: "goodbye",
          response: "Until next time."
        },
        {
          call: "bye",
          response: "It was great chatting with you!"
        },
        {
          call: "What time is it?",
          response: "It is " + time + " right now."
        },
        {
          call: "What is your name?",
          response:
            "I do not have a name. My creators name is Alex. I'm Alex's bot."
        },
        {
          call: "Are you a robot?",
          response: "No, I am built with VueJS."
        },
        {
          call: "How are you?",
          response: "I really can't complain'"
        },
        {
          call: "Who Are You?",
          response:
            "With a little work, I could be a really cool website assistant."
        },
        {
          call: "wetter",
          response:
            "$WeatherCard"
        },
        {
          call: "What are your store hours?",
          response: "We are open Mon-Fri 9AM-6PM. Saturday & Sunday 10AM-3PM."
        },
        {
          call: "What is my ID Number?",
          response: "Your ID Number is {idNum}"
        },
        {
          call: "Help",
          response:
            "You can ask the following questions:\n'What is my ID Number?'\n'What are your store hours?'\n'Who Are You?'\n'What is your name?'\n'How are you?'\n'Are you a robot?'\n'What time is it?'\n'What is VueJS?'"
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(async function () {
      if (this.userData[0].name){
        let botInput = {
          message: "Hallo " + this.userData[0].name + ", \nich bin Tünnes, dein digitaler Helfer. Was kann ich für dich tun?",
          botResp: true,
          type: "text"
        };
        this.chatScript.push(Object.assign(botInput));
      }
    })
  },
  updated() {
    var chatLog = this.$refs.chatLog;
    chatLog.scrollTop = chatLog.scrollHeight;
  },
  methods: {
    submit: function() {
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
        var botInput

        for (var i = 0; i < this.response.length; i++) {
          let resp = this.response[i].response;
          if (
            this.response[i].call
              .replace(/[^a-zA-Z0-9 ]/g, "")
              .toLowerCase() ===
            msgSent.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase()
          ) {
            if (resp.includes("{")) {
              var dataMatch = resp.match("{(.*)}");
              var dataRep = resp.replace(
                dataMatch[0],
                this.userData[0][dataMatch[1]]
              );
              botInput = {
                message: dataRep,
                botResp: true,
                time: h + ":" + m + ":" + s,
                type: dataRep
              };
            } else {
              botInput = {
                message: resp,
                botResp: true,
                time: h + ":" + m + ":" + s,
                type: resp
              };
            }
            this.chatScript.push(Object.assign(botInput));
          }
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
      }
    }
  }
};
</script>
