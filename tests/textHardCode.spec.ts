import {test, expect} from "@playwright/test";
import { screenFullPage, checkWebPageSkeleton } from "../helpers/functions.test";
import { csMenuTextEn, vlrMenuTextEn, dotaMenuTextEn,  footerTextEn } from "../helpers/textFunctions.test";
import { firstEntryWebElements, footerElements, menuPages } from "../page-objects/skeleton";

test.afterEach(async ({ page }, testInfo) => {
    await checkWebPageSkeleton(page);
    await screenFullPage(page, testInfo.title);
});

export async function clickModals(page) {
    await page.locator(firstEntryWebElements.spoilerModeConfirmationButton).click({ timeout: 30000 });
    await page.locator(firstEntryWebElements.cookiesConfirmButton).click({ timeout: 30000 });
    await page.locator(firstEntryWebElements.selectFirstLangInModal).click({ timeout: 30000 });
}

test.describe('Check texts for CS Ingame', () => { // 

    test('hctCSi-01 CS Live Match First', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/matches/b8-vs-jano-esports-18-10-2024');
        await clickModals(page);
    });

    test.skip('hctCSi-02 CS Live Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/matches/aurora-gaming-vs-nemiga-17-10-2024');
        await clickModals(page);
    });

    test('hctCSi-03 CS Upcoming Match First', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/matches/saw-vs-falcons-esports-25-10-2024');
        await clickModals(page);
    });

    test('hctCSi-04 CS Upcoming Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/matches/tyloo-cs-go-vs-atox-02-11-2024');
        await clickModals(page);
    });

    test('hctCSi-05 CS Finished Match First', async ({ page }) => {
        await page.goto('/pt/matches/g2-vs-liquid-20-09-2024');
        await clickModals(page);
    });

    test('hctCSi-06 CS Finished Match Second', async ({ page }) => {
        await page.goto('/pt/matches/natus-vincere-vs-spirit-20-09-2024');
        await clickModals(page);
    });

    test('hctCSi-07 CS Advanced Finished Match', async ({ page }) => {
        await page.goto('/pt/matches/insanity-vs-oddik-19-09-2024/nuke');
        await clickModals(page);
    });

    test('hctCSi-08 CS Basic Finished Match', async ({ page }) => {
        await page.goto('/pt/matches/phoenix-vs-final-form-cs-20-09-2024');
        await clickModals(page);
    });

    test('hctCSi-09 CS No Data Finished Match', async ({ page }) => {
        await page.goto('/pt/matches/sinners-vs-dynamo-eclot-20-09-2024');
        await clickModals(page);
    });

    test('hctCSi-10 CS Bo1 Advanced Finished Match', async ({ page }) => {
        await page.goto('/pt/matches/imperial-vs-oddik-06-09-2024/inferno');
        await clickModals(page);
    });
    
    test('hctCSi-11 CS Bo1 Basic Finished Match', async ({ page }) => {
        await page.goto('/pt/matches/revenge-nation-vs-limitless-05-09-2024/anubis');
        await clickModals(page);
    });
    
    test('hctCSi-12 CS Bo1 No Data Finished Match', async ({ page }) => {
        await page.goto('/pt/matches/dynamo-eclot-vs-brute-05-09-2024');
        await clickModals(page);
    });

    test('hctCSi-13 CS Basic Map', async ({ page }) => {
        await page.goto('/pt/matches/incontrol-vs-detonate-21-09-2024/ancient');
        await clickModals(page);
    });

    test('hctCSi-14 CS Advanced Map', async ({ page }) => {
        await page.goto('/pt/matches/permitta-vs-ecstatic-21-09-2024/ancient');
        await clickModals(page);
    });

    test('hctCSi-15 CS Round', async ({ page }) => {
        await page.goto('/pt/matches/eyeballers-vs-nexus-19-09-2024/nuke/round-29');
        await clickModals(page);
    });

    test('hctCSi-16 CS Performance', async ({ page }) => {
        await page.goto('/pt/matches/lag-gaming-vs-legacy-br-20-09-2024/dust2/performance');
        await clickModals(page);
    });

    test('hctCSi-17 CS Aim', async ({ page }) => {
        await page.goto('/pt/matches/natus-vincere-junior-vs-spirit-academy-21-09-2024/aim');
        await clickModals(page);
    });

    test('hctCSi-18 CS Granades', async ({ page }) => {
        await page.goto('/pt/matches/eyeballers-vs-k27-21-09-2024/grenades');
        await clickModals(page);
    });

    test('hctCSi-19 CS Devices', async ({ page }) => {
        await page.goto('/pt/matches/gaimingladiators-vs-kono-ecf-21-09-2024/devices');
        await clickModals(page);
    });

    test('hctCSi-20 CS Economy', async ({ page }) => {
        await page.goto('/pt/matches/rhyno-vs-quazar-21-09-2024/economy');
        await clickModals(page);
    });

    test('hctCSi-21 CS Round Performance', async ({ page }) => {
        await page.goto('/pt/matches/9-pandas-vs-copenhagen-wolves-19-09-2024/anubis/round-30/performance');
        await clickModals(page);
    });

    test('hctCSi-22 CS Round Aim', async ({ page }) => {
        await page.goto('/pt/matches/zero-tenacity-vs-favbet-19-09-2024/nuke/round-18/aim');
        await clickModals(page);
    });

    test('hctCSi-23 CS Round Granades', async ({ page }) => {
        await page.goto('/pt/matches/9ine-vs-sinners-19-09-2024/nuke/round-30/grenades');
        await clickModals(page);
    });

    test('hctCSi-24 CS Round Devices', async ({ page }) => {
        await page.goto('/pt/matches/sashi-esport-vs-monte-19-09-2024/nuke/round-30/devices');
        await clickModals(page);
    });

    test('hctCSi-25 CS Round Economy', async ({ page }) => {
        await page.goto('/pt/matches/johnny-speeds-vs-alliance-cs-19-09-2024/ancient/round-24/economy');
        await clickModals(page);
    });
});

