<script setup lang="ts">
defineProps<{ type: 'node' | 'client' }>()
</script>

<template>
  <details class="px-4 py-3 mt-4 rounded bg-gray-400 bg-opacity-10">
    <summary class="outline-none">
      Entorno:
      <span class="capitalize" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
    </summary>

    <div class="mt-2 opacity-75">
      <span v-if="type === 'node'">
        Esta función de configuración sólo se ejecutará en el entorno Node.js, puedes tener acceso a la API de Node.
      </span>
      <span v-else>
        Esta función de configuración sólo se ejecutará en el lado del cliente. Asegúrate de la compatibilidad del navegador al importar los paquetes.
      </span>
    </div>
  </details>
</template>
