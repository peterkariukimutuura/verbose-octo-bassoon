(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(6),i=o.n(a),c=o(7),l=o(1),d=o(2),s=o(4),p=o(3),u=(o(13),function(e){Object(s.a)(o,e);var t=Object(p.a)(o);function o(){var e;Object(l.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).getStyle=function(){return{backgroundColor:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:e.props.todo.completed?"line-through":"none"}},e}return Object(d.a)(o,[{key:"render",value:function(){var e=this.props.todo,t=e.id,o=e.title;return r.a.createElement("div",{style:this.getStyle()},r.a.createElement("p",null,r.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)}),o,r.a.createElement("button",{style:m,onClick:this.props.delTodo.bind(this,t,o)},"x")))}}]),o}(n.Component)),m={backgroundColor:"red",color:"white",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right",outline:"none"},h=u,f=function(e){Object(s.a)(o,e);var t=Object(p.a)(o);function o(){return Object(l.a)(this,o),t.apply(this,arguments)}return Object(d.a)(o,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return r.a.createElement(h,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})}))}}]),o}(n.Component);var b={background:"#333",color:"#fff",textAlign:"center",padding:"10px",fontFamily:"Arial"},g=function(){return r.a.createElement("header",{style:b},r.a.createElement("h1",null,"Todo List"))},k=function(e){Object(s.a)(o,e);var t=Object(p.a)(o);function o(){var e;Object(l.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={todos:[{id:1,title:"Take out trash",completed:!1},{id:2,title:"Dinner with wife",completed:!1},{id:3,title:"Meeting with boss",completed:!1}]},e.markComplete=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.delTodo=function(t,o){confirm("Delete todo: ".concat(o))&&e.setState({todos:Object(c.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e}return Object(d.a)(o,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(f,{todos:this.state.todos,markComplete:this.markComplete,delTodo:this.delTodo}))}}]),o}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,o){e.exports=o(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.76b878db.chunk.js.map