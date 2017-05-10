if (self.CavalryLogger) { CavalryLogger.start_js(["N9GWV"]); }

__d('BrowseClientEventLogger',['Banzai','SearchLoggingOptions'],(function a(b,c,d,e,f,g){'use strict';var h='browse_client_event_session',i='search_www_click_error',j='21.',k={logData:function l(event,m,n){var o=arguments.length<=3||arguments[3]===undefined?{}:arguments[3];if(!event||!m)return;o.event=event;o.client_time=Math.floor(Date.now());o.client_time_2=Date.now()/1000;o.session_id=m;o.vertical=n;this.processedSessions=this.processedSessions||[];if(this.processedSessions.indexOf(m)!==-1)return;var p=o.event==='click'&&o.clicked_href!=null&&c('SearchLoggingOptions').signalLinkClicks;c('Banzai').post(h,[o],{delay:0,retry:true,signal:p});},logClick:function l(m){m.gt.event='click';this.maybeLogVisiblityEvent(m,true);},maybeLogClientViewEvent:function l(m){m.event='client_view';this.maybeLogVisiblityEvent(m);},maybeLogVisiblityEvent:function l(m){var n=arguments.length<=1||arguments[1]===undefined?false:arguments[1],o=null;if(n){o=m;m=m.gt;}if(!m||!m.xt||m.xt.indexOf(j)!==0){if(n)c('Banzai').post(i,[o],{delay:0,retry:true});return;}var p=JSON.parse(m.xt.substring(3));if(n){p.click_type=m.click_type;p.tn=m.tn;p.clicked_href=m.clicked_href;}var event=m.event;if(event==='vpvd'){if(!m.ft)return;p.vpvd_time=m.ft.vpvd_time_delta;}this.logData(event,p.session_id,p.vertical,p);},logImpression:function l(m){m.event='impression';this.maybeLogVisiblityEvent(m);}};f.exports=k;}),null);
__d("XBrowseLoggerController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/browse\/logger\/",{data:{type:"HackType",required:true}});}),null);
__d('BrowseLogger',['AsyncRequest','Banzai','mapObject','Run','XBrowseLoggerController'],(function a(b,c,d,e,f,g){var h='browse',i='browse_aggr',j=null,k={},l={},m=function v(w){if(w==null)return 'undefined';var x=w.tagName.toLowerCase(),y=w.id,z=w.className;if(y)x+='#'+y;if(z)x+='.'+z;return x;};function n(){j=null;k={};l={};}function o(v){return Object.assign(v,{clientSessionID:j});}function p(v){c('Banzai').post(h,o(v));}function q(v){var w=c('XBrowseLoggerController').getURIBuilder().setHackType('data',o(v)).getURI();new (c('AsyncRequest'))().setURI(w).send();}function r(){if(j===null)return;l.aggregated=k;c('Banzai').post(i,o(l));n();}function s(v){k[v]=(k[v]||0)+1;}function t(v){Object.assign(l,v);}c('Run').onUnload(r);var u={newSession:function v(){r();j=Math.random().toString();if(!l.start_time)l.start_time=Math.round(Date.now()/1000);},logResultClick:function v(w,x,y,z,aa){var ba=arguments.length<=5||arguments[5]===undefined?null:arguments[5],ca={action:'result_click',click_type:w.ct||'result',section:w.section||'unknown',id:w.id||-1,path:w.path||'unknown',rank:w.rank||0,referrer:w.referrer||'unknown',result_type:w.result_type||'unknown',session_id:w.session_id||0,query_time:w.query_time||null,abtest_version:w.abtest_version||'NONE',abtest_params:w.abtest_params||null,typeahead_sid:w.typeahead_sid||'',source_module_role:w.source_module_role||'',result_title:w.result_title||'unknown',result_href:w.result_href||'unknown',result_semantic:w.result_semantic||'unknown',type:w.experience_type||'unknown',click_action:y||null,sub_id:w.sub_id||null,owner_id:w.owner_id||null,browse_location:w.browse_location||'unknown',query_data:w.query_data||'unknown',is_headline:w.is_headline||false,qid:x.qid||0,mf_story_key:x.mf_story_key||0,module:w.module||'NONE',view:w.view||null,clicked_href:aa||null,bt_key:ba};if(x.tn)ca.tn=x.tn;if(w.cst)ca.click_subtype=w.cst;s('result_click_'+ca.click_type);t({path:ca.path,referrer:ca.referrer,result_type:ca.result_type,session_id:ca.session_id,abtest_version:ca.abtest_version,abtest_params:ca.abtest_params,typeahead_sid:ca.typeahead_sid});if(ba){q(ca);}else p(ca);if(!w.id&&w.browse_location!=='browse_location:mf_trending'&&!ba)p({action:'logging_error',click_action:y,click_type:ca.click_type,attributes:JSON.stringify(w),element:c('mapObject')({srcElement:z.srcElement,target:z.target,toElement:z.toElement},m),event:{button:z.button,clientX:z.clientX,clientY:z.clientY,ctrlKey:z.ctrlKey,layerX:z.layerX,layerY:z.layerY,offsetX:z.offsetX,offsetY:z.offsetY,pageX:z.pageX,pageY:z.pageY,screenX:z.screenX,screenY:z.screenY,shiftKey:z.shiftKey,type:z.type,x:z.x,y:z.y}});},logControlsClick:function v(w,x){var y={action:'controls_click',click_type:x,path:w.path||'unknown',referrer:w.referrer||'unknown',session_id:w.session_id||0,query_time:w.query_time,filter_name:w.name||'unknown',typeahead_sid:w.typeahead_sid||'',result_type:w.result_type||'unknown',type:w.experience_type||'unknown'};if(w.cst)y.click_subtype=w.cst;s('controls_click_'+x);t({path:y.path,referrer:y.referrer,session_id:y.session_id,typeahead_sid:y.typeahead_sid});p(y);},logResultHover:function v(w,x){var y=arguments.length<=2||arguments[2]===undefined?null:arguments[2],z={action:'result_hover',id:w.id||0,path:w.path||'unknown',rank:w.rank||null,result_type:w.result_type||'unknown',session_id:w.session_id||0,query_time:w.query_time||null,time_elapsed:x||null,typeahead_sid:w.typeahead_sid||0,type:w.experience_type||'unknown',module:w.module||'NONE',view:w.view||null,bt_key:y};s('result_hover');t({path:z.path,session_id:z.session_id,typeahead_sid:z.typeahead_sid});if(y){q(z);}else p(z);},logScroll:function v(w,x,y,z){var aa={action:'scroll',encoded_query:w,fragments:x,position:y,session_id:z||0};p(aa);},logNUXStep:function v(w){var x={action:'nux_step',step:w};p(x);},logDisambiguationImpression:function v(w,x,y,z,aa){var ba={action:'disambiguation_imp',ids:z,name:w,path:y,type:x,typeahead_sid:aa};p(ba);},logDisambiguationClick:function v(w,x,y,z,aa,ba){var ca={action:'disambiguation_clk',id:aa,index:z,name:w,path:y,type:x,typeahead_sid:ba};p(ca);},logDYMLinkClick:function v(w,x,y,z){var aa={action:'dym_click',path:w.path||'unknown',referrer:w.referrer||'unknown',session_id:w.session_id||0,query_time:w.query_time,abtest_version:w.abtest_version||'NONE',abtest_params:w.abtest_params,typeahead_sid:w.typeahead_sid||'',type:w.experience_type||'unknown',click_action:y,sub_id:w.sub_id,owner_id:w.owner_id,browse_location:w.browse_location||'unknown',query_data:w.query_data||'unknown',module:w.module||'NONE',view:w.view,dym_confidence:w.dym_confidence||'NONE',dym_query:w.dym_query||'',dym_correction:w.dym_correction||'',dym_clicked:w.dym_clicked||''};p(aa);}};f.exports=u;}),null);
__d('BrowseClickLogger',['BrowseClientEventLogger','BrowseLogger','DOMQuery','Event','Parent','collectDataAttributes'],(function a(b,c,d,e,f,g){'use strict';function h(j,k){var l=j.target,m=c('collectDataAttributes')(l,['bt','ft','gt'],['data-bt-key']);if(m.bt&&m.bt.path)m.bt.path+=document.location.search;m.gt.tn=m.ft.tn;m.gt.click_type=m.bt.ct||'result';var n=c('Parent').byAttribute(l,'href'),o=n!=null?n.href:null;m.gt.clicked_href=o;c('BrowseClientEventLogger').logClick(m);if(c('DOMQuery').scry(l,'^.recourse-link').length>0){if(k==='left_click')c('BrowseLogger').logDYMLinkClick(m.bt,m.ft,k,j);}else c('BrowseLogger').logResultClick(m.bt,m.ft,k,j,o,m.normal['data-bt-key']);}var i={init:function j(k){c('Event').listen(k,'mousedown',function(l){var m=l.button===2||l.which===3?'right_click':'left_click';if(l.shiftKey)m+='_shift';if(l.altKey)m+='_alt';if(l.metaKey||l.ctrlKey)m+='_ctrl';h(l,m);}.bind(this));},logClick:h};f.exports=i;}),null);
__d("GamesGogglesSwitch",[],(function a(b,c,d,e,f,g){var h=false,i={enable:function j(){h=true;},isEnabled:function j(){return h;}};f.exports=i;}),null);
__d('VisibilityTrackingHelper',['Arbiter','DesktopHscrollUnitEventConstants','getViewportDimensions','Event'],(function a(b,c,d,e,f,g){var h={getEventListeners:function i(j){return [c('Event').listen(document,'DOMContentLoaded',j),c('Event').listen(window,'scroll',j),c('Event').listen(window,'resize',j),c('Arbiter').subscribe(c('DesktopHscrollUnitEventConstants').HSCROLL_ITEM_SHOWN_EVENT,j)];},getViewportInfo:function i(){return c('getViewportDimensions')();}};f.exports=h;}),null);
__d('VisibilityTracking',['Banzai','BrowseClientEventLogger','CommercialBreakMobileEvent','DataAttributeUtils','ErrorUtils','MarauderLogger','ScriptPath','SubscriptionsHandler','Visibility','VisibilityTrackingHelper','collectDataAttributes','getElementPosition','pageID','throttle'],(function a(b,c,d,e,f,g){var h='visibility_tracking',i='[data-vistracking]',j=500,k=50,l=50,m=50,n=50,o=0;function p(q){'use strict';q=q||{};if(!q.bypass_banzai_check&&!c('Banzai').isEnabled(h))return;this.visibleElementInfo={};this.getDataFromConfig(q);c('Visibility').addListener(c('Visibility').VISIBLE,c('ErrorUtils').guard(function(){return this.fireEvent('browser');}.bind(this),'VisibilityTracking:visible',this));c('Visibility').addListener(c('Visibility').HIDDEN,c('ErrorUtils').guard(function(){return this.clearAllVisibleElements('browser');}.bind(this),'VisibilityTracking:hidden',this));c('ScriptPath').subscribe(c('ErrorUtils').guard(function(){return this.updateVisibleElements();}.bind(this),'VisibilityTracking:scriptPath',this));c('Banzai').subscribe(c('Banzai').SHUTDOWN,c('ErrorUtils').guard(function(){return this.onUnload();}.bind(this),'VisibilityTracking:banzaiShutdown',this));this.fireEventCallback=c('throttle').acrossTransitions(c('ErrorUtils').guard(function(event){return this.fireEvent(event);}.bind(this),'VisibilityTracking:fireEventCallback',this),this.timeout,this);this.listeners=new (c('SubscriptionsHandler'))();c('VisibilityTrackingHelper').getEventListeners(function(){return this.fireEventCallback();}.bind(this)).forEach(function(r){this.listeners.addSubscriptions(r);},this);if(this.extraInit)c('ErrorUtils').applyWithGuard(this.extraInit.bind(this));}p.prototype.getDataFromConfig=function(q){'use strict';this.config=q;this.root=q.root||document.documentElement;this.selector=q.selector||i;this.timeout=typeof q.timeout!=='undefined'?q.timeout:j;this.minOffsetVisibleFromBottom=typeof q.minOffsetVisibleFromBottom!=='undefined'?q.minOffsetVisibleFromBottom:k;this.minOffsetVisibleFromTop=typeof q.minOffsetVisibleFromTop!=='undefined'?q.minOffsetVisibleFromTop:l;this.minOffsetVisibleFromLeft=typeof q.minOffsetVisibleFromLeft!=='undefined'?q.minOffsetVisibleFromLeft:m;this.minOffsetVisibleFromRight=typeof q.minOffsetVisibleFromRight!=='undefined'?q.minOffsetVisibleFromRight:n;this.handleAllHiddenEvents=typeof q.handleAllHiddenEvents!=='undefined'?q.handleAllHiddenEvents:false;this.handleAllVisibleEvents=typeof q.handleAllVisibleEvents!=='undefined'?q.handleAllVisibleEvents:false;this.cacheTrackedElements=typeof q.cacheTrackedElements!=='undefined'?q.cacheTrackedElements:false;};p.prototype.getAllTrackedElements=function(){'use strict';if(!this.allTrackedElements){this.allTrackedElements={};var q=[];if(this.config.is_xtrackable){q=c('DataAttributeUtils').getXTrackableElements();}else if(this.root.querySelectorAll)q=this.root.querySelectorAll(this.selector);for(var r=0;r<q.length;r++){var s=this.getElementID(q[r]);this.allTrackedElements[s]=q[r];}}return this.allTrackedElements;};p.prototype.refreshAllTrackedElements=function(){'use strict';delete this.allTrackedElements;return this.getAllTrackedElements();};p.prototype.getDataToLog=function(q){'use strict';var r=Object.assign(c('collectDataAttributes')(q,['gt']).gt,{client_time:Date.now()/1000,time_spent_id:c('pageID'),script_path:c('ScriptPath').getScriptPath()});return r;};p.prototype.getElementID=function(q){'use strict';var r=q.$VisibilityTracking1;if(r)return r;q.$VisibilityTracking1=++o;return o;};p.prototype.sendDataToLog=function(q){'use strict';c('BrowseClientEventLogger').maybeLogVisiblityEvent(q);c('Banzai').post(h,q);};p.prototype.handleInstreamLoggingEvent=function(q){'use strict';c('MarauderLogger').log(c('CommercialBreakMobileEvent').COMMERCIAL_BREAK_LOG_IMPRESSION_IN_TRACKER,'commercial_break');var r=this.getImpressionTracking(q);if(!r)return;r.logInstreamAdImpression();return;};p.prototype.isInstreamAdStoryElement=function(q){'use strict';return false;};p.prototype.fireEvent=function(){var q=arguments.length<=0||arguments[0]===undefined?'default':arguments[0];'use strict';if(q==='CommercialBreak/AdsLoaded')c('MarauderLogger').log(c('CommercialBreakMobileEvent').COMMERCIAL_BREAK_FIRE_EVENT_IN_TRACKER,'commercial_break');var r=this.cacheTrackedElements?this.allTrackedElements:this.refreshAllTrackedElements();for(var s in r){var t=r[s],u=c('VisibilityTrackingHelper').getViewportInfo(),v=this.isVisible(t,u);if(q==='CommercialBreak/AdsLoaded'&&this.config.forceInstreamLoggingOnPlay&&this.isInstreamAdStoryElement(t)){this.handleInstreamLoggingEvent(t);}else if(!v&&(s in this.visibleElementInfo||this.handleAllHiddenEvents)){this.handleEvent(t,{name:'hidden',cause:q});}else if(v&&(!(s in this.visibleElementInfo)||this.handleAllVisibleEvents))this.handleEvent(t,{name:'visible',cause:q});}this.clearUntrackedVisibleElements();};p.prototype.isVisible=function(q,r){'use strict';var s=c('getElementPosition')(q);return (s.x||s.y||s.width||s.height)&&s.y+s.height>=this.minOffsetVisibleFromTop&&s.y<=r.height-this.minOffsetVisibleFromBottom&&s.x+s.width>=this.minOffsetVisibleFromLeft&&s.x<=r.width-this.minOffsetVisibleFromRight;};p.prototype.handleEvent=function(q,event){'use strict';var r=this.getElementID(q),s=this.getDataToLog(q),t=void 0;if(event.name==='visible'){var u=Math.floor(Date.now()/1000);t=c('pageID').concat(':',u.toString(),':',this.getElementID(q).toString());this.visibleElementInfo[r]={visibility_id:t,elem:q};}else if(event.name==='hidden'){if(r in this.visibleElementInfo){t=this.visibleElementInfo[r].visibility_id;delete this.visibleElementInfo[r];}if(event.cause==='browser')return;}this.sendDataToLog(Object.assign(s,{event:event.name,visibility_id:t}));};p.prototype.clearUntrackedVisibleElements=function(){'use strict';var q=this.getAllTrackedElements();for(var r in this.visibleElementInfo)if(!(r in q)){var s=this.visibleElementInfo[r];if(s.elem)this.handleEvent(s.elem,{name:'hidden',cause:'removed'});}};p.prototype.clearAllVisibleElements=function(){var q=arguments.length<=0||arguments[0]===undefined?'default':arguments[0];'use strict';var r=this.getAllTrackedElements();for(var s in r)if(s in this.visibleElementInfo)this.handleEvent(r[s],{name:'hidden',cause:q});this.clearUntrackedVisibleElements();};p.prototype.updateVisibleElements=function(){'use strict';this.clearAllVisibleElements();this.fireEvent();};p.prototype.refreshAndFireEvent=function(event){'use strict';this.refreshAllTrackedElements();if(event==='CommercialBreak/AdsLoaded'&&this.config.forceInstreamLoggingOnPlay){this.fireEvent(event);return;}this.fireEventCallback(event);};p.prototype.onUnload=function(){'use strict';this.clearAllVisibleElements();if(this.listeners){this.listeners.release();this.listeners=null;}if(this.extraCleanup)c('ErrorUtils').applyWithGuard(this.extraCleanup.bind(this));};p.init=function(q){'use strict';return new p(q);};f.exports=p;}),null);
__d('GamesImpressionTracker',['cx','Arbiter','Banzai','Event','GamesGogglesSwitch','VisibilityTracking','throttle'],(function a(b,c,d,e,f,g,h){var i,j,k='data-gamesegoimp',l='data-gamesrankedimp',m=1000;function n(s){if(c('GamesGogglesSwitch').isEnabled())s.className=s.className+' '+"_1z5y";}function o(s){return function(){if(s){s();s=null;}};}i=babelHelpers.inherits(p,c('VisibilityTracking'));j=i&&i.prototype;p.prototype.handleEvent=function(s,event){'use strict';if(event.name==='visible'){var t=s.getAttribute(l);s.removeAttribute(l);if(t){n(s);t&&c('Banzai').post('games_ranked_imp',{data:t});}c('Event').listen(s,'mouseover',o(function(){c('Banzai').post('games_mouseover',{data:t});c('Event').listen(s,'mouseout',o(function(){c('Banzai').post('games_mouseout',{data:t});}));}));}};function p(){'use strict';i.apply(this,arguments);}var q=new p({selector:'[data-gamesrankedimp]',handleAllVisibleEvents:true,cacheTrackedElements:true}),r=c('throttle').acrossTransitions(function(){return q.fireEventCallback();},m,null);q.listeners.addSubscriptions(c('Event').listen(document,'mousemove',r),c('Event').listen(document,'click',r),c('Arbiter').subscribe('games_unit_loaded',function(){return q.refreshAllTrackedElements();}));}),null);