export const allMatchesHeader = {
    upcomingMatchesToggle: '.c-global-switch-menu > .o-list-bare > .current', // хоч і один але не відпрацьовує'li.o-list-bare__item.current > a[aria-current="page"].router-link-active.router-link-exact-active.c-global-switch-menu__item',
    currentMatchesToggle: ':nth-child(2) > .c-global-switch-menu__item',
    popularFilterOne: ':nth-child(1) > .c-tags__item-inner',
    popularFilterTwo: ':nth-child(2) > .c-tags__item-inner',
    popularFilterThree: ':nth-child(3) > .c-tags__item-inner',
    popularFilterFour: ':nth-child(4) > .c-tags__item-inner',
    popularFilterFive: ':nth-child(5) > .c-tags__item-inner',
    h1UpcomingTextEn: '',
    h1ResultsTextEn: '',
}

export const allMatchesSidebar = {
    sidebarStierFilter: '.c-filters-tier > .o-filter__item-inner > .o-list-bare > :nth-child(1) > .o-input-checkbox > label > .o-input-checkbox__mark',
    sidebarAtierFilter: '.c-filters-tier > .o-filter__item-inner > .o-list-bare > :nth-child(2) > .o-input-checkbox > label > .o-input-checkbox__mark',
    sidebarBtierFilter: '.c-filters-tier > .o-filter__item-inner > .o-list-bare > :nth-child(3) > .o-input-checkbox > label > .o-input-checkbox__mark',
    sidebarCtierFilter: '.c-filters-tier > .o-filter__item-inner > .o-list-bare > :nth-child(4) > .o-input-checkbox > label > .o-input-checkbox__mark',
    sidebarDtierFilter: '.c-filters-tier > .o-filter__item-inner > .o-list-bare > :nth-child(5) > .o-input-checkbox > label > .o-input-checkbox__mark',
    sidebarTournamentFilter: '#vs1__combobox > .vs__selected-options > .vs__search',
    sidebatBo1FormatFilter: '.c-filters-format > .o-filter__item-inner > .o-list-bare > :nth-child(1) > .o-input-checkbox > label > .o-input-checkbox__mark',
    sidebatBo2FormatFilter: '.c-filters-format > .o-filter__item-inner > .o-list-bare > :nth-child(2) > .o-input-checkbox > label > .o-input-checkbox__mark',
    sidebatBo3FormatFilter: '.c-filters-format > .o-filter__item-inner > .o-list-bare > :nth-child(3) > .o-input-checkbox > label > .o-input-checkbox__mark',
    sidebatBo5FormatFilter: '.c-filters-format > .o-filter__item-inner > .o-list-bare > :nth-child(5) > .o-input-checkbox > label > .o-input-checkbox__mark',
    sidebarPlayerFilter: '#vs2__combobox > .vs__selected-options > .vs__search',
    sidebarTeamFilter: '#vs3__combobox > .vs__selected-options > .vs__search',
}

export const allMatchesContent = {
    liveMatchesTitle: '.c-matches-group-rows__title',
    liveMatchesContainer: '',
    liveMatchesRawMultiple: '.table-row--current',
    liveMatchesClickableArea: '.table-row--current > a',
    firstLiveMatchRaw: '',
    firstUpcomingMatchRaw: '',
    upcomingMatchRawMultiple: '.table-row--upcoming',
    finishedMatchRawMultiple: '.table-row--finished',
    finishedMatchAdvantageDataLabelMultiple: '.o-icon.advantage.o-icon--data-full',
    finishedMatchBasicDataLabelMultiple: '.o-icon.o-icon--data-full:not(.advantage)',
    finishedMatchNoDataLabelMultiple: '.c-table-cell-coverage.coverage.table-cell.basic.minified:not(:has(.tooltip-hint-trigger))',
    finishedFullVlr: '.o-icon.advantage.o-icon--data-full',
    finishedNoDataVlr: '.c-table-cell-coverage.coverage.table-cell.basic',
    lastLoadedUpcomingMatchesElement: ':nth-child(1) > :nth-child(1) > :nth-child(3) > .table-group__body > .table-body > :nth-child(1) > :nth-child(2) > .c-global-match-link',
    lastLoadedFinishedMatchesElement: ':nth-child(1) > :nth-child(1) > .c-matches-group-rows > .table-group__body > .table-body > :nth-child(1) > :nth-child(2) > .c-global-match-link',
}

export const ingamePages = {
    lineupWidgetTeamA: '.c-widget-match-lineup--a',
    lineupWidgetTeamB: '.c-widget-match-lineup--b',
    commentsTopCounter: 'div.c-nav-match-global__comments--desktop > p',
}

export const ingameResultNavigation = {
    tabOverview: 'li[class^="c-profile-menu-link"]', //first
    tabPerformance: 'li[class^="c-profile-menu-link"] > a[href$="/performance"]',
    tabAim: 'li[class^="c-profile-menu-link"] > a[href$="/aim"]',
    tabGranades: 'li[class^="c-profile-menu-link"] > a[href$="/grenades"]',
    tabDevices: 'li[class^="c-profile-menu-link"] > a[href$="/devices"]',
    tabEconomy: 'li[class^="c-profile-menu-link"] > a[href$="/economy"]',
    tabFullMatch: '',
    tabMap1: '',
    tabMap2: '',
    tabMap3: '',
    tabMap4: '',
    tabMap5: ''
}

export const ingameOverviewTabIngameStatsCompareWidget = {
    firstTeamNavTabs: '.c-tabs-nav.c-tabs-nav-team.team1',
    secondTeamNavTabs: '.c-tabs-nav.c-tabs-nav-team.team2',
}

export const ingamePerformanceTab = {
    killMatrixWidgetFull: '.o-matrix',
}

export const imgameAimTab = {
    totalAccuracyWidgetFullDoubled: '.c-widget-match-total-accuracy'
}