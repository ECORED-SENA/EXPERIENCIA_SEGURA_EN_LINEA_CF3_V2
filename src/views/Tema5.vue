<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 #[em Ciberbullying] o ciberacoso
    .row.align-items-center.mb-5.slideInUp
      .col-lg-4.mb-4.mb-lg-0
        .animatedImage
          figure
            img(src="@/assets/curso/t5-i1.png", style="width: 550px", alt="hombre usando un teléfono celular").m-auto
          .floatingCircle
          .floatingCircle2
      .col-lg-8
        p.text-bold.blueT  Según la Unicef (2010), para iniciar a describir este fenómeno muy popular, se hace indispensable conocer la definición del término “<i>bullying</i>”, que se traduce en sinónimos como atemorizar, excluir, golpear, insultar, intimidar, ridiculizar, provocar o incomodar a una persona.
        p.mb-0 Es por ello que hay que estar atentos a los signos de alerta que pueden presentar los niños, niñas, adolescentes y hasta adultos frente a estos temas de interés, para el buen desarrollo socioemocional de una persona, más aún cuando los medios electrónicos presentes están en el diario vivir de una persona por medio de redes sociales y otras herramientas que son de uso cotidiano.
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.custom-cardBlock(data-aos="flip-up")
          .bloque-texto-g__texto.p-4
            p.mb-0 Es importante estar atentos a los cambios en comportamiento, lenguaje o pensamiento, porque el hostigamiento #[em online] es una práctica bastante común entre los usuarios de Internet, incluso se presenta de forma pasiva sin darnos cuenta. #[strong El #[em ciberbullying] tiene bastantes semejanzas con el #[em bullying] tradicional (discriminación), aunque su manifestación y características son propias y es fundamental conocerlas para una sana convivencia social-digital pacífica y libre de discriminación.]
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t5-i2.jpg')})`}"
          )
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure(data-aos="flip-left")
          img(src="@/assets/curso/t5-i3.svg", style="width: 450px", alt="imagen decorativa").m-auto
      .col-lg-9(data-aos="flip-up")
        p.mb-0 Las personas no pueden dimensionar los alcances que pueden llegar a tener lo que se publica en la red y que puede llegar a millones de usuarios en cuestión de segundos. El ciberacoso se ha vuelto una normalidad cuando se navega en Internet, puesto que se presenta de manera pasiva (cuando se ve alguna imagen cuyo fin sea hacer gracia) y de manera activa (cuando ven comentarios xenófobos y ofensivos en comentarios o reseñas), por lo cual ya no es ningún tabú y, de hecho, se divide en varias facciones para identificar su tipo, tal como se relaciona a continuación:
    .row.mb-5
      .col-12
        .p-5.bg-c1
          .tarjeta.p-4.p-lg-5
            SlyderA
              .row.justify-content-center
                .col-11.col-lg-5.mb-4.mb-lg-0
                  .h4 <i>Ciberbullying</i>
                  p Se caracteriza por presentarse generalmente entre menores de edad de manera intencional y reiterada por medio de insultos y amenazas.          
                .col-11.col-lg-5
                  figure
                    img(src='@/assets/curso/t5-s1.svg', style="width: 350px" alt='Imagen decorativa').m-auto
              .row.justify-content-center
                .col-11.col-lg-5.mb-4.mb-lg-0
                  .h4 Sextorsión
                  p Se caracteriza, principalmente, por la extorsión con intenciones de carácter sexual hacia la víctima amenazando con exponer contenido sexual de ella.       
                .col-11.col-lg-5
                  figure
                    img(src='@/assets/curso/t5-s2.jpg', style="width: 350px" alt='Imagen decorativa').m-auto
              .row.justify-content-center
                .col-11.col-lg-5.mb-4.mb-lg-0
                  .h4 <i>Grooming</i>
                  p Es el acoso que realiza un adulto hacia un menor de edad con intenciones sexuales. Generalmente el mayor de edad se hace pasar por menor de edad para empatizar con la víctima y así ganar su confianza.       
                .col-11.col-lg-5
                  figure
                    img(src='@/assets/curso/t5-s3.svg', style="width: 350px" alt='Imagen decorativa').m-auto
              .row.justify-content-center
                .col-11.col-lg-5.mb-4.mb-lg-0
                  .h4 Ciberviolencia de género
                  p Se presenta por una persona o grupo de personas hacia otra u otros del sexo opuesto, en el que se ejerce violencia a través de insultos, acoso, control, ataques, chantaje.    
                .col-11.col-lg-5
                  figure
                    img(src='@/assets/curso/t5-s4.jpg', style="width: 350px" alt='Imagen decorativa').m-auto
              .row.justify-content-center
                .col-11.col-lg-5.mb-4.mb-lg-0
                  .h4 <i>Sexting</i>
                  p Consiste en el envío de imágenes de índole sexual entre dos personas, generalmente de manera consensuada. 
                .col-11.col-lg-5
                  figure
                    img(src='@/assets/curso/t5-s5.jpg', style="width: 350px" alt='Imagen decorativa').m-auto
    p.mb-5  El <i>ciberbullying</i>, tiene diferentes características, las cuales permite ser consciente que esta práctica es más común de lo que crees, la era digital es un hecho y ha cambiado muchas formas de pensamiento, es importante conocer cuáles son sus características más relevantes y poner “stop” a esas malas prácticas de uso de las nuevas tecnologías emergentes y construir una identidad digital pertinente y segura para todas las personas. A continuación, se relacionan estas características:
    .row.justify-content-center.mb-4
      .col-md-8.col-lg-4
        figure.mb-4.mb-lg-0(data-aos="flip-up")
          img(src="@/assets/curso/t5-ic1.svg", alt="imagen decorativa")
      .col-md-8.col-lg-4
        figure.mb-4.mb-lg-0(data-aos="flip-down")
          img(src="@/assets/curso/t5-ic2.svg", alt="imagen decorativa")
      .col-md-8.col-lg-4
        figure(data-aos="flip-down")
          img(src="@/assets/curso/t5-ic3.svg", alt="imagen decorativa")
    p.mb-5 El acoso incorpora diferentes actores en los cuales se relacionan roles específicos, esto para que se materialice y de lo cual depende la forma cómo se lleve a cabo, ya sea por:
    .row.justify-content-center.mb-5
      .col-10.col-md-6.col-lg-4
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t5-c1.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.mb-3.py-3.h3 Hostigamiento
              p Envío de fotografías, imágenes, memes tratando de denigrar a las víctimas.
      .col-10.col-md-6.col-lg-4
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t5-c2.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.mb-3.py-3.h3 Exclusión
              p Bloqueo de páginas o accesos a sitios, foros, bloqueos de chat o plataformas digitales.
      .col-10.col-md-6.col-lg-4
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t5-c3.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.mb-3.py-3.h3 Manipulación
              p Uso de información sensible, ingreso a perfiles digitales que perjudiquen la reputación digital de la víctima.
    .row.mb-5
      .col-lg-2.mb-4.mb-lg-0
        figure(data-aos="flip-up")
          img.nW(src="@/assets/curso/t5-ic4.svg", alt="imagen decorativa").m-auto
      .col-lg-10(data-aos="slide-right")
        p Usualmente los agresores se esconden bajo el anonimato, perfiles con datos falsos con o sin experticia en temas informáticos y la huella digital con la que actúan siempre es con información no real, es por ello que se hace necesario aprender a identificar los actores que intervienen en el ciberacoso:
    .row.justify-content-center
      .col-10.col-md-6.col-lg-4.col-lg-3
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t5-c4.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Agresores
              p Usuario que pretende humillar o denigrar a una persona usando medios digitales y plataformas electrónicas.
      .col-10.col-md-6.col-lg-4.col-lg-3
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t5-c5.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Víctimas
              p Usuario que recibe las humillaciones, discriminaciones o comentarios lascivos por parte de personas que atacan directamente en sus post o publicaciones.
      .col-10.col-md-6.col-lg-4.col-lg-3
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t5-c6.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Espectadores
              p Son las personas que miran las humillaciones y agresiones que han hecho a las víctimas, aunque es un ente pasivo, hace parte de la cadena del ciberacoso y muchas veces se intimidan frente al acosador o agresor apoyando directa o indirectamente la agresión.

</template>

<script>
export default {
  name: 'Tema5',
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
<style lang="sass" scoped>
.floatingCircle, .floatingCircle2
  background-image: url('../assets/curso/circle1.svg')
  background-size: cover
.bg-curve
  background-image: url('../assets/curso/bg-curves2.svg')
  background-repeat: no-repeat
  background-size: auto
  background-position: center
  padding-top: 6rem
  padding-bottom: 6rem
</style>
