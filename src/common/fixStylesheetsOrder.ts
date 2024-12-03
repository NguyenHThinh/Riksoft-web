export default function fixStylesheetsOrder(isRTL: boolean) {
  if (isRTL) {
    let rtlCss = document.querySelector<HTMLLinkElement>(
      'link[href="/assets/css/rtl_style.css"]'
    );
    let mainCss = document.querySelector<HTMLLinkElement>(
      'link[href="/assets/css/style.css"]'
    );

    if (!rtlCss || !mainCss) return;

    if (
      mainCss.nextElementSibling
        ?.getAttribute("href")
        ?.includes("/assets/css/rtl_style.css")
    )
      return;

    // Insert main css before rtl css
    rtlCss.before(mainCss);
  } else {
    let bootstrapCss = document.querySelector<HTMLLinkElement>(
      'link[href="/assets/css/lib/bootstrap.min.css"]'
    );
    let mainCss = document.querySelector<HTMLLinkElement>(
      'link[href="/assets/css/style.css"]'
    );

    if (!bootstrapCss || !mainCss) return;

    if (
      bootstrapCss.nextElementSibling
        ?.getAttribute("href")
        ?.includes("/assets/css/style.css")
    )
      return;

    // Insert main css after bootstrap css
    bootstrapCss.after(mainCss);
  }
}
