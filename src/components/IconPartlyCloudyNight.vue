<template>
  <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="100%" width="100%" viewBox="0 0 512 512">
    <defs>
      <symbol id="partly-cloudy-night-b" viewBox="0 0 178 178">
        <path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M163.6 110.4a84.8 84.8 0 01-85.4-84.3A83.3 83.3 0 0181 5 84.7 84.7 0 005 88.7 84.8 84.8 0 0090.4 173a85.2 85.2 0 0082.6-63.1 88 88 0 01-9.4.5Z"/>
      </symbol>
      <symbol id="partly-cloudy-night-c" viewBox="0 0 359 231">
        <path fill="none" stroke="#d1d1d1" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 000-112l-2.5.1a83.9 83.9 0 00-153-64.2 56 56 0 00-84.6 48.1 56.6 56.6 0 00.8 9 60 60 0 0011.2 119"/>
      </symbol>
      <symbol id="partly-cloudy-night-d" viewBox="0 0 435.5 371.5">
        <g clip-path="url(#partly-cloudy-night-a)">
          <use xlink:href="#partly-cloudy-night-b" width="178" height="178" transform="translate(77 118)"/>
        </g>
        <use xlink:href="#partly-cloudy-night-c" width="359" height="231" transform="translate(76.5 140.5)"/>
      </symbol>
      <clipPath id="partly-cloudy-night-a">
        <path fill="none" d="M288 148a83.8 83.8 0 00-71.4 40 56 56 0 00-84.6 48 56.6 56.6 0 00.8 9A60 60 0 0084 304H0V0h288Z"/>
      </clipPath>
    </defs>
    <use xlink:href="#partly-cloudy-night-d" width="435.5" height="371.5"/>
  </svg>
</template>

<script>
export default {
  name: "IconPartlyCloudyNight"
};
</script>
