(this["webpackJsonpiss-tracker"]=this["webpackJsonpiss-tracker"]||[]).push([[0],{12:function(t){t.exports=JSON.parse('{"number":6,"people":[{"name":"Christina Koch","biophoto":"http://howmanypeopleareinspacerightnow.com/app/biophotos/christina-koch.jpg","biophotowidth":640,"biophotoheight":800,"country":"usa","countryflag":"http://howmanypeopleareinspacerightnow.com/app/flags/flag-usa.jpg","launchdate":"2019-03-14","careerdays":0,"title":"Flight Engineer","location":"International Space Station","bio":"Christina was born and raised in North Carolina where she also attended college. She is a scientist, engineer, and avid explorer.","biolink":"https://en.wikipedia.org/wiki/Christina_Koch","twitter":"https://twitter.com/Astro_Christina"},{"name":"Alexander Skvortsov","biophoto":"http://howmanypeopleareinspacerightnow.com/app/biophotos/alexander-skvortsov.jpg","biophotowidth":640,"biophotoheight":800,"country":"russia","countryflag":"http://howmanypeopleareinspacerightnow.com/app/flags/flag-russia.jpg","launchdate":"2019-07-20","careerdays":348,"title":"Flight Engineer","location":"International Space Station","bio":"2nd generation cosmonaut in the house! This is Alexader\u2019s 3 trip to space since his first in 2010.","biolink":"https://en.wikipedia.org/wiki/Aleksandr_Skvortsov_(cosmonaut)","twitter":""},{"name":"Andrew Morgan","biophoto":"http://howmanypeopleareinspacerightnow.com/app/biophotos/andrew-morgan.jpg","biophotowidth":640,"biophotoheight":800,"country":"usa","countryflag":"http://howmanypeopleareinspacerightnow.com/app/flags/flag-usa.jpg","launchdate":"2019-07-20","careerdays":2,"title":"Flight Engineer","location":"International Space Station","bio":"NASA Astronaut, Colonel, U.S. Army, West Point Grad, former Emergency Physician in Army Special Operations, Husband, Father of 4.","biolink":"https://en.wikipedia.org/wiki/Andrew_R._Morgan","twitter":"https://twitter.com/AstroDrewMorgan"},{"name":"Luca Parmitano","biophoto":"http://howmanypeopleareinspacerightnow.com/app/biophotos/luca-parmitano.jpg","biophotowidth":640,"biophotoheight":800,"country":"italy","countryflag":"http://howmanypeopleareinspacerightnow.com/app/flags/flag-italy.jpg","launchdate":"2019-07-20","careerdays":168,"title":"Flight Engineer","location":"International Space Station","bio":"Italian Luca is a young astronaut, being only 36 when his first mission began! He is an engineer, pilot and scuba diving, a weirdly common top hobby of astronauts. #themoreyouknow","biolink":"https://en.wikipedia.org/wiki/Luca_Parmitano","twitter":"https://twitter.com/astro_luca"},{"name":"Oleg Skripochka","biophoto":"https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2010/10/oleg_skripochka/10140727-2-eng-GB/Oleg_Skripochka_pillars.jpg","biophotowidth":640,"biophotoheight":800,"country":"russia","countryflag":"http://howmanypeopleareinspacerightnow.com/app/flags/flag-russia.jpg","launchdate":"2019-09-25","careerdays":332,"title":"Flight Engineer","location":"International Space Station","bio":"Oleg is a legend that has spent nearly a year of his life in space and completed 3 EVAs along the way","biolink":"https://en.wikipedia.org/wiki/Oleg_Skripochka","twitter":""},{"name":"Jessica Meir","biophoto":"http://howmanypeopleareinspacerightnow.com/app/biophotos/jessica-meir1.jpg","biophotowidth":640,"biophotoheight":800,"country":"usa","countryflag":"http://howmanypeopleareinspacerightnow.com/app/flags/flag-usa.jpg","launchdate":"2019-09-25","careerdays":0,"title":"Flight Engineer","location":"International Space Station","bio":"Jessica is a true adventurer with a PHD in marine biology and a master in space studies from\u2026wait for it\u2026. the International Space University in Illkirch, France!","biolink":"https://en.wikipedia.org/wiki/Jessica_Meir","twitter":"https://twitter.com/astro_jessica"}]}')},15:function(t,e,a){t.exports=a(25)},24:function(t,e,a){},25:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),o=a(11),r=a.n(o),s=a(3),c=a.n(s),l=a(1),p=a(2),u=a(5),h=a(4),m=a(6),d=function(){function t(){Object(l.a)(this,t)}return Object(p.a)(t,[{key:"getISSLocation",value:function(){var t,e,a,n,i;return c.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return"http://api.open-notify.org/iss-now.json",o.next=3,c.a.awrap(fetch("http://api.open-notify.org/iss-now.json"));case 3:return t=o.sent,o.next=6,c.a.awrap(t.json());case 6:return e=o.sent,a=e.iss_position,n=a.latitude,i=a.longitude,o.abrupt("return",new google.maps.LatLng(n,i));case 9:case"end":return o.stop()}}))}}]),t}(),g=function(){function t(){Object(l.a)(this,t)}return Object(p.a)(t,null,[{key:"subscribe",value:function(t){this.subscribers.push(t)}},{key:"tick",value:function(){var t=this;setInterval((function(){return t.subscribers.forEach((function(t){return t()}))}),this.DELAY)}}]),t}();g.DELAY=5e3,g.subscribers=[],g.tick();var f=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(h.a)(e).call(this,t))).issLocationService=void 0,a.state=void 0,a.issLocationService=new d,a.state={issLocation:null},a.updateISSLocation(),a}return Object(m.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.updateISSLocation(),g.subscribe((function(){return t.updateISSLocation()}))}},{key:"updateISSLocation",value:function(){var t;return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.awrap(this.issLocationService.getISSLocation());case 2:t=e.sent,this.setState({issLocation:t});case 4:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var t,e;return i.a.createElement("div",{className:"location"},i.a.createElement("h3",{className:"label"},"ISS is now located at:"),i.a.createElement("div",{className:"location-info"},i.a.createElement("div",{className:"long"},i.a.createElement("span",null,"longitude:"),i.a.createElement("span",null,null===(t=this.state.issLocation)||void 0===t?void 0:t.lng())),i.a.createElement("div",{className:"lat"},i.a.createElement("span",null,"latitude:"),i.a.createElement("span",null,null===(e=this.state.issLocation)||void 0===e?void 0:e.lat()))))}}]),e}(n.Component),v=a(14),w=function(t){var e=t.cosmonaut,a=e.name,n=e.title,o=e.photo,r=e.flag,s=e.daysInSpace,c=e.wikiPage;return i.a.createElement("div",{onClick:function(){return t=c,void window.open(t,"_blank");var t},className:"cosmonaut"},i.a.createElement("div",{className:"bio"},i.a.createElement("div",{className:"photo"},i.a.createElement("img",{src:o,alt:"cosmonaut photo"})),i.a.createElement("div",{className:"person-info"},i.a.createElement("span",{className:"name"},a),i.a.createElement("img",{src:r,alt:"country flag",className:"flag"}),i.a.createElement("span",{className:"title"},n))),i.a.createElement("div",{className:"launch-info"},i.a.createElement("div",{className:"duration"},s),i.a.createElement("span",{className:"label"},"Days in space")))},b=function t(e,a,n,i,o,r){Object(l.a)(this,t),this.name=void 0,this.photo=void 0,this.title=void 0,this.flag=void 0,this.daysInSpace=void 0,this.wikiPage=void 0,this.name=e,this.photo=a,this.title=n,this.flag=i,this.daysInSpace=o,this.wikiPage=r},y=a(7),k=a.n(y),S=a(12),E=function(){function t(){Object(l.a)(this,t)}return Object(p.a)(t,[{key:"getPeopleOnISS",value:function(){return S.people.filter((function(t){return"International Space Station"===t.location})).map((function(t){var e=t.name,a=t.biophoto,n=t.countryflag,i=t.launchdate,o=t.title,r=t.biolink,s=k()(i),c=k()(),l=k.a.duration(c.diff(s)),p=Math.trunc(l.asDays());return new b(e,a,o,n,p,r)}))}}]),t}(),j=a(13),O=a.n(j),I=function(){var t=new E,e=Object(n.useState)([]),a=Object(v.a)(e,2),o=a[0],r=a[1];Object(n.useEffect)((function(){return s()}),[]);var s=function(){var e=t.getPeopleOnISS();r(e)};return i.a.createElement("div",{className:"cosmonaut-list"},i.a.createElement("div",{className:"list scrollbar"},o.map((function(t){return i.a.createElement(w,{key:O.a.v4(),cosmonaut:t})}))),i.a.createElement("span",{className:"total"},"Total amount: ",o.length," people on ISS"))},L=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(h.a)(e).call(this,t))).map=void 0,a.marker=void 0,a.issLocationService=void 0,a.issLocationService=new d,a}return Object(m.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t,e=this;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.awrap(this.issLocationService.getISSLocation());case 2:t=a.sent,this.initMap(t),this.setUpMarker(t),g.subscribe((function(){return e.updateMarker()}));case 6:case"end":return a.stop()}}),null,this)}},{key:"initMap",value:function(t){var e=document.getElementById("map"),a=this.setUpMapOptions(t);this.map=new google.maps.Map(e,a)}},{key:"setUpMapOptions",value:function(t){return{zoom:3,center:t||new google.maps.LatLng(40.67,-73.94),styles:[{stylers:[{hue:"#ff1a00"},{invert_lightness:!0},{saturation:-100},{lightness:33},{gamma:.5}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#2D333C"}]}],disableDefaultUI:!0}}},{key:"setUpMarker",value:function(t){var e={position:t,map:this.map,title:"Current ISS Position"};this.marker=new google.maps.Marker(e)}},{key:"updateMarker",value:function(){var t,e;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.awrap(this.issLocationService.getISSLocation());case 2:e=a.sent,null===(t=this.marker)||void 0===t||t.setPosition(e);case 4:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){return i.a.createElement("div",{id:"map"})}}]),e}(n.Component),N=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(h.a)(e).call(this,t))).state=void 0,a.state={timeFormat:"",dateFormat:""},a}return Object(m.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.updateDate(),setInterval((function(){return t.updateDate()}),1e3)}},{key:"updateDate",value:function(){var t=k()();this.setState({timeFormat:t.format("h:mm:ss A"),dateFormat:t.format("dddd, D MMM YYYY")})}},{key:"render",value:function(){return i.a.createElement("div",{className:"time"},i.a.createElement("h3",{className:"utc-time"},"Current UTC time: ",this.state.timeFormat),i.a.createElement("span",{className:"date"},this.state.dateFormat))}}]),e}(n.Component),M=(a(24),function(){return i.a.createElement("div",{className:"app"},i.a.createElement(f,null),i.a.createElement(N,null),i.a.createElement(L,null),i.a.createElement(I,null))});r.a.render(i.a.createElement(M,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2aeb8eb3.chunk.js.map