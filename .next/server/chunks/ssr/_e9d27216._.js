module.exports={563681:function(a){var{g:b,__dirname:c,m:d,e:e}=a;d.exports=a.r(844732)},764462:a=>{"use strict";var{g:b,__dirname:c}=a;a.s({default:()=>j});var d=a.i(669044),e=a.i(236348);(()=>{let a=Error("Cannot find module '../api'");throw a.code="MODULE_NOT_FOUND",a})();var f=a.i(137782),g=a.i(49431),h=a.i(712177),i=a.i(563681);function j(){(0,h.useMe)();let a=(0,i.useParams)(),b=a?.integrationType;return(0,e.useEffect)(()=>{let a=new URLSearchParams(window.location.search).get("code");gqlMutate(f.gql`
			mutation Mutate($code: String!, $integrationType: IntegrationType) {
				createIntegration(code: $code, integrationType: $integrationType) {
					id
				}
			}
		`,{code:a,integrationType:b}).then(()=>{window.location.href="/account/linked-accounts"}).catch(a=>{(0,g.toastError)(a)})},[]),(0,d.jsx)("div",{children:(0,d.jsx)("p",{children:"Linking account..."})})}},759978:a=>{"use strict";var{g:b,__dirname:c}=a;a.s({default:()=>f});var d=a.i(669044),e=a.i(764462);function f(){return(0,d.jsx)(e.default,{})}}};

//# sourceMappingURL=_e9d27216._.js.map