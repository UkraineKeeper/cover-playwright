import {test} from "@playwright/test";
import { screenFullPage } from "../helpers/functions.test";
import { csMenuTextEn, footerTextEn, vlrMenuTextEn, dotaMenuTextEn, sidebarFiltersTextEn } from "../helpers/textFunctions.test";
import { visitHomePage, gotoVlr, moveToMatchesUpcoming, moveToMatchesFinished, moveToUpcomingTournaments, moveToFinishedTournaments, moveToAllPlayers, moveToTeamsEarnings, moveToTeamsValveRanking, moveToNews, moveToArticles, moveToWiki, moveToForum, moveToAnalytics, moveToRecords, moveToTeamsCompare, moveToPlayersCompare, moveToPickems, moveToCrosshairs, gotoDota, gotoLol } from "../helpers/navigateTo.test";

test.beforeEach(async ({ page }) => {
    await visitHomePage(page)
});

test.afterEach(async ({page}) => {
    await screenFullPage(page, test.info().title);
})

test.describe('Check texts for CS Pages', () => {

    test('tCSi-01 CS CS Live Match First', async ({ page }) => {

        await moveToMatchesUpcoming(page);
        await csMenuTextEn(page);
        await footerTextEn(page);


        // moveToFirstLiveMatch()
        // ingamePrematchAndLive()
        // ingameSidebarInfoTextEn()
        // sidebarNewsWidgetTextEn()
        // sidebarMatchesWidget()
    });


});