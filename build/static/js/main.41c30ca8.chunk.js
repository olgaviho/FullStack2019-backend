(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(41)},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),u=n.n(a),r=n(11),o=n.n(r),c=n(13),l=n(12),i=n(2),m=function(e){return u.a.createElement("li",null,e.name.name," ",e.name.number,u.a.createElement("button",{onClick:function(){return e.deletePerson(e.name)}},"poista"))},s=function(e){return u.a.createElement("form",{onSubmit:e.addName},u.a.createElement("div",null,"nimi: ",u.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),u.a.createElement("div",null,"puhelinnumero: ",u.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},f=function(e){return u.a.createElement("div",null,u.a.createElement("form",null,u.a.createElement("input",{value:e.newLookFor,onChange:e.handleLookForChange})))},d=n(3),h=n.n(d),p="https://person-backend.herokuapp.com/api/persons",b=function(){return h.a.get(p).then(function(e){return e.data})},E=function(e){return h.a.post(p,e).then(function(e){return e.data})},g=function(e){return h.a.delete("https://person-backend.herokuapp.com/api/persons".concat(e)).then(function(e){return e.data})},v=function(e){return h.a.put("".concat(p,"/").concat(e.id),e).then(function(e){return e.data})},w=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),d=Object(i.a)(o,2),h=d[0],p=d[1],w=Object(a.useState)(""),O=Object(i.a)(w,2),j=O[0],k=O[1],C=Object(a.useState)(""),N=Object(i.a)(C,2),x=N[0],y=N[1],S=Object(a.useState)({text:null}),L=Object(i.a)(S,2),F=L[0],P=L[1];Object(a.useEffect)(function(){b().then(function(e){r(e)})},[]);var D=function(e){window.confirm("Olet poistamassa ".concat(e.name))&&g(e.id).then(function(){r(n.filter(function(t){return t.id!==e.id}))})};return u.a.createElement("div",null,u.a.createElement("h2",null,"Etsi nimell\xe4"),u.a.createElement(f,{newLookFor:x,handleLookForChange:function(e){y(e.target.value)}}),u.a.createElement("h2",null,"Puhelinluettelo"),u.a.createElement(function(e){return null===e.message.text?null:u.a.createElement("div",{className:e.message.style},e.message.text)},{message:F}),u.a.createElement(s,{addName:function(e){e.preventDefault();var t={id:n.length?Object(l.a)(n).sort(function(e,t){return t.id-e.id})[0].id+1:1,name:h,number:j,date:(new Date).toISOString()},a=!0;if(n.forEach(function(e){h===e.name&&(a=!1)}),!0===a)P({text:"Henkil\xf6 ".concat(h," lis\xe4tty luetteloon"),style:"success"}),setTimeout(function(){P({text:null})},5e3),E(t).then(function(e){r(n.concat(e)),p(""),k("")});else{var u=n.find(function(e){return e.name===h}),o=Object(c.a)({},u,{number:j});v(o).then(function(e){r(n.map(function(t){return t.id!==u.id?t:e}))}).catch(function(e){P({text:"Yhteystieto ".concat(o.name," on jo valitettavasti poistettu"),style:"fail"}),setTimeout(function(){P({text:null})},5e3),r(n.filter(function(e){return e.id!==u.id}))})}},newName:h,handleNameChange:function(e){p(e.target.value)},newNumber:j,handleNumberChange:function(e){k(e.target.value)}}),u.a.createElement("h2",null,"Numerot"),n.filter(function(e){return!x.length||e.name.toLowerCase().includes(x.toLowerCase())}).map(function(e){return u.a.createElement(m,{key:e.id,name:e,number:e.number,deletePerson:D})}))};n(39);o.a.render(u.a.createElement(w,null),document.getElementById("root"))}},[[14,2,1]]]);
//# sourceMappingURL=main.41c30ca8.chunk.js.map