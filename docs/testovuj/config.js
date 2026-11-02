window.SZ_CONFIG = {
  lang: "en",
  channel_name: "DemoTest",
  channel_url: "https://t.me/testovuj",
  channel_button: "Channel",
  header_emoji: "📖",
  bot_username: "oglavlenie_shop_bot",
  licensee: "DemoTest",
  license_key: "SZ-04BF1ACB9BEAC3A8",
  license_id: "trial-testovuj",
  beacon: "https://sales-bot-private.onrender.com",
  footer_bot: "https://t.me/oglavlenie_shop_bot",
  footer_site: "https://eremeevmaks41-sys.github.io/oglavlenie/",
};

/* SZ-STOP (Task 193): авто-стоп — срок обслуживания истёк. Флаг читает
   шелл мини-аппа (docs/app/index.html) и показывает карточку остановки;
   при продлении подписки rebuild пишет config.js заново без флага. */
window.SZ_STOPPED = {
  channel: "testovuj",
  date: "02.11.2026",
  title: "Catalog temporarily unavailable",
  msg: "The service period for the TOC of channel @testovuj expired (02.11.2026). Updates are paused, but all posts are kept.",
  hint: "Renew the subscription — the catalog will return automatically together with all its data.",
  btn: "Renew subscription",
  renew: "https://t.me/oglavlenie_shop_bot?start=renew"
};
