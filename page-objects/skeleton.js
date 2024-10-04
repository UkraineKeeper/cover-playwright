export const mainPageWebElements = {
    promoClash: '.c-banner-clashgg__inner',
    topTournamentsTitle: '.c-widget-homepage-top-tournaments .title-h5',
    lastLoadedHomePageElement: ':nth-child(2) > .c-table-matches-minified__group > .table-group__head > .table-cell > .table-cell__info > .event-details > .event-name', //'c-global-match-link table-row upcoming score-visible' //first
}

export const homepageTournamentsWidget = {
    title: ".o-widget--with-bg.c-widget-top-tournaments.u-margin-top-small > .o-widget__header", // "//div[contains(@class, 'c-widget-top-tournaments')]/div[contains(@class, 'header')]",
    widgetArea: ".o-widget--with-bg.c-widget-top-tournaments.u-margin-top-small", // "//div[contains(@class, 'c-widget-top-tournaments')]",
    tierLabels: ".o-list-bare__item.details-list__item > span", // "//li[@class='o-list-bare__item details-list__item']/div",
    ongoingTournament: ".table-group > .c-table-top-tournaments__row > .table-row:nth-of-type(2) > a", //'(//a[@class="table-cell event c-table-cell-tournament"])[1]',
    upcomingTournament: ".table-group > .table-row:nth-of-type(2) > a", // "(//a[@class='table-cell event c-table-cell-tournament'])[2]",
    finishedTournament: ".table-row > a.event--finished", // "//a[@class='table-cell event c-table-cell-tournament event--finished']",
    winnerLogoOnFinishedTour: '[class*= "c-table-cell-winners__winner"]', //div[@class='table-cell winners c-table-cell-winners']",
    bannerLogo: '[class*= "banner-container"]', //"//div[@class='banner-container']",
    overviewButton: ".buttons-container > ul > li:nth-of-type(1) > a", //"(//a[@class='c-button c-button--small c-button--widget-hover-overlay'])[1]",
    matchesButton: ".buttons-container > ul > li:nth-of-type(2) > a", //"(//a[@class='c-button c-button--small c-button--widget-hover-overlay'])[2]",
    resultsButton: ".buttons-container > ul > li:nth-of-type(1) > a", //"(//a[@class='c-button c-button--small c-button--widget-hover-overlay'])[3]",
    pickemLabel: ".o-badge.o-badge-status.c-badge-pickem-status.c-badge-pickem-label", //"//div[@class='c-badge-pickem-status__link']",
    allTournamentsButton: ".o-widget--with-bg.c-widget-top-tournaments.u-margin-top-small > .o-widget__footer" // "//div[@class='o-widget__footer']"
}

export const sidebarForum = {}

export const sidebarNews = {
    latestTopNewsTextEn: 'Latest top news',
    allNewsTextEn: 'All news'
}

export const sidebarMatches = {
    upcomingTopMatchesTextEn: 'Upcoming Top Matches',
    allMatchesTextEn: 'All matches'
}

export const sidebarPickemWidget = {
    titlePickemElement: "//div[@class='text']",
    weaponElement: 'div.c-card-prize.c-card-prize--tiny', // "//div[@class='c-card-prize c-card-prize--tiny']"
    tournamentNameElement: 'div.info > a.name',
    tierLabel: "//div[@class='description']//div[@class='o-tier-label o-tier-label--s']",
    participantCount: "//div[@class='participants']",
    goToPickemButton: 'c-button c-button--green-04-small', 
}

export const footerElements = {
    premiumSubscriptionElement: 'a[href*="/premium"]',
    helpUkraine: 'a[href*="/wiki/help-ukraine"]',
    footerMenu: 'div.c-main-footer__top > .menus-list',
}

export const firstEntryWebElements = {
    personalDataAgreementModal: "//div[@class='fc-dialog-content']",
    acceptPersonalDataAgreementModal: "//p[@class='fc-button-label' and text()='Погоджуюся']",
    spoilerModeModalTitle: 'div[class="vfm__content vfm--outline-none"] > header > h3',
    spoilerModeModal: '',
    spoilerModeConfirmationButton: 'button.c-button.c-button--full-width', //'div[class="o-modal__footer o-layout__item"] > button[class="c-button c-button--full-width"]',//'.o-modal__body > .o-modal__footer > .c-button',
    cookieNotificationWebElements: 'o-modal__container',
    cookiesOpenSettingsButton: 'button.c-button.c-button--secondary[type="button"]',
    cookiesConfirmButton: 'button[class="c-button c-button--secondary"] ~ button',
    switchLanguageModal: 'div.vfm__content.vfm--outline-none.vfm--prevent-auto',
    selectFirstLangInModal: 'div:not(.o-modal__container) > div.o-modal__footer > .c-button.c-button--secondary',
    selectSecondLangInModal: '',
}

