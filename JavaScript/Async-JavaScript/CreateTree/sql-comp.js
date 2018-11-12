var videoNamesAndListNames = 
  list.map(list => 
    videos.filter(video => video.listId === list.id).
      map(video => ({name: video.name, listName: list.name}))).
        concatAll()