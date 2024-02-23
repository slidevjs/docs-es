<script setup lang="ts">
defineProps<{ type: 'node' | 'client' }>()
</script>

<template>
<<<<<<< HEAD
  <details class="px-4 py-3 mt-4 rounded bg-gray-400 bg-opacity-10">
    <summary class="outline-none">
      Entorno:
      <span class="capitalize" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
=======
  <details class="p4 mt-4 rounded-lg bg-gray-400 bg-opacity-10">
    <summary class="outline-none !m0 select-none">
      Environment:
      <span class="capitalize font-bold" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83
    </summary>

    <div class="pt2 opacity-75">
      <span v-if="type === 'node'">
        Esta función de configuración sólo se ejecutará en el entorno Node.js, puedes tener acceso a la API de Node.
      </span>
      <span v-else>
        Esta función de configuración sólo se ejecutará en el lado del cliente. Asegúrate de la compatibilidad del navegador al importar los paquetes.
      </span>
    </div>
  </details>
</template>
