(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"ProfileStyles_profile__3pu8j",description:"ProfileStyles_description__2FNnN",avatar:"ProfileStyles_avatar__2TDVa",name:"ProfileStyles_name__JGofQ",tag:"ProfileStyles_tag__SOutT",stats:"ProfileStyles_stats__2KT_T",item:"ProfileStyles_item__K81aZ",label:"ProfileStyles_label__1M0aa",quantity:"ProfileStyles_quantity__TT3ks"}},,function(e,a,t){e.exports={statistics:"StatisticsStyles_statistics__20fW_",title:"StatisticsStyles_title__2YHIu",list:"StatisticsStyles_list__18XtB",item:"StatisticsStyles_item__3bPVk",label:"StatisticsStyles_label__LEYBk",percentage:"StatisticsStyles_percentage__NcVK5"}},function(e,a,t){e.exports={item:"FriendStyles_item__35Ejx",status:"FriendStyles_status__YZlFy",online:"FriendStyles_online__2e1gJ FriendStyles_status__YZlFy",offline:"FriendStyles_offline__3_n0G FriendStyles_status__YZlFy",avatar:"FriendStyles_avatar__1pfpQ"}},function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__1NV-5",head:"TransactionHistory_head__3_UUz",body:"TransactionHistory_body__2QFl5"}},,,function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,,,,function(e,a,t){"use strict";t.r(a);t(2);var s=t(7),c=t.n(s),i={friends:t(8),statisticalData:t(9),transactions:t(10),user:t(11)},n=t(4),r=t.n(n),l=t(0),d=function(e){var a=e.avatar,t=e.name,s=e.isOnline,c=e.id;return Object(l.jsxs)("li",{className:r.a.item,children:[Object(l.jsx)("span",{className:s?r.a.online:r.a.offline,children:s}),Object(l.jsx)("img",{className:r.a.avatar,src:a,alt:t,width:"48"}),Object(l.jsx)("p",{className:r.a.name,children:t})]},c)},o=function(e){var a=e.friends;return Object(l.jsx)("ul",{children:a.map((function(e){var a=e.id,t=e.avatar,s=e.name,c=e.isOnline;return Object(l.jsx)(d,{avatar:t,name:s,isOnline:c},a)}))})},b=t(1),m=t.n(b),j=function(e){var a=e.name,t=e.tag,s=e.location,c=e.avatar,i=e.stats;return Object(l.jsxs)("div",{className:m.a.profile,children:[Object(l.jsxs)("div",{className:m.a.description,children:[Object(l.jsx)("img",{src:c,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:m.a.avatar}),Object(l.jsx)("p",{className:m.a.name,children:a}),Object(l.jsx)("p",{className:m.a.tag,children:t}),Object(l.jsx)("p",{className:m.a.location,children:s})]}),Object(l.jsxs)("ul",{className:m.a.stats,children:[Object(l.jsxs)("li",{className:m.a.item,children:[Object(l.jsx)("span",{className:m.a.label,children:"Followers"}),Object(l.jsx)("span",{className:m.a.quantity,children:i.followers})]}),Object(l.jsxs)("li",{className:m.a.item,children:[Object(l.jsx)("span",{className:m.a.label,children:"Views"}),Object(l.jsx)("span",{className:m.a.quantity,children:i.views})]}),Object(l.jsxs)("li",{className:m.a.item,children:[Object(l.jsx)("span",{className:m.a.label,children:"Likes"}),Object(l.jsx)("span",{className:m.a.quantity,children:i.likes})]})]})]})};j.defaultProps={avatar:"https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder"};var u=j,f=t(3),p=t.n(f),y=function(e){var a=e.title,t=e.stats;return Object(l.jsxs)("section",{className:p.a.statistics,children:[Object(l.jsx)("h2",{className:p.a.title,children:a}),Object(l.jsx)("ul",{className:p.a.list,children:t.map((function(e){var a=e.id,t=e.label,s=e.percentage;return Object(l.jsxs)("li",{className:p.a.item,children:[Object(l.jsx)("span",{className:p.a.label,children:t}),Object(l.jsx)("span",{className:p.a.percentage,children:s})]},a)}))})]})},_=t(5),h=t.n(_),O=function(e){var a=e.transactions;return Object(l.jsxs)("table",{className:h.a.transactionHistory,children:[Object(l.jsx)("thead",{className:h.a.head,children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Type"}),Object(l.jsx)("th",{children:"Amount"}),Object(l.jsx)("th",{children:"Currency"})]})}),Object(l.jsx)("tbody",{className:h.a.body,children:a.map((function(e){var a=e.id,t=e.type,s=e.amount,c=e.currency;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t}),Object(l.jsx)("td",{children:s}),Object(l.jsx)("td",{children:c})]},a)}))})]})},x=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"Profile"}),Object(l.jsx)(u,{name:i.user.name,tag:i.user.tag,location:i.user.location,avatar:i.user.avatar,stats:i.user.stats}),Object(l.jsx)("h2",{children:"Statistics"}),Object(l.jsx)(y,{stats:i.statisticalData,title:"Upload stats"}),Object(l.jsx)("h2",{children:"Friend"}),Object(l.jsx)(o,{friends:i.friends}),Object(l.jsx)("h2",{children:"Transaction History"}),Object(l.jsx)(O,{transactions:i.transactions})]})};c.a.render(Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.1ff1fdb5.chunk.js.map