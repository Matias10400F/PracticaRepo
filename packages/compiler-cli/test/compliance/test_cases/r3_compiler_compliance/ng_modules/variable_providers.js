const PROVIDERS = [{provide: new InjectionToken('token'), useValue: 1}];
class FooModule {}
FooModule.ɵfac = …;
FooModule.ɵmod = …;
FooModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({providers: PROVIDERS});
export { FooModule }