test.describe('Check texts for VLR Ingame', () => { // 

    test.skip('HardCode-tVLRi-01 VLR Live Match First', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/valorant/matches/boba-vs-fennel-female-03-10-2024');
        await clickModals(page);
    });

    test.skip('HardCode-tVLRi-02 VLR Live Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/');
        await clickModals(page);
    });

    test('hctVLRi-03 VLR Upcoming Match First', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/valorant/matches/happy-game-esport-vs-szk-esports-18-10-2024');
        await clickModals(page);
    });

    test('hctVLRi-04 VLR Upcoming Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/valorant/matches/flyquest-red-vlr-vs-shopify-rebellion-18-10-2024');
        await clickModals(page);
    });

    test('hctVLRi-05 VLR Finished Match First', async ({ page }) => {
        await page.goto('/pt/valorant/matches/naos-esports-vs-boom-esports-20-09-2024');
        await clickModals(page);
    });

    test('hctVLRi-06 VLR Finished Match Second', async ({ page }) => {
        await page.goto('/pt/valorant/matches/full-sense-vs-oblivion-force-20-09-2024');
        await clickModals(page);
    });

    test('hctVLRi-07 VLR Full Data Finished Match', async ({ page }) => {
        await page.goto('/pt/valorant/matches/all-knights-1-vs-galorys-18-09-2024');
        await clickModals(page);
    });

    test('hctVLRi-08 VLR No Data Finished Match', async ({ page }) => {
        await page.goto('/pt/valorant/matches/all-knights-1-vs-m80-20-09-2024');
        await clickModals(page);
    });

    test('hctVLRi-09 VLR Bo1 Full Data Finished Match', async ({ page }) => {
        await page.goto('/pt/valorant/matches/rtzn-vs-dsyre-29-06-2024/icebox');
        await clickModals(page);
    });

    test('hctVLRi-10 VLR Bo1 No Data Finished Match', async ({ page }) => {
        await page.goto('/pt/valorant/matches/spongebob-vs-lgbtq-09-07-2024');
        await clickModals(page);
    });

    test('hctVLRi-11 VLR Performance', async ({ page }) => {
        await page.goto('/pt/valorant/matches/disguised-vs-full-sense-21-09-2024/performance');
        await clickModals(page);
    });

    test('hctVLRi-12 VLR Aim', async ({ page }) => {
        await page.goto('/pt/valorant/matches/riddle-esports-vs-sin-prisa-gaming-21-09-2024/aim');
        await clickModals(page);
    });

    test('hctVLRi-13 VLR Devices', async ({ page }) => {
        await page.goto('/pt/valorant/matches/naos-esports-vs-boom-esports-20-09-2024/devices');
        await clickModals(page);
    });

    test('hctVLRi-14 VLR Economy', async ({ page }) => {
        await page.goto('/pt/valorant/matches/full-sense-vs-oblivion-force-20-09-2024/economy');
        await clickModals(page);
    });

    test('hctVLRi-15 VLR Round Performance', async ({ page }) => {
        await page.goto('/pt/valorant/matches/m80-vs-2game-esports-18-09-2024/sunset/performance');
        await clickModals(page);
    });

    test('hctVLRi-16 VLR Round Aim', async ({ page }) => {
        await page.goto('/pt/valorant/matches/nasr-ignite-vs-karmine-corp-gc-17-09-2024/bind/aim');
        await clickModals(page);
    });

    test('hctVLRi-17 VLR Round Devices', async ({ page }) => {
        await page.goto('/pt/valorant/matches/giantx-gc-vs-valiant-gc-17-09-2024/lotus/devices');
        await clickModals(page);
    });

    test('hctVLRi-18 VLR Round Economy', async ({ page }) => {
        await page.goto('/pt/valorant/matches/all-knights-1-vs-tsm-1-16-09-2024/sunset/economy');
        await clickModals(page);
    });
});

