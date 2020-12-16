<template>
  <div class="wrapper">
    <div class="latlng_wrapper">
      <div class="latlng">
        <div class="other_lat">{{ latNum }}</div>
        <div class="other_lon">{{ lonNum }}</div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Home",
  components: {},
  data() {
    return {
      // 经纬数据
      latNum: 0,
      lonNum: 0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.showLatlon();
      }, 50);
    });
  },
  methods: {
    showLatlon() {
      window.map.on("mousemove", (e) => {
        console.log(`e`,e)
        let latlng = L.latLng(e.latlng.lat, e.latlng.lng).wrap();
        this.latNum =
          latlng.lat > 0
            ? Math.abs(latlng.lat).toFixed(3) + " N"
            : Math.abs(latlng.lat).toFixed(3) + " S";
        this.lonNum =
          latlng.lng > 0
            ? Math.abs(latlng.lng).toFixed(3) + " E"
            : Math.abs(latlng.lng).toFixed(3) + " W";
      });
    },
  },
};
</script>
<style lang="scss" scope>
.wrapper {
  .latlng_wrapper {
    z-index: 1000;
    position: fixed;
    bottom: 20px;
    left: 10px;
    display: flex;
    align-items: center;
    background-size: 100%;
    padding-left: 10px;
    margin-right: 10px;
    .latlng {
      width: 250px;
      display: flex;
      align-items: center;
      div {
        width: 80px;
        margin-left: 5px;
      }
      .other_lat {
        font-weight: 500;
      }
      .other_lon {
        font-weight: 500;
      }
    }
  }
}
</style>
