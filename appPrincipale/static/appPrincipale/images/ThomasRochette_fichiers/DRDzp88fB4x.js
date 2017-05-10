if (self.CavalryLogger) { CavalryLogger.start_js(["\/5LFD"]); }

__d('NotificationActor.react',['cx','ix','Image.react','React'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k;j=babelHelpers.inherits(l,c('React').PureComponent);k=j&&j.prototype;l.prototype.render=function(){var m=this.props,n=m.actor,o=m.isCircle,p=m.isNotifsPage;return c('React').createElement(c('Image.react'),{src:n&&n.profile_picture?n.profile_picture.uri:i("97000"),alt:'',className:(!p?"_33h":'')+(p?' '+"_12u1":'')+(o?' '+"_4pt3":'')});};function l(){j.apply(this,arguments);}f.exports=l;}),null);
__d('NotificationAttachment.react',['cx','Image.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;i=babelHelpers.inherits(k,c('React').PureComponent);j=i&&i.prototype;k.prototype.render=function(){var l=this.props.image;if(!l)return c('React').createElement('span',null);return c('React').createElement(c('Image.react'),{src:l.uri,className:"_42td",'aria-hidden':true});};function k(){i.apply(this,arguments);}f.exports=k;}),null);
__d('NotificationFooter.react',['cx','BizSiteIdentifier.brands','Image.react','ImageBlock.react','React','Timestamp.react'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('BizSiteIdentifier.brands').isBizSite();i=babelHelpers.inherits(l,c('React').PureComponent);j=i&&i.prototype;l.prototype.render=function(){var m=this.props,n=m.icon,o=m.shortenTimestamp,p=m.timestamp;return c('React').createElement(c('ImageBlock.react'),{className:"_33f"+(k?' '+"_2g48":'')},c('React').createElement(c('Image.react'),{className:"_10cu",src:n.uri}),c('React').createElement('span',null,c('React').createElement(c('Timestamp.react'),babelHelpers['extends']({className:"_33g",shorten:o},p))));};function l(){i.apply(this,arguments);}f.exports=l;}),null);
__d('NotificationListItemConversationContents.react',['cx','ImageBlock.react','FlexibleBlock.react','NotificationActor.react','NotificationAttachment.react','NotificationFooter.react','NotificationInterpolator','NotificationPhotoThumbnail','React','TextWithEntities.react'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){var l=this.props.notification.conversationConfig;if(!l)return null;var m=l.data,n=l.options;if(!m)return null;var o=m.actors,p=m.countText,q=m.subtitle,r=m.title,s=n.showIconFooter,t=n.useRoundedActor,u=this.props,v=u.notification,w=v.icon,x=v.timestamp,y=u.isNotifsPage,z=u.isRead,aa=u.shortenTimestamp,ba=c('React').createElement(c('NotificationActor.react'),{actor:o[0],isCircle:!!t,isNotifsPage:y}),ca=c('React').createElement(c('TextWithEntities.react'),{aggregatedranges:r.aggregated_ranges,interpolator:c('NotificationInterpolator'),ranges:r.ranges,renderEmoji:true,renderEmoticons:true,text:r.text}),da=c('React').createElement(c('TextWithEntities.react'),{aggregatedranges:q.aggregated_ranges,interpolator:c('NotificationInterpolator'),ranges:q.ranges,renderEmoji:true,renderEmoticons:true,text:q.text}),ea=p?c('React').createElement('span',{className:!z?"fwb":''},' (',c('React').createElement(c('TextWithEntities.react'),babelHelpers['extends']({interpolator:c('NotificationInterpolator')},p)),')'):null,fa=s?c('React').createElement(c('NotificationFooter.react'),{icon:w,shortenTimestamp:aa,timestamp:x}):null,ga=c('React').createElement(c('NotificationAttachment.react'),{image:c('NotificationPhotoThumbnail').getThumbnailForNotification(this.props.notification)});return c('React').createElement(c('ImageBlock.react'),null,ba,c('React').createElement(c('FlexibleBlock.react'),{flex:c('FlexibleBlock.react').FLEX.left},c('React').createElement('div',{className:"_4l_v"},c('React').createElement('div',{className:"_4pt4"},c('React').createElement('span',{className:"fwb"},ca),ea),c('React').createElement('div',{className:"_4pt6"},da),fa),ga));};function k(){i.apply(this,arguments);}f.exports=k;}),null);