test.describe('Check texts for Dota Ingame', () => { // 

    test('hctDOTAi-01 Dota Live Match First', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/dota2/matches/virtuspro-vs-dragon-esports-dota2-18-10-2024');
        await clickModals(page);
    });

    test.skip('HardCode-tDOTAi-02 Dota Live Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/dota2/matches/one-move-vs-dms-10-10-2024');
        await clickModals(page);
    });

    test('hctDOTAi-03 Dota Upcoming Match First', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/dota2/matches/betboom-team-dota2-vs-team-liquid-dota2-20-10-2024');
        await clickModals(page);
    });

    test('hctDOTAi-04 Dota Upcoming Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/dota2/matches/team-spirit-vs-l1ga-team-21-10-2024');
        await clickModals(page);
    });

    test('hctDOTAi-05 Dota Finished Match First', async ({ page }) => {
        await page.goto('/pt/dota2/matches/one-move-vs-passion-ua-dota2-19-09-2024');
        await clickModals(page);
    });

    test('hctDOTAi-06 Dota Finished Match Second', async ({ page }) => {
        await page.goto('/pt/dota2/matches/palianytsia-vs-navi-junior-19-09-2024');
        await clickModals(page);
    });

    test('hctDOTAi-07 Dota Full Data Finished Match', async ({ page }) => {
        await page.goto('/pt/dota2/matches/tt-infinbank-vs-avulus-16-09-2024');
        await clickModals(page);
    });

    test.skip('HardCode-tDOTAi-08 Dota No Data Finished Match', async ({ page }) => {
        await page.goto('/pt/');
        await clickModals(page);
    });

    test('hctDOTAi-09 Dota Map', async ({ page }) => {
        await page.goto('/pt/dota2/matches/1win-1-vs-avulus-30-08-2024/map-5');
        await clickModals(page);
    });
});

test.describe('Check texts for LoL Ingame', () => { // 

    test('hctLOLi-01 LoL Live Match First', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/lol/hanwha-life-esports-vs-bilibili-gaming-lol-18-10-2024');
        await clickModals(page);
    });

    test.skip('HardCode-tLOLi-02 LoL Live Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/');
        await clickModals(page);
    });

    test('hctLOLi-03 LoL Upcoming Match First', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/lol/matches/ramboot-club-lol-vs-ucam-esports-club-lol-30-10-2024');
        await clickModals(page);
    });

    test('hctLOLi-04 LoL Upcoming Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/lol/matches/barca-esports-lol-vs-rebels-gaming-lol-30-10-2024');
        await clickModals(page);
    });

    test('hctLOLi-05 LoL Finished Match First', async ({ page }) => {
        await page.goto('/pt/lol/matches/kwangdong-freecs-challengers-vs-dplus-kia-challengers-21-09-2024');
        await clickModals(page);
    });

    test('hctLOLi-06 LoL Finished Match Second', async ({ page }) => {
        await page.goto('/pt/lol/matches/zero-tenacity-lol-vs-berlin-international-gaming-21-09-2024');
        await clickModals(page);
    });

    test.skip('HardCode-tLOLi-07 LoL Full Data Finished Match', async ({ page }) => {
        await page.goto('/pt/');
        await clickModals(page);
    });

    test.skip('HardCode-tLOLi-08 LoL No Data Finished Match', async ({ page }) => {
        await page.goto('/pt/');
        await clickModals(page);
    });

    test('hctLOLi-09 LoL Map', async ({ page }) => {
        await page.goto('/pt/lol/matches/karmine-corp-blue-vs-vitalitybee-30-09-2024/map-1');
        await clickModals(page);
    });
});

