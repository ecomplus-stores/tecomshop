(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{253:function(t,e,i){"use strict";var r={name:"ItemCustomizations",props:{item:{type:Object,required:!0}}},a=i(43),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.item.customizations&&t.item.customizations.length?i("div",{staticClass:"item-customizations small"},t._l(t.item.customizations,(function(e){var r=e._id,a=e.label,s=e.option;return i("div",{key:"cs-"+r},[i("span",{staticClass:"text-muted"},[t._v(" "+t._s(a)+": ")]),t._v(" "+t._s(s.text)+" ")])})),0):t._e()}),[],!1,null,null,null);e.a=s.exports},257:function(t,e,i){var r=i(269);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,i(173).default)("4ce2b336",r,!0,{})},268:function(t,e,i){"use strict";i(257)},269:function(t,e,i){(e=i(172)(!0)).push([t.i,".summary__item{align-items:flex-start;display:flex;margin-bottom:.5rem;overflow-x:hidden}.summary__item a{color:inherit}.summary__item picture{flex:0 0 70px;height:auto;margin-right:.5rem;width:70px}.summary__item picture img{border-radius:var(--border-radius)}.summary__item small{display:inline-block;line-height:1.3}.summary__amount{border-top:1px dotted var(--gray);margin:1rem 0 1.5rem;padding:.75rem 0}.summary__amount:last-child{margin-bottom:0;padding-bottom:0}.summary__amount__row{align-items:center;display:flex;justify-content:space-between;margin-top:.25rem}.summary__amount__row>span{font-weight:300}.summary__amount__row>span small{color:var(--gray);display:block;line-height:1.15}.summary__amount__row--total{font-size:1.25rem;margin-top:.5rem}.summary__amount__row--total>div{font-weight:700}.summary__amount__row--total strong{color:var(--secondary)}.summary .prices{text-align:right}","",{version:3,sources:["EcSummary.scss"],names:[],mappings:"AAAA,eAAe,sBAAsB,CAAC,YAAY,CAAC,mBAAmB,CAAC,iBAAiB,CAAC,iBAAiB,aAAa,CAAC,uBAAuB,aAAa,CAAC,WAAW,CAAC,kBAAkB,CAAC,UAAU,CAAC,2BAA2B,kCAAkC,CAAC,qBAAqB,oBAAoB,CAAC,eAAe,CAAC,iBAAiB,iCAAiC,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,4BAA4B,eAAe,CAAC,gBAAgB,CAAC,sBAAsB,kBAAkB,CAAC,YAAY,CAAC,6BAA6B,CAAC,iBAAiB,CAAC,2BAA2B,eAAe,CAAC,iCAAiC,iBAAiB,CAAC,aAAa,CAAC,gBAAgB,CAAC,6BAA6B,iBAAiB,CAAC,gBAAgB,CAAC,iCAAiC,eAAe,CAAC,oCAAoC,sBAAsB,CAAC,iBAAiB,gBAAgB",file:"EcSummary.scss",sourcesContent:[".summary__item{align-items:flex-start;display:flex;margin-bottom:.5rem;overflow-x:hidden}.summary__item a{color:inherit}.summary__item picture{flex:0 0 70px;height:auto;margin-right:.5rem;width:70px}.summary__item picture img{border-radius:var(--border-radius)}.summary__item small{display:inline-block;line-height:1.3}.summary__amount{border-top:1px dotted var(--gray);margin:1rem 0 1.5rem;padding:.75rem 0}.summary__amount:last-child{margin-bottom:0;padding-bottom:0}.summary__amount__row{align-items:center;display:flex;justify-content:space-between;margin-top:.25rem}.summary__amount__row>span{font-weight:300}.summary__amount__row>span small{color:var(--gray);display:block;line-height:1.15}.summary__amount__row--total{font-size:1.25rem;margin-top:.5rem}.summary__amount__row--total>div{font-weight:700}.summary__amount__row--total strong{color:var(--secondary)}.summary .prices{text-align:right}"]}]),t.exports=e},274:function(t,e,i){"use strict";i(4);var r=i(22),a=i(32),s=i(77),n=i(35),o=i(1),l=i(27),d=i(8),c=i(57),_=i(244),u=i(275),m={name:"EcOrderInfo",components:{ShippingLine:_.a,EcSummary:u.a},props:{order:{type:Object,required:!0},isNew:Boolean,skipDataLoad:Boolean,skipFirstDataLoad:Boolean,skipCustomerUpdate:Boolean,accountOrdersUrl:{type:String,default:"/app/#/account/orders"},cartUrl:{type:String,default:"/app/#/cart"},ecomCart:{type:Object,default:()=>d.a},ecomPassport:{type:Object,default:()=>l.a},invoiceBaseLink:{type:String,default:"https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConteudo=7PhJ+gAVw2g=&tipoConsulta=resumo&nfe="}},data(){return{isLoaded:this.skipDataLoad||this.skipFirstDataLoad,isUpdating:!1,reloadInterval:null,orderBody:this.order,canReopenOrder:!1}},computed:{i19buyAgain:()=>Object(a.a)(r.z),i19cancelOrder:()=>Object(a.a)(r.F),i19codeCopied:()=>Object(a.a)(r.Q),i19copyCode:()=>Object(a.a)(r.Z),i19copyErrorMsg:()=>Object(a.a)(r.ab),i19doPaymentMsg:()=>Object(a.a)(r.ib),i19freight:()=>Object(a.a)(r.Cb),i19login:()=>Object(a.a)(r.ac),i19loginForOrderDetailsMsg:()=>Object(a.a)(r.cc),i19myOrders:()=>Object(a.a)(r.mc),i19notes:()=>Object(a.a)(r.xc),i19of:()=>Object(a.a)(r.Bc),i19orderConfirmationMsg:()=>Object(a.a)(r.Jc),i19orderNumber:()=>Object(a.a)(r.Lc),i19printBillet:()=>Object(a.a)(r.Zc),i19redirectToPayment:()=>Object(a.a)(r.id),i19referenceCode:()=>Object(a.a)(r.kd),i19reopenOrder:()=>Object(a.a)(r.rd),i19shippingAddress:()=>Object(a.a)(r.Nd),i19transactionCode:()=>Object(a.a)(r.ce),i19ticketCode:()=>Object(a.a)(r.Xd),i19trackDelivery:()=>Object(a.a)(r.be),i19unsubscribe:()=>Object(a.a)(r.he),i19zipCode:()=>Object(a.a)(r.se),i19invoice:()=>"Nota fiscal",localOrder:{get(){return this.orderBody},set(t){this.orderBody=t,this.$emit("update:order",t),this.saveCustomerOrder()}},hasManyTransactions(){const{transactions:t}=this.localOrder;return t&&t.length>1},transaction(){const{transactions:t}=this.localOrder;return t&&t.length?t[0]:{}},shippingAddress(){const{localOrder:t}=this;if(t.shipping_lines&&t.shipping_lines.length)return t.shipping_lines[0].to},canShowShippingAddress(){const{localOrder:t,shippingAddress:e}=this;return!(!e||!e.street)&&!/(retira|pick\s?up|e-?mail)/i.test(t.shipping_method_label)},status(){return this.localOrder.status},financialStatus(){const{localOrder:t,transaction:e}=this;if(t.payments_history){let e;if(t.payments_history.forEach((t=>{t&&(!e||!t.date_time||new Date(t.date_time).getTime()>=new Date(e.date_time).getTime())&&(e=t)})),e)return e.status}const i=t.financial_status&&t.financial_status.current;return i||(e&&e.status?e.status.current:"pending")},fulfillmentStatus(){const{localOrder:t}=this,e=t.fulfillment_status&&t.fulfillment_status.current;if(e)return e;{const e=t.shipping_lines&&t.shipping_lines[0];if(e&&e.status)return e.status.current}return null},statusEntries(){const t=[];let e=[];return["payments_history","fulfillments"].forEach((t=>{Array.isArray(this.localOrder[t])&&(e=e.concat(this.localOrder[t]))})),e.length&&(e=e=e.sort(((t,e)=>t.date_time&&e.date_time?new Date(t.date_time).getTime()>new Date(e.date_time).getTime()?-1:1:0)),e.forEach(((i,r)=>{r>0&&i.status===e[r-1].status||t.push(i)}))),t},isAuthenticated(){return this.ecomPassport.checkAuthorization()},isSubscription(){return this.localOrder.transactions&&this.localOrder.transactions.find((t=>{let{type:e}=t;return"recurrence"===e}))}},methods:{i19FinancialStatus:t=>Object(a.a)(r.a)[t],i19FulfillmentStatus:t=>Object(a.a)(r.b)[t],i19OrderStatus:t=>Object(a.a)(r.e)[t],formatMoney:s.a,formatDate:n.a,formatTime(t){const e=Date.parse(t);return new Date(e).toLocaleTimeString()},toClipboard(t){this.$copyText(t).then((()=>{this.$toast({title:this.i19codeCopied,body:t,variant:"success",delay:2e3})}),(e=>{console.error(e),this.$toast({title:"Oops",body:`${this.i19copyErrorMsg}: <i>${t}</i>`,variant:"warning",delay:3e3})}))},saveCustomerOrder(){const{localOrder:t,ecomPassport:e}=this;!this.skipCustomerUpdate&&t.number&&e.checkAuthorization()&&(t.transactions&&t.transactions.find((t=>"loyalty_points"===t.payment_method.code))&&e.setCustomer({loyalty_points_entries:[]}),e.requestApi("/me.json").then((i=>{let{data:r}=i;const a=r.orders?r.orders.slice(-300):[],s={};["_id","created_at","number","currency_id","currency_symbol","amount","payment_method_label","shipping_method_label"].forEach((e=>{t[e]&&(s[e]=t[e])}));const n=a.findIndex((e=>{let{_id:i,number:r}=e;return i===t._id||r===t.number}));n>-1?Object.assign(a[n],s):a.push(s),e.requestApi("/me.json","patch",{orders:a})})))},buyAgain(){const{localOrder:t}=this;if(t.items){const{items:e}=t;d.a.clear(),e.forEach(((t,i)=>{d.a.addItem(t,!1),i+1===e.length&&(d.a.save(),window.location=this.cartUrl)}))}},toggle(){this.isUpdating=!0;const t="cancelled"!==this.localOrder.status?{status:"cancelled",cancel_reason:"customer"}:{status:"open"};l.a.requestApi(`/orders/${this.order._id}.json`,"patch",t).then((()=>{this.localOrder={...this.localOrder,...t}})).finally((()=>{this.isUpdating=!1}))}},watch:{isLoaded:{handler(t){if(t&&this.isAuthenticated&&"cancelled"===this.status){const{items:t}=this.localOrder;if(t&&t.length){const e=t.map((t=>t.product_id)),i=new c.a;i.setPageSize(e.length).setProductIds(e).fetch(!0).then((()=>{for(let e=0;e<t.length;e++){const r=t[e],a=i.getItems().find((t=>{let{_id:e}=t;return e===r.product_id}));if(a){if(r.variation_id&&a.variations){const t=a.variations.find((t=>{let{sku:e}=t;return e===r.sku}));if(t&&t.quantity>=r.quantity)continue}if(a.quantity>=r.quantity)continue}return void(this.canReopenOrder=!1)}this.canReopenOrder=!0})).catch(console.error)}}},immediate:!0}},created(){if(this.order._id&&(this.isNew&&this.saveCustomerOrder(),!this.skipDataLoad)){const t=`/orders/${this.order._id}.json`,e=()=>(this.ecomPassport.checkAuthorization()?this.ecomPassport.requestApi(t):Object(o.g)({url:t})).then((t=>{let{data:e}=t;this.localOrder={...this.localOrder,...e}})).catch((t=>{console.error(t)}));this.reloadInterval=setInterval(e,9e3),this.skipFirstDataLoad||setTimeout((()=>{e().finally((()=>{this.isLoaded=!0}))}),this.isNew?1e3:3e3)}},beforeDestroy(){clearInterval(this.reloadInterval)}},A=(i(367),i(43)),p=Object(A.a)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"order-info py-4"},[t.isNew?i("div",{staticClass:"order-info__new"},[t._v(" "+t._s(t.i19orderConfirmationMsg)+"! ")]):t._e(),i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown slower"}},[t.isLoaded?i("div",{key:"loaded"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-5 col-lg-3"},[i("h2",{staticClass:"order-info__number"},[i("small",[t._v(t._s(t.i19orderNumber)+":")]),t._v(" #"),i("span",[t._v(t._s(t.localOrder.number))])]),i("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp fast"}},[t.isUpdating||"cancelled"!==t.status?t._e():i("p",{staticClass:"order-info__cancelled h3"},[t._v(" "+t._s(t.i19OrderStatus(t.status))+" "),i("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[t.canReopenOrder?i("button",{staticClass:"order-info__toggle btn",class:"cancelled"===t.status?"btn-success":"btn-secondary",on:{click:t.toggle}},[i("i",{staticClass:"i-check-circle mr-1"}),t._v(" "+t._s(t.i19reopenOrder)+" ")]):t._e()])],1)]),t.statusEntries.length?i("ul",{staticClass:"order-info__timeline"},t._l(t.statusEntries,(function(e,r){return i("li",{key:"status-"+r,staticClass:"order-info__timeline-status",class:"order-info__timeline-status--"+e.status},[e.date_time?i("div",{staticClass:"order-info__timeline-date"},[t._v(" "+t._s(t.formatDate(e.date_time))+" "+t._s(t.formatTime(e.date_time))+" ")]):t._e(),t._v(" "+t._s(t.i19FinancialStatus(e.status)||t.i19FulfillmentStatus(e.status))+" ")])})),0):t._e(),t.accountOrdersUrl?i("a",{staticClass:"order-info__orders-link d-none d-md-block btn btn-light",attrs:{href:t.accountOrdersUrl}},[i("i",{staticClass:"i-chevron-left mr-1"}),t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1),i("div",{staticClass:"col-md-7 col-lg-9"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6"},[i("article",[t.transaction.status&&"pending"===t.transaction.status.current?[t.transaction.banking_billet?i("div",{staticClass:"order-info__billet"},[i("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19doPaymentMsg)+" ")]),t.transaction.banking_billet.code?[i("p",[t._v(" "+t._s(t.i19ticketCode)+": "),i("br"),i("samp",[t._v(t._s(t.transaction.banking_billet.code))])]),i("button",{staticClass:"btn btn-outline-primary mr-3",on:{click:function(){return t.toClipboard(t.transaction.banking_billet.code)}}},[i("i",{staticClass:"i-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]:t._e(),t.transaction.banking_billet.link?i("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",href:t.transaction.banking_billet.link}},[i("i",{staticClass:"i-print mr-1"}),t._v(" "+t._s(t.i19printBillet)+" ")]):t._e()],2):t.transaction.payment_link?i("div",{staticClass:"order-info__redirect"},[i("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19doPaymentMsg)+" ")]),i("a",{staticClass:"btn btn-lg btn-success",attrs:{target:"_blank",href:t.transaction.payment_link}},[i("i",{staticClass:"i-arrow-right mr-1"}),t._v(" "+t._s(t.i19redirectToPayment)+" ")])]):t._e()]:t._e(),i("div",{staticClass:"order-info__details"},[t._t("payment",(function(){return[i("div",{staticClass:"order-info__payment card"},[i("div",{staticClass:"card-header"},[i("span",{staticClass:"order-info__financial-status",class:"order-info__financial-status--"+t.financialStatus},[i("i",{staticClass:"i-money-check mr-1"}),t._v(" "+t._s(t.i19FinancialStatus(t.financialStatus))+" ")])]),t._l(t.localOrder.transactions,(function(e){return i("div",{key:"t-"+e._id,staticClass:"card-body"},[i("p",{staticClass:"order-info__payment-value"},[e.payment_method.name?[t._v(" "+t._s(e.payment_method.name)+": ")]:t.localOrder.payment_method_label?[t._v(" "+t._s(t.localOrder.payment_method_label)+": ")]:t._e(),e.installments&&e.installments.value?i("strong",[t._v(" "+t._s(e.installments.number)+"x "+t._s(t.i19of.toLowerCase())+" "+t._s(t.formatMoney(e.installments.value))+" ")]):i("strong",[t._v(" "+t._s(t.formatMoney(e.amount||t.localOrder.amount.total))+" ")]),t.hasManyTransactions&&e.status?[i("br"),i("span",{staticClass:"text-muted"},[t._v(" "+t._s(t.i19FinancialStatus(e.status.current))+" ")])]:t._e()],2),e.notes?i("p",{staticClass:"order-info__payment-notes alert alert-warning",attrs:{role:"alert"},domProps:{innerHTML:t._s(e.notes)}}):t._e(),e.credit_card?i("p",{staticClass:"order-info__credit-card"},[t._v(" "+t._s(e.credit_card.company)+" "),e.credit_card.last_digits?i("span",[e.credit_card.company?t._e():i("span",[t._v(" "+t._s(t.i19cardNumber)+" ")]),t._v(" **** "+t._s(e.credit_card.last_digits)+" ")]):t._e()]):t._e(),e.intermediator?[e.intermediator.transaction_code?i("div",{staticClass:"order-info__transaction-code"},[i("small",[t._v(t._s(t.i19transactionCode))]),i("br"),i("code",[t._v(t._s(e.intermediator.transaction_code))]),i("br"),i("button",{staticClass:"btn btn-sm btn-light",on:{click:function(){return t.toClipboard(e.intermediator.transaction_code)}}},[i("i",{staticClass:"i-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]):t._e(),e.intermediator.transaction_reference?i("div",{staticClass:"order-info__transaction-reference"},[i("small",[t._v(t._s(t.i19referenceCode))]),i("br"),t._v(" "+t._s(e.intermediator.transaction_reference)+" ")]):t._e()]:t._e()],2)}))],2)]}),null,{order:t.localOrder,transaction:t.transaction,financialStatus:t.financialStatus}),t._t("shipping",(function(){return[i("div",{staticClass:"order-info__shipping"},[t._l(t.localOrder.shipping_lines,(function(e){return i("div",{key:"s-"+e._id,staticClass:"order-info__shipping-freight card"},[i("div",{staticClass:"card-header"},[t.fulfillmentStatus?i("span",{staticClass:"order-info__fulfillment-status",class:"order-info__fulfillment-status--"+t.fulfillmentStatus},[i("i",{staticClass:"i-truck mr-1"}),t._v(" "+t._s(t.i19FulfillmentStatus(t.fulfillmentStatus))+" ")]):[i("i",{staticClass:"i-truck mr-1"}),t._v(" "+t._s(t.i19freight)+" ")]],2),i("div",{staticClass:"card-body"},[e.app?i("span",[t._v(" "+t._s(e.app.label)+" ")]):t._e(),i("shipping-line",{attrs:{"shipping-line":e}}),e.tracking_codes?i("div",{staticClass:"order-info__shipping-tracking"},[i("hr"),i("div",{staticClass:"text-muted"},[t._v(" "+t._s(t.i19trackDelivery)+": ")]),t._l(e.tracking_codes,(function(e,r){return i("samp",{key:"track-"+r},[e.link?i("a",{attrs:{href:""+e.link,target:"_blank"}},[t._v(" "+t._s(e.code)+" ")]):i("span",[t._v(" "+t._s(e.code)+" ")])])}))],2):t._e(),i("div",{staticClass:"order-info__shipping-nfe",attrs:{if:"shippingLine.invoices"}},[i("hr"),t._l(e.invoices,(function(e,r){return e.link||e.access_key?i("samp",{key:"invoice-"+r},[i("a",{attrs:{href:""+(e.link||""+(t.invoiceBaseLink+e.access_key)),target:"_blank"}},[t._v(" "+t._s(t.i19invoice)+" ")])]):t._e()}))],2)],1)])})),t.canShowShippingAddress?i("div",{staticClass:"order-info__shipping-address card"},[i("div",{staticClass:"card-header"},[i("i",{staticClass:"i-map-marked mr-1"}),t._v(" "+t._s(t.i19shippingAddress)+" ")]),i("address",{staticClass:"card-body mb-0"},[t._v(" "+t._s(t.shippingAddress.street)+" "),t.shippingAddress.number?[t._v(" "+t._s(t.shippingAddress.number)+" ")]:t._e(),t.shippingAddress.complement?[t._v(" , "+t._s(t.shippingAddress.complement)+" ")]:t._e(),t.shippingAddress.near_to?[i("br"),t._v(t._s(t.shippingAddress.near_to)+" ")]:t._e(),i("br"),t._l(["borough","city","province_code"],(function(e,r){return t.shippingAddress[e]?i("span",{key:e},[t._v(" "+t._s(t.shippingAddress[e]+(2===r?".":","))+" ")]):t._e()})),i("br"),i("span",[t._v(" "+t._s(t.i19zipCode)+": "),i("samp",[t._v(t._s(t.shippingAddress.zip))])])],2)]):t._e()],2)]}),null,{order:t.localOrder,shippingAddress:t.shippingAddress,fulfillmentStatus:t.fulfillmentStatus}),t._t("notes",(function(){return[t.localOrder.notes?i("div",{staticClass:"order-info__notes card"},[i("div",{staticClass:"card-header"},[i("span",[t._v(" "+t._s(t.i19notes)+" ")])]),i("div",{staticClass:"card-body"},[i("span",[t._v(" "+t._s(t.localOrder.notes)+" ")])])]):t._e()]}),null,{order:t.localOrder})],2),t.isAuthenticated?t._e():i("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19loginForOrderDetailsMsg)+" "),i("br"),i("a",{staticClass:"btn btn-primary mt-2",attrs:{href:t.accountOrdersUrl}},[i("i",{staticClass:"i-user mr-1"}),t._v(" "+t._s(t.i19login)+" ")])])],2)]),t.localOrder.amount?i("div",{staticClass:"col-lg-6 order-info__right"},[i("div",{staticClass:"order-info__summary card"},[i("div",{staticClass:"card-body"},[i("ec-summary",{attrs:{amount:t.localOrder.amount,items:t.localOrder.items,buyer:t.localOrder.buyer&&t.localOrder.buyer[0],shippingAddress:t.shippingAddress}})],1)]),t.isSubscription&&"cancelled"!==t.status?t._t("unsubscribe",(function(){return[i("button",{staticClass:"order-info__unsubscribe btn btn-outline-danger",attrs:{type:"button"},on:{click:t.toggle}},[i("i",{staticClass:"i-exclamation-triangle mr-1"}),t._v(" "+t._s(t.i19unsubscribe)+" ")])]})):[t._t("buy",(function(){return[i("button",{staticClass:"order-info__buy-again btn",class:t.isNew?"btn-outline-secondary":"btn-primary",attrs:{type:"button"},on:{click:t.buyAgain}},[i("i",{staticClass:"i-shopping-bag mr-1"}),t._v(" "+t._s(t.i19buyAgain)+" ")])]})),t.isUpdating||"open"!==t.status||t.fulfillmentStatus?t._e():i("button",{staticClass:"order-info__toggle btn btn-sm btn-danger",style:t.isNew?"display: none":null,on:{click:t.toggle}},[i("i",{staticClass:"i-exclamation-triangle mr-1"}),t._v(" "+t._s(t.i19cancelOrder)+" ")])]],2):t._e()])])])]):i("div",{key:"loading"},[i("div",{staticClass:"spinner-border",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])])])]),t.accountOrdersUrl?i("a",{staticClass:"order-info__orders-link d-md-none btn btn-light",attrs:{href:t.accountOrdersUrl}},[i("i",{staticClass:"i-chevron-left mr-1"}),t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1)}),[],!1,null,null,null);e.a=p.exports},275:function(t,e,i){"use strict";var r=i(259),a=i(22),s=i(32),n=i(90),o=i(20),l=i(33),d=i(77),c=i(88),_=i(188),u=i(191),m=i(190),A=i(253),p={name:"EcSummary",components:{ALink:_.a,APicture:u.a,APrices:m.a,ItemCustomizations:A.a},props:{amount:{type:Object,required:!0},items:Array,buyer:Object,shippingAddress:Object,canShowPriceOptions:Boolean,paidInAdvance:{type:Number,default:0}},computed:{i19balanceOrPoints:()=>Object(s.a)({en_us:"Balance or points",pt_br:"Saldo ou pontos"}),i19buyer:()=>Object(s.a)(a.C),i19contactPhone:()=>Object(s.a)(a.V),i19discount:()=>Object(s.a)(a.fb),i19docNumber:()=>Object(s.a)(a.jb),i19freebie:()=>Object(s.a)(a.Bb),i19freight:()=>Object(s.a)(a.Cb),i19myAccount:()=>Object(s.a)(a.kc),i19subtotal:()=>Object(s.a)(a.Vd),i19summary:()=>Object(s.a)(a.Wd),i19toPay:()=>Object(s.a)(a.Zd),i19total:()=>Object(s.a)(a.ae),amountToPay(){return this.amount.total-this.paidInAdvance},buyerName(){if(!this.buyer)return"";const{name:t}=this.buyer;return`${t.given_name} ${t.middle_name||""} ${t.family_name}`},buyerPhone(){return Object(n.a)(this.buyer)}},methods:{getName:o.a,getPrice:l.a,formatMoney:d.a,getImg:t=>Object(c.a)(t,null,"small")}},f=(i(268),i(43)),g=Object(f.a)(p,r.a,r.b,!1,null,null,null);e.a=g.exports},302:function(t,e,i){var r=i(368);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,i(173).default)("d08c370e",r,!0,{})},367:function(t,e,i){"use strict";i(302)},368:function(t,e,i){(e=i(172)(!0)).push([t.i,".order-info__number{color:var(--secondary);font-weight:var(--font-light);margin-top:var(--spacer-2)}.order-info__number span{font-weight:var(--font-bold)}.order-info__number small{color:var(--gray);display:block;font-size:var(--font-size-sm)}.order-info__timeline{display:flex;flex-wrap:nowrap;font-size:var(--font-size-sm);list-style:none;margin:var(--spacer-4) 0;overflow-x:auto;padding:0}@media(min-width:768px){.order-info__timeline{display:block}}.order-info__timeline-status{border-color:var(--border-color);border-style:solid;border-width:0 0 5px;margin-right:var(--spacer-1);min-width:165px;padding:var(--spacer-2)}@media(min-width:768px){.order-info__timeline-status{border-bottom-width:0;border-left-width:5px;margin-bottom:var(--spacer-1);margin-right:0;min-width:0;padding-left:var(--spacer-3)}}.order-info__timeline-status--pending,.order-info__timeline-status--under_analysis{border-color:var(--warning)}.order-info__timeline-status--shipped{border-color:var(--info)}.order-info__timeline-status--in_dispute,.order-info__timeline-status--unauthorized,.order-info__timeline-status--voided{border-color:var(--danger)}.order-info__timeline-status--delivered,.order-info__timeline-status--paid{border-color:var(--success)}.order-info__timeline-date{color:var(--text-muted);font-size:85%}.order-info__details:not(:first-child){margin-top:var(--spacer-4)}.order-info__payment,.order-info__shipping-address,.order-info__shipping-freight{margin-bottom:var(--spacer-3)}.order-info__financial-status,.order-info__fulfillment-status{color:var(--info);font-weight:var(--font-bold)}.order-info__financial-status--pending{color:var(--warning)}.order-info__financial-status--under_analysis{color:var(--info)}.order-info__financial-status--in_dispute,.order-info__financial-status--unauthorized,.order-info__financial-status--voided{color:var(--danger)}.order-info__financial-status--paid,.order-info__fulfillment-status--delivered,.order-info__new{color:var(--success)}.order-info__new{font-size:var(--font-size-lg);margin-bottom:var(--spacer-5);text-align:center}.order-info__orders-link{margin-left:auto;margin-top:var(--spacer-4)}.order-info__summary{background:var(--light);margin-bottom:var(--spacer-3)}.order-info__buy-again{display:block;margin-left:auto;margin-right:auto;margin-top:var(--spacer-3)}.order-info__toggle,.order-info__unsubscribe{display:block;margin-left:auto;margin-top:var(--spacer-5)}.order-info__cancelled{color:var(--danger)}","",{version:3,sources:["EcOrderInfo.scss"],names:[],mappings:"AAAA,oBAAoB,sBAAsB,CAAC,6BAA6B,CAAC,0BAA0B,CAAC,yBAAyB,4BAA4B,CAAC,0BAA0B,iBAAiB,CAAC,aAAa,CAAC,6BAA6B,CAAC,sBAAsB,YAAY,CAAC,gBAAgB,CAAC,6BAA6B,CAAC,eAAe,CAAC,wBAAwB,CAAC,eAAe,CAAC,SAAS,CAAC,wBAAwB,sBAAsB,aAAa,CAAC,CAAC,6BAA6B,gCAAgC,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,4BAA4B,CAAC,eAAe,CAAC,uBAAuB,CAAC,wBAAwB,6BAA6B,qBAAqB,CAAC,qBAAqB,CAAC,6BAA6B,CAAC,cAAc,CAAC,WAAW,CAAC,4BAA4B,CAAC,CAAC,mFAAmF,2BAA2B,CAAC,sCAAsC,wBAAwB,CAAC,yHAAyH,0BAA0B,CAAC,2EAA2E,2BAA2B,CAAC,2BAA2B,uBAAuB,CAAC,aAAa,CAAC,uCAAuC,0BAA0B,CAAC,iFAAiF,6BAA6B,CAAC,8DAA8D,iBAAiB,CAAC,4BAA4B,CAAC,uCAAuC,oBAAoB,CAAC,8CAA8C,iBAAiB,CAAC,4HAA4H,mBAAmB,CAAC,gGAAgG,oBAAoB,CAAC,iBAAiB,6BAA6B,CAAC,6BAA6B,CAAC,iBAAiB,CAAC,yBAAyB,gBAAgB,CAAC,0BAA0B,CAAC,qBAAqB,uBAAuB,CAAC,6BAA6B,CAAC,uBAAuB,aAAa,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,0BAA0B,CAAC,6CAA6C,aAAa,CAAC,gBAAgB,CAAC,0BAA0B,CAAC,uBAAuB,mBAAmB",file:"EcOrderInfo.scss",sourcesContent:[".order-info__number{color:var(--secondary);font-weight:var(--font-light);margin-top:var(--spacer-2)}.order-info__number span{font-weight:var(--font-bold)}.order-info__number small{color:var(--gray);display:block;font-size:var(--font-size-sm)}.order-info__timeline{display:flex;flex-wrap:nowrap;font-size:var(--font-size-sm);list-style:none;margin:var(--spacer-4) 0;overflow-x:auto;padding:0}@media(min-width:768px){.order-info__timeline{display:block}}.order-info__timeline-status{border-color:var(--border-color);border-style:solid;border-width:0 0 5px;margin-right:var(--spacer-1);min-width:165px;padding:var(--spacer-2)}@media(min-width:768px){.order-info__timeline-status{border-bottom-width:0;border-left-width:5px;margin-bottom:var(--spacer-1);margin-right:0;min-width:0;padding-left:var(--spacer-3)}}.order-info__timeline-status--pending,.order-info__timeline-status--under_analysis{border-color:var(--warning)}.order-info__timeline-status--shipped{border-color:var(--info)}.order-info__timeline-status--in_dispute,.order-info__timeline-status--unauthorized,.order-info__timeline-status--voided{border-color:var(--danger)}.order-info__timeline-status--delivered,.order-info__timeline-status--paid{border-color:var(--success)}.order-info__timeline-date{color:var(--text-muted);font-size:85%}.order-info__details:not(:first-child){margin-top:var(--spacer-4)}.order-info__payment,.order-info__shipping-address,.order-info__shipping-freight{margin-bottom:var(--spacer-3)}.order-info__financial-status,.order-info__fulfillment-status{color:var(--info);font-weight:var(--font-bold)}.order-info__financial-status--pending{color:var(--warning)}.order-info__financial-status--under_analysis{color:var(--info)}.order-info__financial-status--in_dispute,.order-info__financial-status--unauthorized,.order-info__financial-status--voided{color:var(--danger)}.order-info__financial-status--paid,.order-info__fulfillment-status--delivered,.order-info__new{color:var(--success)}.order-info__new{font-size:var(--font-size-lg);margin-bottom:var(--spacer-5);text-align:center}.order-info__orders-link{margin-left:auto;margin-top:var(--spacer-4)}.order-info__summary{background:var(--light);margin-bottom:var(--spacer-3)}.order-info__buy-again{display:block;margin-left:auto;margin-right:auto;margin-top:var(--spacer-3)}.order-info__toggle,.order-info__unsubscribe{display:block;margin-left:auto;margin-top:var(--spacer-5)}.order-info__cancelled{color:var(--danger)}"]}]),t.exports=e}}]);