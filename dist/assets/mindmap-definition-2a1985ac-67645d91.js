import{_ as it}from"./app-7a8a6255.js";import{d as yt,c as B,l as I,h as P,t as mt,aE as Et,aF as bt}from"./mermaid.core-d511990f.js";import{i as _t}from"./is_dark-31c796b4.js";import"./framework-bb7be5cb.js";var Z=function(){var e=function(L,o,r,l){for(r=r||{},l=L.length;l--;r[L[l]]=o);return r},t=[1,4],n=[1,13],s=[1,12],i=[1,15],a=[1,16],u=[1,20],d=[1,19],g=[6,7,8],b=[1,26],E=[1,24],x=[1,25],y=[6,7,11],w=[1,6,13,15,16,19,22],A=[1,33],K=[1,34],R=[1,6,7,11,13,15,16,19,22],z={trace:function(){},yy:{},symbols_:{error:2,start:3,mindMap:4,spaceLines:5,SPACELINE:6,NL:7,MINDMAP:8,document:9,stop:10,EOF:11,statement:12,SPACELIST:13,node:14,ICON:15,CLASS:16,nodeWithId:17,nodeWithoutId:18,NODE_DSTART:19,NODE_DESCR:20,NODE_DEND:21,NODE_ID:22,$accept:0,$end:1},terminals_:{2:"error",6:"SPACELINE",7:"NL",8:"MINDMAP",11:"EOF",13:"SPACELIST",15:"ICON",16:"CLASS",19:"NODE_DSTART",20:"NODE_DESCR",21:"NODE_DEND",22:"NODE_ID"},productions_:[0,[3,1],[3,2],[5,1],[5,2],[5,2],[4,2],[4,3],[10,1],[10,1],[10,1],[10,2],[10,2],[9,3],[9,2],[12,2],[12,2],[12,2],[12,1],[12,1],[12,1],[12,1],[12,1],[14,1],[14,1],[18,3],[17,1],[17,4]],performAction:function(o,r,l,h,m,c,M){var p=c.length-1;switch(m){case 6:case 7:return h;case 8:h.getLogger().trace("Stop NL ");break;case 9:h.getLogger().trace("Stop EOF ");break;case 11:h.getLogger().trace("Stop NL2 ");break;case 12:h.getLogger().trace("Stop EOF2 ");break;case 15:h.getLogger().info("Node: ",c[p].id),h.addNode(c[p-1].length,c[p].id,c[p].descr,c[p].type);break;case 16:h.getLogger().trace("Icon: ",c[p]),h.decorateNode({icon:c[p]});break;case 17:case 21:h.decorateNode({class:c[p]});break;case 18:h.getLogger().trace("SPACELIST");break;case 19:h.getLogger().trace("Node: ",c[p].id),h.addNode(0,c[p].id,c[p].descr,c[p].type);break;case 20:h.decorateNode({icon:c[p]});break;case 25:h.getLogger().trace("node found ..",c[p-2]),this.$={id:c[p-1],descr:c[p-1],type:h.getType(c[p-2],c[p])};break;case 26:this.$={id:c[p],descr:c[p],type:h.nodeType.DEFAULT};break;case 27:h.getLogger().trace("node found ..",c[p-3]),this.$={id:c[p-3],descr:c[p-1],type:h.getType(c[p-2],c[p])};break}},table:[{3:1,4:2,5:3,6:[1,5],8:t},{1:[3]},{1:[2,1]},{4:6,6:[1,7],7:[1,8],8:t},{6:n,7:[1,10],9:9,12:11,13:s,14:14,15:i,16:a,17:17,18:18,19:u,22:d},e(g,[2,3]),{1:[2,2]},e(g,[2,4]),e(g,[2,5]),{1:[2,6],6:n,12:21,13:s,14:14,15:i,16:a,17:17,18:18,19:u,22:d},{6:n,9:22,12:11,13:s,14:14,15:i,16:a,17:17,18:18,19:u,22:d},{6:b,7:E,10:23,11:x},e(y,[2,22],{17:17,18:18,14:27,15:[1,28],16:[1,29],19:u,22:d}),e(y,[2,18]),e(y,[2,19]),e(y,[2,20]),e(y,[2,21]),e(y,[2,23]),e(y,[2,24]),e(y,[2,26],{19:[1,30]}),{20:[1,31]},{6:b,7:E,10:32,11:x},{1:[2,7],6:n,12:21,13:s,14:14,15:i,16:a,17:17,18:18,19:u,22:d},e(w,[2,14],{7:A,11:K}),e(R,[2,8]),e(R,[2,9]),e(R,[2,10]),e(y,[2,15]),e(y,[2,16]),e(y,[2,17]),{20:[1,35]},{21:[1,36]},e(w,[2,13],{7:A,11:K}),e(R,[2,11]),e(R,[2,12]),{21:[1,37]},e(y,[2,25]),e(y,[2,27])],defaultActions:{2:[2,1],6:[2,2]},parseError:function(o,r){if(r.recoverable)this.trace(o);else{var l=new Error(o);throw l.hash=r,l}},parse:function(o){var r=this,l=[0],h=[],m=[null],c=[],M=this.table,p="",F=0,tt=0,gt=2,et=1,ut=c.slice.call(arguments,1),_=Object.create(this.lexer),O={yy:{}};for(var X in this.yy)Object.prototype.hasOwnProperty.call(this.yy,X)&&(O.yy[X]=this.yy[X]);_.setInput(o,O.yy),O.yy.lexer=_,O.yy.parser=this,typeof _.yylloc>"u"&&(_.yylloc={});var Y=_.yylloc;c.push(Y);var pt=_.options&&_.options.ranges;typeof O.yy.parseError=="function"?this.parseError=O.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ft(){var D;return D=h.pop()||_.lex()||et,typeof D!="number"&&(D instanceof Array&&(h=D,D=h.pop()),D=r.symbols_[D]||D),D}for(var $,v,k,q,T={},U,S,nt,j;;){if(v=l[l.length-1],this.defaultActions[v]?k=this.defaultActions[v]:(($===null||typeof $>"u")&&($=ft()),k=M[v]&&M[v][$]),typeof k>"u"||!k.length||!k[0]){var W="";j=[];for(U in M[v])this.terminals_[U]&&U>gt&&j.push("'"+this.terminals_[U]+"'");_.showPosition?W="Parse error on line "+(F+1)+`:
`+_.showPosition()+`
Expecting `+j.join(", ")+", got '"+(this.terminals_[$]||$)+"'":W="Parse error on line "+(F+1)+": Unexpected "+($==et?"end of input":"'"+(this.terminals_[$]||$)+"'"),this.parseError(W,{text:_.match,token:this.terminals_[$]||$,line:_.yylineno,loc:Y,expected:j})}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+v+", token: "+$);switch(k[0]){case 1:l.push($),m.push(_.yytext),c.push(_.yylloc),l.push(k[1]),$=null,tt=_.yyleng,p=_.yytext,F=_.yylineno,Y=_.yylloc;break;case 2:if(S=this.productions_[k[1]][1],T.$=m[m.length-S],T._$={first_line:c[c.length-(S||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(S||1)].first_column,last_column:c[c.length-1].last_column},pt&&(T._$.range=[c[c.length-(S||1)].range[0],c[c.length-1].range[1]]),q=this.performAction.apply(T,[p,tt,F,O.yy,k[1],m,c].concat(ut)),typeof q<"u")return q;S&&(l=l.slice(0,-1*S*2),m=m.slice(0,-1*S),c=c.slice(0,-1*S)),l.push(this.productions_[k[1]][0]),m.push(T.$),c.push(T._$),nt=M[l[l.length-2]][l[l.length-1]],l.push(nt);break;case 3:return!0}}return!0}},dt=function(){var L={EOF:1,parseError:function(r,l){if(this.yy.parser)this.yy.parser.parseError(r,l);else throw new Error(r)},setInput:function(o,r){return this.yy=r||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var r=o.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},unput:function(o){var r=o.length,l=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r),this.offset-=r;var h=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var m=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===h.length?this.yylloc.first_column:0)+h[h.length-l.length].length-l[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[m[0],m[0]+this.yyleng-r]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(o){this.unput(this.match.slice(o))},pastInput:function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var o=this.pastInput(),r=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+r+"^"},test_match:function(o,r){var l,h,m;if(this.options.backtrack_lexer&&(m={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(m.yylloc.range=this.yylloc.range.slice(0))),h=o[0].match(/(?:\r\n?|\n).*/g),h&&(this.yylineno+=h.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:h?h[h.length-1].length-h[h.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],l=this.performAction.call(this,this.yy,this,r,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l)return l;if(this._backtrack){for(var c in m)this[c]=m[c];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,r,l,h;this._more||(this.yytext="",this.match="");for(var m=this._currentRules(),c=0;c<m.length;c++)if(l=this._input.match(this.rules[m[c]]),l&&(!r||l[0].length>r[0].length)){if(r=l,h=c,this.options.backtrack_lexer){if(o=this.test_match(l,m[c]),o!==!1)return o;if(this._backtrack){r=!1;continue}else return!1}else if(!this.options.flex)break}return r?(o=this.test_match(r,m[h]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var r=this.next();return r||this.lex()},begin:function(r){this.conditionStack.push(r)},popState:function(){var r=this.conditionStack.length-1;return r>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(r){return r=this.conditionStack.length-1-Math.abs(r||0),r>=0?this.conditionStack[r]:"INITIAL"},pushState:function(r){this.begin(r)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(r,l,h,m){switch(h){case 0:r.getLogger().trace("Found comment",l.yytext);break;case 1:return 8;case 2:this.begin("CLASS");break;case 3:return this.popState(),16;case 4:this.popState();break;case 5:r.getLogger().trace("Begin icon"),this.begin("ICON");break;case 6:return r.getLogger().trace("SPACELINE"),6;case 7:return 7;case 8:return 15;case 9:r.getLogger().trace("end icon"),this.popState();break;case 10:return r.getLogger().trace("Exploding node"),this.begin("NODE"),19;case 11:return r.getLogger().trace("Cloud"),this.begin("NODE"),19;case 12:return r.getLogger().trace("Explosion Bang"),this.begin("NODE"),19;case 13:return r.getLogger().trace("Cloud Bang"),this.begin("NODE"),19;case 14:return this.begin("NODE"),19;case 15:return this.begin("NODE"),19;case 16:return this.begin("NODE"),19;case 17:return this.begin("NODE"),19;case 18:return 13;case 19:return 22;case 20:return 11;case 21:r.getLogger().trace("Starting NSTR"),this.begin("NSTR");break;case 22:return r.getLogger().trace("description:",l.yytext),"NODE_DESCR";case 23:this.popState();break;case 24:return this.popState(),r.getLogger().trace("node end ))"),"NODE_DEND";case 25:return this.popState(),r.getLogger().trace("node end )"),"NODE_DEND";case 26:return this.popState(),r.getLogger().trace("node end ...",l.yytext),"NODE_DEND";case 27:return this.popState(),r.getLogger().trace("node end (("),"NODE_DEND";case 28:return this.popState(),r.getLogger().trace("node end (-"),"NODE_DEND";case 29:return this.popState(),r.getLogger().trace("node end (-"),"NODE_DEND";case 30:return this.popState(),r.getLogger().trace("node end (("),"NODE_DEND";case 31:return this.popState(),r.getLogger().trace("node end (("),"NODE_DEND";case 32:return r.getLogger().trace("Long description:",l.yytext),20;case 33:return r.getLogger().trace("Long description:",l.yytext),20}},rules:[/^(?:\s*%%.*)/i,/^(?:mindmap\b)/i,/^(?::::)/i,/^(?:.+)/i,/^(?:\n)/i,/^(?:::icon\()/i,/^(?:[\s]+[\n])/i,/^(?:[\n]+)/i,/^(?:[^\)]+)/i,/^(?:\))/i,/^(?:-\))/i,/^(?:\(-)/i,/^(?:\)\))/i,/^(?:\))/i,/^(?:\(\()/i,/^(?:\{\{)/i,/^(?:\()/i,/^(?:\[)/i,/^(?:[\s]+)/i,/^(?:[^\(\[\n\-\)\{\}]+)/i,/^(?:$)/i,/^(?:["])/i,/^(?:[^"]+)/i,/^(?:["])/i,/^(?:[\)]\))/i,/^(?:[\)])/i,/^(?:[\]])/i,/^(?:\}\})/i,/^(?:\(-)/i,/^(?:-\))/i,/^(?:\(\()/i,/^(?:\()/i,/^(?:[^\)\]\(\}]+)/i,/^(?:.+(?!\(\())/i],conditions:{CLASS:{rules:[3,4],inclusive:!1},ICON:{rules:[8,9],inclusive:!1},NSTR:{rules:[22,23],inclusive:!1},NODE:{rules:[21,24,25,26,27,28,29,30,31,32,33],inclusive:!1},INITIAL:{rules:[0,1,2,5,6,7,10,11,12,13,14,15,16,17,18,19,20],inclusive:!0}}};return L}();z.lexer=dt;function G(){this.yy={}}return G.prototype=z,z.Parser=G,new G}();Z.parser=Z;const $t=Z,V=e=>yt(e,B());let N=[],st=0,Q={};const xt=()=>{N=[],st=0,Q={}},kt=function(e){for(let t=N.length-1;t>=0;t--)if(N[t].level<e)return N[t];return null},Nt=()=>N.length>0?N[0]:null,St=(e,t,n,s)=>{I.info("addNode",e,t,n,s);const i=B(),a={id:st++,nodeId:V(t),level:e,descr:V(n),type:s,children:[],width:B().mindmap.maxNodeWidth};switch(a.type){case f.ROUNDED_RECT:a.padding=2*i.mindmap.padding;break;case f.RECT:a.padding=2*i.mindmap.padding;break;case f.HEXAGON:a.padding=2*i.mindmap.padding;break;default:a.padding=i.mindmap.padding}const u=kt(e);if(u)u.children.push(a),N.push(a);else if(N.length===0)N.push(a);else{let d=new Error('There can be only one root. No parent could be found for ("'+a.descr+'")');throw d.hash={text:"branch "+name,token:"branch "+name,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+name+'"']},d}},f={DEFAULT:0,NO_BORDER:0,ROUNDED_RECT:1,RECT:2,CIRCLE:3,CLOUD:4,BANG:5,HEXAGON:6},Dt=(e,t)=>{switch(I.debug("In get type",e,t),e){case"[":return f.RECT;case"(":return t===")"?f.ROUNDED_RECT:f.CLOUD;case"((":return f.CIRCLE;case")":return f.CLOUD;case"))":return f.BANG;case"{{":return f.HEXAGON;default:return f.DEFAULT}},rt=(e,t)=>{Q[e]=t},Lt=e=>{const t=N[N.length-1];e&&e.icon&&(t.icon=V(e.icon)),e&&e.class&&(t.class=V(e.class))},C=e=>{switch(e){case f.DEFAULT:return"no-border";case f.RECT:return"rect";case f.ROUNDED_RECT:return"rounded-rect";case f.CIRCLE:return"circle";case f.CLOUD:return"cloud";case f.BANG:return"bang";case f.HEXAGON:return"hexgon";default:return"no-border"}};let at;const wt=e=>{at=e},Ot=()=>I,vt=e=>N[e],J=e=>Q[e],It=Object.freeze(Object.defineProperty({__proto__:null,addNode:St,clear:xt,decorateNode:Lt,getElementById:J,getLogger:Ot,getMindmap:Nt,getNodeById:vt,getType:Dt,nodeType:f,get parseError(){return at},sanitizeText:V,setElementForId:rt,setErrorHandler:wt,type2Str:C},Symbol.toStringTag,{value:"Module"})),ot=12;function Ct(e,t){e.each(function(){var n=P(this),s=n.text().split(/(\s+|<br>)/).reverse(),i,a=[],u=1.1,d=n.attr("y"),g=parseFloat(n.attr("dy")),b=n.text(null).append("tspan").attr("x",0).attr("y",d).attr("dy",g+"em");for(let E=0;E<s.length;E++)i=s[s.length-1-E],a.push(i),b.text(a.join(" ").trim()),(b.node().getComputedTextLength()>t||i==="<br>")&&(a.pop(),b.text(a.join(" ").trim()),i==="<br>"?a=[""]:a=[i],b=n.append("tspan").attr("x",0).attr("y",d).attr("dy",u+"em").text(i))})}const Tt=function(e,t,n){e.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+C(t.type)).attr("d",`M0 ${t.height-5} v${-t.height+2*5} q0,-5 5,-5 h${t.width-2*5} q5,0 5,5 v${t.height-5} H0 Z`),e.append("line").attr("class","node-line-"+n).attr("x1",0).attr("y1",t.height).attr("x2",t.width).attr("y2",t.height)},At=function(e,t){e.append("rect").attr("id","node-"+t.id).attr("class","node-bkg node-"+C(t.type)).attr("height",t.height).attr("width",t.width)},Rt=function(e,t){const n=t.width,s=t.height,i=.15*n,a=.25*n,u=.35*n,d=.2*n;e.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+C(t.type)).attr("d",`M0 0 a${i},${i} 0 0,1 ${n*.25},${-1*n*.1}
      a${u},${u} 1 0,1 ${n*.4},${-1*n*.1}
      a${a},${a} 1 0,1 ${n*.35},${1*n*.2}

      a${i},${i} 1 0,1 ${n*.15},${1*s*.35}
      a${d},${d} 1 0,1 ${-1*n*.15},${1*s*.65}

      a${a},${i} 1 0,1 ${-1*n*.25},${n*.15}
      a${u},${u} 1 0,1 ${-1*n*.5},${0}
      a${i},${i} 1 0,1 ${-1*n*.25},${-1*n*.15}

      a${i},${i} 1 0,1 ${-1*n*.1},${-1*s*.35}
      a${d},${d} 1 0,1 ${n*.1},${-1*s*.65}

    H0 V0 Z`)},Mt=function(e,t){const n=t.width,s=t.height,i=.15*n;e.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+C(t.type)).attr("d",`M0 0 a${i},${i} 1 0,0 ${n*.25},${-1*s*.1}
      a${i},${i} 1 0,0 ${n*.25},${0}
      a${i},${i} 1 0,0 ${n*.25},${0}
      a${i},${i} 1 0,0 ${n*.25},${1*s*.1}

      a${i},${i} 1 0,0 ${n*.15},${1*s*.33}
      a${i*.8},${i*.8} 1 0,0 ${0},${1*s*.34}
      a${i},${i} 1 0,0 ${-1*n*.15},${1*s*.33}

      a${i},${i} 1 0,0 ${-1*n*.25},${s*.15}
      a${i},${i} 1 0,0 ${-1*n*.25},${0}
      a${i},${i} 1 0,0 ${-1*n*.25},${0}
      a${i},${i} 1 0,0 ${-1*n*.25},${-1*s*.15}

      a${i},${i} 1 0,0 ${-1*n*.1},${-1*s*.33}
      a${i*.8},${i*.8} 1 0,0 ${0},${-1*s*.34}
      a${i},${i} 1 0,0 ${n*.1},${-1*s*.33}

    H0 V0 Z`)},Pt=function(e,t){e.append("circle").attr("id","node-"+t.id).attr("class","node-bkg node-"+C(t.type)).attr("r",t.width/2)};function Bt(e,t,n,s,i){return e.insert("polygon",":first-child").attr("points",s.map(function(a){return a.x+","+a.y}).join(" ")).attr("transform","translate("+(i.width-t)/2+", "+n+")")}const Vt=function(e,t){const n=t.height,i=n/4,a=t.width-t.padding+2*i,u=[{x:i,y:0},{x:a-i,y:0},{x:a,y:-n/2},{x:a-i,y:-n},{x:i,y:-n},{x:0,y:-n/2}];Bt(e,a,n,u,t)},Ft=function(e,t){e.append("rect").attr("id","node-"+t.id).attr("class","node-bkg node-"+C(t.type)).attr("height",t.height).attr("rx",t.padding).attr("ry",t.padding).attr("width",t.width)},Ut=function(e,t,n,s){const i=n%(ot-1),a=e.append("g");t.section=i;let u="section-"+i;i<0&&(u+=" section-root"),a.attr("class",(t.class?t.class+" ":"")+"mindmap-node "+u);const d=a.append("g"),g=a.append("g"),E=g.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(Ct,t.width).node().getBBox(),x=s.fontSize.replace?s.fontSize.replace("px",""):s.fontSize;if(t.height=E.height+x*1.1*.5+t.padding,t.width=E.width+2*t.padding,t.icon)if(t.type===f.CIRCLE)t.height+=50,t.width+=50,a.append("foreignObject").attr("height","50px").attr("width",t.width).attr("style","text-align: center;").append("div").attr("class","icon-container").append("i").attr("class","node-icon-"+i+" "+t.icon),g.attr("transform","translate("+t.width/2+", "+(t.height/2-1.5*t.padding)+")");else{t.width+=50;const y=t.height;t.height=Math.max(y,60);const w=Math.abs(t.height-y);a.append("foreignObject").attr("width","60px").attr("height",t.height).attr("style","text-align: center;margin-top:"+w/2+"px;").append("div").attr("class","icon-container").append("i").attr("class","node-icon-"+i+" "+t.icon),g.attr("transform","translate("+(25+t.width/2)+", "+(w/2+t.padding/2)+")")}else g.attr("transform","translate("+t.width/2+", "+t.padding/2+")");switch(t.type){case f.DEFAULT:Tt(d,t,i);break;case f.ROUNDED_RECT:Ft(d,t);break;case f.RECT:At(d,t);break;case f.CIRCLE:d.attr("transform","translate("+t.width/2+", "+ +t.height/2+")"),Pt(d,t);break;case f.CLOUD:Rt(d,t);break;case f.BANG:Mt(d,t);break;case f.HEXAGON:Vt(d,t);break}return rt(t.id,a),t.height},jt=function(t,n,s,i,a){const u=a%(ot-1),d=s.x+s.width/2,g=s.y+s.height/2,b=n.x+n.width/2,E=n.y+n.height/2,x=b>d?d+Math.abs(d-b)/2:d-Math.abs(d-b)/2,y=E>g?g+Math.abs(g-E)/2:g-Math.abs(g-E)/2,w=b>d?Math.abs(d-x)/2+d:-Math.abs(d-x)/2+d,A=E>g?Math.abs(g-y)/2+g:-Math.abs(g-y)/2+g;t.append("path").attr("d",s.direction==="TB"||s.direction==="BT"?`M${d},${g} Q${d},${A} ${x},${y} T${b},${E}`:`M${d},${g} Q${w},${g} ${x},${y} T${b},${E}`).attr("class","edge section-edge-"+u+" edge-depth-"+i)},Ht=function(e){const t=J(e.id),n=e.x||0,s=e.y||0;t.attr("transform","translate("+n+","+s+")")},ct={drawNode:Ut,positionNode:Ht,drawEdge:jt};let H;function lt(e,t,n,s){ct.drawNode(e,t,n,s),t.children&&t.children.forEach((i,a)=>{lt(e,i,n<0?a:n,s)})}function zt(e,t){t.edges().map((n,s)=>{const i=n.data();if(n[0]._private.bodyBounds){const a=n[0]._private.rscratch;I.trace("Edge: ",s,i),e.insert("path").attr("d",`M ${a.startX},${a.startY} L ${a.midX},${a.midY} L${a.endX},${a.endY} `).attr("class","edge section-edge-"+i.section+" edge-depth-"+i.depth)}})}function ht(e,t,n,s){t.add({group:"nodes",data:{id:e.id,labelText:e.descr,height:e.height,width:e.width,level:s,nodeId:e.id,padding:e.padding,type:e.type},position:{x:e.x,y:e.y}}),e.children&&e.children.forEach(i=>{ht(i,t,n,s+1),t.add({group:"edges",data:{id:`${e.id}_${i.id}`,source:e.id,target:i.id,depth:s,section:i.section}})})}async function Gt(e,t){if(!H){H=(await it(()=>import("./cytoscape.cjs-eab13da5.js").then(s=>s.c),["assets/cytoscape.cjs-eab13da5.js","assets/mermaid.core-d511990f.js","assets/app-7a8a6255.js","assets/framework-bb7be5cb.js"])).default;const n=(await it(()=>import("./cytoscape-cose-bilkent-b1df96af.js").then(s=>s.c),["assets/cytoscape-cose-bilkent-b1df96af.js","assets/mermaid.core-d511990f.js","assets/app-7a8a6255.js","assets/framework-bb7be5cb.js"])).default;H.use(n)}return new Promise(n=>{const s=P("body").append("div").attr("id","cy").attr("style","display:none"),i=H({container:document.getElementById("cy"),style:[{selector:"edge",style:{"curve-style":"bezier"}}]});s.remove(),ht(e,i,t,0),i.nodes().forEach(function(a){a.layoutDimensions=()=>{const u=a.data();return{w:u.width,h:u.height}}}),i.layout({name:"cose-bilkent",quality:"proof",styleEnabled:!1,animate:!1}).run(),i.ready(a=>{I.info("Ready",a),n(i)})})}function Xt(e){e.nodes().map((t,n)=>{const s=t.data();s.x=t.position().x,s.y=t.position().y,ct.positionNode(s);const i=J(s.nodeId);I.info("Id:",n,"Position: (",t.position().x,", ",t.position().y,")",s),i.attr("transform",`translate(${t.position().x-s.width/2}, ${t.position().y-s.height/2})`),i.attr("attr",`apa-${n})`)})}const Yt=async(e,t,n,s)=>{const i=B();s.db.clear(),s.parser.parse(e),I.debug(`Renering info diagram
`+e);const a=B().securityLevel;let u;a==="sandbox"&&(u=P("#i"+t));const g=(a==="sandbox"?P(u.nodes()[0].contentDocument.body):P("body")).select("#"+t);g.append("g");const b=s.db.getMindmap(),E=g.append("g");E.attr("class","mindmap-edges");const x=g.append("g");x.attr("class","mindmap-nodes"),lt(x,b,-1,i);const y=await Gt(b,i);zt(E,y),Xt(y),mt(void 0,g,i.mindmap.padding,i.mindmap.useMaxWidth)},qt={draw:Yt},Wt=e=>{let t="";for(let n=0;n<e.THEME_COLOR_LIMIT;n++)e["lineColor"+n]=e["lineColor"+n]||e["cScaleInv"+n],_t(e["lineColor"+n])?e["lineColor"+n]=Et(e["lineColor"+n],20):e["lineColor"+n]=bt(e["lineColor"+n],20);for(let n=0;n<e.THEME_COLOR_LIMIT;n++){const s=""+(17-3*n);t+=`
    .section-${n-1} rect, .section-${n-1} path, .section-${n-1} circle, .section-${n-1} polygon, .section-${n-1} path  {
      fill: ${e["cScale"+n]};
    }
    .section-${n-1} text {
     fill: ${e["cScaleLabel"+n]};
    }
    .node-icon-${n-1} {
      font-size: 40px;
      color: ${e["cScaleLabel"+n]};
    }
    .section-edge-${n-1}{
      stroke: ${e["cScale"+n]};
    }
    .edge-depth-${n-1}{
      stroke-width: ${s};
    }
    .section-${n-1} line {
      stroke: ${e["cScaleInv"+n]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return t},Zt=e=>`
  .edge {
    stroke-width: 3;
  }
  ${Wt(e)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${e.git0};
  }
  .section-root text {
    fill: ${e.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
`,Qt=Zt,ne={db:It,renderer:qt,parser:$t,styles:Qt};export{ne as diagram};