test.describe('Check texts for CS Profiles + Content', () => { //
    test('hctCSp-01 CS Tournament Overview', async ({ page }) => {
        await page.goto('/pt/tournaments/esl-pro-league-season-20', {waitUntil: "load"});
        await clickModals(page);
    });

    test('hctCSp-02 CS Tournament Stages', async ({ page }) => {
        await page.goto('/pt/tournaments/galaxy-battle-1#tab-stages');
        await clickModals(page);
    });

    test('hctCSp-03 CS Tournament Pickems', async ({ page }) => {
        await page.goto('/pt/tournaments/iem-cologne-2024/pickems');
        await clickModals(page);
    });

    test('hctCSp-04 CS Tournament Results', async ({ page }) => {
        await page.goto('/pt/tournaments/esl-challengel-asia-48/results');
        await clickModals(page);
    });

    test('hctCSp-05 CS Tournament Matches', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/tournaments/cct-season-2-european-series-14/matches');
        await clickModals(page);
    });

    test('hctCSp-06 CS Tournament Teams', async ({ page }) => {
        await page.goto('/pt/tournaments/yalla-compass-summer-2024#tab-teams');
        await clickModals(page);
    });

    test('hctCSp-07 CS Tournament Stats', async ({ page }) => {
        await page.goto('/pt/tournaments/esports-world-cup-2024#tab-stats');
        await clickModals(page);
    });

    test('hctCSp-08 CS Player Overview', async ({ page }) => {
        await page.goto('/pt/players/zywoo');
        await clickModals(page);
    });

    test('hctCSp-09 CS Player Career', async ({ page }) => {
        await page.goto('/pt/players/r1nkle#tab-career');
        await clickModals(page);
    });

    test('hctCSp-10 CS Player Matches', async ({ page }) => {
        await page.goto('/pt/players/jl-cs-go/matches');
        await clickModals(page);
    });

    test('hctCSp-11 CS Player Tournaments', async ({ page }) => {
        await page.goto('/pt/players/b1t/tournaments');
        await clickModals(page);
    });

    test('hctCSp-12 CS Player Stats', async ({ page }) => {
        await page.goto('/pt/players/w0nderfu1#tab-stats');
        await clickModals(page);
    });

    test('hctCSp-13 CS Team Overview', async ({ page }) => {
        await page.goto('/pt/teams/natus-vincere');
        await clickModals(page);
    });

    test('hctCSp-14 CS Team Squad', async ({ page }) => {
        await page.goto('/pt/teams/b8#tab-squad');
        await clickModals(page);
    });

    test('hctCSp-15 CS Team Matches', async ({ page }) => {
        await page.goto('/pt/teams/monte/matches');
        await clickModals(page);
    });

    test('hctCSp-16 CS Team Tournaments', async ({ page }) => {
        await page.goto('/pt/teams/passion-ua/tournaments');
        await clickModals(page);
    });

    test('hctCSp-17 CS Team Stats', async ({ page }) => {
        await page.goto('/pt/teams/kono-ecf#tab-stats');
        await clickModals(page);
    });

    test('hctCSp-18 CS Inside News', async ({ page }) => {
        await page.goto('/pt/news/dlsm-partners-blast-world-final-2024-singapore');
        await clickModals(page);
    });

    test('hctCSp-19 CS Inside Article', async ({ page }) => {
        await page.goto('/pt/articles/best-cs2-charms');
        await clickModals(page);
    });

    test('hctCSp-20 CS Inside Wiki', async ({ page }) => {
        await page.goto('/pt/wiki/ingame-info');
        await clickModals(page);
    });

    test('hctCSp-21 CS Inside Forum', async ({ page }) => {
        await page.goto('/pt/forum/pickem-esl-pro-league');
        await clickModals(page);
    });

    test('hctCSp-22 CS Inside Analytics', async ({ page }) => {
        await page.goto('/pt/analytics/three-teams-hooxi-could-join-and-one-he-definitely-shouldnt');
        await clickModals(page);
    });

    test('hctCSp-23 CS Teams Compare Inserted', async ({ page }) => {
        await page.goto('/pt/tools/compare/teams?metrics=main,performance,aim,economy,grenades,primary_devices,pistols,multikills,clutches&period=last_6_months&slugs=natus-vincere,monte,passion-ua');
        await clickModals(page);
    });

    test('hctCSp-24 CS Players Compare Inserted', async ({ page }) => {
        await page.goto('/pt/tools/compare/players?metrics=main,performance,aim,economy,grenades,primary_devices,pistols,multikills,clutches&period=last_6_months&slugs=jl-cs-go,b1t,somedieyoung');
        await clickModals(page);
    });

    test('hctCSp-25 CS Pickem', async ({ page }) => {
        await page.goto('/pt/tournaments/iem-cologne-2024/pickems');
        await clickModals(page);
    });

    test
    ('HardCode-tCSc-26 User Overview', async ({ page }) => {
        await page.goto('/pt/users/3515');
        await clickModals(page);
    });

    test('hctCSp-27 User Comments', async ({ page }) => {
        await page.goto('/pt/users/422/comments');
        await clickModals(page);
    });

    test('hctCSp-28 User Pickems', async ({ page }) => {
        await page.goto('/pt/users/2172/pickems');
        await clickModals(page);
    });

    test('hctCSp-29 User Pickem in Tournament', async ({ page }) => {
        await page.goto('/pt/tournaments/iem-dallas-2024/pickems?user_id=4992');
        await clickModals(page);
    });

    test('hctCSp-30 Premium Subscription', async ({ page }) => {
        await page.goto('/pt/premium');
        await clickModals(page);
    });

    test('hctCSp-31 Wiki Help Ukraine', async ({ page }) => {
        await page.goto('/pt/wiki/help-ukraine');
        await clickModals(page);
    });

    test('hctCSp-32 Wiki Privacy', async ({ page }) => {
        await page.goto('/pt/wiki/privacy-policy');
        await clickModals(page);
    });

    test('hctCSp-33 CCT Overview', async ({ page }) => {
        await page.goto('/pt/series/champion-of-champions-tour?dark=true');
        await clickModals(page);
    });

    test('hctCSp-34 CCT Results', async ({ page }) => {
        await page.goto('/pt/series/champion-of-champions-tour/results');
        await clickModals(page);
    });

    test('hctCSp-35 CCT Matches', async ({ page }) => {
        await page.goto('/pt/series/champion-of-champions-tour/matches');
        await clickModals(page);
    });

    test('hctCSp-36 CCT Teams', async ({ page }) => {
        await page.goto('/pt/series/champion-of-champions-tour/teams');
        await clickModals(page);
    });

    test('hctCSp-37 CCT Players', async ({ page }) => {
        await page.goto('/pt/series/champion-of-champions-tour/players');
        await clickModals(page);
    });

    test('hctCSp-38 CS All Players Main', async ({ page }) => {
        await page.goto('/pt/players?period=all_time&tiers=s,a&tab=main&sort=rating&order=desc');
        await clickModals(page);
    });

    test('hctCSp-39 CS All Players Performance', async ({ page }) => {
        await page.goto('/pt/players?period=all_time&tiers=s,a&tab=performance&sort=open_kills&order=desc&map_name=de_anubis&map_id=27');
        await clickModals(page);
    });

    test('hctCSp-40 CS All Players Aim', async ({ page }) => {
        await page.goto('/pt/players?period=all_time&tiers=&tab=aim&sort=headshots&order=desc&country_id=58&country_name=Ukraine&games_count=60');
        await clickModals(page);
    });

    test('hctCSp-41 CS All Players Grenades', async ({ page }) => {
        await page.goto('/pt/players?period=all_time&tiers=&tab=grenades&sort=flash_assist&order=desc&games_count=60&team_slug=natus-vincere&team_id=787');
        await clickModals(page);
    });

    test('hctCSp-42 CS All Players Primary Devices', async ({ page }) => {
        await page.goto('/pt/players?period=all_time&tiers=s&tab=primary_devices&sort=ak47_kills&order=desc&games_count=60');
        await clickModals(page);
    });

    test('hctCSp-43 CS All Players Pistols', async ({ page }) => {
        await page.goto('/pt/players?period=all_time&tiers=s&tab=pistols&sort=deagle_kills&order=desc&games_count=60&team_side=CT');
        await clickModals(page);
    });

    test('hctCSp-44 CS All Players Economy', async ({ page }) => {
        await page.goto('/pt/players?period=all_time&tiers=s&tab=economy&sort=kill_cost&order=desc&games_count=35');
        await clickModals(page);
    });

    test('hctCSp-45 CS All Players Multikills', async ({ page }) => {
        await page.goto('/pt/players?period=all_time&tiers=&tab=multikills&sort=multikills_vs_5&order=desc&games_count=35');
        await clickModals(page);
    });

    test('hctCSp-46 CS All Players Clutches', async ({ page }) => {
        await page.goto('/pt/players?period=all_time&tiers=&tab=clutches&sort=clutches_vs_5&order=desc&games_count=35');
        await clickModals(page);
    });
});

