<template>
  <div id="map"></div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Home",
  components: {},
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
      this.setTileLayer();
      L.latlngGraticule({
        showLabel: true,
        dashArray: [4, 4],
        fontColor: "#999999",
        zoomInterval: constants.graticule_zoom,
      }).addTo(map);
    },
    async setLatlngGraticule() {
      await L.latlngGraticule({
        showLabel: false,
        dashArray: [1, 1],
        fontColor: "#fff000",
        zoomInterval: window.graticule_zoom,
      }).addTo(window.map);
    },

    setTileLayer() {
      window.constants.tileLayer.vec.addTo(map);
      window.constants.tileLayer.cva.addTo(map);
    },
  },
};
</script>
<style>
#map {
  padding: 0;
  margin: 0;
  width: 100%;
  height: calc(100vh);
}
</style>
