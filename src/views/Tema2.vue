<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Fraude electrónico
    
    .row.mb-5.slideInUp
      .col-lg-2
        figure.mb-5
          img.nW(src="@/assets/curso/t2-ic1.svg", alt="icono decorativo")

      .col-lg-10
        p.mb-3.text-bold.blueT Como una de las costumbres más marcadas dentro de la actual sociedad, está el uso de las herramientas informáticas, lo que hace que sea más vulnerable a ataques cibernéticos y a los fraudes electrónicos, pues normalmente se comparten información revelando datos importantes de identidad, lo que es un espacio propicio para delincuentes. 
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.custom-cardBlock(data-aos="flip-up")
          .bloque-texto-g__texto.p-4
            p.mb-0 La virtualización de muchas actividades ha transformado las bases de la sociedad y es comúnmente conocida como sociedad de la información y del conocimiento, que radica su fundamento en utilizar dispositivos digitales para las tareas diarias tales como comprar, vender, realizar operaciones financieras entre otras, a través de un solo clic.

          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t2-i1.jpg')})`}"
          )

    p.mb-5  A continuación, se relacionan los fraudes electrónicos más populares que segundo a segundo se están cometiendo detrás de una pantalla, como el robo de identidad, el <i>phishing</i>, el <i>vishing</i> y el <i>smishing</i>:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Robo de identidad" :icono="require('@/assets/curso/t2-ic2.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Robo de identidad
            p Es de las técnicas más utilizadas, como eres un usuario activo de las diferentes herramientas digitales en línea, ya posees una identidad digital y tus datos circulan por la red como si fueras por la calle de tu ciudad, es allí cuando un tercero puede usurpar tus datos y hacerse pasar por ti y sin aviso o permiso usan tus datos para realizar créditos, compras en línea, abrir cuentas, extorsiones y vulneran tu integridad. Esto sucede muy a menudo, porque se cometen errores como dejar a la vista de todos tus datos, contraseñas y claves que solo son de uso personal.
        
          .col-md-5
            figure.slideInRight
              img(src='@/assets/curso/t2-i2.jpg', alt='imagen decorativa')

      .py-4.py-md-5.itbox(titulo="<em>Phishing</em>" :icono="require('@/assets/curso/t2-ic3.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 <i>Phishing</i>
            p Este término es acuñado por el anglicismo #[em fishing], que en español significa “pesca”, y lo que hacen los delincuentes o #[em hackers] es que te engañan por medios electrónicos para que entregues información; la ingeniería social existente en el mundo digital hace que seas vulnerable y termines entregando contraseñas, cuentas bancarias, tarjetas de crédito sin darte cuenta y estas sean usadas con fines delictivos.
        
          .col-md-5
            figure.slideInRight
              img(src='@/assets/curso/t2-i3.jpg', alt='imagen decorativa')

      .py-4.py-md-5(titulo="<em>Vishing</em>" :icono="require('@/assets/curso/t2-ic4.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 <i>Vishing</i>
            p Es una modalidad de fraude, que consiste en robar datos por medio de voz IP, te hacen llamadas haciéndose pasar por entidades bancarias, agencias de viaje, entre otros, engañándote con supuestos beneficios y lograr que les brindes información sensible; ha crecido tanto este sistema de fraude que ya los delincuentes pueden realizar este tipo de llamadas a terceros para poder acceder a tu información.
        
          .col-md-5
            figure.slideInRight
              img(src='@/assets/curso/t2-i4.jpg', alt='imagen decorativa')

      .py-4.py-md-5(titulo="<em>Smishing</em>" :icono="require('@/assets/curso/t2-ic5.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 <i>Smishing</i>
            p.mb-3 Es un poco parecida a la anterior, la diferencia es que esta técnica de fraude la realizan por mensajería instantánea o texto en tus dispositivos móviles, donde se invita a la víctima a hacer clic en enlaces que no son verificados, para obtener supuestos bonos, premios y ofertas, y entregues información personal y accedan a tus contraseñas, claves, tarjetas de crédito, entre otras.
            p.mb-3  Nadie está exento de caer en estas trampas, porque usan técnicas de ingeniería social y engaño para estafar y robar a las personas, pues existen múltiples formas de robo en plataformas <i>online</i>, es por ello que debes estar alerta a cualquier signo o alarma de mensajes o llamadas que recibas para poder proteger la información.
        
          .col-md-5
            figure.slideInRight
              img(src='@/assets/curso/t2-i5.jpg', alt='imagen decorativa')

</template>

<script>
export default {
  name: 'Tema2',
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
