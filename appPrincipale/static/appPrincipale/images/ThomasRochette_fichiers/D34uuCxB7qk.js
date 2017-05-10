if (self.CavalryLogger) { CavalryLogger.start_js(["cWTNN"]); }

__d("CreditCardFormParam",[],(function a(b,c,d,e,f,g){f.exports={ACCOUNT_ID:"account_id",ACCOUNT_COUNTRY_CODE:"account_country_code",APP_ID:"app_id",CARD_EXPIRATION:"exp",CARD_FBID:"cc_fbid",CARD_ID:"cc_id",CARD_TYPE:"cardType",CITY:"city",CONTEXT_ID:"context_id",COUNTRY:"country",CSC_LENGTH:"csc_length",EMAIL:"email",FIRST_NAME:"firstName",TRACKING_ID:"tracking_id",JSFAIL_SOURCE:"jsfail_source",KEYPRESS_TIMES:"kpts",LAST_NAME:"lastName",MONTH:"month",STATE:"state",STREET:"street",STREET_2:"street2",VALIDATE_ADDRESS:"validate_address",VALIDATE_NAME:"validate_name",VALIDATE_ZIP:"validate_zip",YEAR:"year",ZIP:"zip",VALIDATOR_CHECKS:"checks",CARD_NUMBER:"creditCardNumber",CSC:"csc",CARD_NUMBER_FIRST_6:"creditCardNumber_first6",CARD_NUMBER_LAST_4:"creditCardNumber_last4",CARD_NUMBER_TOKEN:"creditCardNumber_token",CSC_TOKEN:"csc_token",AUTH_LEVEL_FLAG:"auth_level",AUTH_AMOUNT:"auth_amount",AUTH_CURRENCY:"auth_currency",AUTO_EXPAND_AUTH_LEVEL_FLAG:"auto_expand_auth_level",PAYMENT_ITEM_TYPE:"payment_item_type",COMBINED_PAYMENT_TYPE:"combined_payment_type",CREDENTIAL_ID:"credential_id",IS_STORED_BALANCE:"is_stored_balance",IS_CHECKOUT_ELIGIBLE:"is_checkout_eligible",CHECKOUT_SAVE_CC_WITH_AUTH:"checkout_save_cc_with_auth",FLOW_PLACEMENT:"flow_placement",FLOW_TYPE:"flow_type",STORED_BALANCE_STATUS:"stored_balance_status"};}),null);
__d("CreditCardTypeEnum",[],(function a(b,c,d,e,f,g){f.exports={VISA:86,MASTERCARD:77,DISCOVER:68,AMERICANEXPRESS:65,DINERSCLUB:64,JCB:74,CUP:80};}),null);
__d('HelpLink.react',['React','joinClasses','TooltipLink.react'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.render=function(){'use strict';return c('React').createElement(c('TooltipLink.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,'uiHelpLink mls')}),undefined);};function j(){'use strict';h.apply(this,arguments);}j.defaultProps={href:'#'};f.exports=j;}),null);
__d('GridInputLabel.react',['cx','invariant','Grid.react','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('Grid.react').GridItem,m=c('React').PropTypes,n=0;function o(){return 'js_grid_input_label_'+n++;}j=babelHelpers.inherits(p,c('React').Component);k=j&&j.prototype;p.prototype.render=function(){'use strict';this.props.children.length===2||i(0);var q=this.props.children[0],r=this.props.children[1],s=q.type==='input';q=c('React').cloneElement(q,{className:c('joinClasses')(q.props.className,"uiGridInputLabelInput"+(s&&q.props.type==='radio'?' '+"uiInputLabelRadio":'')+(s&&q.props.type==='checkbox'?' '+"uiInputLabelCheckbox":'')),id:q.props.id||o()});r=c('React').cloneElement(r,{className:c('joinClasses')(r.props.className,'uiInputLabelLabel'),htmlFor:q.props.id});var t="uiInputLabel"+(' '+"clearfix")+(this.props.display==='inline'?' '+"inlineBlock":'')+(s?' '+"uiInputLabelLegacy":'');return c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,t)}),c('React').createElement(c('Grid.react'),{cols:2},c('React').createElement(l,null,q),c('React').createElement(l,null,r)));};function p(){'use strict';j.apply(this,arguments);}p.propTypes={display:m.oneOf(['block','inline'])};p.defaultProps={display:'block'};f.exports=p;}),null);
__d('XUIRadioList.react',['cx','Focus','GridInputLabel.react','InputLabel.react','Map','React','RTLKeys','XUIRadioInput.react','joinClasses','KeyStatus','VirtualCursorStatus'],(function a(b,c,d,e,f,g,h){var i,j,k,l,m=c('KeyStatus').isKeyDown,n=c('VirtualCursorStatus').isVirtualCursorTriggered,o=c('React').PropTypes;i=babelHelpers.inherits(p,c('React').Component);j=i&&i.prototype;function p(){var q,r;'use strict';for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=j.constructor).call.apply(q,[this].concat(t)),this.$XUIRadioList4=function(v){return function(event){switch(event.keyCode){case c('RTLKeys').UP:case c('RTLKeys').getLeft():event.preventDefault();this.$XUIRadioList3(v-1);break;case c('RTLKeys').DOWN:case c('RTLKeys').getRight():event.preventDefault();this.$XUIRadioList3(v+1);break;case c('RTLKeys').SPACE:event.preventDefault();this.$XUIRadioList3(v);break;}}.bind(this);}.bind(this),r;}p.prototype.componentWillMount=function(){'use strict';this.$XUIRadioList1=new (c('Map'))();this.$XUIRadioList2=new (c('Map'))();};p.prototype.$XUIRadioList3=function(q){'use strict';if(q>=this.$XUIRadioList1.size){q=0;}else if(q<0)q=this.$XUIRadioList1.size-1;var r=this.$XUIRadioList1.get(q),s=this.$XUIRadioList2.get(q);if(!r||!s)return;if(!r.props.disabled)s.getElementsByTagName('input')[0].click();c('Focus').set(s);};p.prototype.render=function(){'use strict';var q=c('React').Children.map(this.props.children,function(t){return t?t.props.value:null;}).some(function(t){return t===this.props.selectedValue;}.bind(this)),r=c('React').Children.map(this.props.children,function(t,u){return t===null?null:c('React').cloneElement(t,{name:this.props.name,onKeyDown:this.$XUIRadioList4(u),onSelect:this.props.onValueChange,ref:function(v){this.$XUIRadioList1.set(u,v);}.bind(this),selectedValue:this.props.selectedValue,setupRadioRef:function(v){this.$XUIRadioList2.set(u,v);}.bind(this),tabIndex:this.props.selectedValue===t.props.value||!q&&u===0?0:-1});},this),s=this.props.selectedValue!==undefined&&!this.props.onValueChange;return c('React').createElement('ul',babelHelpers['extends']({},this.props,{'aria-readonly':s,name:null,role:'radiogroup'}),r);};p.propTypes={name:o.string,onValueChange:o.func,selectedValue:o.any};p.Item=(l=k=function(){var q,r;q=babelHelpers.inherits(s,c('React').Component);r=q&&q.prototype;function s(){var t,u;'use strict';for(var v=arguments.length,w=Array(v),x=0;x<v;x++)w[x]=arguments[x];return u=(t=r.constructor).call.apply(t,[this].concat(w)),this.state={showFocusRing:false},this.$_class1=function(){this.setState({showFocusRing:false});}.bind(this),this.$_class2=function(){if(m()||n())this.setState({showFocusRing:true});}.bind(this),this.$_class3=function(event){this.props.onSelect&&this.props.onSelect(event.target.value);}.bind(this),u;}s.prototype.render=function(){'use strict';var t=this.props.selectedValue===this.props.value,u=!!this.props.disabled,v=this.props.centered?c('GridInputLabel.react'):c('InputLabel.react');return c('React').createElement('li',{'aria-checked':t,'aria-disabled':u,className:c('joinClasses')(this.props.className,!this.state.showFocusRing?"_1az7":''),onBlur:this.$_class1,onFocus:this.$_class2,onKeyDown:this.props.onKeyDown,ref:this.props.setupRadioRef,role:'radio',tabIndex:this.props.tabIndex},c('React').createElement(v,{'aria-label':this.props['aria-label'],'data-hover':this.props['data-hover'],'data-testid':this.props['data-testid'],'data-tooltip-content':this.props['data-tooltip-content'],'data-tooltip-position':this.props['data-tooltip-position'],display:'inline'},c('React').createElement(c('XUIRadioInput.react'),{checked:t,disabled:u,name:this.props.name,onChange:this.$_class3,tabIndex:-1,value:this.props.value,labelDataTestID:this.props.inputLabelTestID}),c('React').createElement('label',null,this.props.children)));};return s;}(),k.propTypes={centered:o.bool,'data-testid':o.string,disabled:o.bool,inputLabelTestID:o.string,name:o.string,onKeyDown:o.func,onSelect:o.func,selectedValue:o.any,setupRadioRef:o.func,tabIndex:o.number,value:o.any},l);f.exports=p;}),null);
__d('ShareDialogAudienceTypes',['getObjectValues','ShareModeConst'],(function a(b,c,d,e,f,g){var h={OWN:c('ShareModeConst').SELF_POST,PERSON:c('ShareModeConst').FRIEND,GROUP:c('ShareModeConst').GROUP,EVENT:c('ShareModeConst').EVENT,PAGE:c('ShareModeConst').PAGE,MESSAGE:c('ShareModeConst').MESSAGE},i=c('getObjectValues')(h);function j(k){return i.some(function(l){return l===k;});}f.exports=h;f.exports.ALL=i;f.exports.isValid=j;f.exports.propType=function(k,l){if(!j(k[l]))throw new Error('Invalid audience '+k[l]);};}),null);
__d('PaymentMethodUtils',['fbt','ix','CreditCardTypeEnum'],(function a(b,c,d,e,f,g,h,i){var j=16,k=4,l=[{pattern:/^5[1-5]|^2(2(2[1-9]|[3-9])|[3-6]|7([01]|20))/,name:'mc',cscDigits:3,digits:16,supported:true,code:77},{pattern:/^4/,name:'visa',cscDigits:3,digits:16,supported:true,code:86},{pattern:/^3[47]/,name:'amex',cscDigits:4,digits:15,supported:true,code:65},{pattern:/^35(2[8-9]|[3-8])/,name:'jcb',cscDigits:3,digits:16,supported:true,code:74},{pattern:/^62/,name:'cup',cscDigits:3,digits:16,supported:true,code:80},{pattern:/^(6011|65|64[4-9])/,name:'disc',cscDigits:3,digits:16,supported:true,code:68},{pattern:/^30[0-5]/,name:'diners',digits:14,cscDigits:3,supported:false,code:64},{name:'unknown',pattern:null,digits:16,cscDigits:3,supported:false,code:85}],m=function o(p){return p.replace(/[iIl]/g,'1').replace(/[Oo]/g,'0').replace(/[^\d]/gi,'');},n={getCardType:function o(p){p=m(p);p=p.substr(0,6);for(var q=0;q<l.length;q++)if(l[q].pattern&&p.match(l[q].pattern))return l[q];return l[l.length-1];},getCardTypeFromCode:function o(p){for(var q=0;q<l.length;q++)if(p==l[q].code)return l[q];return null;},isValidCCNumber:function o(p){p=m(p);var q=n.getCardType(p);if(q.digits!==p.length)return false;if(!q.supported)return false;return n.isValidLuhn(p);},isValidLuhn:function o(p){p=m(p);var q=p.split('').reverse(),r='';for(var s=0;s<q.length;s++){var t=parseInt(q[s],10);if(s%2!==0)t=t*2;r=r+t;}var u=0;for(s=0;s<r.length;s++)u=u+parseInt(r.charAt(s),10);return !!(u!==0&&u%10===0);},getMaxCardLength:function o(p){return j;},getMaxCSCLength:function o(){return k;},getImageForCard:function o(p){var q=p.name;switch(q){case 'visa':return i("95533");case 'mc':return i("95531");case 'amex':return i("95528");case 'disc':return i("95529");case 'jcb':return i("95530");default:return i("95526");}},getCreditCardString:function o(p){switch(p){case c('CreditCardTypeEnum').VISA:return h._("Visa");case c('CreditCardTypeEnum').MASTERCARD:return h._("MasterCard");case c('CreditCardTypeEnum').DISCOVER:return h._("Discover");case c('CreditCardTypeEnum').AMERICANEXPRESS:return h._("AMEX");case c('CreditCardTypeEnum').JCB:return h._("JCB");case c('CreditCardTypeEnum').DINERSCLUB:return h._("Diners");default:return h._("Carte de cr\u00e9dit");}}};f.exports=n;}),null);
__d('PaymentTokenProxyUtils',['CurrentEnvironment','URI'],(function a(b,c,d,e,f,g){var h={getURI:function i(j){var k=new (c('URI'))('/ajax/payment/token_proxy.php').setDomain(window.location.hostname).setProtocol('https').addQueryData(j),l=k.getDomain().split('.');if(l.indexOf('secure')<0){l.splice(1,0,'secure');if(l[0]=='www')l.shift();k.setDomain(l.join('.'));}if(c('CurrentEnvironment').messengerdotcom){var m=k.getDomain();m=m.replace('messenger.com','facebook.com');k.setDomain(m);}return k;}};f.exports=h;}),null);
__d("XP2PAddressCreateController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/p2p\/address\/_create\/",{});}),null);
__d("XShareDialogSubmitController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/share\/dialog\/submit\/",{post_id:{type:"Int"},share_type:{type:"Int"},url:{type:"String"},audience_type:{type:"String"},owner_id:{type:"Int"},app_id:{type:"Int"},message:{type:"String"},shared_ad_id:{type:"Int"},sharer_id:{type:"Int"},source:{type:"String"},composer_session_id:{type:"String"},audience_targets:{type:"IntVector"},ephemeral_ttl_mode:{type:"Int"},tagged_people:{type:"IntVector"},tagged_place:{type:"Int"},tagged_action:{type:"Int"},tagged_object:{type:"Int"},tagged_object_str:{type:"String"},tagged_action_icon:{type:"Int"},tagged_feed_topics:{type:"StringVector"},attribution:{type:"Int"},privacy:{type:"String"},messaging_tags:{type:"StringVector"},ft:{type:"StringToStringMap"},internalextra:{type:"StringToStringMap"},internal_preview_image_id:{type:"Int"},share_now:{type:"Bool",defaultValue:false},is_forced_reshare_of_post:{type:"Bool",defaultValue:false},is_throwback_post:{type:"Bool",defaultValue:false},targeted_privacy_data:{type:"HackType"},unpublished_content_type:{type:"Enum",enumType:0},branded_content_repost_root:{type:"Int"},share_to_group_as_page:{type:"Bool",defaultValue:false},shared_to_group_id:{type:"Int"}});}),null);