<script lang="ts" setup>
import {Container} from '@/shared/container';
import {Typography} from "@/shared/typography";
import {RouterLink} from "vue-router";
import { useCatalogStore } from "@/entities/catalog";

const catalogStore = useCatalogStore();
const { catalogSections } = catalogStore;

</script>

<template>
  <div class="dropdown-menu">
    <Container>
      <ul class="dropdown-menu__list">
        <li class="dropdown-menu__item" v-for="section in catalogSections" :key="section.label">
          <RouterLink :to="section.link" class="item__link">
            <Typography tag-name="span" size="s" class="link__text" bold>
              {{ section.label }}
            </Typography>
          </RouterLink>
        </li>

      </ul>
    </Container>
  </div>
</template>

<style scoped>
 .dropdown-menu{
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   background: var(--main-surface);
   box-shadow: var(--shadow-default-m);
   animation: .5s ease-in forwards FadeIn;
 }

 .dropdown-menu__list{
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-row-gap: 24px;
   grid-column-gap: 40px;
   padding: 40px 0;

 }
 .link__text{
   transition: color 0.2s ease;
 }
 .link__text:hover{
   color: var(--main-primary);
 }

 @keyframes FadeIn {
   from {
     top: 0;
     opacity: 0;
   }
   to {
     top: 72px;
     opacity: 1;
   }
 }
</style>