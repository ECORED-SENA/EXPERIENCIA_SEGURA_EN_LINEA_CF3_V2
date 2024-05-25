<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5.slideInUp
      .col-lg-4
        figure.mb-5
          img(src="@/assets/curso/t0-i1.jpg", alt="hombre usando un teléfono celular")
      .col-lg-8
        p.mb-3.text-bold.blueT  Las tecnologías de información y comunicación han crecido vertiginosamente en los últimos años, pero, ¿se conocen las implicaciones que tiene acceder a esas tecnologías e intercambiar información con otras personas?
        p Por ello, se invita a consultar el siguiente video, para conocer el abordaje conceptual del componente:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/C_mO0z3iaMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
