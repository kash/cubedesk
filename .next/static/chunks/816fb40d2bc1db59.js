(globalThis.TURBOPACK=globalThis.TURBOPACK||[]).push(["object"==typeof document?document.currentScript:void 0,{266950:function(t){var{g:e,__dirname:i,m:n,e:r}=t;n.exports=t.r(164009)},997287:t=>{"use strict";var{g:e,__dirname:i}=t;t.s({default:()=>s});var n=t.i(168111),r=t.i(498343);(()=>{let t=Error("Cannot find module '../api'");throw t.code="MODULE_NOT_FOUND",t})();var o=t.i(932140),a=t.i(310432),c=t.i(664830),u=t.i(266950);function s(){(0,c.useMe)();let t=(0,u.useParams)(),e=t?.integrationType;return(0,r.useEffect)(()=>{let t=new URLSearchParams(window.location.search).get("code");gqlMutate(o.gql`
			mutation Mutate($code: String!, $integrationType: IntegrationType) {
				createIntegration(code: $code, integrationType: $integrationType) {
					id
				}
			}
		`,{code:t,integrationType:e}).then(()=>{window.location.href="/account/linked-accounts"}).catch(t=>{(0,a.toastError)(t)})},[]),(0,n.jsx)("div",{children:(0,n.jsx)("p",{children:"Linking account..."})})}},282790:t=>{"use strict";var{g:e,__dirname:i}=t;t.s({default:()=>o});var n=t.i(168111),r=t.i(997287);function o(){return(0,n.jsx)(r.default,{})}}}]);

//# sourceMappingURL=7ed38c24cc59e628.js.map