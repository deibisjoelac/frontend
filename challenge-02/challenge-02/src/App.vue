<template>
  <div id="app">
	<header-main/>
    <main>
      <div class="container-fluid">
		<transition name="slide-fade" mode="in-out">
			<router-view  class="mt-3"/>
		</transition>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderMain from './components/Header.vue'
export default {
	components : { HeaderMain}
};
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>
