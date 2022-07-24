const puppeteer = require("puppeteer");
let page;

beforeEach(async () => {
  page = await browser.newPage();
  jest.setTimeout(20000);
});

afterEach(() => {
  page.close();
});

describe("Github page Team tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("GitHub for teams · Build like the best teams on the planet · GitHub");
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Sign up for free");
  });
});

describe("Github page Document tests", () => {
  beforeEach(async () => {
    await page.goto("https://docs.github.com/en");
  });

  test("The h1 main content'", async () => {
    const firstLink = await page.$("main a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title = await page.title();
    console.log(title);
    expect(title).toEqual("GitHub Documentation");
  });

  test("The first main link attribute", async () => {
    const actual = await page.$eval("main a", (link) =>
      link.getAttribute("href")
    );
    expect(actual).toEqual("/en/get-started");
  });
});

describe("Github page Shop tests", () => {
  beforeEach(async () => {
    await page.goto("https://thegithubshop.com/");
  });

  test("The h1 main content'", async () => {
    const firstLink = await page.$("main a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title = await page.title();
    console.log(title);
    expect(title).toEqual("Pride 2022 Collection – GitHub");
  });

  test("The first main link attribute", async () => {
    const actual = await page.$eval("main a", (link) =>
      link.getAttribute("href")
    );
    expect(actual).toEqual("/collections/pride-2022-collection");
  });
});

describe("Netology page tests", () => {
  beforeEach(async () => {
    await page.goto("https://netology.ru/");
  });

  test("The h1 header content'", async () => {
    jest.setTimeout(9000000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("Нетология – курсы и обучение интернет-профессиям онлайн");
  });
});
