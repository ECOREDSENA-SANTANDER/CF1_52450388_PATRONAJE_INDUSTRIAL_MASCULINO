<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3
        img(src='@/assets/curso/portada/img01.png', alt='')
      .col-lg-7
        p El presente material de formación permitirá conocer los conceptos básicos del patronaje industrial, necesarios para el trazado de patrones de la línea masculina. Se aborda también el análisis y reconocimiento de los puntos de referencia corporales masculinos, que son de gran importancia para realizar la toma de medidas y comprender el cuadro de tallas normalizadas.
        p De igual manera, se describe el procedimiento del patronaje que el aprendiz debe seguir para elaborar patrones de las prendas de vestir básicas de la indumentaria masculina.
        p Los conocimientos que se aprenderán en este componente serán de gran importancia, ya que se podrán aplicar en el trazo de los patrones básicos de la camisa, el pantalón y la chaqueta.
    .row.justify-content-center.align-items-center.fondo01.p-4         
      .col-lg-10.col-11
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