test.describe('Check texts for VLR Profiles + Content', () => { // 

    test('hctVLRp-01 Vlr Tournament Overview', async ({ page }) => {
        await page.goto('/pt/valorant/tournaments/vct-2024-game-changers-latin-america-south-mid-season');
        await clickModals(page);
    });

    test('hctVLRp-02 Vlr Tournament Stages', async ({ page }) => {
        await page.goto('/pt/valorant/tournaments/valorant-champions-tour-2024-masters-shanghai#tab-stages');
        await clickModals(page);
    });

    test('hctVLRp-03 Vlr Tournament Results', async ({ page }) => {
        await page.goto('/pt/valorant/tournaments/valorant-champions-tour-2024-pacific-stage-1/results');
        await clickModals(page);
    });

    test('hctVLRp-04 Vlr Tournament Matches', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/valorant/tournaments/valorant-challengers-2024-spain-rising-consolidation/matches');
        await clickModals(page);
    });

    test('hctVLRp-05 Vlr Tournament Teams', async ({ page }) => {
        await page.goto('/pt/valorant/tournaments/valorant-champions-tour-2024-americas-league-stage-1#tab-teams');
        await clickModals(page);
    });

    test('hctVLRp-06 Vlr Player Overview', async ({ page }) => {
        await page.goto('/pt/valorant/players/3e-akai');
        await clickModals(page);
    });

    test('hctVLRp-07 Vlr Player Matches', async ({ page }) => {
        await page.goto('/pt/valorant/players/zekken/matches');
        await clickModals(page);
    });

    test('hctVLRp-08 Vlr Player Tournaments', async ({ page }) => {
        await page.goto('/pt/valorant/players/lime/tournaments');
        await clickModals(page);
    });

    test('hctVLRp-09 Vlr Team Overview', async ({ page }) => {
        await page.goto('/pt/valorant/teams/geng-esports');
        await clickModals(page);
    });

    test('hctVLRp-10 Vlr Team Squad', async ({ page }) => {
        await page.goto('/pt/valorant/teams/sentinels#tab-squad');
        await clickModals(page);
    });

    test('hctVLRp-11 Vlr Team Matches', async ({ page }) => {
        await page.goto('/pt/valorant/teams/team-heretics/matches');
        await clickModals(page);
    });

    test('hctVLRp-12 Vlr Team Tournaments', async ({ page }) => {
        await page.goto('/pt/valorant/teams/paper-rex-1/tournaments');
        await clickModals(page);
    });

    test('hctVLRp-13 Vlr Inside News', async ({ page }) => {
        await page.goto('/pt/valorant/news/the-valorant-console-community-is-interested-in-champions-collections-and-their-potential-future-appearance');
        await clickModals(page);
    });

    test('hctVLRp-14 Vlr Inside Article', async ({ page }) => {
        await page.goto('/pt/valorant/articles/ten-reasons-why-you-should-play-valorant');
        await clickModals(page);
    });

    test('hctVLRp-15 Vlr Inside Forum', async ({ page }) => {
        await page.goto('/pt/valorant/forum/yaka-komanda-naraz%d1%96-ye-top-1-v-sv%d1%96t%d1%96-1');
        await clickModals(page);
    });

    test('hctVLRp-16 Vlr Inside Analytics', async ({ page }) => {
        await page.goto('/pt/valorant/analytics/how-a-forced-change-benefited-fnatic-introducing-young-prodigy-hiro');
        await clickModals(page);
    });

    test('hctVLRp-17 Inside Pickem', async ({ page }) => {
        await page.goto('/pt/valorant/tournaments/valorant-champions-2024/pickems');
        await clickModals(page);
    });

    test('hctVLRp-18 Vlr Crosshair Top Players', async ({ page }) => {
        await page.goto('/pt/valorant/crosshair/top-players');
        await clickModals(page);
    });

    test('hctVLRp-19 Vlr Crosshair Presets', async ({ page }) => {
        await page.goto('/pt/valorant/crosshair/presets');
        await clickModals(page);
    });

    test('hctVLRp-20 Vlr Players Performance', async ({ page }) => {
        await page.goto('/pt/valorant/players?period=all_time&tab=performance&sort=open_kills&order=desc');
        await clickModals(page);
    });

    test('hctVLRp-21 Vlr Players Aim', async ({ page }) => {
        await page.goto('/pt/valorant/players?period=all_time&tab=aim&sort=body_shots_accuracy&order=desc');
        await clickModals(page);
    });

    test('hctVLRp-22 Vlr Players Multikills', async ({ page }) => {
        await page.goto('/pt/valorant/players?period=all_time&tab=multikills&sort=m4_sum&order=desc');
        await clickModals(page);
    });

    test('hctVLRp-23 Vlr Players Clutches', async ({ page }) => {
        await page.goto('/pt/valorant/players?period=all_time&tab=clutches&sort=c3_sum&order=desc');
        await clickModals(page);
    });

    test('hctVLRp-24 Vlr Players Economy', async ({ page }) => {
        await page.goto('/pt/valorant/players?period=all_time&tab=economy&sort=kill_cost&order=asc');
        await clickModals(page);
    });
});

