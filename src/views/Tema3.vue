<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Delitos contra la propiedad intelectual
    
    .row.mb-5
      .col-lg-8
        p.mb-4  En la Carta Magna de Colombia de 1991:
        .bloque-texto-d.color-acento-botones.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            .h4.mb-0 El Estado protegerá la propiedad intelectual, por el tiempo y mediante las formalidades que establezca la ley.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h6.mb-0 - Artículo 61
            
            
        p.mb-3  Quiere decir esto que se deberá proteger jurídicamente todos los derechos de autor y dar reconocimiento a aquellos que investigan, crean y brindan información importante, reconocida y verificada. Es importante conocer cuáles son los tipos de propiedad intelectual para que no incurrir en posibles delitos por falta de conocimiento y se generen apuros por compartir información que no es propia, entre los más destacados, según la OMPI (Organización Mundial de la Propiedad Intelectual), se encuentran:
      .col-lg-4
        .animatedImage
          figure.mb-5
            img(src="@/assets/curso/t3-i1.png", alt="hombre usando un teléfono celular")
          .floatingCircle
          .floatingCircle2

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/G8sCn9yswdQ?si=uIcGgy04C6rmv4wg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema3',
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
