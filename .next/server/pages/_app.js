(()=>{var e={};e.id=888,e.ids=[888],e.modules={6227:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var i=t(997),r=t(6689);t(9783),t(1759),t(2620),t(8628),t(3589),t(7600),t(7644),t(9984),t(8702),t(6050);var o=t(968),a=t.n(o);class n extends r.Component{constructor(e){super(e),this.state={is_visible:!1}}componentDidMount(){var e=this;document.addEventListener("scroll",function(s){e.toggleVisibility()})}toggleVisibility(){window.pageYOffset>300?this.setState({is_visible:!0}):this.setState({is_visible:!1})}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}render(){let{is_visible:e}=this.state;return(0,i.jsx)("div",{className:"scroll-to-top",children:e&&(0,i.jsxs)("div",{className:"top",onClick:()=>this.scrollToTop(),children:[(0,i.jsx)("i",{className:"fas fa-arrow-up"}),(0,i.jsx)("i",{className:"fas fa-arrow-up"})]})})}}function l({Component:e,pageProps:s}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,i.jsx)("title",{children:"Mergen Robotics"})]}),(0,i.jsx)(e,{...s}),(0,i.jsx)(n,{scrollStepInPx:"50",delayInMs:"10.50"})]})}},1759:()=>{},7600:()=>{},9984:()=>{},7644:()=>{},2620:()=>{},8628:()=>{},3589:()=>{},6050:()=>{},8702:()=>{},9783:e=>{"use strict";e.exports=require("aos")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")}};var s=require("../webpack-runtime.js");s.C(e);var t=s(s.s=6227);module.exports=t})();