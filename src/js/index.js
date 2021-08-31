const Snap = require("snapsvg");
const svg = require("./diamond.svg");

const SVG = Snap("#diamond");

Snap.load(svg, frag => {
  SVG.append(frag);
  let idx = 0;
  const PLAYER = SVG.circle(335, 430, 10).attr({ fill: "red" });
  const PATH_LIST = [
    "M335,430L448,324",
    "M453,325L337,210",
    "M330,210L215,324",
    "M215,325L330,436",
  ].map(c => {
    return SVG.path(c).attr({ stroke: "none" });
  });

  SVG.click(() => {
    const BASE = PATH_LIST[idx];
    idx += 1;

    Snap.animate(
      0,
      BASE.getTotalLength(),
      val => {
        const { x, y } = BASE.getPointAtLength(val);
        PLAYER.attr({ cx: x, cy: y });
      },
      1000,
      mina.easein
    );

    if (idx > PATH_LIST.length - 1) {
      idx = 0;
    }
  });
});
