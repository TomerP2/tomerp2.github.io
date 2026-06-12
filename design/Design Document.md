# Context
I'm building a website to act as my work portfolio. I am a 25 year old geospatial data scientist. I have a bachelor in Applied Geo-information Science, and am currently finishing the first year of a master in Geo-Information Science. I also have about 1.5 years' worth of work experience (1 year of internships and half a year of full-time work). Below is the content I want to have in the website. 

When making the website, make sure everything is programmed to be easily modified and expanded. Especially adding new experiences, skills and projects should be easy. Use best practice coding principles.

For now, stick to a simple website structure: just one HTML, CSS, and JS file. Also don't make the pages for each project yet. That will come later. Focus on the 'home' page for now. In the future: I would like to use PHP or a similar library to make the website more easily expandable and easier to modifiy. Verify this makes sense and give me a list of better options. Should be a lightweight way of web development as the website is not gonna be very complicated. Don't want a lot of overhead.

Start with giving me some options for the website design before starting to program it.
# Overall design
Should be a 'dark-mode' website. Similar to the websites below. Each section should have a different background color such as the nasa website. 
## Cool websites (design inspiration)
[Personal Folio | Most Aesthetically Designed Portfolio Template](https://personalfolio.framer.website/)
[NASA](https://www.nasa.gov/)
[Planet Labs: Satellite Imagery & Earth Data Analytics](https://www.planet.com/)
[Future Folio — Framer Template](https://future.framer.website/)

## Color pallette
### Main colors
Black: #000000
White:  #FFFFFF

## Accent colors
Red: #B60109
Light blue: #6699CC
Dark blue: #4381C1
## Fonts
Inter Tight

# Contents
Website can be one introduction / home page, as well one page per example project where I expand upon work done in the project

### Header
Navigate user to different sections within intro page. Sections:
- Over me
- Experiences
- Skills
- Projects
- Contact me

Can look like:![[portfolio/design/attachments/Pasted image 20260609181229.png]]
 - So glassy and roundy
 - Keep the colors black and white

## Introduction / home page

First thing:
![[portfolio/design/attachments/Pasted image 20260609192311.png]]
Insert picture of me
![[WhatsApp Image 2026-06-09 at 19.30.07.jpeg]]

- Little introduction
I'm Tomer. I am a starting geospatial data scientist with an interest in combining remote sensing data and deep learning methods. I am educated in geo-information science (Bachelor and master), and have work experience as a GIS Specialist (Internships and full-time work). 
![[portfolio/design/attachments/Pasted image 20260609192559.png]]
## Experiences
Insert timeline. Base this off my CV. Timeline should be black-and-white with some of the red accent color added.

Timeline inspiration: ![[portfolio/design/attachments/Pasted image 20260609194518.png]]

## Skills
**Techy skills**
- Python / Jupyter notebooks 
- R 
- Google Earth Engine
- ArcGIS / QGIS 
- ArcPY 
- Javascript / HTML / CSS 
- Leaflet 
- SQL
Add little icons and a lorem ipsum to each skill. Example image:
![[portfolio/design/attachments/Pasted image 20260609195011.png]]

**Data Sciency skills**
- Working with sattelite-based multi- or hyperspectral data
- Working with LiDAR data
- Working with radar data
- Developing machine learning / deep learning models
- Design of websites / apps / maps 

**Other stuff**
Languages: Fluent in english and dutch
CV as pdf (is in the project files)
*download CV button* 
## Projects
1. Point Cloud Instance Segmentation of non-ground objects for Van Oord
	1. Image:![[Pasted image 20260609190552.png]]
	2. Project Description:
	3. Simple Flowchart:
	4. Tools used:
2. Storymap GIS In Context
	4. Image:
	5. ![[Pasted image 20260609190642.png]]
	6. Project Description:
	7. Simple Flowchart:
	8. Tools used:
3. Fietsmeister
	1. Image:
			![[Pasted image 20260609190824.png]]
	2. Project Description: 
	3. Simple Flowchart:
	4. Tools used:
4. Groenlo New Wildlife Watching Tower project
	1. Image: ![[Pasted image 20260609191154.png]]
	2. Project Description: 
	3. Simple Flowchart:
	4. Tools used:
5. Deep learning model for Image Classification (dont add yet)
	1. Project Description:
	2. Simple Flowchart:
	3. Tools used:
6. Andere HAS project? (dont add yet)
	1. Project Description:
	2. Simple Flowchart:
	3. Tools used:
7. Movares projecten? (dont add yet)
	1. Begraafplaats-project
	2. Waterschap-project
	3. Script voor testen vervoer lange objecten
	4. Segmentatie van stoepranden in point clouds
Projects section can look like this:
- (So simple. Project title image and arrow for each project. Should be horizontally scrollable)
![[portfolio/design/attachments/Pasted image 20260609181722.png]]
# Contact Info
- LinkedIn: [Tomer Peled | LinkedIn](https://www.linkedin.com/in/tomer-adam-peled/)
- GitHub: [TomerP2](https://github.com/TomerP2)
- Email: tomer.a.peled@gmail.com

# Wireframe
- A wireframe PDF is provided. Check it out.

# Gradient
npm install @firecms/neat

```html
<canvas id="gradient" style="width: 100%; height: 100%"></canvas>
```
```js
import { NeatGradient } from "@firecms/neat";

const config = {
    colors: [
        {
            color: '#000000',
            enabled: true,
        },
        {
            color: '#000000',
            enabled: true,
        },
        {
            color: '#000000',
            enabled: true,
        },
        {
            color: '#000000',
            enabled: true,
        },
        {
            color: '#000000',
            enabled: true,
        },
        {
            color: '#2A5A9E',
            enabled: true,
        },
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
    yOffset: 0,
    yOffsetWaveMultiplier: 4,
    yOffsetColorMultiplier: 4,
    yOffsetFlowMultiplier: 4,
    flowDistortionA: 3.7,
    flowDistortionB: 1.4,
    flowScale: 2.9,
    flowEase: 0.32,
    flowEnabled: true,
    enableProceduralTexture: false,
    transparentTextureVoid: false,
    textureVoidLikelihood: 0.27,
    textureVoidWidthMin: 60,
    textureVoidWidthMax: 420,
    textureBandDensity: 1.2,
    textureColorBlending: 0.06,
    textureSeed: 333,
    textureEase: 0.5,
    proceduralBackgroundColor: '#0E0707',
    textureShapeTriangles: 20,
    textureShapeCircles: 15,
    textureShapeBars: 15,
    textureShapeSquiggles: 10,
    domainWarpEnabled: false,
    domainWarpIntensity: 0,
    domainWarpScale: 3,
    vignetteIntensity: 0,
    vignetteRadius: 0.8,
    fresnelEnabled: false,
    fresnelPower: 2,
    fresnelIntensity: 0.5,
    fresnelColor: '#FFFFFF',
    iridescenceEnabled: false,
    iridescenceIntensity: 0.5,
    iridescenceSpeed: 1,
    bloomIntensity: 0,
    bloomThreshold: 0.7,
    chromaticAberration: 0,
    shapeType: 'plane',
    shapeRotationX: 0,
    shapeRotationY: 0,
    shapeRotationZ: 0,
    shapeAutoRotateSpeedX: 0,
    shapeAutoRotateSpeedY: 0,
    sphereRadius: 15,
    torusRadius: 15,
    torusTube: 5,
    cylinderRadius: 10,
    cylinderHeight: 40,
    planeBend: 0,
    planeTwist: 0,
    silhouetteFade: 0.25,
    cylinderFade: 0.08,
    ribbonFade: 0.05,
    cameraLock: true,
    cameraX: 0,
    cameraY: 0,
    cameraZ: 0,
    cameraRotationX: 0,
    cameraRotationY: 0,
    cameraRotationZ: 0,
    cameraZoom: 1,
};

const gradient = new NeatGradient({
    ref: document.getElementById("gradient"),
    ...config
});

// Optional: react to scroll
window.addEventListener("scroll", () => {
    gradient.yOffset = window.scrollY;    
});
```
