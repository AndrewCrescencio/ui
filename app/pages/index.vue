<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

const online = useOnline()
</script>

<template>
  <div>
    <ClientOnly>
      <Suspense>
        <p v-if="online">
          <BaseButton>
            {{ $t("hiFriend") }}
          </BaseButton>
        </p>
        <div v-else text-gray:80>
          You're offline
        </div>
        <template #fallback>
          <div italic op50>
            <span animate-pulse>Loading...</span>
          </div>
        </template>
      </Suspense>
      <template #fallback>
        <div op50>
          <span animate-pulse>...</span>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>
