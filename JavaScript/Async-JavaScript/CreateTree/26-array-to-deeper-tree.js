Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
		results.push.apply(results, subArray);
	});

	return results;
};

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
	return this.
		map(function(item) {
			return projectionFunctionThatReturnsArray(item);
		}).
		// apply the concatAll function to flatten the two-dimensional array
		concatAll();
};

Array.zip = function(left, right, combinerFunction) {
	var counter,
		results = [];

	for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
		results.push(combinerFunction(left[counter],right[counter]));
	}

	return results;
};

var lists = [
  {
    "id": 5434364,
    "name": "New Releases"
  },
  {
    "id": 65456475,
    name: "Thrillers"
  }
],
videos = [
  {
    "listId": 5434364,
    "id": 65432445,
    "title": "The Chamber"
  },
  {
    "listId": 5434364,
    "id": 675465,
    "title": "Fracture"
  },
  {
    "listId": 65456475,
    "id": 70111470,
    "title": "Die Hard"
  },
  {
    "listId": 65456475,
    "id": 654356453,
    "title": "Bad Boys"
  }
],
boxarts = [
  { videoId: 65432445, width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
  { videoId: 65432445, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" },
  { videoId: 675465, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
  { videoId: 675465, width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
  { videoId: 675465, width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
  { videoId: 70111470, width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
  { videoId: 70111470, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" },
  { videoId: 654356453, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
  { videoId: 654356453, width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
],
bookmarks = [
  { videoId: 65432445, time: 32432 },
  { videoId: 675465, time: 3534543 },
  { videoId: 70111470, time: 645243 },
  { videoId: 654356453, time: 984934 }
];

function arrayToDeeperTree(lists, videos, bookmarks, boxarts) {
	return lists.map(list => {
    return {
      name: list.name,
      videos: videos.filter(video => video.listId === list.id).
        concatMap(video => Array.zip(bookmarks.filter(bookmark => bookmark.videoId === video.id),
                                     boxarts.filter(boxart => boxart.videoId === video.id).
                                     reduce((acc, curr) => acc.width * acc.height < curr.width * curr.height ? acc : curr),
                                     (bookmark, boxart) => ({id: video.id, title: video.title, time: bookmark.time, boxart: boxart.url})))
    }
  });
}

console.log(arrayToDeeperTree(lists, videos, bookmarks, boxarts));
      
/**
 
 */