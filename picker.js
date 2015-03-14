Template.timezonePicker.helpers({
  timezones: function(usFirst) {
    var usZones = ['US/Eastern', 'US/Central', 'US/Mountain', 'US/Pacific'];
    var list = _(TimezonePicker.mapping()).chain().sortBy('name').sortBy(function(zone) {
      return parseInt(zone.gmtOffset);
    }).value();
    var usList = _(usZones).map(function(tz) {
      return _(list).find(function(ele) {
        return ele.name === tz;
      });
    });
    usList.push({name: "", timezone: "", gmtOffset: ""});
    return usList.concat(list);
  },
  selected: function() {
    if (Template.parentData(1).selected === this.timezone)
      return 'selected';
  }
});

Template.timezonePicker.events({
  'change select': function() {
    Meteor.users.update(Meteor.userId(), {
      $set: {
        'profile.timezone': $('select').val()
      }
    });
  }
});