<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1208px;
  margin: 0 auto;
}

@media screen and (max-width: 1207px){
	.container{
		max-width: 768px;
	}
}

@media screen and (max-width: 767px) {
	.container{
		max-width: 336px;
	}
}
</style>
