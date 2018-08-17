import freesewing from "freesewing";
import { box } from "./shared";

var utilsBeamCrossesX = {
  draft: function(part) {
    // prettier-ignore
    let {debug, Point, points, Path, paths, Snippet, snippets, utils} = part.shorthand();

    points.A = new Point(10, 10);
    points.B = new Point(50, 40);

    paths.AB = new Path()
      .move(points.A)
      .line(points.B);

    snippets.X = new Snippet('x', utils.beamCrossesX(
          points.A,
          points.B,
          40)
        );

    paths.help = new Path()
      .move(new Point(40,0))
      .line(new Point(40,50))
      .attr('class', 'note dashed');

    return part;
  }
};

export default utilsBeamCrossesX;