if (self.CavalryLogger) { CavalryLogger.start_js(["wprLl"]); }

__d("AdsCMURLValuesMap",[],(function a(b,c,d,e,f,g){f.exports={account_settings:"account_settings",ad_group:"ad",audiences:"audiences",billing:"billing",blocklists:"blocklists",campaign_group:"campaign",campaign:"adset",canvas_builder:"canvas_builder",creation:"creation",data_source:"data-sources","delivery-insights":"delivery-insights","custom-conversions":"custom-conversions",pixel:"pixel",account:"account",pages:"pages",pixel_detail:"pixel_detail",media:"media",data_set:"data_set",rules:"rules",notifications:"notifications",targeting_insights:"targeting-insights",account_attribution_spec:"account_attribution",account_billing_settings:"account_billing",account_information:"information",account_notifications:"notification_preferences",account_roles:"roles",account_page_settings:"account_pages",accounts:"accounts",ad_groups:"ads",audiences_manage:"manage",audience_detail_tab:"detail",blocklists_manager:"list",blocklist_detail_tab:"blocklist_detail",pixel_list_tab:"pixels",pixel_detail_tab:"detail",unified_pixel_tab:"facebook_pixel",conversion_list:"conversion_list",conversion_pixel_tab:"conversion_pixel",pixel_migration_tab:"pixel_migration",media_library_tab:"library",campaign_groups:"campaigns",campaigns:"adsets",account_history_tab:"history",campaign_group_history_tab:"history",campaign_history_tab:"history",adgroup_history_tab:"history",list_tab:"list",payment_methods:"payment_methods",rules_management_tab:"management",settings:"settings",spend_limit:"spend_limit",tracking_id:"reference_number",transactions:"transactions",transaction_details:"transaction_details",transactions_by_page:"transactions_by_page",table_overview:"table_overview",categories:"categories",markets:"markets",market_details:"market_details",targeting_insights_overview:"targeting_insights_overview"};}),null);
__d('AdsCarousel.react',['cx','Locale','React','ReactDOM','ResponsiveBlock.react','clamp','emptyFunction','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.state={computedOffset:0},this.$AdsCarousel5=function(r,s){this.$AdsCarousel1(this.props.index);}.bind(this),n;}l.prototype.componentDidMount=function(){this.$AdsCarousel1(this.props.index);};l.prototype.componentDidUpdate=function(){this.$AdsCarousel1(this.props.index);};l.prototype.$AdsCarousel1=function(m){if(!c('ReactDOM').findDOMNode(this))return;var n=c('ReactDOM').findDOMNode(this).offsetWidth,o=c('ReactDOM').findDOMNode(this.refs.inner).offsetWidth,p=Math.max(o-n,0),q=0;for(var r=0;r<m&&q<p;r++){var s=this.$AdsCarousel2(r);if(s)q+=s.offsetWidth;}q=c('clamp')(q,0,p);if(q!==this.state.computedOffset){this.setState({computedOffset:q});}else{var t=this.props.onUpdated;if(t)t(this.$AdsCarousel3());}};l.prototype.$AdsCarousel4=function(m){var n=0;for(var o=0;o<m;o++){var p=this.$AdsCarousel2(o);if(p)n+=p.offsetWidth;}return n;};l.prototype.$AdsCarousel2=function(m){var n=this.refs['child_'+m];return n?c('ReactDOM').findDOMNode(n):null;};l.prototype.render=function(){var m=c('React').Children.map(this.props.children,function(p,q){return c('React').createElement('div',{className:"_2zgz",ref:'child_'+q},p);}),n=null;if(this.state.computedOffset){var o=String(-this.state.computedOffset)+'px';n=c('Locale').isRTL()?{right:o}:{left:o};}return c('React').createElement(c('ResponsiveBlock.react'),{onResize:this.$AdsCarousel5},c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_a28")}),c('React').createElement('div',{className:"_a2e",ref:'inner',style:n},m)));};l.prototype.$AdsCarousel3=function(){var m=this.state.computedOffset+c('ReactDOM').findDOMNode(this).offsetWidth,n=this.$AdsCarousel4(this.props.index),o=0,p=this.props.index,q;while(q=this.$AdsCarousel2(p++))if(c('Locale').isRTL()){if(n+q.offsetWidth<=m){o++;n+=q.offsetWidth;}else break;}else if(q.offsetLeft+q.offsetWidth<=m){o++;}else break;return o;};l.propTypes={index:k.number.isRequired,onUpdated:k.func};l.defaultProps={onUpdated:c('emptyFunction')};f.exports=l;}),null);
__d('StarsInput.react',['cx','fbt','invariant','React','TooltipLink.react','joinClasses'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l,m={CUMULATIVE:'CUMULATIVE',SINGLE:'SINGLE'},n={STAR:'STAR',BOX:'BOX'};k=babelHelpers.inherits(o,c('React').Component);l=k&&k.prototype;function o(p){l.constructor.call(this,p);if(p.initialStars)Number.isInteger(p.initialStars)||j(0);this.state={starRating:p.initialStars!=undefined?p.initialStars:p.count,starsShown:p.initialStars!=undefined?p.initialStars:p.count,canUpdate:true};}o.prototype.onMouseEnter=function(p,event){if(this.state.canUpdate){this.setState({starsShown:p});this.props.onMouseEnter&&this.props.onMouseEnter(p);}};o.prototype.onMouseLeave=function(p,event){if(this.state.canUpdate){var q=this.state.starRating;this.setState({starsShown:q});this.props.onMouseLeave&&this.props.onMouseLeave(p);}};o.prototype.onClick=function(p,event){if(this.state.canUpdate){this.setState({starRating:p,starsShown:p,canUpdate:this.props.allowMultipleSubmissions});this.props.onClick(p);}};o.prototype.$StarsInput1=function(p,q,r){if(this.props.displayMode==m.SINGLE){return r?p+1==q:true;}else return r?p<q:p>=q;};o.prototype.$StarsInput2=function(p,q){var r="mls"+(' '+"_22mm")+(!this.state.canUpdate?' '+"_1g87":'');if(this.props.shape==n.BOX){var s="_5fx1"+(this.$StarsInput1(p,q,false)?' '+"_5fx2":'')+(this.$StarsInput1(p,q,true)?' '+"_5fx3":'');return c('joinClasses')(r,s);}else{var t=(this.props.large?"_1vr2":'')+(this.$StarsInput1(p,q,false)?' '+"_22mn":'')+(this.$StarsInput1(p,q,true)?' '+"_22mo":'');return c('joinClasses')(r,t);}};o.prototype.getStars=function(){if(!this.props.starLabels)return [];var p=this.props.starLabels.length,q=[],r=this.state.starsShown?this.state.starsShown:0;for(var s=0;s<p;s++){var t=s+1;q.push(c('React').createElement(c('TooltipLink.react'),{className:this.$StarsInput2(s,r),key:s,tooltip:this.props.starLabels&&this.props.starLabels[s],onMouseEnter:this.onMouseEnter.bind(this,t),onMouseLeave:this.onMouseLeave.bind(this,t),onClick:this.onClick.bind(this,t),position:'above',alignH:'center'}));}return q;};o.prototype.render=function(){return c('React').createElement('div',{className:this.props.className},this.getStars());};o.defaultProps={allowMultipleSubmissions:false,count:0,large:false,starLabels:[i._("Mauvais"),i._("Acceptable"),i._("Bon"),i._("Tr\u00e8s bon"),i._("Excellent")],displayMode:m.CUMULATIVE,shape:n.STAR,className:undefined,initialStars:undefined,onMouseEnter:undefined,onMouseLeave:undefined};f.exports=o;}),null);
__d('FBConfirmDialog.react',['fbt','React','XUIDialog.react','XUIDialogBody.react','XUIDialogFooter.react','XUIDialogButton.react','XUIDialogTitle.react'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$FBConfirmDialog1=function(){if(!this.props.shown)return null;return c('React').createElement('div',null,this.props.content);}.bind(this),this.$FBConfirmDialog2=function(){return c('React').createElement(c('XUIDialogButton.react'),{onClick:this.props.onCancel,label:this.props.cancelButtonText?this.props.cancelButtonText:h._("Annuler")});}.bind(this),this.$FBConfirmDialog3=function(){return c('React').createElement(c('XUIDialogButton.react'),{action:'confirm',use:'confirm',onClick:this.props.onConfirm,label:this.props.confirmButtonText?this.props.confirmButtonText:h._("Confirmer"),disabled:this.props.disableConfirmButton});}.bind(this),n;}l.prototype.render=function(){return c('React').createElement(c('XUIDialog.react'),babelHelpers['extends']({},this.props,{modal:true}),c('React').createElement(c('XUIDialogTitle.react'),null,this.props.title),c('React').createElement(c('XUIDialogBody.react'),null,this.$FBConfirmDialog1()),c('React').createElement(c('XUIDialogFooter.react'),null,this.$FBConfirmDialog2(),this.$FBConfirmDialog3()));};l.propTypes=babelHelpers['extends']({},c('XUIDialog.react').propTypes,{title:k.node.isRequired,content:k.node.isRequired,onCancel:k.func.isRequired,onConfirm:k.func.isRequired,cancelButtonText:k.node,confirmButtonText:k.node,disableConfirmButton:k.bool});l.defaultProps={width:400,disableConfirmButton:false};f.exports=l;}),null);
__d('SUIBusinessThemeContainer.react',['React','SUIBusinessTheme','SUIThemeContainer.react'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('React').PureComponent);i=h&&h.prototype;j.prototype.render=function(){return c('React').createElement(c('SUIThemeContainer.react'),{theme:c('SUIBusinessTheme')},this.props.children);};function j(){h.apply(this,arguments);}f.exports=j;}),null);
__d('PagesComposerBoostedPostsStore',['ReactComposerStoreBase','PagesComposerActionsTypes'],(function a(b,c,d,e,f,g){var h,i,j={boostedPostConfig:null};h=babelHelpers.inherits(k,c('ReactComposerStoreBase'));i=h&&h.prototype;function k(){'use strict';var l;i.constructor.call(this,function(){return Object.assign({},j);},function(m){switch(m.type){case c('PagesComposerActionsTypes').SET_BOOSTED_POST:if(l){var n=l.getComposerData(m.composerID);n.boostedPostConfig=m.data;}break;}});l=this;}k.prototype.getConfig=function(l){'use strict';return this.getComposerData(l).boostedPostConfig;};f.exports=new k();}),null);
__d('PagesComposerActions',['ReactComposerDispatcher','PagesComposerActionsTypes','PagesComposerBoostedPostsStore'],(function a(b,c,d,e,f,g){c('PagesComposerBoostedPostsStore');var h={setDraft:function i(j){c('ReactComposerDispatcher').dispatch({composerID:j,type:c('PagesComposerActionsTypes').SET_DRAFT});},schedule:function i(j,k,l){c('ReactComposerDispatcher').dispatch({composerID:j,type:c('PagesComposerActionsTypes').SCHEDULE,scheduleDate:k,stopFeedDistributionDate:l});},backdate:function i(j,k,l,m,n){c('ReactComposerDispatcher').dispatch({composerID:j,type:c('PagesComposerActionsTypes').BACKDATE,year:k,month:l,day:m,hideFromNewsFeed:n});},setAdsPost:function i(j){c('ReactComposerDispatcher').dispatch({composerID:j,type:c('PagesComposerActionsTypes').SET_ADS_POST});},setBoostedPost:function i(j,k){c('ReactComposerDispatcher').dispatch({composerID:j,type:c('PagesComposerActionsTypes').SET_BOOSTED_POST,data:k});},showOfferUpsell:function i(j,k){c('ReactComposerDispatcher').dispatch({composerID:j,config:k,type:c('PagesComposerActionsTypes').SHOW_OFFER_UPSELL});},abandonOfferUpsell:function i(j){c('ReactComposerDispatcher').dispatch({composerID:j,type:c('PagesComposerActionsTypes').ABANDON_OFFER_UPSELL});},setInstagramCrossPosting:function i(j,k){c('ReactComposerDispatcher').dispatch({composerID:j,enabled:k,type:c('PagesComposerActionsTypes').INSTAGRAM_CROSS_POSTING});}};f.exports=h;}),null);
__d('XUISubNavigationItem',['cx','Parent','URI','XUISubNavigationLoader'],(function a(b,c,d,e,f,g,h){var i="_2yaa";function j(k,l,m){'use strict';this.$XUISubNavigationItem3=k;this.$XUISubNavigationItem1=l;this.$XUISubNavigationItem2=m;c('XUISubNavigationLoader').registerHandler(function(n){return this.$XUISubNavigationItem4(n);}.bind(this));}j.prototype.$XUISubNavigationItem4=function(k){'use strict';if(c('Parent').byClass(this.$XUISubNavigationItem2.getTriggerElem(),i)!==this.$XUISubNavigationItem3)return false;var l=k.getPath(),m=null;this.$XUISubNavigationItem1.forEachItem(function(n){var o=n.getValue();if(o===l)m=o;});if(m){c('XUISubNavigationLoader').sendRequest(k,new (c('URI'))(m),this.$XUISubNavigationItem3);return true;}return false;};f.exports=j;}),null);
__d('ContextualLayerDynamicOffsetY',['ContextualLayerDimensions'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._layer=i;}h.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe('show',this._adjustOffset.bind(this));this._adjustOffset();};h.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;if(this._defaultOffsetY!==null){this._layer.setOffsetY(this._defaultOffsetY);this._defaultOffsetY=null;}};h.prototype._adjustOffset=function(i){'use strict';var j=this._layer.getOrientation();if(j.isVertical())return;if(this._defaultOffsetY===null)this._defaultOffsetY=j.getOffsetY();var k=c('ContextualLayerDimensions').getViewportRect(this._layer),l=k.b-k.t,m=c('ContextualLayerDimensions').getLayerRect(this._layer,j),n=j.getOffsetY()-this._defaultOffsetY,o=l-m.b;if(o>=0&&o>=-n){this._layer.setOffsetY(this._defaultOffsetY);}else this._layer.setOffsetY(j.getOffsetY()+o);};Object.assign(h.prototype,{_defaultOffsetY:null,_subscriptions:[]});f.exports=h;}),null);
__d('DialogExpansion',['Animation','DialogPosition','LoadingDialogDimensions','Style'],(function a(b,c,d,e,f,g){var h=400,i=100;function j(k){'use strict';this._dialog=k;this._fixedTopMargin=k.getFixedTopPosition();this._ignoreFixedTopInShortViewport=k.shouldIgnoreFixedTopInShortViewport();}j.prototype.enable=function(){'use strict';this._subscription=this._dialog.subscribe('aftershow',this._onAfterShow.bind(this));};j.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};j.prototype.setTargetWidth=function(k){'use strict';this._targetWidth=k;};j.prototype._onAfterShow=function(){'use strict';this._outer=this._dialog.getContentRoot();this._inner=this._dialog.getInnerContent();if(isNaN(parseInt(c('Style').get(this._inner,'height'),10)))return;var k=this._getWidth(),l=this._getHeight(),m=c('DialogPosition').calculateTopMargin(k,l);c('Style').apply(this._inner,{opacity:'0',width:this._dialog.getWidth()+'px'});c('Style').apply(this._outer,{width:k+'px',height:l+'px',marginTop:m+'px',overflow:'hidden'});setTimeout(function(){var n=parseInt(this._dialog.getWidth(),10);if(this._targetWidth)n=this._targetWidth;var o=parseInt(c('Style').get(this._inner,'height'),10),p=c('DialogPosition').calculateTopMargin(n,o,this._fixedTopMargin,this._ignoreFixedTopInShortViewport);this._growThenFade(n,o,p);}.bind(this),100);};j.prototype._growThenFade=function(k,l,m){'use strict';new (c('Animation'))(this._outer).to('width',k).to('height',l).to('marginTop',m).duration(h).ease(c('Animation').ease.both).ondone(this._fadeIn.bind(this)).go();};j.prototype._fadeIn=function(){'use strict';c('Style').set(this._outer,'overflow','');c('Style').set(this._outer,'height','');new (c('Animation'))(this._inner).from('opacity',0).to('opacity',1).ondone(function(){c('Style').set(this._inner,'width','');this._dialog.inform('afterexpand');}.bind(this)).duration(i).go();};j.prototype._getWidth=function(){'use strict';return c('LoadingDialogDimensions').WIDTH;};j.prototype._getHeight=function(){'use strict';return c('LoadingDialogDimensions').HEIGHT;};f.exports=j;}),null);
__d('groupArray',[],(function a(b,c,d,e,f,g){'use strict';function h(i,j){var k={};i.forEach(function(l,m){var n=j(l,m,i);if(!k[n])k[n]=[];k[n].push(l);});return k;}f.exports=h;}),null);