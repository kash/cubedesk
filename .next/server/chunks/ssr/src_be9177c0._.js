module.exports={198577:a=>{"use strict";var{g:b,__dirname:c}=a;a.s({default:()=>g});var d=a.i(669044),e=a.i(137782);(()=>{let a=Error("Cannot find module '../../api'");throw a.code="MODULE_NOT_FOUND",a})();var f=a.i(301085);function g(){async function a(){let a=e.gql`
			mutation Mutate {
				deleteUserAccount {
					id
				}
			}
		`;await gqlMutate(a),window.location.href="/"}return(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Be careful here. If you click the button below, you will delete your entire account. All of your solves, sessions, stats, etc. will get deleted forever. Proceed with caution."}),(0,d.jsx)(f.default,{danger:!0,large:!0,glow:!0,text:"Delete Account",confirmModalProps:{title:"Delete account",description:"Be careful here. You're about to delete your entire account. All of your CubeDesk will be deleted and will not be recoverable.",triggerAction:a,buttonText:"Delete account and all data"}})]})}},378174:a=>{"use strict";var{g:b,__dirname:c}=a;a.s({default:()=>f});var d=a.i(669044),e=a.i(198577);function f(){return(0,d.jsx)(e.default,{})}}};

//# sourceMappingURL=src_be9177c0._.js.map