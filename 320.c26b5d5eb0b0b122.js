"use strict";(self.webpackChunktask_planner=self.webpackChunktask_planner||[]).push([[320],{2320:(A,p,r)=>{r.r(p),r.d(p,{AuthModule:()=>P});var a=r(6895),l=r(2655),c=r(120),o=r(433),g=r(3507),t=r(1571),f=r(629),d=r(4015),y=r(1271),v=r(4767);function C(e,h){if(1&e&&(t.TgZ(0,"small",7),t._uU(1),t.ALo(2,"getErrorMessage"),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.hij(" ",t.gM2(2,1,i.control.errors,i.label,i.maxlength,i.minlength)," ")}}const b=function(e){return{"was-validated is-invalid":e}},w=function(e,h){return{"bi bi-eye-slash":e,"bi bi-eye":h}};var u=(()=>{return(e=u||(u={})).password="password",e.text="text",u;var e})();let m=(()=>{class e extends y.b{constructor(i,n){super(i,n),this.type=u.password,this.ngControl.valueAccessor=this}changeVisibility(){this.type=this.type!==u.password?u.password:u.text}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(o.a5,10),t.Y36(t.sBO))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-password-input"]],inputs:{placeholder:"placeholder",label:"label",disabled:"disabled"},standalone:!0,features:[t.qOj,t.jDz],decls:8,vars:12,consts:[[1,"flex-layout","needs-validation"],["htmlFor","inputPassword"],[1,"input-group"],["id","inputPassword",1,"form-control",3,"type","ngClass","placeholder","formControl"],[1,"input-group-text",3,"click"],[3,"ngClass"],[3,"ngIf"],[1,"error"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"label",1),t._uU(2),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"input",3),t.TgZ(5,"span",4),t.NdJ("click",function(){return s.changeVisibility()}),t._UZ(6,"i",5),t.qZA()(),t.YNc(7,C,3,6,"ng-template",6),t.qZA()),2&n&&(t.xp6(2),t.Oqu(s.label),t.xp6(2),t.Q6J("type",s.type)("ngClass",t.VKq(7,b,s.control.dirty&&s.control.invalid))("placeholder",s.placeholder||"")("formControl",s.control),t.xp6(2),t.Q6J("ngClass",t.WLB(9,w,"password"===s.type,"text"===s.type)),t.xp6(1),t.Q6J("ngIf",s.control.errors&&s.control.dirty))},dependencies:[a.ez,a.mk,a.O5,o.UX,o.Fj,o.JJ,o.oH,v.o],styles:[".input-group-text[_ngcontent-%COMP%]{cursor:pointer}.flex-layout[_ngcontent-%COMP%]{width:inherit;width:100%;display:flex;flex-direction:column}"],changeDetection:0})}return e})();const Z=[{path:c.tH.path,component:(()=>{class e{constructor(i,n,s){this.fb=i,this.authService=n,this.router=s,this.loginForm=this.fb.group({email:["",[o.kI.required,o.kI.email]],password:["",[o.kI.required,o.kI.minLength(8)]]})}submit(){this.loginForm.invalid?(0,g.W)(this.loginForm.controls):(this.authService.setIsLogin(!0),this.router.navigate([c.Sd.fullPath]))}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(o.qu),t.Y36(f.e),t.Y36(l.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-login-page"]],decls:5,vars:1,consts:[[3,"formGroup"],["label","\u041f\u043e\u0447\u0442\u0430","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u043f\u043e\u0447\u0442\u044b","formControlName","email"],["label","\u041f\u0430\u0440\u043e\u043b\u044c","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c","formControlName","password"],["type","button",1,"btn","btn-secondary",3,"click"]],template:function(n,s){1&n&&(t.TgZ(0,"form",0),t._UZ(1,"app-text-input",1)(2,"app-password-input",2),t.TgZ(3,"button",3),t.NdJ("click",function(){return s.submit()}),t._uU(4," \u0412\u043e\u0439\u0442\u0438 "),t.qZA()()),2&n&&t.Q6J("formGroup",s.loginForm)},dependencies:[o._Y,o.JJ,o.JL,o.sg,o.u,d.t,m],styles:["form[_ngcontent-%COMP%]{width:15rem;display:flex;flex-direction:column;gap:1rem}"],changeDetection:0})}return e})()}];let J=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(Z),l.Bz]})}return e})(),P=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[a.ez,o.UX,J,d.t,m]})}return e})()}}]);