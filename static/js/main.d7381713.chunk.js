(this["webpackJsonpvideo-store-consumer"]=this["webpackJsonpvideo-store-consumer"]||[]).push([[0],{30:function(e,t,a){e.exports=a(65)},35:function(e,t,a){},36:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(26),o=a.n(c),r=(a(35),a(6)),i=a(11),s=a(1),u=(a(36),a(9)),m=a.n(u),d=a(27),v=a(29),f=(a(54),function(e){var t=Object(n.useState)({query:""}),a=Object(r.a)(t,2),c=a[0],o=a[1],i=function(t){t.preventDefault(),c.query&&e.addSearchCallback(c.query)};return l.a.createElement("form",{onSubmit:i},l.a.createElement("h1",null,"Search for a Movie"),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{name:"query",className:"input-search",onChange:function(e){var t=Object(v.a)({},c);t[e.target.name]=e.target.value,o(t)},value:c.text})),l.a.createElement("input",{type:"submit",name:"submit",value:"Submit",className:"input-search-button",onClick:i})))}),E=(a(55),function(e){return l.a.createElement("section",{className:"movie-listing"},l.a.createElement("img",{src:e.imageURL,alt:"poster for ".concat(e.title," ")}),l.a.createElement("section",null,l.a.createElement("h3",null,e.title),l.a.createElement("p",null,l.a.createElement("strong",null,e.releaseDate)),l.a.createElement("p",null,e.overview)))}),h=(a(56),function(e){var t=Object(n.useState)(null),a=Object(r.a)(t,2),c=(a[0],a[1]),o=Object(n.useState)([]),i=Object(r.a)(o,2),s=i[0],u=i[1],v=[];return l.a.createElement("div",null,l.a.createElement(f,{addSearchCallback:function(t){console.log(t);m.a.get("https://example-env.eba-2un3hw2p.us-west-2.elasticbeanstalk.com/movies/",{params:{query:t}}).then((function(t){console.log(t);var a,n=Object(d.a)(t.data);try{var c=function(){var t=a.value;v.push(l.a.createElement("section",null,l.a.createElement(E,{key:t.id,id:t.id,title:t.title,overview:t.overview,releaseDate:t.release_date,externalID:t.external_id,imageURL:t.image_url}),l.a.createElement("button",{onClick:function(){return function(t){e.addMovieCreationCallback(t)}(t)},className:"item-link"},"Add to Library")))};for(n.s();!(a=n.n()).done;)c()}catch(o){n.e(o)}finally{n.f()}u(v)})).catch((function(e){c(e.message),console.log(e.message)}))}}),""!==e.addMovieAlert&&l.a.createElement("p",{className:"add-movie-alert"},e.addMovieAlert),l.a.createElement("div",{className:"show-all-movies"},s))}),p=a(8),g=a.n(p);a(59);E.propTypes={onUpdateSelectedMovie:g.a.func.isRequired,movies:g.a.array.isRequired,selectedMovie:g.a.string.isRequired};var b=function(e){var t=e.movies.map((function(t){return l.a.createElement("section",null,l.a.createElement(E,{key:t.id,id:t.id,title:t.title,overview:t.overview,releaseDate:t.release_date,externalID:t.external_id,imageURL:t.image_url}),l.a.createElement("button",{onClick:function(){return function(t){console.log(t);var a={id:t.id,title:t.title};e.onUpdateSelectedMovie(a)}(t)},className:"item-link"},console.log(e.selectedMovie),(console.log(e),console.log("hi"),e.id===e.selectedMovie?"Selected":"Select")))}));return l.a.createElement("div",null,l.a.createElement("h1",null,"All Movies"),l.a.createElement("div",{className:"show-all-movies"},t))},w=(a(60),function(e){return l.a.createElement("section",{className:"customer-listing"},l.a.createElement("section",{className:"customer-name"},l.a.createElement("h2",null,l.a.createElement("strong",null,e.name)),l.a.createElement("p",null,e.phone)),l.a.createElement("section",{className:"rental-info"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Rental Info:")),l.a.createElement("li",null,"Moves checked out: ",e.movies_checked_out_count),l.a.createElement("li",null,"Credit: $",e.account_credit))),l.a.createElement("section",{className:"address-info"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Address: ")),l.a.createElement("li",null,e.address),l.a.createElement("li",null,e.city,", ",e.state," ",e.zip),l.a.createElement("li",null))),l.a.createElement("button",{onClick:function(){var t={id:e.id,name:e.name};e.onUpdateSelected(t)},className:"button"},(console.log(e.selected_id),e.id===e.selected_id?"Selected":"Select for Rental")))}),k=(a(61),function(e){var t=e.customers.map((function(t){return l.a.createElement(w,{id:t.id,key:t.id,name:t.name,phone:t.phone,movies_checked_out_count:t.movies_checked_out_count,account_credit:t.account_credit,address:t.address,city:t.city,state:t.state,zip:t.postal_code,selected_id:e.selectedCustomer,onUpdateSelected:e.onUpdateSelectedCustomer})}));return l.a.createElement("section",null,l.a.createElement("h2",null,"All Customers"),l.a.createElement("section",{className:"customers"},t))});function S(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Home"))}var y=function(){var e="https://example-env.eba-2un3hw2p.us-west-2.elasticbeanstalk.com/",t=Object(n.useState)({name:"",id:null}),a=Object(r.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)({title:"",id:null}),d=Object(r.a)(u,2),v=d[0],f=d[1],E=Object(n.useState)([]),p=Object(r.a)(E,2),g=p[0],w=p[1],y=Object(n.useState)([]),_=Object(r.a)(y,2),j=_[0],C=_[1],O=Object(n.useState)(null),N=Object(r.a)(O,2),M=(N[0],N[1]),U=Object(n.useState)(null),R=Object(r.a)(U,2),x=R[0],A=R[1],q=Object(n.useState)(""),L=Object(r.a)(q,2),D=L[0],T=L[1];Object(n.useEffect)((function(){m.a.get(e+"customers/").then((function(e){w(e.data)})).catch((function(e){A(e.message)}))}),[]),Object(n.useEffect)((function(){m.a.get(e+"movies/").then((function(e){C(e.data)})).catch((function(e){A(e.message)}))}),[]);var W=function(e){console.log(e),o({name:e.name,id:e.id}),M("Customer ".concat(e.name," has been selected"))},I=function(e){f({title:e.title,id:e.id}),M("Movie ".concat(e.title," has been selected"))};return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement("header",{className:"app-header"},l.a.createElement("div",{className:"app-header__nav"},l.a.createElement("h1",null,"Title of Our Movie App"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/search"},"Search")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/library"},"Library")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/customers"},"Customers"))),x?l.a.createElement("div",null,l.a.createElement("h2",{className:"error-msg"},x)):""),l.a.createElement("div",{className:"app-header__selections"},l.a.createElement("h2",null,"Rental Selections"),l.a.createElement("p",null,"Movie: ",v.title.toUpperCase()),l.a.createElement("p",null,"Customer: ",c.name.toUpperCase()),function(){if(console.log(c),null!==v.id&&null!==c.id)return!0}()?l.a.createElement("button",{onClick:function(){var t=e+"rentals/".concat(v.title,"/check-out");m()({method:"post",url:t,params:{customer_id:c.id,due_date:"2020/12/30"}}).then((function(){M("Successfully made rental");var e={id:null,name:""};W(e),I(e)})).catch((function(e){A(e.message)}))}},"Create Rental"):"")),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/"},l.a.createElement(S,null)),l.a.createElement(s.a,{path:"/search"},l.a.createElement(h,{addMovieCreationCallback:function(t){m()({method:"post",url:e+"movies/",params:t}).then((function(e){T("".concat(e.data.title," added to library!")),console.log(e)})).catch((function(e){T("This movie is already in the library."),console.log(e)}))},addMovieAlert:D})),l.a.createElement(s.a,{path:"/library"},l.a.createElement(b,{movies:j,onUpdateSelectedMovie:I,selectedMovie:v.id})),l.a.createElement(s.a,{path:"/customers"},l.a.createElement(k,{customers:g,onUpdateSelectedCustomer:W,selectedCustomer:c.id})))))},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(l.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/video-store-consumer",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/video-store-consumer","/service-worker.js");_?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):j(e)}))}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.d7381713.chunk.js.map