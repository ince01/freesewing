export default function (part) {
  // Remove clutter
  let seam = part.paths.seam
  part.paths = {}
  part.paths.seam = seam

  let {
    store,
    measurements,
    options,
    sa,
    Point,
    points,
    Path,
    paths,
    Snippet,
    snippets,
    complete,
    paperless,
    macro
  } = part.shorthand()

  // Fit the hips
  points.hem.x = (measurements.hips * (1 + options.hipsEase)) / 4
  points.hemCp2 = new Point(points.hem.x, points.cbWaist.y)

  // Ribbing
  points.cbRibbing = points.cbHem.shift(90, store.get('ribbing'))
  points.ribbing = points.hem.shift(90, store.get('ribbing'))

  // Raglan tip
  let neckOpening = new Path().move(points.cbNeck).curve(points.cbNeck, points.neckCp2, points.neck)
  points.raglanTipBack = neckOpening.shiftFractionAlong(0.7)
  let neckOpeningParts = neckOpening.split(points.raglanTipBack)
  // Paths
  paths.saBase = new Path()
    .move(points.cbRibbing)
    .line(points.ribbing)
    .curve_(points.hemCp2, points.armhole)
    .curve(points.armholeCp2, points.armholeHollowCp1, points.armholeHollow)
    .line(points.raglanTipBack)
    .join(neckOpeningParts[0].reverse())
  paths.seam = paths.saBase.clone().close().attr('class', 'fabric')
  paths.saBase.render = false

  // Store neck opening path
  store.set('neckOpeningPartBack', neckOpeningParts[1])
  store.set('neckOpeningAnchorBack', points.neck)
  store.set('neckOpeningLenBack', neckOpening.length())
  store.set('neckCutoutBack', points.cbNeck.y)

  // Complete pattern?
  if (complete) {
    macro('cutonfold', {
      from: points.cbNeck,
      to: points.cbRibbing,
      grainline: true
    })
    points.title = new Point(points.armhole.x / 2, points.armhole.y)
    macro('title', { at: points.title, nr: 2, title: 'back' })
    store.set('notchBack', points.raglanTipBack.dist(points.armholeHollow) / 2)
    points.sleeveNotch = points.raglanTipBack.shiftTowards(
      points.armholeHollow,
      store.get('notchBack')
    )
    snippets.sleeveNotch = new Snippet('bnotch', points.sleeveNotch)
    store.set('backRaglanTipToNotch', points.raglanTipBack.dist(points.sleeveNotch))
    points.logo = points.title.shift(-90, 70)
    snippets.logo = new Snippet('logo', points.logo)
    if (sa) {
      paths.sa = paths.saBase.offset(sa).line(points.cbNeck).attr('class', 'fabric sa')
      paths.sa.move(points.cbRibbing).line(paths.sa.start())
    }
  }

  // Paperless?
  if (paperless) {
    macro('vd', {
      from: points.cbRibbing,
      to: points.cbNeck,
      x: points.cbNeck.x - 15
    })
    macro('vd', {
      from: points.cbRibbing,
      to: points.raglanTipBack,
      x: points.cbNeck.x - 30
    })
    macro('vd', {
      from: points.ribbing,
      to: points.armhole,
      x: points.ribbing.x + 15 + sa
    })
    macro('hd', {
      from: points.cbNeck,
      to: points.raglanTipBack,
      y: points.raglanTipBack.y - 15 - sa
    })
    macro('hd', {
      from: points.raglanTipBack,
      to: points.armhole,
      y: points.raglanTipBack.y - 15 - sa
    })
    macro('hd', {
      from: points.cbRibbing,
      to: points.ribbing,
      y: points.cbRibbing.y + 15 + sa
    })
  }

  return part
}
