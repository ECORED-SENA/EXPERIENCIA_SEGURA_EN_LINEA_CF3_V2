<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Riesgos o amenazas asociados al uso de las nuevas tecnologías
    
    .row.mb-5.slideInUp
      .col-lg-2
        figure.mb-5
          img.nW(src="@/assets/curso/t1-ic1.svg", alt="icono decorativo")

      .col-lg-10
        p.mb-3.text-bold.blueT Las nuevas herramientas tecnológicas brindan oportunidades de comunicación, así, las redes sociales son de las más importantes porque se enfocan en el ocio y entretenimiento, permiten una comunicación permanente síncrona y asíncrona con amigos y familiares e, incluso, con personas totalmente desconocidas, pero...
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.custom-cardBlock(data-aos="flip-up")
          .bloque-texto-g__texto.p-4
            p.mb-0 Las TIC no solo aportan innumerables ventajas y oportunidades, <b>están acompañadas de diversos inconvenientes y peligros que afectan directamente la integridad y privacidad de la información que se comparte.</b>

          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-i1.jpg')})`}"
          )


    #t_1_1.titulo-segundo
      h2 1.1  Uso prolongado de dispositivos
    .row.mb-5(data-aos="flip-up")
      .col-lg-2
        figure.mb-3(data-aos="flip-left")
          img.nW(src="@/assets/curso/t1-ic2.svg", alt="icono decorativo")

      .col-lg-10
        p.mb-5 El uso abusivo y prolongado de dispositivos electrónicos afecta tanto física como mentalmente a las personas, generando depresión, ansiedad, riesgo de suicidio y adicciones, así como fallas en la atención, memoria y aprendizaje. El siguiente video ampliará la información con respecto al uso prolongado de los dispositivos:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/D7y3q8kym_0?si=ykDIrhYrXzMpsqe8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    Separador
    br
    br
    #t_1_2.titulo-segundo
      h2 1.2  Riesgos y recomendaciones de buen uso
    .row.mb-5
      .col-lg-4
        .animatedImage(data-aos="flip-up")
          figure.mb-5
            img(src="@/assets/curso/t1-i2.png", alt="mujer usando un teléfono celular")
          .floatingCircle
          .floatingCircle2
      .col-lg-8(data-aos="slide-up")
        p.mb-4.text-bold.blueT  Es importante conocer los riesgos de utilizar tecnologías digitales, y ser conscientes que hacer frente a ellos es un componente clave para tener una identidad digital. 
        p.mb-3 Las habilidades digitales no solo consisten en saber manejar un dispositivo a la perfección, sino también tener conciencia que la seguridad de la información es igual a cuando se transita por un sector que no genera confianza y se toman las medidas necesarias para protegerse. En el mundo digital no es diferente, se debe cuidar que el uso de los dispositivos no genere una adicción digital, porque en los últimos años, se han desencadenado múltiples problemas físicos y mentales; entre los riesgos más comunes están:

    .neg-margin-x.bg-curve.mb-5
      .row.justify-content-center
        .col-lg-10
          figure.mb-5(data-aos="slide-up")
            img(src="@/assets/curso/t1-info1.svg", alt="imagen decorativa")
        .col-lg-10
          figure.mb-5(data-aos="slide-up")
            img(src="@/assets/curso/t1-info2.svg", alt="imagen decorativa")

    .row.mb-5
      .col-lg-3
        figure.mb-5(data-aos="slide-right")
          img(src="@/assets/curso/t1-i3.svg", alt="imagen decorativa")
      .col-lg-9(data-aos="slide-left")
        p.mb-4.text-bold.blueT ¿Sabía que los riesgos ante el uso de los dispositivos podrían ser interminables?
        p.mb-4  Esto debido a que el uso excesivo de la tecnología se ve sesgado por el autocontrol por la cantidad de información que recibe a diario el cerebro. Por ello, es importante tomar en cuenta algunas consideraciones para evitar problemas físicos y psicológicos que harán que la tecnología esté bajo el control del usuario y no al contrario.
        .cajon.color-acento-botones.p-4
          p.mb-0.text-bold  El ser humano es pensante y racional, capaz de discernir cuando es el momento de hacer un alto y no depender de un aparato electrónico.
    
    p.mb-5  A continuación, se enlistan las recomendaciones para un buen uso de la tecnología:
    .row.justify-content-center.mb-5
      .col-lg-12
        .wrap-infografic
          .row.justify-content-center
            .col-lg-6
              ImagenInfografica.color-secundario.mb-5
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/t1-info3.svg', alt='recomendaciones')
                .tarjeta.color-acento-botones.p-3.shadow-box(x="0%" y="30%")
                  p Realiza actividades de ocio diferentes a las ofrecidas por las tecnologías.
                .tarjeta.color-acento-botones.p-3.shadow-box(x="30%" y="0%")
                  p Apaga o silencia tus dispositivos al menos dos horas antes de ir a descansar en la noche.
                .tarjeta.color-acento-botones.p-3.shadow-box(x="71%" y="0%")
                  p Controla la información que se observa, evita páginas que no ayudan ni apoyen a tu autoestima.
                .tarjeta.color-acento-botones.p-3.shadow-box(x="100%" y="30%")
                  p Accede a contenidos que ayuden al desarrollo cognitivo y emocional.
                .tarjeta.color-acento-botones.p-3.shadow-box(x="100%" y="71%")
                  p Fija horarios y estipula prioridades.
                .tarjeta.color-acento-botones.p-3.shadow-box(x="71%" y="100%")
                  p Deja a un lado los dispositivos cuando realices actividades como alimentarte, dormir y hacer ejercicio.
                .tarjeta.color-acento-botones.p-3.shadow-box(x="30%" y="100%")
                  p Socializa de manera directa y guarda los dispositivos cuando estés en interacción con personas.
                .tarjeta.color-acento-botones.p-3.shadow-box(x="0%" y="71%")
                  p Identifica cualquier síntoma de adicción digital o necesidad excesiva del uso de las tecnologías.

    Separador
    br
    br
    #t_1_3.titulo-segundo
      h2 1.3  Uso prolongado de redes sociales

    .row.mb-5(data-aos="flip-up")
      .col-lg-2
        figure.mb-3(data-aos="flip-left")
          img.nW(src="@/assets/curso/t1-ic3.svg", alt="icono decorativo")

      .col-lg-10
        p.mb-5 El uso excesivo de los perfiles en redes sociales y el aumento de las mismas en la era digital es cada vez más común. A continuación, se expone un recurso que permitirá conocer más sobre el tema:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/D7y3q8kym_0?si=7ZASsvsEZB13WGiM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p.mb-0 Ese exceso del uso de redes sociales, se puede dar por entendido cuando la cantidad de horas de uso afecta al normal desarrollo de la vida cotidiana (Castellana, Sánchez-Carbonell, Graner y Beranuy, 2007; Viñas, 2009) y no solo por lo que se refiere al tiempo invertido, sino también por el impacto que causa en aspectos personales y sociales de la vida, donde se acerca a los que están lejos y se aleja a los que están cerca, tal como suelen decir los eruditos en el tema.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.wrap-infografic
  background-image: url('../assets/curso/bg-gray.svg')
  background-repeat: no-repeat
  background-size: contain
  background-position: center
  padding: 2rem 3rem 0 3rem
.bg-curve
  background-image: url('../assets/curso/bg-info.svg')
  background-repeat: no-repeat
  background-size: contain
  background-position: center
</style>