test.describe('Check texts for Dota Profiles + Content', () => { // 

    test('hctDOTAp-01 Dota Tournament Overview', async ({ page }) => {
        await page.goto('/pt/dota2/tournaments/the-international-2024');
        await clickModals(page);
    });

    test.skip('HardCode-tDOTAc-02 Dota Tournament Stages', async ({ page }) => {
        await page.goto('/pt/');
        await clickModals(page);
    });

    test('hctDOTAp-03 Dota Tournament Results', async ({ page }) => {
        await page.goto('/pt/dota2/tournaments/fissure-universe-episode-3-2024/results');
        await clickModals(page);
    });

    test('hctDOTAp-04 Dota Tournament Matches', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/dota2/tournaments/european-pro-league-season-20/matches');
        await clickModals(page);
    });

    test('hctDOTAp-05 Dota Tournament Teams', async ({ page }) => {
        await page.goto('/pt/dota2/tournaments/elite-league-season-2-2024#tab-teams');
        await clickModals(page);
    });

    test('hctDOTAp-06 Dota Player Overview', async ({ page }) => {
        await page.goto('/pt/dota2/players/33-neta-shapira');
        await clickModals(page);
    });

    test('hctDOTAp-07 Dota Player Matches', async ({ page }) => {
        await page.goto('/pt/dota2/players/benren/matches');
        await clickModals(page);
    });

    test('hctDOTAp-08 Dota Player Tournaments', async ({ page }) => {
        await page.goto('/pt/dota2/dota2/players/mikoto/tournaments');
        await clickModals(page);
    });

    test('hctDOTAp-09 Dota Team Overview', async ({ page }) => {
        await page.goto('/pt/dota2/teams/team-liquid-dota2');
        await clickModals(page);
    });

    test('hctDOTAp-10 Dota Team Squad', async ({ page }) => {
        await page.goto('/pt/dota2/teams/execration#tab-squad');
        await clickModals(page);
    });

    test('hctDOTAp-11 Dota Team Matches', async ({ page }) => {
        await page.goto('/pt/dota2/teams/nouns-dota2/matches');
        await clickModals(page);
    });

    test('hctDOTAp-12 Dota Team Tournaments', async ({ page }) => {
        await page.goto('/pt/dota2/teams/mouz-dota2/tournaments');
        await clickModals(page);
    });
    
    test('hctDOTAp-13 Dota Inside News', async ({ page }) => {
        await page.goto('/pt/dota2/news/pgl-wallachia-season-2-kicks-off');
        await clickModals(page);
    });

    test('hctDOTAp-14 Dota Inside Article', async ({ page }) => {
        await page.goto('/pt/dota2/articles/13-facts-about-team-liquid-ti13-champion');
        await clickModals(page);
    });
});

