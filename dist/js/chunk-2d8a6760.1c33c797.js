(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d8a6760"],{"73d1":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" COIN! ")])},r=[];n("d3b7");function a(e,t,n,o,r,a,i){try{var c=e[a](i),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(o,r)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function c(e){a(i,o,r,c,s,"next",e)}function s(e){a(i,o,r,c,s,"throw",e)}c(void 0)}))}}n("96cf");var c=n("5a89");const s={type:"change"},u={type:"start"},l={type:"end"};class h extends c["n"]{constructor(e,t){super(),void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new c["wb"],this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:c["J"].ROTATE,MIDDLE:c["J"].DOLLY,RIGHT:c["J"].PAN},this.touches={ONE:c["qb"].ROTATE,TWO:c["qb"].DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return i.phi},this.getAzimuthalAngle=function(){return i.theta},this.listenToKeyEvents=function(e){e.addEventListener("keydown",ie),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(s),n.update(),r=o.NONE},this.update=function(){const t=new c["wb"],u=(new c["fb"]).setFromUnitVectors(e.up,new c["wb"](0,1,0)),l=u.clone().invert(),f=new c["wb"],b=new c["fb"],w=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(u),i.setFromVector3(t),n.autoRotate&&r===o.NONE&&P(L()),n.enableDamping?(i.theta+=h.theta*n.dampingFactor,i.phi+=h.phi*n.dampingFactor):(i.theta+=h.theta,i.phi+=h.phi);let c=n.minAzimuthAngle,y=n.maxAzimuthAngle;return isFinite(c)&&isFinite(y)&&(c<-Math.PI?c+=w:c>Math.PI&&(c-=w),y<-Math.PI?y+=w:y>Math.PI&&(y-=w),i.theta=c<=y?Math.max(c,Math.min(y,i.theta)):i.theta>(c+y)/2?Math.max(c,i.theta):Math.min(y,i.theta)),i.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,i.phi)),i.makeSafe(),i.radius*=d,i.radius=Math.max(n.minDistance,Math.min(n.maxDistance,i.radius)),!0===n.enableDamping?n.target.addScaledVector(p,n.dampingFactor):n.target.add(p),t.setFromSpherical(i),t.applyQuaternion(l),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,p.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),p.set(0,0,0)),d=1,!!(m||f.distanceToSquared(n.object.position)>a||8*(1-b.dot(n.object.quaternion))>a)&&(n.dispatchEvent(s),f.copy(n.object.position),b.copy(n.object.quaternion),m=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",le),n.domElement.removeEventListener("pointerdown",$),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("touchstart",ce),n.domElement.removeEventListener("touchend",ue),n.domElement.removeEventListener("touchmove",se),n.domElement.ownerDocument.removeEventListener("pointermove",ee),n.domElement.ownerDocument.removeEventListener("pointerup",te),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",ie)};const n=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=o.NONE;const a=1e-6,i=new c["ob"],h=new c["ob"];let d=1;const p=new c["wb"];let m=!1;const f=new c["vb"],b=new c["vb"],w=new c["vb"],y=new c["vb"],g=new c["vb"],v=new c["vb"],E=new c["vb"],x=new c["vb"],O=new c["vb"];function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function P(e){h.theta-=e}function T(e){h.phi-=e}const A=function(){const e=new c["wb"];return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),p.add(e)}}(),S=function(){const e=new c["wb"];return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),p.add(e)}}(),R=function(){const e=new c["wb"];return function(t,o){const r=n.domElement;if(n.object.isPerspectiveCamera){const a=n.object.position;e.copy(a).sub(n.target);let i=e.length();i*=Math.tan(n.object.fov/2*Math.PI/180),A(2*t*i/r.clientHeight,n.object.matrix),S(2*o*i/r.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(A(t*(n.object.right-n.object.left)/n.object.zoom/r.clientWidth,n.object.matrix),S(o*(n.object.top-n.object.bottom)/n.object.zoom/r.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(e){n.object.isPerspectiveCamera?d/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(e){n.object.isPerspectiveCamera?d*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(e){f.set(e.clientX,e.clientY)}function D(e){E.set(e.clientX,e.clientY)}function _(e){y.set(e.clientX,e.clientY)}function C(e){b.set(e.clientX,e.clientY),w.subVectors(b,f).multiplyScalar(n.rotateSpeed);const t=n.domElement;P(2*Math.PI*w.x/t.clientHeight),T(2*Math.PI*w.y/t.clientHeight),f.copy(b),n.update()}function I(e){x.set(e.clientX,e.clientY),O.subVectors(x,E),O.y>0?j(M()):O.y<0&&k(M()),E.copy(x),n.update()}function Y(e){g.set(e.clientX,e.clientY),v.subVectors(g,y).multiplyScalar(n.panSpeed),R(v.x,v.y),y.copy(g),n.update()}function z(){}function H(e){e.deltaY<0?k(M()):e.deltaY>0&&j(M()),n.update()}function F(e){let t=!1;switch(e.code){case n.keys.UP:R(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:R(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:R(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:R(-n.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),n.update())}function V(e){if(1==e.touches.length)f.set(e.touches[0].pageX,e.touches[0].pageY);else{const t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);f.set(t,n)}}function X(e){if(1==e.touches.length)y.set(e.touches[0].pageX,e.touches[0].pageY);else{const t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);y.set(t,n)}}function G(e){const t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);E.set(0,o)}function Z(e){n.enableZoom&&G(e),n.enablePan&&X(e)}function U(e){n.enableZoom&&G(e),n.enableRotate&&V(e)}function B(e){if(1==e.touches.length)b.set(e.touches[0].pageX,e.touches[0].pageY);else{const t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);b.set(t,n)}w.subVectors(b,f).multiplyScalar(n.rotateSpeed);const t=n.domElement;P(2*Math.PI*w.x/t.clientHeight),T(2*Math.PI*w.y/t.clientHeight),f.copy(b)}function q(e){if(1==e.touches.length)g.set(e.touches[0].pageX,e.touches[0].pageY);else{const t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);g.set(t,n)}v.subVectors(g,y).multiplyScalar(n.panSpeed),R(v.x,v.y),y.copy(g)}function W(e){const t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY,r=Math.sqrt(t*t+o*o);x.set(0,r),O.set(0,Math.pow(x.y/E.y,n.zoomSpeed)),j(O.y),E.copy(x)}function K(e){n.enableZoom&&W(e),n.enablePan&&q(e)}function J(e){n.enableZoom&&W(e),n.enableRotate&&B(e)}function Q(){}function $(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":ne(e);break}}function ee(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":oe(e);break}}function te(e){switch(e.pointerType){case"mouse":case"pen":re(e);break}}function ne(e){let t;switch(e.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus(),e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case c["J"].DOLLY:if(!1===n.enableZoom)return;D(e),r=o.DOLLY;break;case c["J"].ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;_(e),r=o.PAN}else{if(!1===n.enableRotate)return;N(e),r=o.ROTATE}break;case c["J"].PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;N(e),r=o.ROTATE}else{if(!1===n.enablePan)return;_(e),r=o.PAN}break;default:r=o.NONE}r!==o.NONE&&(n.domElement.ownerDocument.addEventListener("pointermove",ee),n.domElement.ownerDocument.addEventListener("pointerup",te),n.dispatchEvent(u))}function oe(e){if(!1!==n.enabled)switch(e.preventDefault(),r){case o.ROTATE:if(!1===n.enableRotate)return;C(e);break;case o.DOLLY:if(!1===n.enableZoom)return;I(e);break;case o.PAN:if(!1===n.enablePan)return;Y(e);break}}function re(e){n.domElement.ownerDocument.removeEventListener("pointermove",ee),n.domElement.ownerDocument.removeEventListener("pointerup",te),!1!==n.enabled&&(z(e),n.dispatchEvent(l),r=o.NONE)}function ae(e){!1===n.enabled||!1===n.enableZoom||r!==o.NONE&&r!==o.ROTATE||(e.preventDefault(),n.dispatchEvent(u),H(e),n.dispatchEvent(l))}function ie(e){!1!==n.enabled&&!1!==n.enablePan&&F(e)}function ce(e){if(!1!==n.enabled){switch(e.preventDefault(),e.touches.length){case 1:switch(n.touches.ONE){case c["qb"].ROTATE:if(!1===n.enableRotate)return;V(e),r=o.TOUCH_ROTATE;break;case c["qb"].PAN:if(!1===n.enablePan)return;X(e),r=o.TOUCH_PAN;break;default:r=o.NONE}break;case 2:switch(n.touches.TWO){case c["qb"].DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;Z(e),r=o.TOUCH_DOLLY_PAN;break;case c["qb"].DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;U(e),r=o.TOUCH_DOLLY_ROTATE;break;default:r=o.NONE}break;default:r=o.NONE}r!==o.NONE&&n.dispatchEvent(u)}}function se(e){if(!1!==n.enabled)switch(e.preventDefault(),r){case o.TOUCH_ROTATE:if(!1===n.enableRotate)return;B(e),n.update();break;case o.TOUCH_PAN:if(!1===n.enablePan)return;q(e),n.update();break;case o.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;K(e),n.update();break;case o.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;J(e),n.update();break;default:r=o.NONE}}function ue(e){!1!==n.enabled&&(Q(e),n.dispatchEvent(l),r=o.NONE)}function le(e){!1!==n.enabled&&e.preventDefault()}n.domElement.addEventListener("contextmenu",le),n.domElement.addEventListener("pointerdown",$),n.domElement.addEventListener("wheel",ae,{passive:!1}),n.domElement.addEventListener("touchstart",ce,{passive:!1}),n.domElement.addEventListener("touchend",ue),n.domElement.addEventListener("touchmove",se,{passive:!1}),this.update()}}async function d(){if("Ammo"in window===!1)return void console.error("AmmoPhysics: Couldn't find Ammo.js");const e=await Ammo(),t=60,n=new e.btDefaultCollisionConfiguration,o=new e.btCollisionDispatcher(n),r=new e.btDbvtBroadphase,a=new e.btSequentialImpulseConstraintSolver,i=new e.btDiscreteDynamicsWorld(o,r,a,n);i.setGravity(new e.btVector3(0,-9.8,0));const c=new e.btTransform;function s(t){const n=t.parameters;if("BoxGeometry"===t.type){const t=void 0!==n.width?n.width/2:.5,o=void 0!==n.height?n.height/2:.5,r=void 0!==n.depth?n.depth/2:.5,a=new e.btBoxShape(new e.btVector3(t,o,r));return a.setMargin(.05),a}if("SphereGeometry"===t.type||"IcosahedronGeometry"===t.type){const t=void 0!==n.radius?n.radius:1,o=new e.btSphereShape(t);return o.setMargin(.05),o}return null}const u=[],l=new WeakMap;function h(e,t=0){const n=s(e.geometry);null!==n&&(e.isInstancedMesh?m(e,t,n):e.isMesh&&d(e,t,n))}function d(t,n,o){const r=t.position,a=t.quaternion,c=new e.btTransform;c.setIdentity(),c.setOrigin(new e.btVector3(r.x,r.y,r.z)),c.setRotation(new e.btQuaternion(a.x,a.y,a.z,a.w));const s=new e.btDefaultMotionState(c),h=new e.btVector3(0,0,0);o.calculateLocalInertia(n,h);const d=new e.btRigidBodyConstructionInfo(n,s,o,h),p=new e.btRigidBody(d);i.addRigidBody(p),n>0&&(u.push(t),l.set(t,p))}function m(t,n,o){const r=t.instanceMatrix.array,a=[];for(let c=0;c<t.count;c++){const t=16*c,s=new e.btTransform;s.setFromOpenGLMatrix(r.slice(t,t+16));const u=new e.btDefaultMotionState(s),l=new e.btVector3(0,0,0);o.calculateLocalInertia(n,l);const h=new e.btRigidBodyConstructionInfo(n,u,o,l),d=new e.btRigidBody(h);i.addRigidBody(d),a.push(d)}n>0&&(u.push(t),l.set(t,a))}function f(t,n,o=0){if(t.isInstancedMesh){const r=l.get(t),a=r[o];a.setAngularVelocity(new e.btVector3(0,0,0)),a.setLinearVelocity(new e.btVector3(0,0,0)),c.setIdentity(),c.setOrigin(new e.btVector3(n.x,n.y,n.z)),a.setWorldTransform(c)}else if(t.isMesh){const o=l.get(t);o.setAngularVelocity(new e.btVector3(0,0,0)),o.setLinearVelocity(new e.btVector3(0,0,0)),c.setIdentity(),c.setOrigin(new e.btVector3(n.x,n.y,n.z)),o.setWorldTransform(c)}}let b=0;function w(){const e=performance.now();if(b>0){const t=(e-b)/1e3;i.stepSimulation(t,10)}b=e;for(let t=0,n=u.length;t<n;t++){const e=u[t];if(e.isInstancedMesh){const t=e.instanceMatrix.array,n=l.get(e);for(let e=0;e<n.length;e++){const o=n[e],r=o.getMotionState();r.getWorldTransform(c);const a=c.getOrigin(),i=c.getRotation();p(a,i,t,16*e)}e.instanceMatrix.needsUpdate=!0}else if(e.isMesh){const t=l.get(e),n=t.getMotionState();n.getWorldTransform(c);const o=c.getOrigin(),r=c.getRotation();e.position.set(o.x(),o.y(),o.z()),e.quaternion.set(r.x(),r.y(),r.z(),r.w())}}}return setInterval(w,1e3/t),{addMesh:h,setMeshPosition:f}}function p(e,t,n,o){const r=t.x(),a=t.y(),i=t.z(),c=t.w(),s=r+r,u=a+a,l=i+i,h=r*s,d=r*u,p=r*l,m=a*u,f=a*l,b=i*l,w=c*s,y=c*u,g=c*l;n[o+0]=1-(m+b),n[o+1]=d+g,n[o+2]=p-y,n[o+3]=0,n[o+4]=d-g,n[o+5]=1-(h+b),n[o+6]=f+w,n[o+7]=0,n[o+8]=p+y,n[o+9]=f-w,n[o+10]=1-(h+m),n[o+11]=0,n[o+12]=e.x(),n[o+13]=e.y(),n[o+14]=e.z(),n[o+15]=1}var m=function(){var e=0,t=document.createElement("div");function n(e){return t.appendChild(e.dom),e}function o(n){for(var o=0;o<t.children.length;o++)t.children[o].style.display=o===n?"block":"none";e=n}t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",(function(n){n.preventDefault(),o(++e%t.children.length)}),!1);var r=(performance||Date).now(),a=r,i=0,c=n(new m.Panel("FPS","#0ff","#002")),s=n(new m.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=n(new m.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:t,addPanel:n,showPanel:o,begin:function(){r=(performance||Date).now()},end:function(){i++;var e=(performance||Date).now();if(s.update(e-r,200),e>=a+1e3&&(c.update(1e3*i/(e-a),100),a=e,i=0,u)){var t=performance.memory;u.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){r=this.end()},domElement:t,setMode:o}};m.Panel=function(e,t,n){var o=1/0,r=0,a=Math.round,i=a(window.devicePixelRatio||1),c=80*i,s=48*i,u=3*i,l=2*i,h=3*i,d=15*i,p=74*i,m=30*i,f=document.createElement("canvas");f.width=c,f.height=s,f.style.cssText="width:80px;height:48px";var b=f.getContext("2d");return b.font="bold "+9*i+"px Helvetica,Arial,sans-serif",b.textBaseline="top",b.fillStyle=n,b.fillRect(0,0,c,s),b.fillStyle=t,b.fillText(e,u,l),b.fillRect(h,d,p,m),b.fillStyle=n,b.globalAlpha=.9,b.fillRect(h,d,p,m),{dom:f,update:function(s,w){o=Math.min(o,s),r=Math.max(r,s),b.fillStyle=n,b.globalAlpha=1,b.fillRect(0,0,c,d),b.fillStyle=t,b.fillText(a(s)+" "+e+" ("+a(o)+"-"+a(r)+")",u,l),b.drawImage(f,h+i,d,p-i,m,h,d,p-i,m),b.fillRect(h+p-i,d,i,m),b.fillStyle=n,b.globalAlpha=.9,b.fillRect(h+p-i,d,i,a((1-s/w)*m))}}};var f,b,w,y,g,v,E,x,O=m;function L(){return M.apply(this,arguments)}function M(){return M=i(regeneratorRuntime.mark((function e(){var t,n,o,r,a,i,s,u,l,p,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:for(g=e.sent,v=new c["wb"],f=new c["ab"](50,window.innerWidth/window.innerHeight,.1,100),f.position.set(-1,1.5,2),f.lookAt(0,.5,0),b=new c["jb"],b.background=new c["j"](6710886),t=new c["r"],t.intensity=.35,b.add(t),n=new c["k"],n.position.set(5,5,5),n.castShadow=!0,n.shadow.camera.zoom=2,b.add(n),o=new c["N"](new c["e"](10,5,10),new c["kb"]({color:1118481})),o.position.y=-2.5,o.receiveShadow=!0,b.add(o),g.addMesh(o),r=new c["P"],a=new c["M"],i=new c["j"],s=new c["e"](.1,.1,.1),E=new c["u"](s,r,100),E.instanceMatrix.setUsage(c["m"]),E.castShadow=!0,E.receiveShadow=!0,b.add(E),u=0;u<E.count;u++)a.setPosition(Math.random()-.5,2*Math.random(),Math.random()-.5),E.setMatrixAt(u,a),E.setColorAt(u,i.setHex(16777215*Math.random()));for(g.addMesh(E,1),l=new c["s"](.075,3),x=new c["u"](l,r,100),x.instanceMatrix.setUsage(c["m"]),x.castShadow=!0,x.receiveShadow=!0,b.add(x),p=0;p<x.count;p++)a.setPosition(Math.random()-.5,2*Math.random(),Math.random()-.5),x.setMatrixAt(p,a),x.setColorAt(p,i.setHex(16777215*Math.random()));g.addMesh(x,1),w=new c["yb"]({antialias:!0}),w.setPixelRatio(window.devicePixelRatio),w.setSize(window.innerWidth,window.innerHeight),w.shadowMap.enabled=!0,w.outputEncoding=c["zb"],document.body.appendChild(w.domElement),y=new O,document.body.appendChild(y.dom),m=new h(f,w.domElement),m.target.y=.5,m.update(),P();case 53:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}function P(){requestAnimationFrame(P);var e=Math.floor(Math.random()*E.count);v.set(0,Math.random()+1,0),g.setMeshPosition(E,v,e),e=Math.floor(Math.random()*x.count),v.set(0,Math.random()+1,0),g.setMeshPosition(x,v,e),w.render(b,f),y.update()}L();var T={name:"coin",components:{},data:function(){return{}},beforeCreate:function(){},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{},computed:{},watch:{}},A=T,S=n("2877"),R=Object(S["a"])(A,o,r,!1,null,null,null);t["default"]=R.exports},"96cf":function(e,t,n){var o=function(e){"use strict";var t,n=Object.prototype,o=n.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(k){s=function(e,t,n){return e[t]=n}}function u(e,t,n,o){var r=t&&t.prototype instanceof b?t:b,a=Object.create(r.prototype),i=new S(o||[]);return a._invoke=M(e,n,i),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=u;var h="suspendedStart",d="suspendedYield",p="executing",m="completed",f={};function b(){}function w(){}function y(){}var g={};g[a]=function(){return this};var v=Object.getPrototypeOf,E=v&&v(v(R([])));E&&E!==n&&o.call(E,a)&&(g=E);var x=y.prototype=b.prototype=Object.create(g);function O(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(r,a,i,c){var s=l(e[r],e,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&o.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}var r;function a(e,o){function a(){return new t((function(t,r){n(e,o,t,r)}))}return r=r?r.then(a,a):a()}this._invoke=a}function M(e,t,n){var o=h;return function(r,a){if(o===p)throw new Error("Generator is already running");if(o===m){if("throw"===r)throw a;return j()}n.method=r,n.arg=a;while(1){var i=n.delegate;if(i){var c=P(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=l(e,t,n);if("normal"===s.type){if(o=n.done?m:d,s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function P(e,n){var o=e.iterator[n.method];if(o===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,P(e,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=l(o,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,f;var a=r.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,f):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function R(e){if(e){var n=e[a];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function n(){while(++r<e.length)if(o.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:j}}function j(){return{value:t,done:!0}}return w.prototype=x.constructor=y,y.constructor=w,w.displayName=s(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},O(L.prototype),L.prototype[i]=function(){return this},e.AsyncIterator=L,e.async=function(t,n,o,r,a){void 0===a&&(a=Promise);var i=new L(u(t,n,o,r),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},O(x),s(x,c,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var o=t.pop();if(o in e)return n.value=o,n.done=!1,n}return n.done=!0,n}},e.values=R,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(o,r){return c.type="throw",c.arg=e,n.next=o,r&&(n.method="next",n.arg=t),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var r=o.arg;A(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,o){return this.delegate={iterator:R(e),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=t),f}},e}(e.exports);try{regeneratorRuntime=o}catch(r){Function("r","regeneratorRuntime = r")(o)}}}]);
//# sourceMappingURL=chunk-2d8a6760.1c33c797.js.map