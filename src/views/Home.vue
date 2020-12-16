<template>
  <div class="wrapper">
    <div id="map"></div>
    <show-lat-lon />
    <tool-bar />
  </div>
</template>

<script>
/* eslint-disable */
import showLatLon from '@/components/showLatlon/index.vue'
import toolBar from '@/components/toolBar/index.vue'
export default {
  name: "Home",
  components: {
    // 显示鼠标位置经纬度信息
    showLatLon,
    // 工具栏
    toolBar
  },
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.initMap();
    });
  },
  methods: {
    initMap() {
      let map = L.map("map", {
        attributionControl: false,
        crs: L.CRS.EPSG4326,
        minZoom: 1,
        maxZoom: 13,
        worldCopyJump: true,
        maxBounds: [
          [180, -1800],
          [-180, 1800],
        ],
        zoomControl: false,
      });
      map.setView([30.2, 119.7], 5);
      window.map = map;
      this.$constants.tileLayer.vec.addTo(map);
      this.$constants.tileLayer.cva.addTo(map);
      this.setLatlngGraticule();
    },
    async setLatlngGraticule() {
      await L.latlngGraticule({
        showLabel: true,
        dashArray: [1, 1],
        fontColor: "#999000",
        zoomInterval: this.$constants.graticule_zoom,
      }).addTo(map);
    },
  },
};
</script>
<style lang="scss" style>
.wrapper {
  #map {
    padding: 0;
    margin: 0;
    width: 100%;
    height: calc(100vh);
  }
}
</style>
