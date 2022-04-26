module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6ac3a1b76195a625564f955984e96313'),
  },
});
