window.SZ_CONFIG = {
  channel_name: "DemoTest",
  channel_url: "https://t.me/testovuj",
  channel_button: "Канал",
  header_emoji: "📖",
  bot_username: "oglavlenie_shop_bot",
  licensee: "DemoTest",
  license_key: "SZ-07664C891B74B580",
  license_id: "trial-testovuj",
};

/* SZ-STOP (Task 193): авто-стоп — срок обслуживания истёк. Флаг читает
   шелл мини-аппа (docs/app/index.html) и показывает карточку остановки;
   при продлении подписки rebuild пишет config.js заново без флага. */
window.SZ_STOPPED = {
  channel: "testovuj",
  date: "27.10.2026",
  title: "Каталог временно недоступен",
  msg: "Срок обслуживания оглавления канала @testovuj истёк (27.10.2026). Обновления приостановлены, но все посты сохранены.",
  hint: "Продлите подписку — каталог вернётся автоматически вместе со всеми данными.",
  btn: "Продлить подписку",
  renew: "https://t.me/oglavlenie_shop_bot?start=renew"
};
