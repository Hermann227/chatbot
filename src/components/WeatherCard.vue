<template>
  <!-- Important: Directive v-once to avoid rerendering -->
  <div class = "cgnSimpleCard" v-once>
    <div class = "cgnSimpleCardHeader">
      Das Wetter in {{compData.location}}
    </div>
    <div class = "cgnSimpleCardBody">
        <div id="kbot-wrapper">
          <div class="kbot-row" style="flex-direction: row; flex-wrap: nowrap;">
            <div class="kbot-col kbot-weather__centered-column">
              <h3>{{compData.currentTemperature}}°C</h3>
              <div class="kbot-icon-big">
                <component v-bind:is="compIconNow" />
              </div>
            </div>
            <div class="kbot-col kbot-weather__detail-column">
              <div>
                <IconThermometer />
                <span class="kbot-text-muted">{{compData.minTemperature}}°C </span>
                <span>{{compData.maxTemperature}}°C</span>
              </div>
              <div>
                <IconWind />
                <span>{{compData.windSpeed}} km/h</span>
              </div>
              <div>
                <IconHumidity />
                <span>{{compData.rainProbability}}%</span>
              </div>
            </div>
          </div>
          <div v-if="forecast" class="kbot-row" style="flex-direction: row; flex-wrap: nowrap;">
            <div class="kbot-col kbot-forecast__column">
              <h5>{{compData.forecast[0].timestamp}} Uhr</h5>
              <div class="kbot-icon-small">
                <component v-bind:is="compIconT1" />
              </div>
              <p>
                <span>{{compData.forecast[0].temperature}}°C</span>
              </p>
            </div>
            <div class="kbot-col kbot-forecast__column">
              <h5>{{compData.forecast[1].timestamp}} Uhr</h5>
              <div class="kbot-icon-small">
                  <component v-bind:is="compIconT2" />
              </div>
              <p>
                <span>{{compData.forecast[1].temperature}}°C</span>
              </p>
            </div>
            <div class="kbot-col kbot-forecast__column">
              <h5>{{compData.forecast[2].timestamp}} Uhr</h5>
              <div class="kbot-icon-small">
                <component v-bind:is="compIconT3" />
              </div>
              <p>
                <span>{{compData.forecast[2].temperature}}°C</span>
              </p>
            </div>
            <div class="kbot-col kbot-forecast__column">
              <h5>{{compData.forecast[3].timestamp}} Uhr</h5>
              <div class="kbot-icon-small">
                <component v-bind:is="compIconT4" />
              </div>
              <p>
                <span>{{compData.forecast[3].temperature}}°C</span>
              </p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

import IconBrokenClouds from './IconBrokenClouds.vue'
import IconClearDay from './IconClearDay.vue';
import IconClearNight from './IconClearNight.vue';
import IconCloudy from './IconCloudy.vue';
import IconMist from './IconMist.vue';
import IconNotAvailable from './IconNotAvailable.vue';
import IconPartlyCloudyDay from './IconPartlyCloudyDay.vue';
import IconPartlyCloudyNight from './IconPartlyCloudyNight.vue';
import IconRain from './IconRain.vue';
import IconShowerRain from './IconShowerRain.vue';
import IconSnow from './IconSnow.vue';
import IconThunderstorm from './IconThunderstorm.vue';
import IconThermometer from './IconThermometer.vue';
import IconWind from './IconWind.vue';
import IconHumidity from './IconHumidity.vue';

import { getIcon } from '../services/workerservices.js';

export default {
  components: { 
    IconBrokenClouds, 
    IconClearDay, 
    IconClearNight, 
    IconCloudy,
    IconMist, 
    IconNotAvailable, 
    IconPartlyCloudyDay, 
    IconPartlyCloudyNight,
    IconRain,
    IconShowerRain,
    IconSnow,
    IconThunderstorm,
    IconThermometer,
    IconWind,
    IconHumidity
    },
  name: "WeatherCard",
  props: ['compData'],
  data: function() {
    return {
      forecast: false,
      now: false,
      componentWeatherNow:"WeatherNow",
      componentWeatherForecast:"WeatherForecast",
      compIconNow: "",
      compIconT1: "",
      compIconT2: "",
      compIconT3: "",
      compIconT4: ""
    }
  },
  beforeMount() {
    this.forecast = false;
    this.now = false;
    console.log("WeatherCard before mount")
    // Find weather icon for daily weather
    this.compIconNow=getIcon(this.compData.icon);
    if (this.compData.typeName == "weather-with-forecast") {
      this.forecast = true;
      // Find weather icon for forecast weather
      this.compIconT1=getIcon(this.compData.forecast[0].icon);
      this.compIconT2=getIcon(this.compData.forecast[1].icon);
      this.compIconT3=getIcon(this.compData.forecast[2].icon);
      this.compIconT4=getIcon(this.compData.forecast[3].icon);
    }
  },
  mounted() {
    console.log("WeatherCard mounted")
    this.now = true;
    if (this.compData.typeName == "weather-with-forecast") {
      console.log("type-Name: " + this.compData.typeName)
      // this.forecast = true;
    }
  },
};
</script>
