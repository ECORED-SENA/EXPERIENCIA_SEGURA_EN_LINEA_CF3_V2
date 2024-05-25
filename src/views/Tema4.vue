<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Amenazas a la privacidad
    
    .row.mb-5
      .col-lg-8.slideInLeft
        p.mb-3.text-bold.blueT Tanto en las redes sociales como en Internet en general, se está propenso a que se filtren los datos personales, debido a que se aceptan términos y condiciones sin leer previamente, como en un ciberataque realizado por un pirata informático o los tan mencionados #[em hackers].
      .col-lg-4
        .animatedImage.slideInRight
          figure.mb-5
            img(src="@/assets/curso/t4-i1.png", alt="hombre con un pasamontañas en su cabeza")
          .floatingCircle
          .floatingCircle2

    .row.mb-4.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.ltr(data-aos="flip-up")
          .bloque-texto-g__texto.p-4
            p.mb-0 Los sitios que se frecuentan en Internet muchas veces modifican las condiciones y políticas de privacidad y en la era actual, hay una cultura de aceptar sin lectura previa, la cual es más común de lo que parece, exponiendo datos que antes estaban con acceso restringido.

          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t4-i2.jpg')})`}"
          )
    p.mb-5 El mundo digital no es ajeno a riesgos y amenazas a las cuales un usuario está expuesto, porque la información es muy susceptible a que sea usada por terceros para sus propios fines, los cuales son delictivos, esto hace que la privacidad sea un blanco para personas inescrupulosas que están prestas para vulnerar la seguridad digital; entre las prácticas más comunes que pueden afectar la seguridad y privacidad, se pueden listar:
  
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido.p-4(titulo="<em>Oversharing</em>")
        .row.align-items-center
          .col-lg-4
            figure.mb-5.slideInLeft
              img(src="@/assets/curso/t4-i3.jpg", alt="imagen decorativa")
          .col-lg-8
            .h4 <i>Oversharing</i>
            p.mb-3  <b>Es la sobreexposición en redes,</b> es decir, que se publica todo tipo de información personal, lo que se hace, dónde y con quién se está, sobre todo en usuarios digitales nuevos que no logran dimensionar el alcance que tienen sus publicaciones, es una práctica muy negativa y se termina por entregarle la responsabilidad a la tecnología de lo malo que pueda pasar, sin darse cuenta de que simplemente radica en cómo se utiliza la tecnología de una forma arriesgada y desacertada.
      
      .tarjeta.color-acento-contenido.p-4(titulo="Secuestro de información")
        .row
          .col-lg-4
            figure.mb-5.slideInLeft
              img(src="@/assets/curso/t4-i4.jpg", alt="imagen decorativa")
          .col-lg-8
            .h4 Secuestro de información
            p.mb-3  Es una de las amenazas más típicas a la privacidad de la información, los ciberdelincuentes han desarrollado códigos maliciosos <i>(malware)</i> que tienen como objetivo robar la información personal o empresarial, encriptando los datos para después solicitar dádivas económicas de la propia información. Esta es una práctica muy común en países latinoamericanos, este tipo de infecciones llega al usuario con correos engañosos disfrazados con archivos que normalmente se conoce, pero lo que hacen es apoderarse de la información y esta deje de ser legible.

      .tarjeta.color-acento-contenido.p-4(titulo="Protocolos inseguros")
        .row
          .col-lg-4
            figure.mb-5.slideInLeft
              img(src="@/assets/curso/t4-i5.jpg", alt="imagen decorativa")
          .col-lg-8
            .h4 Protocolos inseguros
            p.mb-3  Así como tienes seguridad en tu casa para el ingreso con la llave, en el mundo digital es muy parecido, se llaman protocolos y muchas veces no se usan los más seguros, esto hace que sea muy fácil el ingreso a tus datos y puedan terminar en manos de terceros malintencionados.

      .tarjeta.color-acento-contenido.p-4(titulo="Códigos maliciosos")
        .row
          .col-lg-4
            figure.mb-5.slideInLeft
              img(src="@/assets/curso/t4-i6.jpg", alt="imagen decorativa")
          .col-lg-8
            .h4 Códigos maliciosos
            p.mb-3 Se debe tener mucho cuidado con toda la información digital que se recibe de terceros o remitentes sospechosos, porque suelen enviar archivos que contienen órdenes específicas para vulnerar la información. Estos artefactos de #[em software] tienen la tarea específica de averiguar contraseñas, monitorear tu actividad digital para robar información y que esta sea de dominio público, transgrediendo tu integridad para el secuestro o uso malintencionado de los datos.

      .tarjeta.color-acento-contenido.p-4(titulo="Mal uso de la tecnología")
        .row
          .col-lg-4
            figure.mb-5.slideInLeft
              img(src="@/assets/curso/t4-i7.jpg", alt="imagen decorativa")
          .col-lg-8
            .h4 Mal uso de la tecnología
            p.mb-3  La saturación de información, el analfabetismo tecnológico y las desviaciones psicopáticas son algunas de las características propias del mal uso de recursos informáticos; las brechas generacionales desde los nativos tecnológicos hasta los que tuvieron que sufrir esta transición digital han hecho que la privacidad se vea afectada por no poder usar bien la tecnología, debes tener en cuenta que la era digital es un hecho y hay que estar preparados para que la información no caiga en manos de terceros.
      
      .tarjeta.color-acento-contenido.p-4(titulo="Datos en manos de terceros")
        .row
          .col-lg-4
            figure.mb-5.slideInLeft
              img(src="@/assets/curso/t4-i9.jpg", alt="imagen decorativa")
          .col-lg-8
            .h4 Datos en manos de terceros
            p.mb-3 Todos los datos que compartes en Internet están sujetos a ser vulnerados, debido a que los servicios que se usan cotidianamente solicitan gran cantidad de información y estos son compartidos entre proveedores para hacerte llegar productos y servicios según tus preferencias, aunque esto tiene connotación legal, los datos reposan en sitios que no cumplen con las políticas de privacidad y es allí cuando tu información sensible puede ser pública afectando tu seguridad, es por ello que cada vez que te solicitan los datos personales verifica fuentes y así no te arrepientas de lo que se comparte.

      .tarjeta.color-acento-contenido.p-4(titulo="Robo o pérdida de dispositivos")
        .row
          .col-lg-4
            figure.mb-5.slideInLeft
              img(src="@/assets/curso/t4-i8.jpg", alt="imagen decorativa")
          .col-lg-8
            .h4 Robo o pérdida de dispositivos
            p.mb-3 Una de las amenazas más latentes a la pérdida de los datos y afectación a tu privacidad, es la pérdida de información personal contenida en los dispositivos. Es habitual pensar que por ser dispositivos que solo tú manejas nunca los proteges, pero la delincuencia que, está a la orden del día, no solo puede afectar económicamente, sino psicológicamente, porque las prácticas del mal uso de la tecnología son muy comunes, es por ello que es mejor tener copias en nube y protegidas con contraseña, sincronizadas de manera segura.



    p.mb-5  Es así como, frecuentemente, se descuida la forma cómo y a quién se entrega información y datos importantes, lo cual repercute en cómo se usa la identidad digital en la red, es por ello que se debe de tener en cuenta:
    .row.mb-5.justify-content-center
      .col-lg-10
        PasosA.color-acento-botones.mb-5(tipo="l")
          .row.justify-content-center
            .col-md-1
              figure.mb-5
                img.nW(src="@/assets/curso/t4-ic1.svg", alt="imagen decorativa")
            .col-md-8
              p.mb-0 Configura los buzones de correo electrónico con confirmaciones de lectura.
          .row.justify-content-center
            .col-md-8
              p.mb-0 Encripta los mensajes, existen programas y aplicaciones que logran que estos sean leídos solo por los destinatarios requeridos.
            .col-md-1
              figure.mb-5
                img.nW(src="@/assets/curso/t4-ic2.svg", alt="imagen decorativa")
          .row.justify-content-center
            .col-md-1
              figure.mb-5
                img.nW(src="@/assets/curso/t4-ic3.svg", alt="imagen decorativa")
            .col-md-8
              p.mb-0 Almacena la información de forma que solo tú puedas acceder para que atacantes no puedan acceder a ellos.
          .row.justify-content-center
            .col-md-8
              p.mb-0 Usa conexiones seguras y verifica que los navegadores sean de confianza.
            .col-md-1
              figure.mb-5
                img.nW(src="@/assets/curso/t4-ic4.svg", alt="imagen decorativa")
          .row.justify-content-center
            .col-md-1
              figure.mb-5
                img.nW(src="@/assets/curso/t4-ic5.svg", alt="imagen decorativa")
            .col-md-8
              p.mb-0 Escribe directamente las URL o las direcciones electrónicas, evita al máximo apoyarte en los buscadores.
          .row.justify-content-center
            .col-md-8
              p.mb-0 Realiza copias de seguridad encriptadas de manera que solo tú puedas acceder a la información de manera segura, tanto en los dispositivos físicos como en servicios de nube.
            .col-md-1
              figure.mb-5
                img.nW(src="@/assets/curso/t4-ic6.svg", alt="imagen decorativa")            
          .row.justify-content-center
            .col-md-1
              figure.mb-5
                img.nW(src="@/assets/curso/t4-ic7.svg", alt="imagen decorativa")
            .col-md-8
              p.mb-0 Define permisos de nivel medio o superior al aceptar cookies en la navegación, que no se aceptan de terceros creando listas de excepciones, incluso navegar de forma anónima.
          .row.justify-content-center
            .col-md-8
              p.mb-0 Ten cuidado con la información que se publica en redes sociales, analiza y verifica qué se puede o no publicar.
            .col-md-1
              figure.mb-5
                img.nW(src="@/assets/curso/t4-ic8.svg", alt="imagen decorativa")            
          .row.justify-content-center
            .col-md-1
              figure.mb-5
                img.nW(src="@/assets/curso/t4-ic9.svg", alt="imagen decorativa")
            .col-md-8
              p.mb-0 Ten cuidado a la hora de crear contraseñas, no uses la misma para todas las plataformas y evita fechas de nacimiento, o datos que son fáciles de adquirir por los atacantes.
          .row.justify-content-center
            .col-md-8
              p.mb-0 Protege los dispositivos con los cuales accedes a la red, estos son el medio por el cual pueden ingresar a tu información y vulnerar tu privacidad.   
            .col-md-1
              figure.mb-5
                img.nW(src="@/assets/curso/t4-ic10.svg", alt="imagen decorativa")   

</template>

<script>
export default {
  name: 'Tema4',
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
</style>
