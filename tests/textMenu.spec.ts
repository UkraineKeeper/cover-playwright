import {test} from "@playwright/test";
import { csMenuTextEn, footerTextEn, vlrMenuTextEn, dotaMenuTextEn, sidebarFiltersTextEn } from "../helpers/textFunctions.test";
import { visitHomePage, gotoVlr, moveToMatchesUpcoming, moveToMatchesFinished, moveToUpcomingTournaments, moveToFinishedTournaments, moveToAllPlayers, moveToTeamsEarnings, moveToTeamsValveRanking, moveToNews, moveToArticles, moveToWiki, moveToForum, moveToAnalytics, moveToRecords, moveToTeamsCompare, moveToPlayersCompare, moveToPickems, moveToCrosshairs, gotoDota, gotoLol } from "../helpers/navigateTo.test";
import { screenFullPage } from "../helpers/functions.test";

test.beforeEach(async ({ page }) => {
    await visitHomePage(page)
});

test.afterEach(async ({page}) => {
    await screenFullPage(page, test.info().title);
})

test.describe('Check texts for CS Pages', () => {

    test('tCSm-01 CS HomePage', async ({ page }) => {

        await csMenuTextEn(page);
        await footerTextEn(page);
    });

    test('tCSm-02 CS Upcoming Matches', async ({ page }) => {

        await moveToMatchesUpcoming(page)
        await csMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tCSm-03 CS Finished Matches', async ({ page }) => {

        await moveToMatchesFinished(page)
        await csMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tCSm-04 CS Upcoming Tournaments', async ({ page }) => {

        await moveToUpcomingTournaments(page)
        await csMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tCSm-05 CS Finished Tournaments', async ({ page }) => {

        await moveToFinishedTournaments(page)
        await csMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tCSm-06 CS Players', async ({ page }) => {

        await moveToAllPlayers(page)
        await csMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tCSm-07 CS Team Earnings', async ({ page }) => {

        await moveToTeamsEarnings(page)
        await csMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tCSm-08 CS Team Valve Ranking', async ({ page }) => {

        await moveToTeamsValveRanking(page)
        await csMenuTextEn(page);
        await footerTextEn(page);
    });

    test('tCSm-09 CS News', async ({ page }) => {

        await moveToNews(page)
        await csMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tCSm-10 CS Articles', async ({ page }) => {

        await moveToArticles(page)
        await csMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tCSm-11 CS Wiki', async ({ page }) => {

        await moveToWiki(page)
        await csMenuTextEn(page);
        await footerTextEn(page);
    });

    test('tCSm-12 CS Forum', async ({ page }) => {

        await moveToForum(page)
        await csMenuTextEn(page);
        await footerTextEn(page);
    });

    test('tCSm-13 CS Analytics', async ({ page }) => {

        await moveToAnalytics(page)
        await csMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tCSm-14 CS Records', async ({ page }) => {

        await moveToRecords(page)
        await csMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tCSm-15 CS Compare Teams', async ({ page }) => {

        await moveToTeamsCompare(page)
        await csMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tCSm-16 CS Compare Players', async ({ page }) => {

        await moveToPlayersCompare(page)
        await csMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tCSm-17 CS Pickems', async ({ page }) => {

        await moveToPickems(page)
        await csMenuTextEn(page);
        await footerTextEn(page);
    });


    test('tVLRm-01 Vlr Homepage', async ({ page }) => {

        await gotoVlr(page)
        await vlrMenuTextEn(page);
        await footerTextEn(page);
    });

    test('tVLRm-02 Vlr Upcoming Matches', async ({ page }) => {

        await gotoVlr(page)
        await moveToMatchesUpcoming(page)
        await vlrMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tVLRm-03 Vlr Finished Matches', async ({ page }) => {

        await gotoVlr(page)
        await moveToMatchesFinished(page)
        await vlrMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tVLRm-04 Vlr Upcoming Tournaments', async ({ page }) => {

        await gotoVlr(page)
        await moveToUpcomingTournaments(page)
        await vlrMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tVLRm-05 Vlr Finished Tournaments', async ({ page }) => {

        await gotoVlr(page)
        await moveToFinishedTournaments(page)
        await vlrMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tVLRm-06 Vlr Players', async ({ page }) => {

        await gotoVlr(page)
        await moveToAllPlayers(page)
        await vlrMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tVLRm-07 Vlr Team Earnings', async ({ page }) => {

        await gotoVlr(page)
        await moveToTeamsEarnings(page)
        await vlrMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tVLRm-08 Vlr News', async ({ page }) => {

        await gotoVlr(page)
        await moveToNews(page)
        await vlrMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tVLRm-09 Vlr Articles', async ({ page }) => {

        await gotoVlr(page)
        await moveToArticles(page)
        await vlrMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tVLRm-10 Vlr Forum', async ({ page }) => {

        await gotoVlr(page)
        await moveToForum(page)
        await vlrMenuTextEn(page);
        await footerTextEn(page);
    });

    test('tVLRm-11 Vlr Analytics', async ({ page }) => {

        await gotoVlr(page)
        await moveToAnalytics(page)
        await vlrMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tVLRm-12 Vlr Pickems', async ({ page }) => {

        await gotoVlr(page)
        await moveToPickems(page)
        await vlrMenuTextEn(page);
        await footerTextEn(page);
    });

    test('tVLRm-13 Vlr Crosshairs', async ({ page }) => {

        await gotoVlr(page)
        await moveToCrosshairs(page)
        await vlrMenuTextEn(page);
        await footerTextEn(page);
    });


    test('tDOTAm-01 Dota Homepage', async ({ page }) => {

        await gotoDota(page)
        await dotaMenuTextEn(page);
        await footerTextEn(page);
    });

    test('tDOTAm-02 Dota Upcoming Matches', async ({ page }) => {

        await gotoDota(page)
        await moveToMatchesUpcoming(page)
        await dotaMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tDOTAm-03 Dota Finished Matches', async ({ page }) => {

        await gotoVlr(page)
        await moveToMatchesFinished(page)
        await dotaMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tDOTAm-08 Dota News', async ({ page }) => {

        await gotoVlr(page)
        await moveToNews(page)
        await dotaMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tDOTAm-09 Dota Articles', async ({ page }) => {

        await gotoVlr(page)
        await moveToArticles(page)
        await dotaMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tDOTAm-11 Dota Analytics', async ({ page }) => {

        await gotoVlr(page)
        await moveToAnalytics(page)
        await dotaMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tLOLm-01 LoL Homepage', async ({ page }) => {

        await gotoLol(page)
        await dotaMenuTextEn(page);
        await footerTextEn(page);
    });

    test('tLOLm-02 LoL Upcoming Matches', async ({ page }) => {

        await gotoLol(page)
        await moveToMatchesUpcoming(page)
        await dotaMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tLOLm-03 LoL Finished Matches', async ({ page }) => {

        await gotoLol(page)
        await moveToMatchesFinished(page)
        await dotaMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tLOLm-08 LoL News', async ({ page }) => {

        await gotoLol(page)
        await moveToNews(page)
        await dotaMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tLOLm-09 LoL Articles', async ({ page }) => {

        await gotoLol(page)
        await moveToArticles(page)
        await dotaMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

    test('tLOLm-11 LoL Analytics', async ({ page }) => {

        await gotoLol(page)
        await moveToAnalytics(page)
        await dotaMenuTextEn(page);
        await footerTextEn(page);
        await sidebarFiltersTextEn(page)
    });

});