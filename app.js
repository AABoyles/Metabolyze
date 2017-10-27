function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $('#user-name').text(profile.getName());
  $('#user-image').attr('src', profile.getImageUrl());
  $('.not-logged-in').fadeOut(() => {
    $('.logged-in').fadeIn();
  });
}

function signOut(){
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(() => {
    $('.logged-in').fadeOut(() => {
      $('.not-logged-in').fadeIn();
    });
    console.log('User signed out.');
  });
}

$(function(){
  $('#sign-out').click(signOut);
  $('#add-new-drug').click(() => {
    var dialog = document.querySelector('dialog');
    dialog.showModal();
    $('#confirm-add-drug').click(e => {
      dialog.close();
      drugRow({
        
      }).appendTo('main')
        .slideDown();
    });
    $('#cancel-add-drug').click(e => {
      dialog.close();
    });
  });
  new Awesomplete(document.getElementById("drug-name"), {
  	list: _.pluck(drugs, 'name')
  });
});

var drugs = [
  {'name': 'Caffeine'},
  {'name': 'Alcohol'},
  {'name': 'L-Theanine'}
];
