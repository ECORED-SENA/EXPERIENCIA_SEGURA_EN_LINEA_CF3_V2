<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Fraude electrónico
    .row.mb-5.slideInUp
      .col-lg-2.mb-4.mb-lg-0
        figure
          img.nW(src="@/assets/curso/t2-ic1.svg", alt="icono decorativo").m-auto
      .col-lg-10
        p.mb-0.text-bold.blueT Como una de las costumbres más marcadas dentro de la actual sociedad, está el uso de las herramientas informáticas, lo que hace que sea más vulnerable a ataques cibernéticos y a los fraudes electrónicos, pues normalmente se comparten información revelando datos importantes de identidad, lo que es un espacio propicio para delincuentes. 
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.custom-cardBlock(data-aos="flip-up")
          .bloque-texto-g__texto.p-4
            p.mb-0 La virtualización de muchas actividades ha transformado las bases de la sociedad y es comúnmente conocida como sociedad de la información y del conocimiento, que radica su fundamento en utilizar dispositivos digitales para las tareas diarias tales como comprar, vender, realizar operaciones financieras entre otras, a través de un solo clic.
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t2-i1.jpg')})`}"
          )
    p.mb-5 A continuación, se relacionan los fraudes electrónicos más populares que segundo a segundo se están cometiendo detrás de una pantalla, como el robo de identidad, el <i>phishing</i>, el <i>vishing</i> y el <i>smishing</i>:
    TabsB.color-acento-contenido
      .py-4.py-md-5(titulo="Robo de identidad" :icono="require('@/assets/curso/t2-ic2.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Robo de identidad
            p.mb-0 Es de las técnicas más utilizadas, al ser un usuario activo de las diferentes herramientas digitales en línea, posee una identidad digital y sus datos circulan por la red como si fuera por la calle de su ciudad. Es allí cuando un tercero puede usurpar sus datos y hacerse pasar por usted y sin aviso permiso, usar sus datos para realizar créditos, compras en línea, abrir cuentas, extorsiones y vulnerar su integridad. Esto sucede muy a menudo, porque se cometen errores como dejar a la vista todos sus datos, contraseñas y claves que solo son de uso personal.
          .col-md-5
            figure.slideInRight
              img(src='@/assets/curso/t2-i2.jpg', alt='imagen decorativa')
      .py-4.py-md-5.itbox(titulo="<em>Phishing</em>" :icono="require('@/assets/curso/t2-ic3.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 <i>Phishing</i>
            p Este término es acuñado por el anglicismo #[i fishing], que en español significa “pesca”, y lo que hacen los delincuentes o hackers es que lo engañan por medios electrónicos para que entregue información; la ingeniería social existente en el mundo digital hace que sea vulnerable y termine entregando contraseñas, cuentas bancarias, tarjetas de crédito sin darse cuenta y estas sean usadas con fines delictivos.
          .col-md-5
            figure.slideInRight
              img(src='@/assets/curso/t2-i3.jpg', alt='imagen decorativa')
      .py-4.py-md-5(titulo="<em>Vishing</em>" :icono="require('@/assets/curso/t2-ic4.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 <i>Vishing</i>
            p Es una modalidad de fraude, que consiste en robar datos por medio de voz IP, le hacen llamadas haciéndose pasar por entidades bancarias, agencias de viaje, entre otros, engañándolo con supuestos beneficios y lograr que les brinde información sensible; ha crecido tanto este sistema de fraude que ya los delincuentes pueden realizar este tipo de llamadas a terceros para poder acceder a su información.
          .col-md-5
            figure.slideInRight
              img(src='@/assets/curso/t2-i4.jpg', alt='imagen decorativa')
      .py-4.py-md-5(titulo="<em>Smishing</em>" :icono="require('@/assets/curso/t2-ic5.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 <i>Smishing</i>
            p Es un poco parecida a la anterior, la diferencia es que esta técnica de fraude la realizan por mensajería instantánea o texto en los dispositivos móviles, donde se invita a la víctima a hacer clic en enlaces que no son verificados, para obtener supuestos bonos, premios y ofertas, y entregar información personal y así acceden a sus contraseñas, claves, tarjetas de crédito, entre otras.
            p Nadie está exento de caer en estas trampas, porque usan técnicas de ingeniería social y engaño para estafar y robar a las personas, pues existen múltiples formas de robo en plataformas #[i online], es por ello que debe estar alerta a cualquier signo o alarma de mensajes o llamadas que reciba para poder proteger la información.
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
