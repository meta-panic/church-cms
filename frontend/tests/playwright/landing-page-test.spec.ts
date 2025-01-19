import { test, checkConsoleErrors, checkBaseElements } from "./baseTest";
import { expect } from "@playwright/test";

export const PAGE_DATA = {
  // TODO: use texts from constants.ts class when the page will be ready
  headingWelcomeText: "Добро пожаловать в Дом молитвы",
  divDomMolitvyText: "Дом молитвы - протестантская церковь, часть братства евангельских христиан баптистов",
  buttonReadMoreText: "Узнать больше",
  headingAboutUsText: "О нас",
  headingHowToBecomeChristianText: "Как стать христианином?",
  headingOurServicesText: "Наши служения",
};

let response: any;

test.beforeEach(async ({ page }) => {

  const browserContext = page.context();
  browserContext.addCookies([
    {
      name: "debugCookie",
      value: "true",
      domain: "localhost",
      path: "/",
      expires: -1,
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
    },
  ]);

  response = await page.goto("/");
});

checkConsoleErrors();

checkBaseElements();

test("check headers on landing page", async ({ page }) => {
  test.slow();

  if (response) {
    const headers = response.headers();

    expect.soft(response.status()).toBe(200);
    expect.soft(headers["etag"]).toBeInstanceOf(String);
    expect.soft(headers["x-nextjs-stale-time"]).toBeInstanceOf(String);
    expect.soft(headers["x-nextjs-prerender"]).toBe("1");
    expect.soft(headers["x-powered-by"]).toBe("Next.js");
    expect.soft(headers["cache-control"]).toBe("s-maxage=31536000");
    expect.soft(headers["transfer-encoding"]).toBe("chunked");
  } else {
    throw new Error("No HTTP response received");
  }
});

test("check elements on test landing page", async ({ page }) => {
  await test.step("check heading: header", async () => {
    await expect(page.locator("xpath=//header[text()=\"header\"]")).toBeVisible();
  });

  await test.step("check div: test", async () => {
    await expect(page.locator("xpath=//div[text()=\"test\"]")).toBeVisible();
  });

  await test.step("check footer: footer", async () => {
    await expect(page.locator("xpath=//footer[text()=\"footer\"]")).toBeVisible();
  });
});

test.skip("check elements on landing page", {
  tag: "@draft",
}, async ({ page }) => {
  // TODO: change locators to getByRole or XPath when the page will be ready & remove '.skip'

  await test.step("check heading: Welcome", async () => {
    await expect(page.getByText(PAGE_DATA.headingWelcomeText)).toBeVisible();
  });

  await test.step("check div: Dom Molitvy", async () => {
    await expect(page.getByText(PAGE_DATA.divDomMolitvyText)).toBeVisible();
  });

  await test.step("check button: Read More", async () => {
    await expect(page.getByText(PAGE_DATA.buttonReadMoreText)).toBeVisible();
  });

  await test.step("check heading: About Us", async () => {
    await expect(page.getByText(PAGE_DATA.headingAboutUsText)).toBeVisible();
  });

  await test.step("check heading: How to become christian", async () => {
    await expect(page.getByText(PAGE_DATA.headingHowToBecomeChristianText)).toBeVisible();
  });

  await test.step("check heading: Our services", async () => {
    await expect(page.getByText(PAGE_DATA.headingOurServicesText)).toBeVisible();
  });
});

test("should match snapshot", async ({ page }) => {
  await expect(await page.screenshot()).toMatchSnapshot("landing-page-snapshot.png");
});
