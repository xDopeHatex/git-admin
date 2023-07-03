/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["en", "uz", "ru"],
  catalogs: [
    {
      path: "src/locales/{locale}/messages",
      include: ["src"],
    },
  ],
  format: "po",
};
