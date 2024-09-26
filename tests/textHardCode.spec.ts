import {test, expect} from "@playwright/test";
import { screenFullPage, checkWebPageSkeleton } from "../helpers/functions.test";
import { csMenuTextEn, vlrMenuTextEn, dotaMenuTextEn,  footerTextEn } from "../helpers/textFunctions.test";
import { firstEntryWebElements, footerElements, menuPages } from "../page-objects/skeleton";

test.afterEach(async ({page}) => {
    await checkWebPageSkeleton(page);
    await screenFullPage(page, test.info().title);
})

export async function clickModals(page) {
    await page.locator(firstEntryWebElements.spoilerModeConfirmationButton).click({ timeout: 30000 });
    await page.locator(firstEntryWebElements.cookiesConfirmButton).click({ timeout: 30000 });
}

test.describe('Check texts for CS Pages', () => {

    test('HardCode-tCSi-01 CS Live Match First', async ({ page }) => { // <--- Always Changed
        await page.goto('/es/matches/favbet-vs-drillas-26-09-2024');
        await clickModals(page);
    });

    test('HardCode-tCSi-02 CS Live Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto('/es/matches/partizan-esport-vs-genone-26-09-2024');
        await clickModals(page);
    });

    test('HardCode-tCSi-03 CS Upcoming Match First', async ({ page }) => { // <--- Always Changed
        await page.goto('/es/matches/m80-cs-go-vs-take-flyte-29-09-2024');
        await clickModals(page);
    });

    test('HardCode-tCSi-04 CS Upcoming Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto('/es/matches/natus-vincere-junior-vs-l-g-27-09-2024');
        await clickModals(page);
    });

    test('HardCode-tCSi-05 CS Finished Match First', async ({ page }) => {
        await page.goto('/es/matches/g2-vs-liquid-20-09-2024');
        await clickModals(page);
    });

    test('HardCode-tCSi-06 CS Finished Match Second', async ({ page }) => {
        await page.goto('/es/matches/natus-vincere-vs-spirit-20-09-2024');
        await clickModals(page);
    });

    test('HardCode-tCSi-07 CS Advanced Finished Match', async ({ page }) => {
        await page.goto('/es/matches/insanity-vs-oddik-19-09-2024/nuke');
        await clickModals(page);
    });

    test('HardCode-tCSi-08 CS Basic Finished Match', async ({ page }) => {
        await page.goto('/es/matches/phoenix-vs-final-form-cs-20-09-2024');
        await clickModals(page);
    });

    test('HardCode-tCSi-09 CS No Data Finished Match', async ({ page }) => {
        await page.goto('/es/matches/sinners-vs-dynamo-eclot-20-09-2024');
        await clickModals(page);
    });

    test('HardCode-tCSi-10 CS Bo1 Advanced Finished Match', async ({ page }) => {
        await page.goto('/es/matches/imperial-vs-oddik-06-09-2024/inferno');
        await clickModals(page);
    });
    
    test('HardCode-tCSi-11 CS Bo1 Basic Finished Match', async ({ page }) => {
        await page.goto('/es/matches/revenge-nation-vs-limitless-05-09-2024/anubis');
        await clickModals(page);
    });
    
    test('HardCode-tCSi-12 CS Bo1 No Data Finished Match', async ({ page }) => {
        await page.goto('/es/matches/dynamo-eclot-vs-brute-05-09-2024');
        await clickModals(page);
    });

    test('HardCode-tCSi-13 CS Basic Map', async ({ page }) => {
        await page.goto('/es/matches/incontrol-vs-detonate-21-09-2024/ancient');
        await clickModals(page);
    });

    test('HardCode-tCSi-14 CS Advanced Map', async ({ page }) => {
        await page.goto('/es/matches/permitta-vs-ecstatic-21-09-2024/ancient');
        await clickModals(page);
    });

    test('HardCode-tCSi-15 CS Round', async ({ page }) => {
        await page.goto('/es/matches/eyeballers-vs-nexus-19-09-2024/nuke/round-29');
        await clickModals(page);
    });

    test('HardCode-tCSi-16 CS Performance', async ({ page }) => {
        await page.goto('/es/matches/lag-gaming-vs-legacy-br-20-09-2024/dust2/performance');
        await clickModals(page);
    });

    test('HardCode-tCSi-17 CS Aim', async ({ page }) => {
        await page.goto('/es/matches/natus-vincere-junior-vs-spirit-academy-21-09-2024/aim');
        await clickModals(page);
    });

    test('HardCode-tCSi-18 CS Granades', async ({ page }) => {
        await page.goto('/es/matches/eyeballers-vs-k27-21-09-2024/grenades');
        await clickModals(page);
    });

    test('HardCode-tCSi-19 CS Devices', async ({ page }) => {
        await page.goto('/es/matches/gaimingladiators-vs-kono-ecf-21-09-2024/devices');
        await clickModals(page);
    });

    test('HardCode-tCSi-20 CS Economy', async ({ page }) => {
        await page.goto('/es/matches/rhyno-vs-quazar-21-09-2024/economy');
        await clickModals(page);
    });

    test('HardCode-tCSi-21 CS Round Performance', async ({ page }) => {
        await page.goto('/es/matches/9-pandas-vs-copenhagen-wolves-19-09-2024/anubis/round-30/performance');
        await clickModals(page);
    });

    test('HardCode-tCSi-22 CS Round Aim', async ({ page }) => {
        await page.goto('/es/matches/zero-tenacity-vs-favbet-19-09-2024/nuke/round-18/aim');
        await clickModals(page);
    });

    test('HardCode-tCSi-23 CS Round Granades', async ({ page }) => {
        await page.goto('/es/matches/9ine-vs-sinners-19-09-2024/nuke/round-30/grenades');
        await clickModals(page);
    });

    test('HardCode-tCSi-24 CS Round Devices', async ({ page }) => {
        await page.goto('/es/matches/sashi-esport-vs-monte-19-09-2024/nuke/round-30/devices');
        await clickModals(page);
    });

    test('HardCode-tCSi-25 CS Round Economy', async ({ page }) => {
        await page.goto('/es/matches/johnny-speeds-vs-alliance-cs-19-09-2024/ancient/round-24/economy');
        await clickModals(page);
    });

    test.skip('HardCode-tVLRi-01 VLR Live Match First', async ({ page }) => { // <--- Always Changed
        await page.goto('/es/');
        await clickModals(page);
    });

    test.skip('HardCode-tVLRi-02 VLR Live Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto('/es/');
        await clickModals(page);
    });

    test('HardCode-tVLRi-03 VLR Upcoming Match First', async ({ page }) => { // <--- Always Changed
        await page.goto('/es/valorant/matches/mir-gaming-gc-vs-purr-fectionists-02-10-2024');
        await clickModals(page);
    });

    test('HardCode-tVLRi-04 VLR Upcoming Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto('/es/valorant/matches/zeta-division-gc-vs-boba-01-10-2024');
        await clickModals(page);
    });

    test('HardCode-tVLRi-05 VLR Finished Match First', async ({ page }) => {
        await page.goto('/es/valorant/matches/naos-esports-vs-boom-esports-20-09-2024');
        await clickModals(page);
    });

    test('HardCode-tVLRi-06 VLR Finished Match Second', async ({ page }) => {
        await page.goto('/es/valorant/matches/full-sense-vs-oblivion-force-20-09-2024');
        await clickModals(page);
    });

    test('HardCode-tVLRi-07 VLR Full Data Finished Match', async ({ page }) => {
        await page.goto('/es/valorant/matches/all-knights-1-vs-galorys-18-09-2024');
        await clickModals(page);
    });

    test('HardCode-tVLRi-08 VLR No Data Finished Match', async ({ page }) => {
        await page.goto('/es/valorant/matches/all-knights-1-vs-m80-20-09-2024');
        await clickModals(page);
    });

    test('HardCode-tVLRi-09 VLR Bo1 Full Data Finished Match', async ({ page }) => {
        await page.goto('/es/valorant/matches/rtzn-vs-dsyre-29-06-2024/icebox');
        await clickModals(page);
    });

    test('HardCode-tVLRi-10 VLR Bo1 No Data Finished Match', async ({ page }) => {
        await page.goto('/es/valorant/matches/spongebob-vs-lgbtq-09-07-2024');
        await clickModals(page);
    });

    test('HardCode-tVLRi-11 VLR Performance', async ({ page }) => {
        await page.goto('/es/valorant/matches/disguised-vs-full-sense-21-09-2024/performance');
        await clickModals(page);
    });

    test('HardCode-tVLRi-12 VLR Aim', async ({ page }) => {
        await page.goto('/es/valorant/matches/riddle-esports-vs-sin-prisa-gaming-21-09-2024/aim');
        await clickModals(page);
    });

    test('HardCode-tVLRi-13 VLR Devices', async ({ page }) => {
        await page.goto('/es/valorant/matches/naos-esports-vs-boom-esports-20-09-2024/devices');
        await clickModals(page);
    });

    test('HardCode-tVLRi-14 VLR Economy', async ({ page }) => {
        await page.goto('/es/valorant/matches/full-sense-vs-oblivion-force-20-09-2024/economy');
        await clickModals(page);
    });

    test('HardCode-tVLRi-15 VLR Round Performance', async ({ page }) => {
        await page.goto('/es/valorant/matches/m80-vs-2game-esports-18-09-2024/sunset/performance');
        await clickModals(page);
    });

    test('HardCode-tVLRi-16 VLR Round Aim', async ({ page }) => {
        await page.goto('/es/valorant/matches/nasr-ignite-vs-karmine-corp-gc-17-09-2024/bind/aim');
        await clickModals(page);
    });

    test('HardCode-tVLRi-17 VLR Round Devices', async ({ page }) => {
        await page.goto('/es/valorant/matches/giantx-gc-vs-valiant-gc-17-09-2024/lotus/devices');
        await clickModals(page);
    });

    test('HardCode-tVLRi-18 VLR Round Economy', async ({ page }) => {
        await page.goto('/es/valorant/matches/all-knights-1-vs-tsm-1-16-09-2024/sunset/economy');
        await clickModals(page);
    });

    test('HardCode-tDOTAi-01 Dota Live Match First', async ({ page }) => { // <--- Always Changed
        await page.goto('/es/dota2/matches/l1ga-team-vs-night-pulse-26-09-2024');
        await clickModals(page);
    });

    test('HardCode-tDOTAi-02 Dota Live Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto('/es/dota2/matches/hydra-vs-five-beavers-26-09-2024');
        await clickModals(page);
    });

    test('HardCode-tDOTAi-03 Dota Upcoming Match First', async ({ page }) => { // <--- Always Changed
        await page.goto('/es/dota2/matches/mouz-dota2-vs-navi-junior-03-10-2024');
        await clickModals(page);
    });

    test('HardCode-tDOTAi-04 Dota Upcoming Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto('/es/dota2/matches/dragon-esports-dota2-vs-dms-05-10-2024');
        await clickModals(page);
    });

    test('HardCode-tDOTAi-05 Dota Finished Match First', async ({ page }) => {
        await page.goto('/es/dota2/matches/one-move-vs-passion-ua-dota2-19-09-2024');
        await clickModals(page);
    });

    test('HardCode-tDOTAi-06 Dota Finished Match Second', async ({ page }) => {
        await page.goto('/es/dota2/matches/palianytsia-vs-navi-junior-19-09-2024');
        await clickModals(page);
    });

    test('HardCode-tDOTAi-07 Dota Full Data Finished Match', async ({ page }) => {
        await page.goto('/es/dota2/matches/tt-infinbank-vs-avulus-16-09-2024');
        await clickModals(page);
    });

    test.skip('HardCode-tDOTAi-08 Dota No Data Finished Match', async ({ page }) => {
        await page.goto('/es/');
        await clickModals(page);
    });

    test('HardCode-tDOTAi-09 Dota Map', async ({ page }) => {
        await page.goto('/es/dota2/matches/1win-1-vs-avulus-30-08-2024/map-5');
        await clickModals(page);
    });

    test('HardCode-tLOLi-01 LoL Live Match First', async ({ page }) => { // <--- Always Changed
        await page.goto('/es/lol/gam-esports-vs-fukuoka-softbank-hawks-gaming-26-09-2024');
        await clickModals(page);
    });

    test.skip('HardCode-tLOLi-02 LoL Live Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto('/es/');
        await clickModals(page);
    });

    test('HardCode-tLOLi-03 LoL Upcoming Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto('/es/lol/matches/karmine-corp-blue-vs-vitalitybee-30-09-2024');
        await clickModals(page);
    });

    test('HardCode-tLOLi-04 LoL Upcoming Match Second', async ({ page }) => { // <--- Always Changed
        await page.goto('/es/lol/matches/solary-lol-vs-bk-rog-esports-lol-09-10-2024');
        await clickModals(page);
    });

    test('HardCode-tLOLi-05 LoL Finished Match First', async ({ page }) => {
        await page.goto('/es/lol/matches/kwangdong-freecs-challengers-vs-dplus-kia-challengers-21-09-2024');
        await clickModals(page);
    });

    test('HardCode-tLOLi-06 LoL Finished Match Second', async ({ page }) => {
        await page.goto('/es/lol/matches/zero-tenacity-lol-vs-berlin-international-gaming-21-09-2024');
        await clickModals(page);
    });

    test.skip('HardCode-tLOLi-07 LoL Full Data Finished Match', async ({ page }) => {
        await page.goto('/es/');
        await clickModals(page);
    });

    test.skip('HardCode-tLOLi-08 LoL No Data Finished Match', async ({ page }) => {
        await page.goto('/es/');
        await clickModals(page);
    });

    test('HardCode-tCSc-01 CS Tournament Overview', async ({ page }) => {
        await page.goto('/es/tournaments/esl-pro-league-season-20');
        await clickModals(page);
    });

    test('HardCode-tCSc-02 CS Tournament Stages', async ({ page }) => {
        await page.goto('/es/tournaments/galaxy-battle-1#tab-stages');
        await clickModals(page);
    });

    test('HardCode-tCSc-03 CS Tournament Pickems', async ({ page }) => {
        await page.goto('/es/tournaments/iem-cologne-2024/pickems');
        await clickModals(page);
    });

    test('HardCode-tCSc-04 CS Tournament Results', async ({ page }) => {
        await page.goto('/es/tournaments/esl-challengel-asia-48/results');
        await clickModals(page);
    });

    test('HardCode-tCSc-05 CS Tournament Matches', async ({ page }) => { // <--- Always Changed
        await page.goto('/es/tournaments/esl-challenger-europe-48/matches');
        await clickModals(page);
    });

    test('HardCode-tCSc-06 CS Tournament Teams', async ({ page }) => {
        await page.goto('/es/tournaments/yalla-compass-summer-2024#tab-teams');
        await clickModals(page);
    });

    test('HardCode-tCSc-07 CS Tournament Stats', async ({ page }) => {
        await page.goto('/es/tournaments/esports-world-cup-2024#tab-stats');
        await clickModals(page);
    });

    test('HardCode-tCSc-08 CS Player Overview', async ({ page }) => {
        await page.goto('/es/players/zywoo');
        await clickModals(page);
    });

    test('HardCode-tCSc-09 CS Player Career', async ({ page }) => {
        await page.goto('/es/players/r1nkle#tab-career');
        await clickModals(page);
    });

    test('HardCode-tCSc-10 CS Player Matches', async ({ page }) => {
        await page.goto('/es/players/jl-cs-go/matches');
        await clickModals(page);
    });

    test('HardCode-tCSc-11 CS Player Tournaments', async ({ page }) => {
        await page.goto('/es/players/b1t/tournaments');
        await clickModals(page);
    });

    test('HardCode-tCSc-12 CS Player Stats', async ({ page }) => {
        await page.goto('/es/players/w0nderfu1#tab-stats');
        await clickModals(page);
    });

    test('HardCode-tCSc-13 CS Team Overview', async ({ page }) => {
        await page.goto('/es/teams/natus-vincere');
        await clickModals(page);
    });

    test('HardCode-tCSc-14 CS Team Squad', async ({ page }) => {
        await page.goto('/es/teams/b8#tab-squad');
        await clickModals(page);
    });

    test('HardCode-tCSc-15 CS Team Matches', async ({ page }) => {
        await page.goto('/es/teams/monte/matches');
        await clickModals(page);
    });

    test('HardCode-tCSc-16 CS Team Tournaments', async ({ page }) => {
        await page.goto('/es/teams/passion-ua/tournaments');
        await clickModals(page);
    });

    test('HardCode-tCSc-17 CS Team Stats', async ({ page }) => {
        await page.goto('/es/teams/kono-ecf#tab-stats');
        await clickModals(page);
    });

    test('HardCode-tCSc-18 CS Inside News', async ({ page }) => {
        await page.goto('/es/news/cadian-on-the-move-to-astralis-im-just-so-damn-hungry-to-win');
        await clickModals(page);
    });

    test('HardCode-tCSc-19 CS Inside Article', async ({ page }) => {
        await page.goto('/es/articles/s-t-a-l-k-e-r-2-heart-of-chornobyl-release-date');
        await clickModals(page);
    });

    test('HardCode-tCSc-20 CS Inside Wiki', async ({ page }) => {
        await page.goto('/es/wiki/ingame-info');
        await clickModals(page);
    });

    test('HardCode-tCSc-21 CS Inside Forum', async ({ page }) => {
        await page.goto('/es/forum/pickem-esl-pro-league');
        await clickModals(page);
    });

    test('HardCode-tCSc-22 CS Inside Analytics', async ({ page }) => {
        await page.goto('/es/analytics/three-teams-hooxi-could-join-and-one-he-definitely-shouldnt');
        await clickModals(page);
    });

    test('HardCode-tCSc-23 CS Teams Compare Inserted', async ({ page }) => {
        await page.goto('/es/tools/compare/teams?metrics=main,performance,aim,economy,grenades,primary_devices,pistols,multikills,clutches&period=last_6_months&slugs=natus-vincere,monte,passion-ua');
        await clickModals(page);
    });

    test('HardCode-tCSc-24 CS Players Compare Inserted', async ({ page }) => {
        await page.goto('/es/tools/compare/players?metrics=main,performance,aim,economy,grenades,primary_devices,pistols,multikills,clutches&period=last_6_months&slugs=jl-cs-go,b1t,somedieyoung');
        await clickModals(page);
    });

    test('HardCode-tCSc-25 CS Pickem', async ({ page }) => {
        await page.goto('/es/tournaments/iem-cologne-2024/pickems');
        await clickModals(page);
    });

    test('HardCode-tCSc-26 User Overview', async ({ page }) => {
        await page.goto('/es/users/3515');
        await clickModals(page);
    });

    test('HardCode-tCSc-27 User Comments', async ({ page }) => {
        await page.goto('/es/users/422/comments');
        await clickModals(page);
    });

    test('HardCode-tCSc-28 User Pickems', async ({ page }) => {
        await page.goto('/es/users/2172/pickems');
        await clickModals(page);
    });

    test('HardCode-tCSc-29 User Pickem in Tournament', async ({ page }) => {
        await page.goto('/es/tournaments/iem-dallas-2024/pickems?user_id=4992');
        await clickModals(page);
    });

    test('HardCode-tCSc-30 Premium Subscription', async ({ page }) => {
        await page.goto('/es/premium');
        await clickModals(page);
    });

    test('HardCode-tCSc-31 Wiki Help Ukraine', async ({ page }) => {
        await page.goto('/es/wiki/help-ukraine');
        await clickModals(page);
    });

    test('HardCode-tCSc-32 Wiki Privacy', async ({ page }) => {
        await page.goto('/es/wiki/privacy-policy');
        await clickModals(page);
    });

    test('HardCode-tCSc-33 CCT Overview', async ({ page }) => {
        await page.goto('/es/series/champion-of-champions-tour?dark=true');
        await clickModals(page);
    });

    test('HardCode-tCSc-34 CCT Results', async ({ page }) => {
        await page.goto('/es/series/champion-of-champions-tour/results');
        await clickModals(page);
    });

    test('HardCode-tCSc-35 CCT Matches', async ({ page }) => {
        await page.goto('/es/series/champion-of-champions-tour/matches');
        await clickModals(page);
    });

    test('HardCode-tCSc-36 CCT Teams', async ({ page }) => {
        await page.goto('/es/series/champion-of-champions-tour/teams');
        await clickModals(page);
    });

    test('HardCode-tCSc-37 CCT Players', async ({ page }) => {
        await page.goto('/es/series/champion-of-champions-tour/players');
        await clickModals(page);
    });

    test('HardCode-tCSc-38 CS All Players Main', async ({ page }) => {
        await page.goto('/es/players?period=all_time&tiers=s,a&tab=main&sort=rating&order=desc');
        await clickModals(page);
    });

    test('HardCode-tCSc-39 CS All Players Performance', async ({ page }) => {
        await page.goto('/es/players?period=all_time&tiers=s,a&tab=performance&sort=open_kills&order=desc&map_name=de_anubis&map_id=27');
        await clickModals(page);
    });

    test('HardCode-tCSc-40 CS All Players Aim', async ({ page }) => {
        await page.goto('/es/players?period=all_time&tiers=&tab=aim&sort=headshots&order=desc&country_id=58&country_name=Ukraine&games_count=60');
        await clickModals(page);
    });

    test('HardCode-tCSc-41 CS All Players Grenades', async ({ page }) => {
        await page.goto('/es/players?period=all_time&tiers=&tab=grenades&sort=flash_assist&order=desc&games_count=60&team_slug=natus-vincere&team_id=787');
        await clickModals(page);
    });

    test('HardCode-tCSc-42 CS All Players Primary Devices', async ({ page }) => {
        await page.goto('/es/players?period=all_time&tiers=s&tab=primary_devices&sort=ak47_kills&order=desc&games_count=60');
        await clickModals(page);
    });

    test('HardCode-tCSc-43 CS All Players Pistols', async ({ page }) => {
        await page.goto('/es/players?period=all_time&tiers=s&tab=pistols&sort=deagle_kills&order=desc&games_count=60&team_side=CT');
        await clickModals(page);
    });

    test('HardCode-tCSc-44 CS All Players Economy', async ({ page }) => {
        await page.goto('/es/players?period=all_time&tiers=s&tab=economy&sort=kill_cost&order=desc&games_count=35');
        await clickModals(page);
    });

    test('HardCode-tCSc-45 CS All Players Multikills', async ({ page }) => {
        await page.goto('/es/players?period=all_time&tiers=&tab=multikills&sort=multikills_vs_5&order=desc&games_count=35');
        await clickModals(page);
    });

    test('HardCode-tCSc-46 CS All Players Clutches', async ({ page }) => {
        await page.goto('/es/players?period=all_time&tiers=&tab=clutches&sort=clutches_vs_5&order=desc&games_count=35');
        await clickModals(page);
    });

    test('HardCode-tVLRc-01 Vlr Tournament Overview', async ({ page }) => {
        await page.goto('/es/valorant/tournaments/vct-2024-game-changers-latin-america-south-mid-season');
        await clickModals(page);
    });

    test('HardCode-tVLRc-02 Vlr Tournament Stages', async ({ page }) => {
        await page.goto('/es/valorant/tournaments/valorant-champions-tour-2024-masters-shanghai#tab-stages');
        await clickModals(page);
    });

    test('HardCode-tVLRc-03 Vlr Tournament Results', async ({ page }) => {
        await page.goto('/es/valorant/tournaments/valorant-champions-tour-2024-pacific-stage-1/results');
        await clickModals(page);
    });

    test('HardCode-tVLRc-04 Vlr Tournament Matches', async ({ page }) => { // <--- Always Changed
        await page.goto('/es/valorant/tournaments/valorant-champions-tour-2024-pacific-ascension/matches');
        await clickModals(page);
    });

    test('HardCode-tVLRc-05 Vlr Tournament Teams', async ({ page }) => {
        await page.goto('/es/valorant/tournaments/valorant-champions-tour-2024-americas-league-stage-1#tab-teams');
        await clickModals(page);
    });

    test('HardCode-tVLRc-06 Vlr Player Overview', async ({ page }) => {
        await page.goto('/es/valorant/players/3e-akai');
        await clickModals(page);
    });

    test('HardCode-tVLRc-07 Vlr Player Matches', async ({ page }) => {
        await page.goto('/es/valorant/players/zekken/matches');
        await clickModals(page);
    });

    test('HardCode-tVLRc-08 Vlr Player Tournaments', async ({ page }) => {
        await page.goto('/es/valorant/players/lime/tournaments');
        await clickModals(page);
    });

    test('HardCode-tVLRc-09 Vlr Team Overview', async ({ page }) => {
        await page.goto('/es/valorant/teams/geng-esports');
        await clickModals(page);
    });

    test('HardCode-tVLRc-10 Vlr Team Squad', async ({ page }) => {
        await page.goto('/es/valorant/teams/sentinels#tab-squad');
        await clickModals(page);
    });

    test('HardCode-tVLRc-11 Vlr Team Matches', async ({ page }) => {
        await page.goto('/es/valorant/teams/team-heretics/matches');
        await clickModals(page);
    });

    test('HardCode-tVLRc-12 Vlr Team Tournaments', async ({ page }) => {
        await page.goto('/es/valorant/teams/paper-rex-1/tournaments');
        await clickModals(page);
    });

    test('HardCode-tVLRc-13 Vlr Inside News', async ({ page }) => {
        await page.goto('/es/valorant/news/fnatic-the-first-team-from-emea-to-secure-a-slot-at-valorant-champions-2024');
        await clickModals(page);
    });

    test('HardCode-tVLRc-14 Vlr Inside Article', async ({ page }) => {
        await page.goto('/es/valorant/articles/why-does-everyone-hate-breeze');
        await clickModals(page);
    });

    test('HardCode-tVLRc-15 Vlr Inside Forum', async ({ page }) => {
        await page.goto('/es/valorant/forum/yaka-komanda-naraz%d1%96-ye-top-1-v-sv%d1%96t%d1%96-1');
        await clickModals(page);
    });

    test('HardCode-tVLRc-16 Vlr Inside Analytics', async ({ page }) => {
        await page.goto('/es/valorant/analytics/how-a-forced-change-benefited-fnatic-introducing-young-prodigy-hiro');
        await clickModals(page);
    });

    test('HardCode-tVLRc-17 Inside Pickem', async ({ page }) => {
        await page.goto('/es/valorant/tournaments/valorant-champions-2024/pickems');
        await clickModals(page);
    });

    test('HardCode-tVLRc-18 Vlr Crosshair Top Players', async ({ page }) => {
        await page.goto('/es/valorant/crosshair/top-players');
        await clickModals(page);
    });

    test('HardCode-tVLRc-19 Vlr Crosshair Presets', async ({ page }) => {
        await page.goto('/es/valorant/crosshair/presets');
        await clickModals(page);
    });

    test('HardCode-tVLRc-20 Vlr Players Performance', async ({ page }) => {
        await page.goto('/es/valorant/players?period=all_time&tab=performance&sort=open_kills&order=desc');
        await clickModals(page);
    });

    test('HardCode-tVLRc-21 Vlr Players Aim', async ({ page }) => {
        await page.goto('/es/valorant/players?period=all_time&tab=aim&sort=body_shots_accuracy&order=desc');
        await clickModals(page);
    });

    test('HardCode-tVLRc-22 Vlr Players Multikills', async ({ page }) => {
        await page.goto('/es/valorant/players?period=all_time&tab=multikills&sort=m4_sum&order=desc');
        await clickModals(page);
    });

    test('HardCode-tVLRc-23 Vlr Players Clutches', async ({ page }) => {
        await page.goto('/es/valorant/players?period=all_time&tab=clutches&sort=c3_sum&order=desc');
        await clickModals(page);
    });

    test('HardCode-tVLRc-24 Vlr Players Economy', async ({ page }) => {
        await page.goto('/es/valorant/players?period=all_time&tab=economy&sort=kill_cost&order=asc');
        await clickModals(page);
    });

    test('HardCode-tDOTAc-01 Dota Tournament Overview', async ({ page }) => {
        await page.goto('/es/dota2/tournaments/the-international-2024');
        await clickModals(page);
    });

    test.skip('HardCode-tDOTAc-02 Dota Tournament Stages', async ({ page }) => {
        await page.goto('/es/');
        await clickModals(page);
    });

    test('HardCode-tDOTAc-03 Dota Tournament Results', async ({ page }) => {
        await page.goto('/es/dota2/tournaments/fissure-universe-episode-3-2024/results');
        await clickModals(page);
    });

    test('HardCode-tDOTAc-04 Dota Tournament Matches', async ({ page }) => { // <--- Always Changed
        await page.goto('/es/dota2/tournaments/dreamleague-season-24-eastern-europe-open-qualifier-1/matches');
        await clickModals(page);
    });

    test('HardCode-tDOTAc-05 Dota Tournament Teams', async ({ page }) => {
        await page.goto('/es/dota2/tournaments/elite-league-season-2-2024#tab-teams');
        await clickModals(page);
    });

    test('HardCode-tDOTAc-06 Dota Player Overview', async ({ page }) => {
        await page.goto('/es/dota2/players/33-neta-shapira');
        await clickModals(page);
    });

    test('HardCode-tDOTAc-07 Dota Player Matches', async ({ page }) => {
        await page.goto('/es/dota2/players/benren/matches');
        await clickModals(page);
    });

    test('HardCode-tDOTAc-08 Dota Player Tournaments', async ({ page }) => {
        await page.goto('/es/dota2/dota2/players/mikoto/tournaments');
        await clickModals(page);
    });

    test('HardCode-tDOTAc-09 Dota Team Overview', async ({ page }) => {
        await page.goto('/es/dota2/teams/team-liquid-dota2');
        await clickModals(page);
    });

    test('HardCode-tDOTAc-10 Dota Team Squad', async ({ page }) => {
        await page.goto('/es/dota2/teams/execration#tab-squad');
        await clickModals(page);
    });

    test('HardCode-tDOTAc-11 Dota Team Matches', async ({ page }) => {
        await page.goto('/es/dota2/teams/nouns-dota2/matches');
        await clickModals(page);
    });

    test('HardCode-tDOTAc-12 Dota Team Tournaments', async ({ page }) => {
        await page.goto('/es/dota2/teams/mouz-dota2/tournaments');
        await clickModals(page);
    });
    
    test('HardCode-tDOTAc-13 Dota Inside News', async ({ page }) => {
        await page.goto('/es/dota2/news/player-k1-leaves-the-team-heroic');
        await clickModals(page);
    });

    test('HardCode-tDOTAc-14 Dota Inside Article', async ({ page }) => {
        await page.goto('/es/dota2/articles/master-windranger-in-dota-2-complete-tips-and-gameplay-guide');
        await clickModals(page);
    });

    test('HardCode-tLOLc-13 LoL Inside News', async ({ page }) => {
        await page.goto('/es/lol/news/pro-players-at-bootcamps-in-europe-ahead-of-worlds');
        await clickModals(page);
    });

    test('HardCode-tLOLc-14 LoL Inside Article', async ({ page }) => {
        await page.goto('/es/lol/articles/items-in-league-of-legends-complete-guide');
        await clickModals(page);
    });

    test('HardCode-tCSm-01 CS HomePage', async ({ page }) => {
        await page.goto('/es/');
        await clickModals(page);
    });

    test('HardCode-tCSm-02 CS Upcoming Matches', async ({ page }) => {
        await page.goto('/es/matches/current');
        await clickModals(page);
    });

    test('HardCode-tCSm-03 CS Finished Matches', async ({ page }) => {
        await page.goto('/es/matches/finished');
        await clickModals(page);
    });

    test('HardCode-tCSm-04 CS Upcoming Tournaments', async ({ page }) => {
        await page.goto('/es/tournaments/current');
        await clickModals(page);
    });

    test('HardCode-tCSm-05 CS Finished Tournaments', async ({ page }) => {
        await page.goto('/es/tournaments/finished');
        await clickModals(page);
    });

    test('HardCode-tCSm-06 CS Players', async ({ page }) => {
        await page.goto('/es/players');
        await clickModals(page);
    });

    test('HardCode-tCSm-07 CS Team Earnings', async ({ page }) => {
        await page.goto('/es/teams/earnings');
        await clickModals(page);
    });

    test('HardCode-tCSm-08 CS Team Valve Ranking', async ({ page }) => {
        await page.goto('/es/teams/valve-rankings/world');
        await clickModals(page);
    });

    test('HardCode-tCSm-09 CS News', async ({ page }) => {
        await page.goto('/es/news');
        await clickModals(page);
    });

    test('HardCode-tCSm-10 CS Articles', async ({ page }) => {
        await page.goto('/es/articles');
        await clickModals(page);
    });

    test('HardCode-tCSm-11 CS Wiki', async ({ page }) => {
        await page.goto('/es/wiki/welcome');
        await clickModals(page);
    });

    test('HardCode-tCSm-12 CS Forum', async ({ page }) => {
        await page.goto('/es/forum');
        await clickModals(page);
    });

    test('HardCode-tCSm-13 CS Analytics', async ({ page }) => {
        await page.goto('/es/analytics');
        await clickModals(page);
    });

    test('HardCode-tCSm-14 CS Records', async ({ page }) => {
        await page.goto('/es/records');
        await clickModals(page);
    });

    test('HardCode-tCSm-15 CS Compare Teams', async ({ page }) => {
        await page.goto('/es/tools/compare/teams');
        await clickModals(page);
    });

    test('HardCode-tCSm-16 CS Compare Players', async ({ page }) => {
        await page.goto('/es/tools/compare/players');
        await clickModals(page);
    });

    test('HardCode-tCSm-17 CS Pickems', async ({ page }) => {
        await page.goto('/es/pickems');
        await clickModals(page);
    });


    test('HardCode-tVLRm-01 Vlr Homepage', async ({ page }) => {
        await page.goto('/es/valorant');
        await clickModals(page);
    });

    test('HardCode-tVLRm-02 Vlr Upcoming Matches', async ({ page }) => {
        await page.goto('/es/valorant/matches/current');
        await clickModals(page);
    });

    test('HardCode-tVLRm-03 Vlr Finished Matches', async ({ page }) => {
        await page.goto('/es/valorant/matches/finished');
        await clickModals(page);
    });

    test('HardCode-tVLRm-04 Vlr Upcoming Tournaments', async ({ page }) => {
        await page.goto('/es/valorant/tournaments/current');
        await clickModals(page);
    });

    test('HardCode-tVLRm-05 Vlr Finished Tournaments', async ({ page }) => {
        await page.goto('/es/valorant/tournaments/finished');
        await clickModals(page);
    });

    test('HardCode-tVLRm-06 Vlr Players', async ({ page }) => {
        await page.goto('/es/valorant/players');
        await clickModals(page);
    });

    test('HardCode-tVLRm-07 Vlr Team Earnings', async ({ page }) => {
        await page.goto('/es/valorant/teams/earnings');
        await clickModals(page);
    });

    test('HardCode-tVLRm-08 Vlr News', async ({ page }) => {
        await page.goto('/es/valorant/news');
        await clickModals(page);
    });

    test('HardCode-tVLRm-09 Vlr Articles', async ({ page }) => {
        await page.goto('/es/valorant/articles');
        await clickModals(page);
    });

    test('HardCode-tVLRm-10 Vlr Forum', async ({ page }) => {
        await page.goto('/es/valorant/forum');
        await clickModals(page);
    });

    test('HardCode-tVLRm-11 Vlr Analytics', async ({ page }) => {
        await page.goto('/es/valorant/analytics');
        await clickModals(page);
    });

    test('HardCode-tVLRm-12 Vlr Pickems', async ({ page }) => {
        await page.goto('/es/valorant/pickems');
        await clickModals(page);
    });

    test('HardCode-tVLRm-13 Vlr Crosshairs', async ({ page }) => {
        await page.goto('/es/valorant/crosshair/generator');
        await clickModals(page);
    });


    test('HardCode-tDOTAm-01 Dota Homepage', async ({ page }) => {
        await page.goto('/es/dota2');
        await clickModals(page);
    });

    test('HardCode-tDOTAm-02 Dota Upcoming Matches', async ({ page }) => {
        await page.goto('/es/dota2/matches/current');
        await clickModals(page);
    });

    test('HardCode-tDOTAm-03 Dota Finished Matches', async ({ page }) => {
        await page.goto('/es/dota2/matches/finished');
        await clickModals(page);
    });

    test('HardCode-tDOTAm-04 Dota Upcoming Tournaments', async ({ page }) => {
        await page.goto('/es/dota2/tournaments/current');
        await clickModals(page);
    });

    test('HardCode-tDOTAm-05 Dota Finished Tournaments', async ({ page }) => {
        await page.goto('/es/dota2/tournaments/finished');
        await clickModals(page);
    });
    
    test('HardCode-tDOTAm-08 Dota News', async ({ page }) => {
        await page.goto('/es/dota2/news');
        await clickModals(page);
    });

    test('HardCode-tDOTAm-09 Dota Articles', async ({ page }) => {
        await page.goto('/es/dota2/articles');
        await clickModals(page);
    });

    test('HardCode-tDOTAm-11 Dota Analytics', async ({ page }) => {
        await page.goto('/es/dota2/analytics');
        await clickModals(page);
    });

    test('HardCode-tLOLm-01 LoL Homepage', async ({ page }) => {
        await page.goto('/es/lol');
        await clickModals(page);
    });

    test('HardCode-tLOLm-02 LoL Upcoming Matches', async ({ page }) => {
        await page.goto('/es/lol/matches/current');
        await clickModals(page);
    });

    test('HardCode-tLOLm-03 LoL Finished Matches', async ({ page }) => {
        await page.goto('/es/lol/matches/finished');
        await clickModals(page);
    });

    test('HardCode-tLOLm-08 LoL News', async ({ page }) => {
        await page.goto('/es/lol/news');
        await clickModals(page);
    });

    test('HardCode-tLOLm-09 LoL Articles', async ({ page }) => {
        await page.goto('/es/lol/articles');
        await clickModals(page);
    });

    test('HardCode-tLOLm-11 LoL Analytics', async ({ page }) => {
        await page.goto('/es/lol/analytics');
        await clickModals(page);
    });

});