<template>
  <header>
    <div class="super-header">Astonishing Tales from the Astral Sea</div>
    <h1>Weird Future</h1>
  </header>
  <main>
    <section class="flex flex-wrap p-[1vmin] font-comic">
      <HomePanel>
        <HomePanelText :top="true"> Suddenly... </HomePanelText>
        <HomePanelText :bottom="true">...something amazing happened</HomePanelText>
      </HomePanel>
      <HomePanel>
        <p class="text top-left">Try resizing...</p>
        <p class="text bottom-right">...it's responsive</p>
      </HomePanel>
      <div class="panel">
        <p class="speech">A speech bubble</p>
      </div>
      <div class="panel"></div>
      <div class="panel"></div>
      <div class="panel"></div>
      <div class="panel"></div>
      <div class="panel"></div>
      <div class="panel">
        <p class="text bottom-right">THE END</p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import HomePanel from '@/components/HomePanel.vue';
import HomePanelText from '@/components/HomePanelText.vue';
</script>
