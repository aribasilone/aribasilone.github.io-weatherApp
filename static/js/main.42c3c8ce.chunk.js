(this.webpackJsonpsideprojectb=this.webpackJsonpsideprojectb||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),s=(a(15),a(16),a(1)),o=a.n(s),l=a(2),u=a(3),m=a(5),p=a(4),h=a(6),d=(a(18),a(9)),v=a.n(d),y=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"title-container__title"},"Weather App"),r.a.createElement("div",{className:"iconDiv"},r.a.createElement("img",{src:v.a,alt:"Weather Icon",className:"icon",id:"i1"})))},b=function(e){return r.a.createElement("div",null,"Search a Destination",r.a.createElement("form",{onSubmit:e.getAllWeathData},r.a.createElement("input",{type:"text",name:"Country",placeholder:"Country"}),r.a.createElement("input",{type:"text",name:"City",placeholder:"City"}),r.a.createElement("label",{className:"unitLabel"},r.a.createElement("input",{type:"radio",id:"metricUnit",name:"Unit",value:"metric",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"metricUnit",className:"Unit"},"Metric "),r.a.createElement("input",{type:"radio",id:"imperialUnit",name:"Unit",value:"imperial"}),r.a.createElement("label",{htmlFor:"imperialUnit",className:"Unit"},"Imperial ")),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Search")))},E=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"weather__info"},this.props.error&&r.a.createElement("p",{className:"weather__key"},this.props.error),this.props.city&&r.a.createElement("h2",{className:"weather__key"},this.props.city,", ",this.props.country),this.props.city&&r.a.createElement("h1",{className:"weather__key"},"Weather: ",r.a.createElement("span",null,this.props.descr)),this.props.temp&&r.a.createElement("p",{className:"weather__key"},"Temperature ",r.a.createElement("span",null,this.props.temp," \xb0",this.props.unit)),this.props.humidex&&r.a.createElement("p",{className:"weather__key"},"Humidex ",r.a.createElement("span",null,this.props.humidex)))}}]),t}(r.a.Component),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={country:void 0,city:void 0,temp:void 0,humidex:void 0,descr:void 0,error:void 0,unit:void 0},a.getAllWeathData=function(e){var t,n,r,i,c,s;return o.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(e.preventDefault(),t=e.target.elements.Country.value,n=e.target.elements.City.value,r=e.target.elements.Unit.value,!n||!t){l.next=42;break}return l.t0=o.a,l.next=8,o.a.awrap(fetch("https://restcountries.eu/rest/v2/alpha/".concat(t)));case 8:return l.t1=l.sent.json(),l.next=11,l.t0.awrap.call(l.t0,l.t1);case 11:if(i=l.sent,console.log(i),404!==i.status&&400!==i.status){l.next=30;break}return l.t2=o.a,l.next=17,o.a.awrap(fetch("https://restcountries.eu/rest/v2/name/".concat(t)));case 17:return l.t3=l.sent.json(),l.next=20,l.t2.awrap.call(l.t2,l.t3);case 20:if(c=l.sent,console.log(c),1!==c.length||404===c.status){l.next=26;break}t=c[0].alpha2Code,l.next=28;break;case 26:return a.invalidLocation(),l.abrupt("return");case 28:l.next=31;break;case 30:t=i.alpha2Code;case 31:return l.t4=o.a,l.next=34,o.a.awrap(fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(t,"&units=").concat(r,"&APPID=cd95e8d91daaa698e0bf339b6aa6b508")));case 34:return l.t5=l.sent.json(),l.next=37,l.t4.awrap.call(l.t4,l.t5);case 37:s=l.sent,console.log(s),"404"===s.cod?a.invalidLocation():(r="metric"===r?"C":"F",a.setState({country:t,city:n,temp:s.main.temp,humidex:s.main.humidity,descr:s.weather[0].description,error:void 0,unit:r})),l.next=43;break;case 42:a.setState({country:void 0,city:void 0,temp:void 0,humidex:void 0,descr:void 0,error:"Please Enter in Location Details",unit:void 0});case 43:case"end":return l.stop()}}))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"invalidLocation",value:function(){this.setState({country:void 0,city:void 0,temp:void 0,humidex:void 0,descr:void 0,error:"Location not recognised. Please re-enter in location details.",unit:void 0})}},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"title-container"},r.a.createElement(y,null)),r.a.createElement("div",{className:"form-container"},r.a.createElement(b,{getAllWeathData:this.getAllWeathData}),r.a.createElement(E,{country:this.state.country,city:this.state.city,temp:this.state.temp,humidex:this.state.humidex,descr:this.state.descr,error:this.state.error,unit:this.state.unit})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a.p+"static/media/sun_cloudy_icon.f6e2b508.png"}},[[10,1,2]]]);
//# sourceMappingURL=main.42c3c8ce.chunk.js.map