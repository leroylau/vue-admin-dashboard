<template>
  <div class="container">
    <h2 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Team</h2>
    <div class="cards">
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-1" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
          <img
            src="@/assets/card-1.svg"
            alt
            class="card-header"
            :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
          />
          <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Tools</h3>
          <p
            :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-2" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
          <img
            src="@/assets/card-2.svg"
            alt
            class="card-header"
            :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
          />
          <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Calendar</h3>
          <p
            :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-3" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
          <img
            src="@/assets/card-3.svg"
            alt
            class="card-header"
            :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
          />
          <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">DropBox</h3>
          <p
            :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-4" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
          <img
            src="@/assets/card-4.svg"
            alt
            class="card-header"
            :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
          />
          <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Slack</h3>
          <p
            :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-5" :class="{'light-card' : !isDarkMode, 'dark-card' : isDarkMode}">
          <img
            src="@/assets/card-5.svg"
            alt
            class="card-header"
            :class="{'light-header' : !isDarkMode, 'dark-header' : isDarkMode}"
          />
          <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Orgnized</h3>
          <p
            :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </a>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  computed: {
    isDarkMode: function() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-left: 25px;
}

h2 {
  @include heading-2;
}

h3 {
  @include heading-3;
  margin-bottom: 16px;
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  text-overflow: ellipsis;

  margin-left: 16px;
  margin-top: 0;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}

.card {
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 10px;
  margin: 20px;
}

.card-1 {
  animation-delay: 0s;
}
.card-2 {
  animation-delay: 0.5s;
}
.card-3 {
  animation-delay: 1s;
}
.card-4 {
  animation-delay: 1.5s;
}
.card-5 {
  animation-delay: 2s;
}

.light-card {
  background: white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
  }
}

.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
  }
}

.card-header {
  width: 100%;
  height: 180px;
  border-radius: 10px 10px 0 0;
}

.light-header {
  background: $light-gray;
}

.dark-header {
  background: #283049;
}
</style>