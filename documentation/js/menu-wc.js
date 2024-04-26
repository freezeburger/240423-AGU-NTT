'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ntt-first documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-b0bb343999c0401a2e3ecbec65490c5a76866396b25cae82ed79702c1d4e115033ea8c8ade9395518e8eba42217f2ec5d6c7a62f3d969b3ab2838fe206d56a66"' : 'data-bs-target="#xs-components-links-module-AppModule-b0bb343999c0401a2e3ecbec65490c5a76866396b25cae82ed79702c1d4e115033ea8c8ade9395518e8eba42217f2ec5d6c7a62f3d969b3ab2838fe206d56a66"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b0bb343999c0401a2e3ecbec65490c5a76866396b25cae82ed79702c1d4e115033ea8c8ade9395518e8eba42217f2ec5d6c7a62f3d969b3ab2838fe206d56a66"' :
                                            'id="xs-components-links-module-AppModule-b0bb343999c0401a2e3ecbec65490c5a76866396b25cae82ed79702c1d4e115033ea8c8ade9395518e8eba42217f2ec5d6c7a62f3d969b3ab2838fe206d56a66"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FeatUserModule.html" data-type="entity-link" >FeatUserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FeatUserModule-4e866e5863d1ad3fc9dc35817f3539cd00759260728c5b268ec4d0893ba62f0429810ec3d26970d796f02f16548352bccba3e2c1f51ba3518941752f12b74618"' : 'data-bs-target="#xs-components-links-module-FeatUserModule-4e866e5863d1ad3fc9dc35817f3539cd00759260728c5b268ec4d0893ba62f0429810ec3d26970d796f02f16548352bccba3e2c1f51ba3518941752f12b74618"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeatUserModule-4e866e5863d1ad3fc9dc35817f3539cd00759260728c5b268ec4d0893ba62f0429810ec3d26970d796f02f16548352bccba3e2c1f51ba3518941752f12b74618"' :
                                            'id="xs-components-links-module-FeatUserModule-4e866e5863d1ad3fc9dc35817f3539cd00759260728c5b268ec4d0893ba62f0429810ec3d26970d796f02f16548352bccba3e2c1f51ba3518941752f12b74618"' }>
                                            <li class="link">
                                                <a href="components/FeatUserCreationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeatUserCreationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeatUserListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeatUserListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeatUserSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeatUserSearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeatUserRoutingModule.html" data-type="entity-link" >FeatUserRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsModule.html" data-type="entity-link" >ViewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ViewsModule-3bfad1ad8e35730c2d258e8bf9106ee1f52fe9ba9f8aab2ff4d25ae12bf0d625b1a7809f832923628f3841e5f5a502db444333208b3ad8a6a90b2a8d2b3355b3"' : 'data-bs-target="#xs-components-links-module-ViewsModule-3bfad1ad8e35730c2d258e8bf9106ee1f52fe9ba9f8aab2ff4d25ae12bf0d625b1a7809f832923628f3841e5f5a502db444333208b3ad8a6a90b2a8d2b3355b3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewsModule-3bfad1ad8e35730c2d258e8bf9106ee1f52fe9ba9f8aab2ff4d25ae12bf0d625b1a7809f832923628f3841e5f5a502db444333208b3ad8a6a90b2a8d2b3355b3"' :
                                            'id="xs-components-links-module-ViewsModule-3bfad1ad8e35730c2d258e8bf9106ee1f52fe9ba9f8aab2ff4d25ae12bf0d625b1a7809f832923628f3841e5f5a502db444333208b3ad8a6a90b2a8d2b3355b3"' }>
                                            <li class="link">
                                                <a href="components/ViewUserEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewUserEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewUserListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewUserListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsRoutingModule.html" data-type="entity-link" >ViewsRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeliveryAddress.html" data-type="entity-link" >DeliveryAddress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Geo.html" data-type="entity-link" >Geo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});