(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,o){e.exports=o(24)},18:function(e,t,o){},20:function(e,t,o){e.exports=o.p+"static/media/logo.5d5d9eef.svg"},21:function(e,t,o){},24:function(e,t,o){"use strict";o.r(t);var n=o(2),a=o.n(n),i=o(12),s=o.n(i),r=(o(18),o(5)),c=o(6),l=o(8),d=o(7),u=o(9),h=(o(20),o(21),o(4)),m=o(3),p=o(1),g=function(e){function t(e){var o;return Object(r.a)(this,t),(o=Object(l.a)(this,Object(d.a)(t).call(this,e))).colors={Rouge:new p.Color3(.5137,0,0),Bleu:new p.Color3(0,0,.5137),Vert:new p.Color3(0,.5137,0),Jaune:new p.Color3(.5137,.5137,0),Noir:new p.Color3(0,0,0),Blanc:new p.Color3(1,1,1),Gris:new p.Color3(.5,.5,.5)},o.regions={structure:{id:"Cadru1",alpha:6.283185307179586,beta:1.5707963267948966,radius:10.038390861264055},"si\xe8ge":{id:"Sa",alpha:8.460744722271127,beta:.7251213529780364,radius:10.038313487331575},accessoires:{id:"BidonRosu",alpha:5.549944373409927,beta:1.7457505434456517,radius:9.999805933906167},guidon:{id:"Ghidon",alpha:5.218007193438249,beta:1.042441018904849,radius:19.999952560667452}},o.moveCamera=function(e){m.b.to(o.camera,1,{radius:o.regions[e.detail].radius,alpha:o.regions[e.detail].alpha,beta:o.regions[e.detail].beta,ease:m.a.easeOut})},o.changeColor=function(e){var t=o.scene.getMeshByID(o.regions[e.detail.meshName].id);t.material=t.material.clone(),m.b.to(t.material.diffuseColor,1,{r:o.colors[e.detail.color].r,g:o.colors[e.detail.color].g,b:o.colors[e.detail.color].b})},o.onResizeWindow=function(){o.engine&&o.engine.resize()},o.setEngine=function(){o.stage.style.width="200%",o.stage.style.height="200%",o.engine=new p.Engine(o.stage),o.stage.style.width="100%",o.stage.style.height="100%"},o.setScene=function(){o.scene=new p.Scene(o.engine),o.scene.clearColor=new p.Color3(1,1,1)},o.setCamera=function(){o.camera=new p.ArcRotateCamera("Camera",2*Math.PI,p.Tools.ToRadians(80),20,new p.Vector3(0,5,-5),o.scene),o.camera.attachControl(o.stage,!0),o.camera.lowerRadiusLimit=9,o.camera.upperRadiusLimit=20,o.camera.lowerBetaLimit=o.camera.beta-p.Tools.ToRadians(80),o.camera.upperBetaLimit=o.camera.beta+p.Tools.ToRadians(20),o.camera.lowerAlphaLimit=o.camera.alpha-p.Tools.ToRadians(180),o.camera.upperAlphaLimit=o.camera.alpha+p.Tools.ToRadians(180)},o.loadModels=function(){var e=new p.AssetsManager(o.scene),t=e.addMeshTask("bike","","","bike.babylon");return t.onSuccess=function(e){o.scene.getMeshByID("Sa").material=o.scene.getMeshByID("Sa").material.clone(),o.scene.getMeshByID("Ghidon").material=o.scene.getMeshByID("Ghidon").material.clone(),o.scene.getMeshByID("BidonRosu").material=o.scene.getMeshByID("BidonRosu").material.clone(),o.scene.getMeshByID("Furca").material=o.scene.getMeshByID("Furca").material.clone(),o.scene.getMeshByID("Cadru1").material.diffuseColor=o.scene.getMeshByID("Cadru1").material.clone(),o.scene.getMeshByID("Sa").material.diffuseColor=o.colors.Gris,o.scene.getMeshByID("Ghidon").material.diffuseColor=o.colors.Gris,o.scene.getMeshByID("BidonRosu").material.diffuseColor=o.colors.Gris,o.scene.getMeshByID("Furca").material.diffuseColor=o.colors.Noir,o.scene.getMeshByID("Cadru1").material.diffuseColor=o.colors.Blanc,o.engine.runRenderLoop(function(){o.scene.render()}),new p.HemisphericLight("light1",new p.Vector3(0,1,0),o.scene)},t.onError=function(e,t,o){console.log(t,o)},e},o.moveCamera=o.moveCamera.bind(Object(h.a)(Object(h.a)(o))),o.changeColor=o.changeColor.bind(Object(h.a)(Object(h.a)(o))),o}return Object(u.a)(t,e),Object(c.a)(t,[{key:"loadLogo",value:function(){var e=new p.StandardMaterial("logo",this.scene);e.diffuseTexture=new p.Texture("pxslogo.png",this.scene),e.diffuseTexture.hasAlpha=!0,e.specularColor=new p.Color3(0,0,0);var t=p.MeshBuilder.CreatePlane("logo",{width:23.5,height:22},this.scene,!0);t.position=new p.Vector3(0,0,-5),t.rotate(p.Axis.X,Math.PI/2),t.material=e}},{key:"componentDidMount",value:function(){this.setEngine(),this.setScene(),this.setCamera(),this.loadLogo(),this.loadModels().load(),window.addEventListener("resize",this.onResizeWindow),window.addEventListener("move-camera",this.moveCamera),window.addEventListener("change-color",this.changeColor)}},{key:"render",value:function(){var e=this;return a.a.createElement("canvas",{className:"scene",ref:function(t){return e.stage=t}})}}]),t}(n.Component),f=function(e){function t(e){var o;return Object(r.a)(this,t),(o=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={bodyDefaultHeight:null,accordionOpen:!1},o.toggleAccordion=o.toggleAccordion.bind(Object(h.a)(Object(h.a)(o))),window.addEventListener("accordion-open",function(){o.state.accordionOpen&&(m.b.to(o.optionBody,.05,{height:0,ease:m.a.easeOut}),o.setState({accordionOpen:!1}),o.optionBody.style.visibility="hidden")}),o}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({bodyDefaultHeight:this.optionBody.clientHeight}),this.optionBody.style.height=0,this.optionBody.style.visibility="hidden"}},{key:"emitSectionChangeEvent",value:function(){var e=new CustomEvent("move-camera",{detail:this.props.optionName});window.dispatchEvent(e)}},{key:"emitColorChangeEvent",value:function(e){var t=new CustomEvent("change-color",{detail:{meshName:this.props.optionName,color:e}});window.dispatchEvent(t)}},{key:"emitAccordionOpenEvent",value:function(e){var t=new CustomEvent("accordion-open");window.dispatchEvent(t)}},{key:"toggleAccordion",value:function(e){this.state.accordionOpen?(m.b.to(this.optionBody,.05,{height:0,ease:m.a.easeOut}),this.setState({accordionOpen:!1}),this.optionBody.style.visibility="hidden"):(this.setState({accordionOpen:!0}),this.optionBody.style.visibility="visible",m.b.to(this.optionBody,.05,{height:this.state.bodyDefaultHeight,ease:m.a.easeOut}),this.emitAccordionOpenEvent(),this.emitSectionChangeEvent())}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"productoption"},a.a.createElement("button",{onClick:this.toggleAccordion,className:"productoption_header"},this.props.optionName),a.a.createElement("div",{className:"productoption_body",ref:function(t){return e.optionBody=t}},this.props.optionValues.map(function(t){return a.a.createElement("button",{key:t,onClick:function(o){o.preventDefault(),e.emitColorChangeEvent(t)},className:"productoption_btn"},t)})))}}]),t}(n.Component),v=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"controls"},this.props.options.map(function(t,o){return a.a.createElement(f,{key:t,optionName:t,optionValues:e.props.optionValues[o]})}))}}]),t}(n.Component),b=function(e){function t(e){var o;return Object(r.a)(this,t),(o=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={optionNames:["structure","si\xe8ge","accessoires","guidon"],optionValues:[["Rouge","Bleu","Vert","Jaune"],["Gris","Blanc","Noir"],["Gris","Blanc","Noir"],["Gris","Blanc","Noir"]]},o}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(g,null),a.a.createElement(v,{options:this.state.optionNames,optionValues:this.state.optionValues}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.6da51601.chunk.js.map