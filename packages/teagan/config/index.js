import { version } from '../package.json'

export default {
  name: 'teagan',
  version,
  design: 'Joost De Cock',
  code: 'Joost De Cock',
  department: 'unisex',
  type: 'pattern',
  difficulty: 3,
  tags: ['top', 'basics'],
  optionGroups: {
    fit: ['chestEase', 'hipsEase', 'sleeveEase'],
    style: ['necklineWidth', 'necklineDepth', 'necklineBend', 'lengthBonus', 'sleeveLength'],
    advanced: [
      'acrossBackFactor',
      'armholeDepthFactor',
      'backNeckCutout',
      {
        sleevecap: [
          'sleevecapEase',
          'sleevecapTopFactorX',
          'sleevecapTopFactorY',
          'sleevecapBackFactorX',
          'sleevecapBackFactorY',
          'sleevecapFrontFactorX',
          'sleevecapFrontFactorY',
          'sleevecapQ1Offset',
          'sleevecapQ2Offset',
          'sleevecapQ3Offset',
          'sleevecapQ4Offset',
          'sleevecapQ1Spread1',
          'sleevecapQ1Spread2',
          'sleevecapQ2Spread1',
          'sleevecapQ2Spread2',
          'sleevecapQ3Spread1',
          'sleevecapQ3Spread2',
          'sleevecapQ4Spread1',
          'sleevecapQ4Spread2'
        ]
      }
    ]
  },
  measurements: [
    'biceps',
    'chest',
    'hpsToWaistBack',
    'waistToHips',
    'neck',
    'shoulderSlope',
    'shoulderToShoulder',
    'hips'
  ],
  dependencies: {
    front: 'base',
    back: 'front',
    sleevecap: 'back',
    sleeve: 'sleevecap'
  },
  inject: {
    front: 'base',
    back: 'front',
    sleeve: 'sleevecap'
  },
  hide: ['base', 'sleevecap'],
  options: {
    // Constants
    brianFitCollar: false,
    brianFitSleeve: true,
    bicepsEase: 0.05,
    collarFactor: 4.8,
    shoulderEase: 0,
    collarEase: 0,
    frontArmholeDeeper: 0.05,
    shoulderSlopeReduction: 0,
    backNeckCutout: 0.05,
    sleeveWidthGuarantee: 0.85,

    // Percentages
    chestEase: { pct: 12, min: 5, max: 25 },
    hipsEase: { pct: 18, min: 8, max: 30 },
    sleeveEase: { pct: 15, min: 5, max: 35 },
    sleeveLength: { pct: 30, min: 20, max: 100 },
    necklineDepth: { pct: 25, min: 20, max: 40 },
    necklineWidth: { pct: 30, min: 10, max: 50 },
    necklineBend: { pct: 30, min: 0, max: 70 },
    lengthBonus: { pct: 5, min: -20, max: 60 },
    acrossBackFactor: { pct: 97, min: 93, max: 100 },
    armholeDepthFactor: { pct: 65, min: 60, max: 70 },
    frontArmholeDeeper: { pct: 0.5, min: 0, max: 1.5 },
    backNeckCutout: { pct: 5, min: 2, max: 8 },

    // Sleevecap (from brian)
    sleevecapEase: { pct: 0, min: 0, max: 5 },
    sleevecapTopFactorX: { pct: 50, min: 25, max: 75 },
    sleevecapTopFactorY: { pct: 35, min: 30, max: 40 },
    sleevecapBackFactorX: { pct: 60, min: 35, max: 65 },
    sleevecapBackFactorY: { pct: 33, min: 30, max: 65 },
    sleevecapFrontFactorX: { pct: 53, min: 35, max: 65 },
    sleevecapFrontFactorY: { pct: 33, min: 30, max: 65 },
    sleevecapQ1Offset: { pct: 2, min: 0, max: 7 },
    sleevecapQ2Offset: { pct: 3.5, min: 0, max: 7 },
    sleevecapQ3Offset: { pct: 3, min: 0, max: 7 },
    sleevecapQ4Offset: { pct: 1, min: 0, max: 7 },
    sleevecapQ1Spread1: { pct: 6, min: 4, max: 20 },
    sleevecapQ1Spread2: { pct: 15, min: 4, max: 20 },
    sleevecapQ2Spread1: { pct: 15, min: 4, max: 20 },
    sleevecapQ2Spread2: { pct: 10, min: 4, max: 20 },
    sleevecapQ3Spread1: { pct: 10, min: 4, max: 20 },
    sleevecapQ3Spread2: { pct: 8, min: 4, max: 20 },
    sleevecapQ4Spread1: { pct: 7, min: 4, max: 20 },
    sleevecapQ4Spread2: { pct: 7, min: 4, max: 20 }
  }
}