test.describe('Check texts for LoL Profiles + Content', () => { // 

    test('hctLOLp-01 LoL Tournament Overview', async ({ page }) => {
        await page.goto('/pt/lol/tournaments/worlds-2023');
        await clickModals(page);
    });

    test.skip('HardCode-tLOLc-02 LoL Tournament Stages', async ({ page }) => {
        await page.goto('/pt/');
        await clickModals(page);
    });

    test('hctLOLp-03 LoL Tournament Results', async ({ page }) => {
        await page.goto('/pt/lol/tournaments/lck-summer-2024/results');
        await clickModals(page);
    });

    test('hctLOLp-04 LoL Tournament Matches', async ({ page }) => { // <--- Always Changed
        await page.goto('/pt/lol/tournaments/worlds-2024/matches');
        await clickModals(page);
    });

    test('hctLOLp-05 LoL Tournament Teams', async ({ page }) => {
        await page.goto('/pt/lol/tournaments/worlds-2023#tab-teams');
        await clickModals(page);
    });

    test('hctLOLp-06 LoL Player Overview', async ({ page }) => {
        await page.goto('/pt/lol/players/rhilech');
        await clickModals(page);
    });

    test('hctLOLp-07 LoL Player Matches', async ({ page }) => {
        await page.goto('/pt/lol/players/myrwn/matches');
        await clickModals(page);
    });

    test('hctLOLp-08 LoL Player Tournaments', async ({ page }) => {
        await page.goto('/pt/lol/players/busio/tournaments');
        await clickModals(page);
    });

    test('hctLOLp-09 LoL Team Overview', async ({ page }) => {
        await page.goto('/pt/dota2/teams/team-liquid-dota2');
        await clickModals(page);
    });

    test('hctLOLp-10 LoL Team Squad', async ({ page }) => {
        await page.goto('/pt/dota2/teams/execration#tab-squad');
        await clickModals(page);
    });

    test('hctLOLp-11 LoL Team Matches', async ({ page }) => {
        await page.goto('/pt/dota2/teams/nouns-dota2/matches');
        await clickModals(page);
    });

    test('hctLOLp-12 LoL Team Tournaments', async ({ page }) => {
        await page.goto('/pt/dota2/teams/mouz-dota2/tournaments');
        await clickModals(page);
    });

    test('hctLOLp-13 LoL Inside News', async ({ page }) => {
        await page.goto('/pt/lol/news/pro-players-at-bootcamps-in-europe-ahead-of-worlds');
        await clickModals(page);
    });

    test('hctLOLp-14 LoL Inside Article', async ({ page }) => {
        await page.goto('/pt/lol/articles/kaisa-the-daughter-of-the-void-season-14-guide');
        await clickModals(page);
    });
});

test.describe('Check texts for CS Menu', () => {

    test('hctCSm-01 CS HomePage', async ({ page }) => {
        await page.goto('/pt/');
        await clickModals(page);
    });

    test('hctCSm-02 CS Upcoming Matches', async ({ page }) => {
        await page.goto('/pt/matches/current');
        await clickModals(page);
    });

    test('hctCSm-03 CS Finished Matches', async ({ page }) => {
        await page.goto('/pt/matches/finished');
        await clickModals(page);
    });

    test('hctCSm-04 CS Upcoming Tournaments', async ({ page }) => {
        await page.goto('/pt/tournaments/current');
        await clickModals(page);
    });

    test('hctCSm-05 CS Finished Tournaments', async ({ page }) => {
        await page.goto('/pt/tournaments/finished');
        await clickModals(page);
    });

    test('hctCSm-06 CS Players', async ({ page }) => {
        await page.goto('/pt/players');
        await clickModals(page);
    });

    test('hctCSm-07 CS Team Earnings', async ({ page }) => {
        await page.goto('/pt/teams/earnings');
        await clickModals(page);
    });

    test('hctCSm-08 CS Team Valve Ranking', async ({ page }) => {
        await page.goto('/pt/teams/valve-rankings/world');
        await clickModals(page);
    });

    test('hctCSm-09 CS News', async ({ page }) => {
        await page.goto('/pt/news');
        await clickModals(page);
    });

    test('hctCSm-10 CS Articles', async ({ page }) => {
        await page.goto('/pt/articles');
        await clickModals(page);
    });

    test('hctCSm-11 CS Wiki', async ({ page }) => {
        await page.goto('/pt/wiki/welcome');
        await clickModals(page);
    });

    test('hctCSm-12 CS Forum', async ({ page }) => {
        await page.goto('/pt/forum');
        await clickModals(page);
    });

    test('hctCSm-13 CS Analytics', async ({ page }) => {
        await page.goto('/pt/analytics');
        await clickModals(page);
    });

    test('hctCSm-14 CS Records', async ({ page }) => {
        await page.goto('/pt/records');
        await clickModals(page);
    });

    test('hctCSm-15 CS Compare Teams', async ({ page }) => {
        await page.goto('/pt/tools/compare/teams');
        await clickModals(page);
    });

    test('hctCSm-16 CS Compare Players', async ({ page }) => {
        await page.goto('/pt/tools/compare/players');
        await clickModals(page);
    });

    test('hctCSm-17 CS Pickems', async ({ page }) => {
        await page.goto('/pt/pickems');
        await clickModals(page);
    });
});

