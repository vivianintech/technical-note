### How to get JWT

#### Solution 1 - Inspect the page

- Open dev tool > Application > Local Storage > you will see jwt on the right hand list

#### Solution 2 - Use Redux tools

- Install Redux tool in your browser
- From the tool, jwt usually locates in the State tab

#### Solution 3 - Handy bookmark

- Create a bookmark, edit it and paste the following:

---

javascript:(()=>{var o={},d=document,b=d.body;o.n=d.createElement('div');var ls=localStorage; l='LOCAL\_', s=o.n.style;s.padding='20px';s.wordWrap='break-word';s.position='absolute';s.left='0';s.top='0';s.right='0';s.bottom='0';s.background='rgba(0,0,0,0.8)';s.color='white';s.zIndex=1000000;o.j=ls.jwt||'';o.i=ls.getItem('active-instance')||'';o.d=ls.getItem('active-instance-domain')||'';o.u=ls.uuid||'';o.b = d.createElement('button');o.b.style.color='black';o.b.innerHTML='close';o.n.innerHTML=`${l}JWT=${o.j}<br/>${l}PORTAL_ID=${o.i}<br/>${l}PORTAL_NAME=${o.d}<br/>${l}UUID=${o.u}<br/><br/>`;o.n.appendChild(o.b);b.appendChild(o.n);o.b.onclick=()=>b.removeChild(o.n);})();

---

- Once you enter the portal and select the bookmark, you should be able to see the jwt
