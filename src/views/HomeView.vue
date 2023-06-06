<template>
  <header>
    <div class="super-header">Astonishing Tales from the Astral Sea</div>
    <h1>Weird Future</h1>
  </header>
  <main>
    <section class="flex flex-wrap p-[1vmin] font-comic">
      <HomePanel>
        <HomePanelText :top="true"> Suddenly... </HomePanelText>
        <HomePanelText :bottom="true">...something happened</HomePanelText>
      </HomePanel>
      <HomePanel>
        <HomePanelText :top="true">Try resizing...</HomePanelText>
        <HomePanelText :bottom="true">...it's responsive</HomePanelText>
      </HomePanel>
      <HomePanel>
        <p class="speech">A speech bubble</p>
      </HomePanel>
      <HomePanel></HomePanel>
      <HomePanel></HomePanel>
      <HomePanel></HomePanel>
      <HomePanel></HomePanel>
      <HomePanel></HomePanel>
      <HomePanel>
        <HomePanelText :bottom="true">THE END</HomePanelText>
      </HomePanel>
    </section>
  </main>
</template>

<script setup lang="ts">
import HomePanel from '@/components/HomePanel.vue';
import HomePanelText from '@/components/HomePanelText.vue';
</script>
