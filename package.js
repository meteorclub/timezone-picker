Package.describe({
  summary: "Nicely formatted dropdown list of timezones, based on moment. Also timezone detection.",
  version: '0.1.3',
  name: "joshowens:timezone-picker",
  git: 'https://github.com/MeteorClub/timezone-picker'
});

Package.onUse(function(api, where) {
  api.versionsFrom("METEOR@0.9.4");

  // Client side only packages
  api.use(['blaze', 'templating', 'jquery'], 'client');
  api.use(['underscore'], 'client');
  // Isomorphic packages (exposed on Client and Server)
  var sharedDeps = ['momentjs:moment@2.10.6', 'aldeed:moment-timezone@0.4.0'];
  api.use(sharedDeps);
  api.imply(sharedDeps);

  api.addFiles([
    'mapping.js',
    'picker.html',
    'picker.js',
    'jstz.js'
  ], 'client');

  api.export(['TimezonePicker']);
});
