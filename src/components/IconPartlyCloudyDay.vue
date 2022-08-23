<template>
  <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="100%" width="100%" viewBox="0 0 512 512">
    <defs>
      <symbol id="partly-cloudy-day-b" viewBox="0 0 193 193">
        <circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"/>
        <path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7 18-18M31.4 161.6l18-18m0-94.2-18-18m130.2 130.2-18-18M4.5 96.5h25.4m158.6 0h-25.4"/>
      </symbol>
      <symbol id="partly-cloudy-day-c" viewBox="0 0 359 231">
        <path fill="none" stroke="#d1d1d1" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 000-112l-2.5.1a83.9 83.9 0 00-153-64.2 56 56 0 00-84.6 48.1 56.6 56.6 0 00.8 9 60 60 0 0011.2 119"/>
      </symbol>
      <symbol id="partly-cloudy-day-d" viewBox="0 0 435.5 371.5">
        <g clip-path="url(#partly-cloudy-day-a)">
          <use xlink:href="#partly-cloudy-day-b" width="193" height="193" transform="translate(69.5 110.5)"/>
        </g>
        <use xlink:href="#partly-cloudy-day-c" width="359" height="231" transform="translate(76.5 140.5)"/>
      </symbol>
      <clipPath id="partly-cloudy-day-a">
        <path fill="none" d="M288 148a83.8 83.8 0 00-71.4 40 56 56 0 00-84.6 48 56.6 56.6 0 00.8 9A60 60 0 0084 304H0V0h288Z"/>
      </clipPath>
    </defs>
    <use xlink:href="#partly-cloudy-day-d" width="435.5" height="371.5"/>
  </svg>
</template>

<script>
export default {
  name: "IconPartlyCloudyDay"
};
</script>
