<template>
  <div
    @click="toggleDarkMode"
    class="toggle"
    :class="{'light-toggle' : !isDarkMode, 'dark-toggle' : isDarkMode}"
  >
    <div class="toggle-switch" :class="{'toggle-left' : !isDarkMode, 'toggle-right' : isDarkMode}">
      <img v-show="!isDarkMode" src="@/assets/sun.svg" alt class="themeIcon" />
      <img v-show="isDarkMode" src="@/assets/moon.svg" alt class="themeIcon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitch",
  computed: {
    isDarkMode: function() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    }
  }
};
</script>

<style lang="scss" scoped>
.themeIcon {
  width: 22px;
  height: 22px;
}

.toggle {
  width: 175px;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 50px auto;
  display: flex;
}

.light-toggle {
  background: linear-gradient(246.78deg, #f7fcfc, #fafcfa);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.dark-toggle {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0px 5px 10px rgba(255, 255, 255, 0.1);
}

.toggle-switch {
  margin: 2px;
  padding: 15px 35px;
  border-radius: 8px;
}

.toggle-left {
  transform: translateX(5%);
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.toggle-right {
  transform: translateX(80%);
  background: #1b233f;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>