test.describe('Check texts for VLR Menu', () => {

    test('hctVLRm-01 Vlr Homepage', async ({ page }) => {
        await page.goto('/pt/valorant');
        await clickModals(page);
    });

    test('hctVLRm-02 Vlr Upcoming Matches', async ({ page }) => {
        await page.goto('/pt/valorant/matches/current');
        await clickModals(page);
    });

    test('hctVLRm-03 Vlr Finished Matches', async ({ page }) => {
        await page.goto('/pt/valorant/matches/finished');
        await clickModals(page);
    });

    test('hctVLRm-04 Vlr Upcoming Tournaments', async ({ page }) => {
        await page.goto('/pt/valorant/tournaments/current');
        await clickModals(page);
    });

    test('hctVLRm-05 Vlr Finished Tournaments', async ({ page }) => {
        await page.goto('/pt/valorant/tournaments/finished');
        await clickModals(page);
    });

    test('hctVLRm-06 Vlr Players', async ({ page }) => {
        await page.goto('/pt/valorant/players');
        await clickModals(page);
    });

    test('hctVLRm-07 Vlr Team Earnings', async ({ page }) => {
        await page.goto('/pt/valorant/teams/earnings');
        await clickModals(page);
    });

    test('hctVLRm-08 Vlr News', async ({ page }) => {
        await page.goto('/pt/valorant/news');
        await clickModals(page);
    });

    test('hctVLRm-09 Vlr Articles', async ({ page }) => {
        await page.goto('/pt/valorant/articles');
        await clickModals(page);
    });

    test('hctVLRm-10 Vlr Forum', async ({ page }) => {
        await page.goto('/pt/valorant/forum');
        await clickModals(page);
    });

    test('hctVLRm-11 Vlr Analytics', async ({ page }) => {
        await page.goto('/pt/valorant/analytics');
        await clickModals(page);
    });

    test('hctVLRm-12 Vlr Pickems', async ({ page }) => {
        await page.goto('/pt/valorant/pickems');
        await clickModals(page);
    });

    test('hctVLRm-13 Vlr Crosshairs', async ({ page }) => {
        await page.goto('/pt/valorant/crosshair/generator');
        await clickModals(page);
    });
});

test.describe('Check texts for Dota Menu', () => {

    test('hctDOTAm-01 Dota Homepage', async ({ page }) => {
        await page.goto('/pt/dota2');
        await clickModals(page);
    });

    test('hctDOTAm-02 Dota Upcoming Matches', async ({ page }) => {
        await page.goto('/pt/dota2/matches/current');
        await clickModals(page);
    });

    test('hctDOTAm-03 Dota Finished Matches', async ({ page }) => {
        await page.goto('/pt/dota2/matches/finished');
        await clickModals(page);
    });

    test('hctDOTAm-04 Dota Upcoming Tournaments', async ({ page }) => {
        await page.goto('/pt/dota2/tournaments/current');
        await clickModals(page);
    });

    test('hctDOTAm-05 Dota Finished Tournaments', async ({ page }) => {
        await page.goto('/pt/dota2/tournaments/finished');
        await clickModals(page);
    });
    
    test('hctDOTAm-08 Dota News', async ({ page }) => {
        await page.goto('/pt/dota2/news');
        await clickModals(page);
    });

    test('hctDOTAm-09 Dota Articles', async ({ page }) => {
        await page.goto('/pt/dota2/articles');
        await clickModals(page);
    });

    test('hctDOTAm-11 Dota Analytics', async ({ page }) => {
        await page.goto('/pt/dota2/analytics');
        await clickModals(page);
    });
});

test.describe('Check texts for LoL Menu', () => {
    test('hctLOLm-01 LoL Homepage', async ({ page }) => {
        await page.goto('/pt/lol');
        await clickModals(page);
    });

    test('hctLOLm-02 LoL Upcoming Matches', async ({ page }) => {
        await page.goto('/pt/lol/matches/current');
        await clickModals(page);
    });

    test('hctLOLm-03 LoL Finished Matches', async ({ page }) => {
        await page.goto('/pt/lol/matches/finished');
        await clickModals(page);
    });

    test('hctLOLm-04 LoL Upcoming Tournaments', async ({ page }) => {
        await page.goto('/pt/lol/tournaments/current');
        await clickModals(page);
    });

    test('hctLOLAm-05 LoL Finished Tournaments', async ({ page }) => {
        await page.goto('/pt/lol/tournaments/finished');
        await clickModals(page);
    });

    test('hctLOLm-08 LoL News', async ({ page }) => {
        await page.goto('/pt/lol/news');
        await clickModals(page);
    });

    test('hctLOLm-09 LoL Articles', async ({ page }) => {
        await page.goto('/pt/lol/articles');
        await clickModals(page);
    });

    test('hctLOLm-11 LoL Analytics', async ({ page }) => {
        await page.goto('/pt/lol/analytics');
        await clickModals(page);
    });

});

test.describe('Check texts for Games Discipline', () => {
    test('hctGAMESm-01 Games Homepage', async ({ page }) => {
        await page.goto('/pt/games');
        await clickModals(page);
    });

    test('hctGAMESm-02 Games News', async ({ page }) => {
        await page.goto('/pt/games/news');
        await clickModals(page);
    });

    test('hctGAMESm-03 Games Articles', async ({ page }) => {
        await page.goto('/pt/games/articles');
        await clickModals(page);
    });

    test('hctGAMESm-04 Games Inside News', async ({ page }) => {
        await page.goto('/pt/games/news/the-all-ukrainian-heartstone-tournament-from-blackbears-has-been-announced');
        await clickModals(page);
    });

    test('hctGAMESm-05 Games Inside Article', async ({ page }) => {
        await page.goto('/pt/games/articles/best-single-player-pc-games');
        await clickModals(page);
    });

});