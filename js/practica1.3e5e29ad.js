"use strict";(self["webpackChunkproyectoswd2425"]=self["webpackChunkproyectoswd2425"]||[]).push([[501],{1326:function(t,a,e){e.d(a,{A:function(){return l}});var s=function(){var t=this,a=t._self._c;return a("div",[a("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.titulo,"img-src":t.srcimg,"img-alt":t.alt,"img-top":"",footer:t.autor,tag:"proyecto"}},[a("b-card-text",[t._v(" "+t._s(t.texto)+" ")]),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Acceso a la página web",variant:"secondary",href:t.url}},[t._v("Ir al proyecto")])],1)],1)},r=[],o={props:["id","autor","titulo","srcimg","alt","texto","url"]},i=o,n=e(1656),c=(0,n.A)(i,s,r,!1,null,"c8529d72",null),l=c.exports},6096:function(t,a,e){e.r(a),e.d(a,{default:function(){return d}});var s=function(){var t=this,a=t._self._c;return a("b-container",[a("div",{attrs:{id:"home"}},[a("h2",{staticClass:"pb-2"},[a("icons",{attrs:{icon:["fas","award"]}}),a("font-awesome-icon",{attrs:{icon:["far","phone"]}}),t._v(" (Práctica 1) Proyectos de los alumnos "),a("icons",{attrs:{icon:["fas","award"]}})],1),a("p",[t._v(" Aquí se m uestra la lista de proyectos webs de la "),a("strong",[t._v("práctica 1")]),t._v(" de la asignatura Web Dinámica del: "),a("b-link",{attrs:{href:"http://www.graudissenydigitalitec.udl.cat/ca/"}},[t._v("Grado Diseño Digital y Tecnologías Creativas")]),t._v(" de la "),a("b-link",{attrs:{href:"http://www.udl.cat/"}},[t._v("Universitat de Lleida")]),t._v(", del curso 2024/25. ")],1),a("b-alert",{attrs:{variant:"secondary",show:""}},[a("h3",[t._v("Enunciado Práctica 1")]),a("p",[t._v("Desarrollar UNA SOLA página web con HTML5 y CSS3, y elementos de diseño web."),a("br"),t._v(" Consultar las transparencias de los temas tratados en las clases de prácticas."),a("br"),t._v(" Sé creativo en el diseño de la página web: utiliza colores, diseños, textos e imágenes con una estética ajustada su propósito. Inspirate en "),a("b-link",{attrs:{href:"https://labs.jensimmons.com/"}},[t._v("Intrinsic Design de Jen Simmons")])],1)]),a("div",{staticClass:"container-xl"},[a("b-card-group",{attrs:{columns:""}},t._l(t.proyectos,(function(t){return a("div",{key:t.id,attrs:{columns:""}},[a("Card2",{attrs:{autor:t.autor,srcimg:t.srcimg,alt:t.alt,titulo:t.titulo,texto:t.texto,url:t.url}})],1)})),0)],1)],1)])},r=[],o=e(1326);const i="https://raw.githubusercontent.com/afrikiudl/proyectoswd2425/refs/heads/main/WD_Practica1_2425.json";var n={props:{name:{type:String,default:"ListaProyectos"}},components:{Card2:o.A},data(){return{proyectos:[],githubPage:1,page:1,loading:!1,perPage:5}},mounted(){this.fetchData()},methods:{async fetchData(){const t=await fetch(i),a=await t.json();this.proyectos=a,console.log(a)}}},c=n,l=e(1656),u=(0,l.A)(c,s,r,!1,null,null,null),d=u.exports}}]);
//# sourceMappingURL=practica1.3e5e29ad.js.map