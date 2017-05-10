if (self.CavalryLogger) { CavalryLogger.start_js(["3TeQg"]); }

__d('RichTextEditorLink.react',['cx','Link.react','React','Tooltip'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){var l=this.props,m=l.children,n=l.contentState,o=l.entityKey,p=l.offsetKey,q=n.getEntity(o).getData().url,r=q==='#'?{}:c('Tooltip').propsFor(q);return c('React').createElement(c('Link.react'),babelHelpers['extends']({},r,{'data-offset-key':p,'data-tooltip-alignh':'center','data-tooltip-content':q,href:q,target:'_blank',className:"_42a-"}),m);};function k(){i.apply(this,arguments);}f.exports=k;}),null);
__d('EmojiSpan.react',['cx','DraftEntity','EmojiConfig','EmojiImageURL','FBEmojiUtils','React','SupportedFBEmoji','UnicodeUtils'],(function a(b,c,d,e,f,g,h){var i,j,k=c('EmojiImageURL').getFBEmojiURL;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m=this.props,n=m.decoratedText,o=m.offsetKey,p=m.size,q=0,r=n.length,s=[];while(q<r){var t=c('UnicodeUtils').getUTF16Length(n,q);s.push(n.substr(q,t));q+=t;}var u=c('FBEmojiUtils').getSupportedKey(s);if(u&&Object.prototype.hasOwnProperty.call(c('SupportedFBEmoji'),u))return c('React').createElement('span',babelHelpers['extends']({},this.props,{className:"_3gl1 _5zz4",'data-offset-key':o,style:{backgroundImage:'url('+k(u,p)+')',backgroundSize:p+'px '+p+'px',height:p,width:p}}),c('React').createElement('span',{className:"_ncl"},n));return c('React').createElement('span',{'data-offset-key':o},n);};function l(){'use strict';i.apply(this,arguments);}f.exports=l;}),null);
__d('ImplicitLink.react',['cx','React'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return c('React').createElement('span',{'data-offset-key':this.props.offsetKey,className:"_2ou",spellCheck:false},this.props.children);};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('getRichTextInputDecorator',['CompositeDraftDecorator','EmojiSpan.react','EmoticonSpan.react','HashtagSpan.react','ImplicitLink.react','MentionSpan.react','RichTextEditorLink.react','WeakMentionSpan.react','getEntityMatcher','getHashtagMatches','getImplicitURLMatches'],(function a(b,c,d,e,f,g){var h;function i(){if(!h)h=new (c('CompositeDraftDecorator'))([{strategy:c('getEntityMatcher')(function(j){var k=j.getData();return j.getType()==='MENTION'&&k&&k.isWeak;}),component:c('WeakMentionSpan.react')},{strategy:c('getEntityMatcher')(function(j){return j.getType()==='MENTION';}),component:c('MentionSpan.react')},{strategy:c('getEntityMatcher')(function(j){return j.getType()==='EMOTICON';}),component:c('EmoticonSpan.react')},{strategy:c('getHashtagMatches'),component:c('HashtagSpan.react')},{strategy:c('getEntityMatcher')(function(j){return j.getType()==='EMOJI';}),component:c('EmojiSpan.react')},{strategy:c('getEntityMatcher')(function(j){return j.getType()==='LINK';}),component:c('RichTextEditorLink.react')},{strategy:c('getImplicitURLMatches'),component:c('ImplicitLink.react')}]);return h;}f.exports=i;}),null);
__d('ReactComposerInputDecorator',[],(function a(b,c,d,e,f,g){'use strict';f.exports={NONE:0,MENTIONS:1,RICH_TEXT:2};}),null);
__d('getReactComposerInputDecorator',['ReactComposerInputDecorator','getMentionsInputDecorator','getRichTextInputDecorator'],(function a(b,c,d,e,f,g){'use strict';var h=function i(j){if(j===c('ReactComposerInputDecorator').RICH_TEXT){return c('getRichTextInputDecorator')();}else if(j===c('ReactComposerInputDecorator').MENTIONS)return c('getMentionsInputDecorator')();return null;};f.exports=h;}),null);