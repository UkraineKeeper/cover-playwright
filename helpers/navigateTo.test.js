import { expect } from "@playwright/test";
import { menuPages, firstEntryWebElements } from "../page-objects/skeleton";

export async function visitHomePage(page) {
    await page.goto('/');
    await expect(page.locator(menuPages.headerLogoBo3)).toBeVisible({ timeout: 20000 });
    await expect(page.locator(firstEntryWebElements.spoilerModeModalTitle)).toBeVisible({ timeout: 20000 });
    await page.locator(firstEntryWebElements.spoilerModeConfirmationButton).click();
    await page.locator(firstEntryWebElements.cookiesConfirmButton).click();
}

export async function gotoVlr(page) {
    await page.locator(menuPages.switchDiscipline).click()
    await page.locator(menuPages.selectVlr).click()
    await expect(page.locator(menuPages.selectedDiscipline)).toHaveText('Valorant');
    await page.waitForURL('**/valorant');
    const currentUrl = page.url();
    expect(currentUrl).toContain('/valorant');
  }
  
  export async function gotoDota(page) {
    await page.locator(menuPages.switchDiscipline).click();
    await page.locator(menuPages.selectDota).click();
    await expect(page.locator(menuPages.selectedDiscipline)).toHaveText('Dota 2');
    await page.waitForURL('**/dota2');
    const currentUrl = page.url();
    expect(currentUrl).toContain('/dota2');
  }
  
  export async function gotoLol(page) {
    await page.locator(menuPages.switchDiscipline).click()
    await page.locator(menuPages.selectLol).click()
    await expect(page.locator(menuPages.selectedDiscipline)).toHaveText('LoL');
    await page.waitForURL('**/lol');
    const currentUrl = page.url();
    expect(currentUrl).toContain('/lol');
  }

  export async function moveToMatchesUpcoming(page) {
    await page.locator(menuPages.matchesUpcoming).click()

    await page.waitForURL('**/matches/current');
    const currentUrl = page.url();
    expect(currentUrl).toContain('/matches/current');
  }

  export async function moveToMatchesFinished(page) {
    await page.locator(menuPages.hoverOnMatches).hover()
    await page.locator(menuPages.matchesFinished).click()

    await page.waitForURL('**/matches/finished');
    const currentUrl = page.url();
    expect(currentUrl).toContain('/matches/finished');
}

export async function moveToUpcomingTournaments(page) {
    await page.locator(menuPages.hoverOnTournaments).hover()
    await page.locator(menuPages.tournamentsUpcoming).click()

    await page.waitForURL('**/tournaments/current');
    const currentUrl = page.url();
    expect(currentUrl).toContain('/tournaments/current');
}

export async function moveToFinishedTournaments(page) {
    await page.locator(menuPages.hoverOnTournaments).hover()
    await page.locator(menuPages.tournamentsFinished).click()

    await page.waitForURL('**/tournaments/finished');
    const currentUrl = page.url();
    expect(currentUrl).toContain('/tournaments/finished');
}

export async function moveToAllPlayers(page) {
    await page.locator(menuPages.players).click()

    await page.waitForURL('**/players');
    const currentUrl = page.url();
    expect(currentUrl).toContain('/players');
}

export async function moveToTeamsEarnings(page) {
    await page.locator(menuPages.hoverOnTeams).hover()
    await page.locator(menuPages.teamsEarnings).click()

    await page.waitForURL('**/teams/earnings');
    const currentUrl = page.url();
    expect(currentUrl).toContain('/teams/earnings');
}

export async function moveToTeamsValveRanking(page) {
    await page.locator(menuPages.hoverOnTeams).hover()
    await page.locator(menuPages.teamsValveRankings).click()

    await page.waitForURL('**/teams/valve-rankings/world');
    const currentUrl = page.url();
    expect(currentUrl).toContain('/teams/valve-rankings/world');
}

export async function moveToNews(page) {
    await page.locator(menuPages.hoverOnNews).hover()
    await page.locator(menuPages.csAllNews).click()

    await page.waitForURL('**/news');
    const currentUrl = page.url();
    expect(currentUrl).toContain('/news');
}

export async function moveToArticles(page) {
    await page.locator(menuPages.hoverOnNews).hover()
    await page.locator(menuPages.csAllArticles).click()

    await page.waitForURL('**/articles');
    const currentUrl = page.url();
    expect(currentUrl).toContain('/articles');
}

export async function moveToWiki(page) {
    await page.locator(menuPages.hoverOnNews).hover()
    await page.locator(menuPages.csWiki).click()

    await page.waitForURL('**/wiki/welcome');
    const currentUrl = page.url();
    expect(currentUrl).toContain('/wiki/welcome');
}

export async function moveToForum(page) {
    await page.locator(menuPages.hoverOnNews).hover()
    await page.locator(menuPages.csForum).click()

    await page.waitForURL('**/forum');
    const currentUrl = page.url();
    expect(currentUrl).toContain('/forum');
}

export async function moveToAnalytics(page) {
    await page.locator(menuPages.hoverOnNews).hover()
    await page.locator(menuPages.csAnalyticsNews).click()

    await page.waitForURL('**/analytics');
    const currentUrl = page.url();
    expect(currentUrl).toContain('/analytics');
}

export async function moveToRecords(page) {
    await page.locator(menuPages.hoverOnTools).hover()
    await page.locator(menuPages.toolsRecords).click()
  
    await page.waitForURL('**/records');
    const currentUrl = page.url();
    expect(currentUrl).toContain('/records'); 
}

export async function moveToTeamsCompare(page) {
    await page.locator(menuPages.hoverOnTools).hover()
    await page.locator(menuPages.toolsTeamsCompare).click()
  
    await page.waitForURL('**/tools/compare/teams');
    const currentUrl = page.url();
    expect(currentUrl).toContain('/tools/compare/teams');   
}

export async function moveToPlayersCompare(page) {
    await page.locator(menuPages.hoverOnTools).hover()
    await page.locator(menuPages.toolsPlayersCompare).click()

    await page.waitForURL('**/tools/compare/players');
    const currentUrl = page.url();
    expect(currentUrl).toContain('/tools/compare/players'); 
}

export async function moveToPickems(page) {
    await page.locator(menuPages.pickems).click()

    await page.waitForURL('**/pickems');
    const currentUrl = page.url();
    expect(currentUrl).toContain('/pickems');
}

export async function moveToCrosshairs(page) {
  await page.locator(menuPages.crosshairs).click()

  await page.waitForURL('**/crosshair/generator');
  const currentUrl = page.url();
  expect(currentUrl).toContain('/crosshair/generator');
}

export async function moveToFirstLiveMatch() {
    // cy.wait(1000);
    // cy.get('body').then(($body) => {
    //   if ($body.find(allMatchesContent.liveMatchesClickableArea).first().length === 0) {
    //     cy.log('There are no live matches at the moment');
    //     cy.get(menuPages.headerLogoBo3).click();
    //     cy.get(footerElements.helpUkraine).click();
    //     cy.wrap(null).then(() => { throw new Error('Тест зупинено, оскільки немає живих матчів'); });
    //   } else {
    //     cy.get(allMatchesContent.liveMatchesClickableArea).first().click();
    //   }
    // });
}