export const menuPages = {
    headerLogoBo3: '.o-wrapper.o-wrapper--global > a',
    switchDiscipline: '.c-global-main-header-discipline-switcher__current > .discipline-row',
    selectVlr: ':nth-child(2) > .discipline-row',
    selectDota: ':nth-child(3) > .discipline-row',
    selectLol: ':nth-child(4) > .discipline-row',
    selectedDiscipline: 'div.discipline-row',
    hoverOnMatches: '.item-link[href*="/matches"]', //:nth-child(1) > .item-link',
    matchesIcon: ':nth-child(1) > .item-link > .o-icon',
    matchesUpcoming: '.item-link[href*="/matches/current"]', //'a.item-link[href$="matches/current"]',//'a[href="/matches/current"]',
    matchesFinished: 'li > [href*="/matches/finished"]', //'li:nth-child(1) li:nth-child(2) > a', //'a[href="/matches/finished"]',
    hoverOnTournaments: '.item-link[href*="/tournaments"]',//':nth-child(2) > .item-link',
    tournamentsUpcoming: 'li > .item-link[href*="/tournaments/current"]', //'div.c-main-menu a.item-link[href$="tournaments/current"]',
    tournamentsFinished: 'div.c-main-menu a[href$="tournaments/finished"]',
    players: 'li > a.item-link[href*="/players"]',
    hoverOnTeams: 'div.c-main-menu a.item-link[href*="teams/earnings"]',// ':nth-child(4) > .item-link',
    teamsEarnings: 'div.c-main-menu a.item-link[href$="teams/earnings"]',
    teamsValveRankings: 'div.c-main-menu a[href*="/teams/valve-rankings/world"]',
    hoverOnNews: '.item-link[href*="/news"]', //':nth-child(5) > .item-link',
    csAllNews: 'ul[class="c-main-menu-dropdown__list"] > li > [href*="/news"]', //'.item-link[href*="/news"]', //'li > a.item-link[href="/news"]',
    csAllArticles: 'ul.c-main-menu-dropdown__list > li > a[href*="/articles"]',
    csWiki: 'ul.c-main-menu-dropdown__list > li > a[href="/wiki/welcome"]',
    csForum: 'ul.c-main-menu-dropdown__list > li > a[href*="/forum"]',
    csAnalyticsNews: 'ul.c-main-menu-dropdown__list > li > a[href*="/analytics"]',
    hoverOnTools: ':nth-child(6) > .item-link',
    toolsRecords: 'ul.c-main-menu-dropdown__list > li > a[href*="/records"]',
    toolsTeamsCompare: 'ul.c-main-menu-dropdown__list > li > a[href="/tools/compare/teams"]',
    toolsPlayersCompare: 'ul.c-main-menu-dropdown__list > li > a[href="/tools/compare/players"]',
    pickems: 'div.c-main-menu li > a.item-link[href$="pickems"]',
    crosshairs: 'li > a[href*="/crosshair/generator"]',
    loginButton: ".c-main-header__actions-configs > .c-button",
    searchButton: ".c-global-main-header-search-toggle > button",
    searchInput: 'div.c-global-search-field__input',
    searchFirstSelection: 'a.router-link-active.router-link-exact-active.c-dropdown__item.focus',
    menuHeader: 'div.o-wrapper > .c-main-menu',
    wholeHeader: 'header.c-main-header',
}

export const loginModal = {
    emailInput: 'input[type="email"]',
    passwordInput: 'input[type="password"]',
    signInButton: 'button.c-button[type="submit"]',
    forgotPasswordButton: "",
    eyeIconForPW: ".password-visibility-icon"
}

export const profile = {
    avatar: '.toggler',
    userNameElement: '',
    profileArrowElement: '',
    logoutButton: ':nth-child(4) > .link',
}

export const websiteSearch = {
    s1mpleSearchSelection: "#player-s1mple",
}

export const homepageRecordsWidget = {
    playerRecordsTitleTextEn: '',
    teamRecordsTitleTextEn: '',
    tournamentRecordsTitleTextEn: '',
}

export const homepageTopPlayersWidget = {
    //
}

export const profilesSubMenu = {
    subMenuLine: '.c-profile-menu__wrapper',
    mapsMenuLine: '.c-nav-match-menu__maps',
    overviewTextEn: '',
    careerTextEn: '',
    matchesTextEn: '',
    tournamentsTextEn: '',
    statsTextEn: '',
    playoffTextEn: '',
    resultsTextEn: '',
    teamsTextEn: '',
    statsTextEn: '',
}

export const profileOverviewWidget = {
    //
}

export const profileNewsWidget = {
    playerNewsTitleTextEn: '',
    teamNewsTitleTextEn: '',
    tournamentNewsTitleTextEn: '',
}

export const profileMapsWidget = {
    //
}

export const profileIngameStatsWidget = {
    //
}

export const frequentText = {
    tbd: 'TBD',
    s1mple: 's1mple',
}