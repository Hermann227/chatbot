<template>
  <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="100%" width="100%" viewBox="0 0 512 512">
    <defs>
      <linearGradient id="shower-rain-a" x1="1381.3" x2="1399.5" y1="-1144.7" y2="-1097.4" gradientTransform="rotate(-9 8002.567 8233.063)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#0b65ed"/>
        <stop offset=".5" stop-color="#0a5ad4"/>
        <stop offset="1" stop-color="#0950bc"/>
      </linearGradient>
      <linearGradient xlink:href="#shower-rain-a" id="shower-rain-b" x1="1428.4" x2="1446.6" y1="-1084.7" y2="-1037.4" gradientTransform="rotate(-9 8009.537 8233.037)"/>
      <linearGradient xlink:href="#shower-rain-a" id="shower-rain-c" x1="1489.3" x2="1507.5" y1="-1111.6" y2="-1064.3" gradientTransform="rotate(-9 8016.566 8233.078)"/>
      <symbol id="shower-rain-d" viewBox="0 0 359 231">
        <path fill="none" stroke="#969696" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 000-112l-2.5.1a83.9 83.9 0 00-153-64.2 56 56 0 00-84.6 48.1 56.6 56.6 0 00.8 9 60 60 0 0011.2 119"/>
      </symbol>
      <symbol id="shower-rain-e" viewBox="0 0 129 110">
        <path fill="url(#shower-rain-a)" stroke="#0a5ad4" stroke-miterlimit="10" d="M8.5 56.5a8 8 0 01-8-8v-40a8 8 0 0116 0v40a8 8 0 01-8 8Z"/>
        <path fill="url(#shower-rain-b)" stroke="#0a5ad4" stroke-miterlimit="10" d="M64.5 109.5a8 8 0 01-8-8v-40a8 8 0 0116 0v40a8 8 0 01-8 8Z"/>
        <path fill="url(#shower-rain-c)" stroke="#0a5ad4" stroke-miterlimit="10" d="M120.5 74.5a8 8 0 01-8-8v-40a8 8 0 0116 0v40a8 8 0 01-8 8Z"/>
      </symbol>
    </defs>
    <use xlink:href="#shower-rain-d" width="359" height="231" transform="translate(76.5 140.5)"/>
    <use xlink:href="#shower-rain-e" width="129" height="110" transform="translate(191.5 343.5)"/>
  </svg>
</template>

<script>
export default {
  name: "IconShowerRain"
};
</script>
