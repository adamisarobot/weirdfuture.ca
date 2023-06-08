<template>
  <header>
    <div class="text-center font-tall-deco text-5xl">Astonishing Tales from the Astral Sea</div>
    <h1 class="">Weird Future</h1>
  </header>
  <main>
    <section class="flex flex-wrap p-[1vmin] font-comic">
      <HomePanel color="blue">
        <HomePanelText top> Suddenly... </HomePanelText>
        <HomePanelText bottom>...something happened</HomePanelText>
      </HomePanel>
      <HomePanel color="red">
        <HomePanelText top>Try resizing...</HomePanelText>
        <HomePanelText bottom>...it's responsive</HomePanelText>
      </HomePanel>
      <HomePanel color="green">
        <HomeSpeechBubble>A speech bubble</HomeSpeechBubble>
      </HomePanel>
      <HomePanel color="yellow"></HomePanel>
      <HomePanel color="purple"></HomePanel>
      <HomePanel color="pink"></HomePanel>
      <HomePanel color="gray"></HomePanel>
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
import HomeSpeechBubble from '@/components/HomeSpeechBubble.vue';
import { useHead } from 'unhead';

useHead({
  title: 'Weird Future | Astonishing Tales from the Astral Sea'
});
</script>
