import { NeatGradient } from 'https://esm.sh/@firecms/neat';

const gradient = new NeatGradient({
  ref: document.getElementById('gradient'),
  colors: [
    { color: '#000000', enabled: true },
    { color: '#000000', enabled: true },
    { color: '#000000', enabled: true },
    { color: '#000000', enabled: true },
    { color: '#000000', enabled: true },
    { color: '#2A5A9E', enabled: true },
  ],
  speed: 2.5,
  horizontalPressure: 3,
  verticalPressure: 4,
  waveFrequencyX: 2,
  waveFrequencyY: 3,
  waveAmplitude: 5,
  shadows: 1,
  highlights: 5,
  colorBrightness: 1,
  colorSaturation: 7,
  wireframe: false,
  colorBlending: 8,
  backgroundColor: '#003FFF',
  backgroundAlpha: 1,
  grainScale: 0,
  grainSparsity: 0,
  grainIntensity: 0,
  grainSpeed: 1,
  resolution: 1,
  flowDistortionA: 3.7,
  flowDistortionB: 1.4,
  flowScale: 2.9,
  flowEase: 0.32,
  flowEnabled: true,
});

window.addEventListener('scroll', () => {
  gradient.yOffset = window.scrollY * 3;
});
