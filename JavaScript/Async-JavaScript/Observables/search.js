var searchResultSets = 
  keyPresses.
    throttle(250).
      map(key => 
          getJSON("/searchResults?q=" + input.value).
            retry(3).
              takeUntil(keyPresses)).
      concatAll();

searchResultSets.forEach(
  resultSet => updateSearchResults(resultSet),
  error => showMessage("the server appers to be down.")
);

// Switch Latest
var searchResultSets = 
  keyPresses.
    throttle(250).
      map(key => 
          getJSON("/searchResults?q=" + input.value).
            retry(3)).
      switchLatest();

searchResultSets.forEach(
  resultSet => updateSearchResults(resultSet),
  error => showMessage("the server appers to be down.")
);

// Player Callback Hell
function play(movieId, cancelButton, callback) {
  var movieTicket,
      playError,
      tryFinish = function() {
        if (playError) {
          callback(null, playError);
        } else if (movieTicket && playError.initialized) {
          callback(null, ticket);
        }
      };
  cancelButton.addEventListener("click", function() { playError = "cancel"; });
  if (!playError.initialized) {
    playError.init(function(error) {
      playError = error;
      tryFinish();
    })
  }
  authorizeMovie(movieId, function(error, ticket) {
    playError = error;
    movieTicket = ticket;
    tryFinish();
  })
};

// Replace With
var authorizations = 
  player.
    init().
      map(() => 
        playAttempts.
          map(movieId => 
            player.authorize(movieId).
              catch(e => Observable.empty).
              takeUntil(cancels)).
          concatAll()).
    concatAll();    

authorizations.forEach(
  license => player.play(licese),
  error => showDialog("Sorry");
)