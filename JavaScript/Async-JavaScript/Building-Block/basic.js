// For Each
[1, 2, 3].forEach(x => console.log(x));

// Map function
[1, 2, 3].map(x => x + 1);

// Filter
[1, 2, 3].filter(x => x > 1);

// concatAll (Custom)
[[1], [2, 3], [], [4]].concatAll()
[1, 2, 3, 4]


var user = {};
// Top-rated Movies Collection
var getTopRatedFilms = user => 
  user.videoLists.
    map(videoList => 
      videoList.videos.
          filter(video => video.rating === 5.0))
    concatAll();

getTopRatedFilms(user).
      forEach(film => console.log(film));

// Mouse Drag Collection
var getElementDrags = elmt => 
  elmt.mouseDowns.
    map(mouseDown => 
      document.mouseMoves.
          takeUntil(document.mouseUps))
    concatAll();

getTopRatedFilms(image).
      forEach(pos => image.position = pos);

// Difference bw Array and Events
