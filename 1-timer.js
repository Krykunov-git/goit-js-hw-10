import"./assets/styles-DDsP3VHK.js";import{f as m,i as a}from"./assets/vendor-BbbuE1sJ.js";import{i as p}from"./assets/bi_x-octagon-C0okTuqm.js";let o=null;const n=document.querySelector("button[data-start]"),c=document.querySelector("#datetime-picker"),f=document.querySelector(".value[data-days]"),b=document.querySelector(".value[data-hours]"),S=document.querySelector(".value[data-minutes]"),v=document.querySelector(".value[data-seconds]"),k={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,locale:{firstDayOfWeek:1},onClose(s){o=s[0],o<=Date.now()?(a.show({theme:"dark",iconUrl:p,backgroundColor:"#EF4040",title:"Error",titleSize:"16px",titleLineHeight:"150%",message:"Illegal operation",messageSize:"16px",messageLineHeight:"150%",position:"topRight"}),n.disabled="disabled"):(a.destroy(),n.disabled="")}};m(c,k);class y{constructor({onTick:t,btn:e,input:i}){this.onTick=t,this.btn=e,this.input=i,this.init()}init(){this.isActive=!1,this.intervalId=null;const t=this.convertMs(0);this.onTick(t),this.elementSetDisable(this.btn,!0),this.elementSetDisable(this.input,!1)}start(){this.isActive||(this.isActive=!0,this.elementSetDisable(this.btn,!0),this.elementSetDisable(this.input,!0),this.intervalId=setInterval(()=>{const t=Date.now(),e=o-t,i=this.convertMs(e);e<1e3&&(this.stop(),this.init()),this.onTick(i)},1e3))}stop(){clearInterval(this.intervalId)}convertMs(t){const l=this.pad(Math.floor(t/864e5)),d=this.pad(Math.floor(t%864e5/36e5)),u=this.pad(Math.floor(t%864e5%36e5/6e4)),h=this.pad(Math.floor(t%864e5%36e5%6e4/1e3));return{days:l,hours:d,minutes:u,seconds:h}}pad(t){return String(t).padStart(2,"0")}elementSetDisable(t,e){t.disabled=e?"disabled":""}}const r=new y({onTick:D,btn:n,input:c});n.addEventListener("click",r.start.bind(r));function D({days:s,hours:t,minutes:e,seconds:i}){f.textContent=`${s}`,b.textContent=`${t}`,S.textContent=`${e}`,v.textContent=`${i}`}
//# sourceMappingURL=1-timer.js.map