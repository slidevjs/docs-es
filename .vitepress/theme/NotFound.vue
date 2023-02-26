<template>
  <div class="theme">
    <h1>404</h1>
    <blockquote>{{ getMsg() }}</blockquote>
    <a :href="site.base" aria-label="ir al inicio">Llévame al inicio.</a>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';

const {site} = useData()
const msgs = [
  'No hay nada aquí.',
  '¿Cómo terminamos aquí?',
  'Eso es un Cuatro-cero-cuatro.',
  'Recórcholis, parece que se rompió algún link.',
]

function getMsg() {
  return msgs[Math.floor(Math.random() * msgs.length)]
}
</script>
