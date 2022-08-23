<template>
  <div class = "cgnSimpleCard" v-once>
    <div class = "cgnSimpleCardHeader">
      Der aktuelle Rheinpegel in {{compData.location}}
    </div>
    <div class = "cgnSimpleCardBody">
        <div id="kbot-wrapper">
            <figure>
              <figcaption>Aktueller Stand: {{ compData.currentWaterLevel }}cm<br />Aktuelle Tendenz: {{ compData.trend }}</figcaption>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
                xmlns:xlink="http://www.w3.org/1999/xlink" class="chart" 
                width="250" height="200" aria-labelledby="title" role="img">
                <title id="title">A bar chart showing the current rhine water level</title>
                <g class="bar">
                  <rect width="40" :height="hLevel[0]" x="0" :y="yLevel[0]"></rect>
                  <text x="17" :y="tLevel[0]">{{ compData.intervallLevel[0] }}</text>
                </g>
                <g class="bar">
                  <rect width="40" :height="hLevel[1]" x="45" :y="yLevel[1]"></rect>
                  <text x="62" :y="tLevel[1]">{{ compData.intervallLevel[1] }}</text>
                </g>
                <g class="bar">
                  <rect width="40" :height="hLevel[2]" x="90" :y="yLevel[2]"></rect>
                  <text x="107" :y="tLevel[2]">{{ compData.intervallLevel[2] }}</text>
                </g>
                <g class="bar">
                  <rect width="40" :height="hLevel[3]" x="135" :y="yLevel[3]"></rect>
                  <text x="149" :y="tLevel[3]">{{ compData.intervallLevel[3] }}</text>
                </g>
                <g class="bar">
                  <rect width="40" :height="hLevel[4]" x="180" :y="yLevel[4]" fill = 'dodgerblue'></rect>
                  <text x="194" :y="tLevel[4]">{{ compData.intervallLevel[4] }}</text>
                </g>
              </svg>
              <figcaption>Durchschnittlicher Pegelstand der letzten 5 Tage</figcaption>
          </figure>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "WaterLevelCard",
  props: ['compData'],
  data: function() {
    return {
      yLevel: [0, 0, 0, 0, 0],
      hLevel: [0, 0, 0, 0, 0],
      tLevel: [0, 0, 0, 0, 0]
    }
  },
  beforeMount() {
    var max = Math.max(...this.compData.intervallLevel);
    for (var i = 0; i < this.compData.intervallLevel.length; i++) {
      this.hLevel[i] = (parseInt(this.compData.intervallLevel[i]) * 180 / max);
      this.yLevel[i] = 200 - this.hLevel[i];
      this.tLevel[i] = this.yLevel[i] - 10;
    }
  }
};
</script>
