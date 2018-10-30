/* 
{1, 2, 3}.forEach(console.log);
1
2
3

{1, 2, 3}.map(x => x + 1).forEach(console.log);
2
3
4

{1, 2, 3}.filter(x => x > 1).forEach(console.log);
2
3
4

{
  ...{1}
  ........{2.......3},
  ...........{}
  .............{4}
}.concatAll()
{...1...2.........3..4}


{...1...2..........3}.takeUntil(
  {..........4})


{
  ...{1}
  ........{2.......3},
  ...........{}
  .............{4}
}.mergeAll()
{...1...2.....4....3}


{
  ...{1}
  ........{2.......3},
  ...........{}
  .............{4}
}.switchLatest()
{...1...2.....4}

Cold and Hot Observable
*/

var getElementDrags = elmt => {
  elmt.mouseDowns = Observable.fromEvent(elmt, 'mousedown');
  elmt.mouseUps = Observable.fromEvent(elmt, 'mouseup');
  elmt.mouseMoves = Observable.fromEvent(elmt, 'mousemove');
  elmt.mouseDowns.
    map(mouseDown => 
        document.mouseMoves.
          takeUntil(document.mouseUps)).
    concatAll();
  
    getElementDrags(image).
      forEach(pos => image.position = pos);
}