<template>
  <div id="app">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
  created:function() {
    var doc=document;
    var win=window;
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 14 * (clientWidth / 320) + 'px';
      };
    if (!doc.addEventListener) return;
    doc.addEventListener('DOMContentLoaded', recalc, false);

  }
}
</script>

<style>

</style>
