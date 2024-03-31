<template>
  <header class="header">
    <Container class="header__container">
      <Logo orientation="horizontal" colorfull bg-color="white" withText />
      <div class="header__catalog">
        <Button color="secondary">
          <template v-slot:leftIcon>
            <Icon type="menu" />
          </template>
          Каталог
        </Button>
      </div>
    </Container>
  </header>
</template>

<script lang="ts" setup>
import Container from '@/shared/container/index.vue'
import Logo from '@/shared/logo/index.vue'
import Button from '@/shared/button/index.vue'
import Icon from '@/shared/icon/index.vue'
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: var(--shadow-default-s);
  background: var(--surface);
  height: 72px;
}
.header__container {
  display: flex;
  align-items: center;
  height: 100%;
}

.header__catalog {
  width: 140px;
  margin-left: 40px;
}
</style>
