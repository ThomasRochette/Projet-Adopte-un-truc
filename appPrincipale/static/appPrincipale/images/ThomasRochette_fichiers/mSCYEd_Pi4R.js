if (self.CavalryLogger) { CavalryLogger.start_js(["WlS6l"]); }

__d("FollowRequestResultEnum",[],(function a(b,c,d,e,f,g){f.exports={REVERT:"revert"};}),null);
__d("SeeFirstNuxEvents",[],(function a(b,c,d,e,f,g){f.exports={SWITCHER_NUX_IMP:"switcher_nux_imp",SEE_FIRST_SELECTED:"see_first_selected",XOUT:"xout",NOT_NOW:"not_now",IMP:"imp",ENTER_DIALOG:"enter_dialog",BATCH_SEE_FIRST_SELECTED:"batch_see_first_selected"};}),null);
__d("TimelineDOMID",[],(function a(b,c,d,e,f,g){f.exports={COMPOSER_CONTAINER:"timeline_composer_container",MEMORIES:"pagelet_timeline_memories",RECENT:"pagelet_timeline_recent",RECENT_CAPSULE_CONTAINER:"recent_capsule_container",STICKY_HEADER:"timeline_sticky_header",TAB_CONTENT:"timeline_tab_content",TAB_CONTENT_EXTRA:"timeline_tab_content_extra",UNDER_COMPOSER:"timeline_under_composer",SERP_ENTRY_POINT:"serp_entry_point",UNSEEN_STORIES_INDICATOR:"recent_unseen_stories_indicator",TIMELINE_SCHEDULED_POSTS:"timeline_scheduled_posts",FIG_COMPOSER:"profile_fig_composer",FIG_TIMELINE:"profile_fig_timeline",FIG_ESCAPE_HATCH:"profile_fig_escape_hatch",FIG_INFO_REVIEW:"profile_fig_info_review",FIG_INTRO_CARD:"profile_fig_intro_card",FIG_PROTILES:"profile_fig_protiles",FIG_ADS:"profile_fig_ads",PREFIX_MONTH_ALL:"pagelet_timeline_month_all_",PREFIX_YEAR:"pagelet_timeline_year_",PREFIX_FIG_PROTILES:"profile_fig_protiles_",SUFFIX_MORE_PAGER:"_more_pager"};}),null);
__d('ScrollColumn.react',['cx','invariant','joinClasses','throttle','tidyEvent','Arbiter','Event','React','ReactDOM','Vector','ViewportBounds'],(function a(b,c,d,e,f,g,h,i){var j=c('React').PropTypes,k='ScrollColumn/adjust',l=c('React').createClass({displayName:'ScrollColumn',propTypes:{left:j.string,topOffset:j.number,zIndex:j.number},getDefaultProps:function m(){return {left:'',topOffset:0,zIndex:0};},_scroll:0,_scrollDelta:0,getInitialState:function m(){return {fixed:null,fixedBottom:0,fixedTop:this.props.topOffset,top:0};},render:function m(){var n='auto',o=this.state.fixedLeft,p='auto';if(this.state.fixed==='bottom'){n=this.state.fixedBottom;}else if(this.state.fixed==='top'){p=this.state.fixedTop;}else{o='auto';p=this.state.top;}var q=c('joinClasses')(this.props.className,"_5ss7");return c('React').createElement('div',{className:q,ref:'container'},c('React').createElement('div',{className:"_5ss8"+(this.state.fixed?' '+"fixed_always":''),ref:'column',style:{bottom:n,left:o,top:p,zIndex:this.props.zIndex}},this.props.children));},componentDidMount:function m(){this.setState({adjustEventListener:c('tidyEvent')(c('Arbiter').subscribe(k,function(){this._adjust();}.bind(this))),resizeListener:c('tidyEvent')(c('Event').listen(window,'resize',c('throttle')(this._adjust))),scrollListener:c('tidyEvent')(c('Event').listen(window,'scroll',this._onScroll)),viewportBoundsUpdateListener:c('tidyEvent')(c('ViewportBounds').subscribe('change',this._adjust))});this._adjust();},componentDidUpdate:function m(n,o){if(o.fixed!==this.state.fixed)c('Arbiter').inform('reflow');},componentWillUnmount:function m(){this.state.adjustEventListener.unsubscribe();this.state.resizeListener.remove();this.state.scrollListener.remove();},_onScroll:function m(event){var n=c('Vector').getScrollPosition().y;this._scrollDelta=n-this._scroll;this._scroll=n;this._adjust();},_adjust:function m(){if(!this.isMounted())return;this._updateContainerHeight();this._updateColumnWidth();if(this._isContainerBelowViewportTop()){this._setNotFixed(0);return;}if(!this._isColumnLargerThanViewport()){this._setFixedToTop();return;}if(this._scrollDelta>0)if(this._isBottomOfColumnVisible()){this._setFixedToBottom();return;}if(this._scrollDelta<0)if(this._isTopOfColumnVisible()){this._setFixedToTop();return;}var n=this._getTopPositionForRef('column'),o=this._getTopPositionForRef('container'),p=n-o;this._setNotFixed(p);},_getTopPositionForRef:function m(n){var o=this.refs[n];o||i(0);var p=c('Vector').getElementPosition(c('ReactDOM').findDOMNode(o),'viewport').y;if(this._scroll<0)p+=this._scroll;return p;},_getTopBoundWithOffset:function m(){return c('ViewportBounds').getTop()+this.props.topOffset;},_isContainerBelowViewportTop:function m(){var n=this._getTopPositionForRef('container');return n>=this._getTopBoundWithOffset();},_isColumnLargerThanViewport:function m(){var n=c('Vector').getViewportDimensions().y-c('ViewportBounds').getBottom()-this._getTopBoundWithOffset();return c('ReactDOM').findDOMNode(this.refs.column).offsetHeight>n;},_isBottomOfColumnVisible:function m(){var n=this._getTopPositionForRef('column'),o=c('Vector').getElementDimensions(c('ReactDOM').findDOMNode(this.refs.column),'viewport').y,p=n+o;return p<=c('Vector').getViewportDimensions().y-c('ViewportBounds').getBottom();},_isTopOfColumnVisible:function m(){var n=this._getTopPositionForRef('column');return n>=this._getTopBoundWithOffset();},_getFixedLeft:function m(){return c('Vector').getElementPosition(c('ReactDOM').findDOMNode(this.refs.container),'viewport').x;},_setFixedToBottom:function m(){this.setState({fixed:'bottom',fixedBottom:c('ViewportBounds').getBottom(),fixedLeft:this.props.left===''?this._getFixedLeft():this.props.left});},_setFixedToTop:function m(){this.setState({fixed:'top',fixedLeft:this.props.left===''?this._getFixedLeft():this.props.left,fixedTop:this._getTopBoundWithOffset()});},_setNotFixed:function m(n){this.setState({fixed:false,top:n});},_updateContainerHeight:function m(){c('ReactDOM').findDOMNode(this.refs.container).style.height=c('ReactDOM').findDOMNode(this.refs.column).offsetHeight+this.state.top+'px';},_updateColumnWidth:function m(){c('ReactDOM').findDOMNode(this.refs.column).style.width=c('ReactDOM').findDOMNode(this.refs.container).offsetWidth+'px';}});l.EVENT_SHOULD_ADJUST=k;f.exports=l;}),null);
__d("XFollowPrivacyNuxLogViewAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/follow\/follow_privacy\/nux\/log\/view\/",{});}),null);
__d("XPubcontentChainedSuggestionsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pubcontent\/chained_suggestions\/",{pageid:{type:"String"},profileid:{type:"Int"},eh:{type:"Bool",defaultValue:false},friendid:{type:"Int"}});}),null);
__d('SubscribeButton',['Arbiter','AsyncRequest','Button','CSS','Event','TooltipData','XFollowPrivacyNuxLogViewAsyncController','XPubcontentChainedSuggestionsController'],(function a(b,c,d,e,f,g){var h={SUBSCRIBED:'FollowingUser',UNSUBSCRIBED:'UnfollowingUser',_enable:function i(j){c('Button').setEnabled(j,true);c('TooltipData').remove(j);},_disable:function i(j,k){c('Button').setEnabled(j,false);if(k)c('TooltipData').set(j,k);},init:function i(j,k,l,m,n,o,p,q,r,s,t,u){var v=!t,w=!(r===undefined||r===null);if(w&&!p&&!q)h._disable(k,r);c('Event').listen(k,'click',function(){c('Arbiter').inform(h.SUBSCRIBED,{profile_id:m,contextID:u,suppress:true});if(s){s.show();var x=c('XFollowPrivacyNuxLogViewAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))(x).send();}});c('Arbiter').subscribe(h.SUBSCRIBED,function(x,y){if(m==y.profile_id){if(!n)l.suppressNextMouseEnter&&l.suppressNextMouseEnter();if(w){if(typeof y.connected!=='undefined')p=y.connected;if(p||q)h._enable(k);}j.swap(v);if(o===true&&y.chaining!==false){var z=c('XPubcontentChainedSuggestionsController').getURIBuilder().setInt('profileid',m).getURI();new (c('AsyncRequest'))().setURI(z).send();}}});c('Arbiter').subscribe(h.UNSUBSCRIBED,function(x,y){if(m==y.profile_id){j.unswap(v);l.hideFlyout&&l.hideFlyout();if(w){if(typeof y.connected!=='undefined')p=y.connected;if(!p&&!q)h._disable(k,r);}c('Arbiter').inform('SubMenu/Reset');}});},initSubscribe:function i(j,k){c('Event').listen(j,'click',function(){setTimeout(c('Arbiter').inform.bind(c('Arbiter'),h.SUBSCRIBED,{profile_id:k}),0);});},initUnsubscribe:function i(j,k,l){c('Event').listen(j,'click',function(){setTimeout(c('Arbiter').inform.bind(c('Arbiter'),h.UNSUBSCRIBED,{profile_id:k,contextID:l}),0);});},initSubscribeMenuItem:function i(j,k,l){c('CSS').hide(k);this._initMenuItem(j,k,l);},initUnsubscribeMenuItem:function i(j,k,l){c('CSS').hide(j);this._initMenuItem(j,k,l);},_initMenuItem:function i(j,k,l){this.initSubscribe(j,l);this.initUnsubscribe(k,l);c('Arbiter').subscribe(h.SUBSCRIBED,function(m,n){c('CSS').hide(j);c('CSS').show(k);});c('Arbiter').subscribe(h.UNSUBSCRIBED,function(m,n){c('CSS').hide(k);c('CSS').show(j);});}};f.exports=h;}),null);
__d("XFeedSeeFirstNuxController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/feed\/control\/see_first\/nux\/",{});}),null);
__d('ProfileHoverButton',['csx','cx','Arbiter','AsyncRequest','CSS','DOM','Event','FeedBlacklistButton','FollowRequestResultEnum','MenuStaticItem','ProfileSubFollowStatus','Run','SeeFirstNuxEvents','SubscribeButton','SubscriptionsHandler','XFeedSeeFirstNuxController'],(function a(b,c,d,e,f,g,h,i){var j=1;function k(l,m,n,o){'use strict';this.$ProfileHoverButton1=l;this.$ProfileHoverButton2=m;this.$ProfileHoverButton3=o;this.$ProfileHoverButton4=n;this.$ProfileHoverButton5=null;this.$ProfileHoverButton6=new (c('SubscriptionsHandler'))();this.$ProfileHoverButton2.subscribe('itemclick',function(p,q){if(q.item instanceof c('MenuStaticItem'))return;var r=q.item.getValue();if(r==='unfollow'){c('Arbiter').inform(c('SubscribeButton').UNSUBSCRIBED,{profile_id:this.$ProfileHoverButton3.id});c('Arbiter').inform(c('FeedBlacklistButton').BLACKLIST,{profile_id:this.$ProfileHoverButton3.id});if(this.$ProfileHoverButton4)this.$ProfileHoverButton4.hide();}else{this.setSelected(r);if(r===c('ProfileSubFollowStatus').SEE_FIRST&&this.$ProfileHoverButton4){this.$ProfileHoverButton4.hide();this.logNux(c('SeeFirstNuxEvents').SEE_FIRST_SELECTED);}}}.bind(this));this.$ProfileHoverButton6.addSubscriptions(c('Arbiter').subscribe(c('SubscribeButton').SUBSCRIBED,this.setSelected.bind(this,c('ProfileSubFollowStatus').REGULAR_FOLLOW)));this.$ProfileHoverButton6.addSubscriptions(c('Arbiter').subscribe(c('FollowRequestResultEnum').REVERT,this.handleResponse.bind(this)));if(this.$ProfileHoverButton4){this.$ProfileHoverButton4.show();this.logNux(c('SeeFirstNuxEvents').IMP);this.$ProfileHoverButton6.addSubscriptions(c('Event').listen(c('DOM').find(this.$ProfileHoverButton4.getRoot(),"._50zy"),'click',this.logNux.bind(this,c('SeeFirstNuxEvents').XOUT)));}c('Run').onLeave(this.cleanUp.bind(this));}k.prototype.logNux=function(event){'use strict';var l=c('XFeedSeeFirstNuxController').getURIBuilder().getURI();new (c('AsyncRequest'))(l).setData({event:event,id:this.$ProfileHoverButton3.id}).send();};k.prototype.getButtons=function(){'use strict';return c('DOM').scry(this.$ProfileHoverButton1,"._3oz-");};k.prototype.getSelected=function(){'use strict';var l=this.getButtons(),m=null;l.forEach(function(n){var o=n.getAttribute('data-status');if(c('CSS').matchesSelector(n,"._52-0"))m=o;});return m;};k.prototype.setSelected=function(l){'use strict';this.$ProfileHoverButton5=this.getSelected();var m=this.getButtons();m.forEach(function(n){var o=n.getAttribute('data-status');if(o===l){c('CSS').addClass(n,"_52-0");}else c('CSS').removeClass(n,"_52-0");});this.$ProfileHoverButton2.forEachItem(function(n){if(!n.getValue)return;var o=n.getValue();if(o==='unfollow')return;var p=n.getRoot();if(o===l){c('CSS').addClass(p,"_52-0");}else c('CSS').removeClass(p,"_52-0");});};k.prototype.handleResponse=function(event,l){'use strict';if(l.id!==this.$ProfileHoverButton3.id||l.location!==j)return;if(event===c('FollowRequestResultEnum').REVERT)this.revert();};k.prototype.revert=function(){'use strict';if(this.$ProfileHoverButton5===null)return;this.setSelected(this.$ProfileHoverButton5);};k.prototype.cleanUp=function(){'use strict';this.$ProfileHoverButton6&&this.$ProfileHoverButton6.release();this.$ProfileHoverButton6=null;this.$ProfileHoverButton1=null;this.$ProfileHoverButton2=null;this.$ProfileHoverButton3=null;};f.exports=k;}),null);
__d('TidyArbiter',['TidyArbiterMixin'],(function a(b,c,d,e,f,g){var h=babelHelpers['extends']({},c('TidyArbiterMixin'));f.exports=h;}),null);
__d('TimelineCoverCollapse',['$','Arbiter','DOMDimensions','Style','TidyArbiter','getViewportDimensions'],(function a(b,c,d,e,f,g){g.collapse=function(h,i){i--;var j=c('getViewportDimensions')().height,k=c('DOMDimensions').getDocumentDimensions().height,l=j+i;if(k<=l)c('Style').set(c('$')('globalContainer'),'min-height',l+'px');window.scrollBy(0,i);c('TidyArbiter').inform('TimelineCover/coverCollapsed',i,c('Arbiter').BEHAVIOR_STATE);};}),null);
__d("XReactComposerQAndAAttachmentBootstrapController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/react_composer\/qanda\/bootstrap\/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"Int",required:true}});}),null);
__d('ReactComposerQAndALazyAttachment.react',['ReactComposerAttachmentType','ReactComposerBootloaderPropTypes','ReactComposerLoadableAttachmentBodyMixin','ActorURI','Bootloader','React','XReactComposerQAndAAttachmentBootstrapController'],(function a(b,c,d,e,f,g){var h=c('React').createClass({displayName:'ReactComposerQAndALazyAttachment',mixins:[c('ReactComposerLoadableAttachmentBodyMixin')],statics:{attachmentID:c('ReactComposerAttachmentType').QANDA},propTypes:{bootloader:c('ReactComposerBootloaderPropTypes')},bootload:function i(j){if(this.props.bootloader&&this.props.bootloader.qandaAttachment){this.props.bootloader.qandaAttachment(j);}else c('Bootloader').loadModules(["ReactComposerQAndAAttachmentContainer.react"],j,'ReactComposerQAndALazyAttachment.react');},getBootstrapURI:function i(){var j=c('XReactComposerQAndAAttachmentBootstrapController').getURIBuilder().setString('composer_id',this.context.composerID).setEnum('composer_type',this.context.composerType).setInt('target_id',this.context.targetID).getURI();return c('ActorURI').create(j,this.context.actorID);}});f.exports=h;}),null);
__d('FacebarPlaceholderShortcut',['KeyEventController','Run','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){'use strict';function h(i){this._input=i;this._listener=null;}h.prototype.enable=function(){this._registerListener();};h.prototype._registerListener=function(){this._listener&&this._listener.remove();this._listener=c('KeyEventController').registerKey('SLASH',this._handleKeydown.bind(this));c('Run').onLeave(function(){c('setTimeoutAcrossTransitions')(this._registerListener.bind(this),0);}.bind(this));};h.prototype.disable=function(){this._listener&&this._listener.remove();this._listener=null;};h.prototype._handleKeydown=function(i){this._input.focus();return false;};f.exports=h;}),null);
__d("XFacebarBootloadController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/typeahead\/search\/facebar\/bootload\/",{placeholder_id:{type:"String"}});}),null);
__d('FacebarBootloader',['AsyncRequest','BanzaiODS','CSS','Event','FacebarPlaceholderShortcut','Run','SubscriptionsHandler','XFacebarBootloadController','getActiveElement'],(function a(b,c,d,e,f,g){'use strict';var h='facebar_bootloader',i=h+'_',j={isRequested:false,isFocused:false,isInitialized:false,init:function k(l,m,n,o){this.reset();this.subscriptions=new (c('SubscriptionsHandler'))();this.placeholder=n;this.searchInput=l;this.shortcutHandler=new (c('FacebarPlaceholderShortcut'))(l);this.loadingIndicator=m;this.shortcutHandler.enable();this.subscriptions.addSubscriptions(c('Event').listen(l,'focus',function(){this.requestSearch();this.showLoadingIndicator();}.bind(this)),c('Event').listen(n,'mouseover',this.requestSearch.bind(this)));if(o)this.subscriptions.addSubscriptions(c('Event').listen(window,'load',this.requestSearch.bind(this)));c('Run').onUnload(this.reset.bind(this));this.isInitialized=true;if(l.value||c('getActiveElement')()==l){this.requestSearch();this.showLoadingIndicator();}},showLoadingIndicator:function k(){if(this.loadingIndicator)c('CSS').show(this.loadingIndicator);},reset:function k(){this.subscriptions&&this.subscriptions.release();this.shortcutHandler&&this.shortcutHandler.disable();this.searchInput=this.subscriptions=this.shortcutHandler=null;this.loadingIndicator=null;this.isRequested=false;this.isFocused=false;this.isInitialized=false;},requestSearch:function k(){if(c('getActiveElement')()==this.searchInput&&!this.isFocused){this.isFocused=true;this.focusTime=Date.now();}if(this.isRequested||!this.isInitialized)return;this.isRequested=true;var l=c('XFacebarBootloadController').getURIBuilder().setString('placeholder_id',this.placeholder.getAttribute('id')).getURI(),m=new (c('AsyncRequest'))();m.setURI(l).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setErrorHandler(function(n){c('BanzaiODS').bumpEntityKey(h,i+'request_failed');if(n&&n.errorSummary){c('BanzaiODS').bumpEntityKey(h,i+'request_failed_'+n.errorSummary);}else c('BanzaiODS').bumpEntityKey(h,i+'request_failed_no_error_summary');this.isRequested=false;}).send();},setFocus:function k(l,m,n){if(!this.searchInput)return;c('BanzaiODS').bumpEntityKey(h,i+'response_arrived');if(this.searchInput.value||this.isFocused){l.getCore().isFocused=true;l.getCore().input.setValue(n.fromString(this.searchInput.value),true);l.getCore().setStartTime(this.focusTime);m.focus();m.setSelection({length:this.searchInput.selectionEnd-this.searchInput.selectionStart,offset:this.searchInput.selectionStart});m.togglePlaceHolder&&m.togglePlaceholder();}this.reset();}};f.exports=j;}),null);
__d('FacebarStructuredFragment',[],(function a(b,c,d,e,f,g){'use strict';function h(k,l){if(k&&l){return k.toLowerCase()==l.toLowerCase();}else return !k&&!l;}var i=new RegExp('['+'\\u0590-\\u07bf'+'\\u08a0-\\u08ff'+'\\ufb1d-\\ufb4f'+'\\ufb50-\\ufefc'+'\\u200e-\\u200f\\u202a-\\u202e'+']');function j(k){this._text=String(k.text);this._uid=k.uid?String(k.uid):null;this._type=k.type?String(k.type):null;this._typeParts=null;this._isLocal=Boolean(k.isLocal);this._categoryName=k.categoryName?k.categoryName:null;}j.prototype.getText=function(){return this._text;};j.prototype.getUID=function(){return this._uid;};j.prototype.getType=function(){return this._type;};j.prototype.getTypePart=function(k){return this._getTypeParts()[k];};j.prototype.getLength=function(){return this._text.length;};j.prototype.isType=function(k){for(var l=0;l<arguments.length;l++)if(!h(arguments[l],this.getTypePart(l)))return false;return true;};j.prototype.isLocal=function(){return this._isLocal;};j.prototype.getCategoryName=function(){return this._categoryName;};j.prototype.isWhitespace=function(){return /^\s*$/.test(this._text);};j.prototype.hasRTL=function(){return i.test(this._text);};j.prototype.toStruct=function(){return {text:this._text,type:this._type,uid:this._uid,isLocal:this._isLocal,categoryName:this._categoryName};};j.prototype.getHash=function(k){var l=k!=null?this._getTypeParts().slice(0,k).join(':'):this._type;return String(l)+'::'+this._text;};j.prototype._getTypeParts=function(){var k=this._typeParts;if(k==null){k=this._type!=null?this._type.split(':'):[];this._typeParts=k;}return k;};f.exports=j;}),null);
__d('FacebarStructuredText',['createArrayFromMixed','FacebarStructuredFragment'],(function a(b,c,d,e,f,g){'use strict';var h=/\s+$/;function i(m){if(!m){return [];}else if(m instanceof l){return m.toArray();}else return c('createArrayFromMixed')(m).map(function(n){return new (c('FacebarStructuredFragment'))(n);});}function j(m){return new (c('FacebarStructuredFragment'))({text:m,type:'text'});}function k(m,n,o){var p=m.getText(),q=p.replace(n,o);if(p!=q){return new (c('FacebarStructuredFragment'))({text:q,type:m.getType(),uid:m.getUID()});}else return m;}function l(m){this._fragments=m||[];this._hash=null;}l.prototype.matches=function(m,n){if(m){var o=this._fragments,p=m._fragments;return o.length==p.length&&!o.some(function(q,r){var s=void 0;if(!n&&q.getUID()){s=q.getUID()!=p[r].getUID();}else s=q.getText()!=p[r].getText()||q.getType()!=p[r].getType();return s||q.isLocal()!=p[r].isLocal();});}return false;};l.prototype.trim=function(){var m=null,n=null;this.forEach(function(p,q){if(!p.isWhitespace()){if(m===null)m=q;n=q;}});if(n!==null){var o=this._fragments.slice(m,n+1);o.push(k(o.pop(),h,''));return new l(o);}else return new l([]);};l.prototype.pad=function(){var m=this.getFragment(-1);if(m&&!h.test(m.getText())&&m.getText()!==''){return new l(this._fragments.concat(j(' ')));}else return this;};l.prototype.forEach=function(m){this._fragments.forEach(m);return this;};l.prototype.matchType=function(m){var n=null;for(var o=0;o<this._fragments.length;o++){var p=this._fragments[o],q=p.isType.apply(p,arguments);if(q&&!n){n=p;}else if(q||!p.isWhitespace())return null;}return n;};l.prototype.hasType=function(m){var n=arguments;return this._fragments.some(function(o){return !o.isWhitespace()&&o.isType.apply(o,n);});};l.prototype.isLocal=function(){return this._fragments.some(function(m){return m.isLocal();});};l.prototype.getCategoryName=function(){var m=this._fragments.filter(function(n){return n.getCategoryName();});if(m.length>0)return m[0].getCategoryName();return null;};l.prototype.endsOnType=function(m){var n=arguments,o=this._fragments[this._fragments.length-1];return !!o&&!o.isWhitespace()&&o.isType.apply(o,n);};l.prototype.isEmptyOrWhitespace=function(){return !this._fragments.some(function(m){return !m.isWhitespace();});};l.prototype.hasRTL=function(){return this._fragments.some(function(m){return m.hasRTL();});};l.prototype.isEmpty=function(){return this.getLength()===0;};l.prototype.getFragment=function(m){return this._fragments[m>=0?m:this._fragments.length+m];};l.prototype.getCount=function(){return this._fragments.length;};l.prototype.getLength=function(){return this._fragments.reduce(function(m,n){return m+n.getLength();},0);};l.prototype.toStruct=function(){return this._fragments.map(function(m){return m.toStruct();});};l.prototype.toArray=function(){return this._fragments.slice();};l.prototype.toString=function(){return this._fragments.map(function(m){return m.getText();}).join('');};l.prototype.getHash=function(){if(this._hash===null)this._hash=this._fragments.map(function(m){if(m.getUID()){return '[['+m.getHash(1)+']]';}else return m.getText();}).join('');return this._hash;};l.fromStruct=function(m){return new l(i(m));};l.fromString=function(m){return new l([j(m.toString())]);};f.exports=l;}),null);
__d('FacebarNavigation',['csx','Arbiter','DOMQuery','FacebarBootloader','FacebarStructuredText','Input','QueryHistory','URI'],(function a(b,c,d,e,f,g,h){'use strict';var i=null,j=null,k=null,l=false,m=true,n=false;function o(r,s){if(!n)k=r;n=false;l=s;m=false;p();}function p(){if(m){return;}else if(j){l&&j.pageTransition();j.setPageQuery(k);m=true;}else if(i&&k&&!c('Input').getValue(i))c('Input').setValue(i,k.structure.toString()+' ');i&&i.blur();}c('Arbiter').subscribe('page_transition',function(r,s){if(!q.isTopControlTransition(s.uri)&&!q.isTimelineAbout(s.uri))o(c('QueryHistory').get(s.uri),true);});c('Arbiter').subscribe('save_facebar_query',function(r,s){n=true;});var q={registerInput:function r(s){i=c('DOMQuery').scry(s,"._586f")[0];if(i==null)i=c('DOMQuery').scry(s,"._1frb")[0];p();},registerBehavior:function r(s){j=s;p();},setPageQuery:function r(s){c('QueryHistory').set(c('URI').getNextURI(),s);if(!(s.structure instanceof c('FacebarStructuredText')))s.structure=c('FacebarStructuredText').fromStruct(s.structure);o(s,false);c('FacebarBootloader').requestSearch();},isTopControlTransition:function r(s){return String(s.getPath()).startsWith('/search/')&&s.getQueryData().ref==='top_filter'&&!s.getQueryData().hard_refresh;},isTimelineAbout:function r(s){return /\/about$/.test(s.getPath())&&!s.getQueryData().hard_refresh;}};f.exports=q;}),null);
__d('ScrollColumnRenderer',['DOMContainer.react','React','ReactRenderer','ScrollColumn.react'],(function a(b,c,d,e,f,g){var h={init:function i(j,k,l){c('ReactRenderer').constructAndRenderComponentAcrossTransitions(c('ScrollColumn.react'),babelHelpers['extends']({children:[c('React').createElement(c('DOMContainer.react'),{key:'content'},j)]},l),k);}};f.exports=h;}),null);
__d('NodeHighlighter',['DOM','TokenizeUtil','concatMap','escapeRegex','getElementText','isTextNode'],(function a(b,c,d,e,f,g){var h={};function i(l,m){var n=c('getElementText')(l).split(m),o=n.map(function(p){if(m.test(p))return j(p);return p||'';});return n.length>1?o:null;}function j(l){var m=c('DOM').create('span',{'class':'highlightNode',className:'highlightNode'},l);return m;}var k={getTextNodes:function l(m){if(this.isLeafNode(m)||this.isStopNode(m)){return m;}else if(this.isDiscardNode(m))return [];return c('concatMap')(this.getTextNodes.bind(this),Array.from(m.childNodes));},getHighlightCandidates:function l(){return [];},isLeafNode:function l(m){return c('isTextNode')(m);},isStopNode:function l(m){return false;},isDiscardNode:function l(m){return false;},createSegmentedRegex:function l(m){var n=c('TokenizeUtil').getPunctuation();m=this.escapeAndAddBidirectionalCharsToTokens(m);m=m.map(function(o){o=o.split(/\s+/).join('(?:'+n+'|\\s)+');return o;});return '(^|\\s|'+n+')('+m.join('|')+')(?=(?:$|\\s|'+n+'))';},createNonSegmentedRegex:function l(m){return '('+m.map(c('escapeRegex')).join('|')+')';},escapeAndAddBidirectionalCharsToTokens:function l(m){var n='[\\u200E\\u200F\\u202A\\u202B\\u202C\\u202D\\u202E]*';return m.map(function(o){return n+String(o).split('').map(c('escapeRegex')).join(n)+n;});},createRegex:function l(m){m=m.filter(function(t){return t;});if(!m||m.length===0)return new RegExp(null);var n=m.join('|');if(h[n])return h[n];var o=/[\u0E00-\u109F\u2000-\uFFFF]/,p=[],q=[];m.forEach(function(t){if(o.test(t)){q.push(t);}else p.push(t);});var r='';if(p.length){r+=this.createSegmentedRegex(p);r+=q.length?'|':'';}if(q.length)r+=this.createNonSegmentedRegex(q);var s=new RegExp(r,'i');h[n]=s;return s;},searchNodes:function l(m,n){return c('DOM').scry(m,n);},highlight:function l(m,n){n=n.filter(function(q){return q;});if(!n||n.length===0||!m)return;var o=c('concatMap')(function(q){return c('concatMap')(this.getTextNodes.bind(this),this.searchNodes(m,q));}.bind(this),this.getHighlightCandidates()),p=this.createRegex(n);o.forEach(function(q){var r=i(q,p);if(r)if(this.isStopNode(q)){c('DOM').setContent(q,r);}else c('DOM').replace(q,r);}.bind(this));}};f.exports=k;}),null);