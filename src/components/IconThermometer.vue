<template>
  <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="30%" width="30%" viewBox="0 0 512 512" style="vertical-align: middle;">
    <defs>
      <symbol id="therm-a" viewBox="0 0 72 168">
        <circle cx="36" cy="132" r="36" fill="#ef4444"/>
        <path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M36 12v120"/>
      </symbol>
      <symbol id="therm-b" viewBox="0 0 118 278">
        <path fill="none" stroke="#94a3b8" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0124-46.6V35.5a32 32 0 1164 0v136a57 57 0 0124 46.7ZM63 83h28M63 51h28m-28 64h28"/>
      </symbol>
      <symbol id="therm-c" viewBox="0 0 118 278">
        <use xlink:href="#therm-a" width="72" height="168" transform="translate(23 87)"/>
        <use xlink:href="#therm-b" width="118" height="278"/>
      </symbol>
    </defs>
    <use xlink:href="#therm-c" width="118" height="278" transform="translate(197 117)"/>
  </svg>
</template>

<script>
export default {
  name: "IconThermometer"
};
</script>
