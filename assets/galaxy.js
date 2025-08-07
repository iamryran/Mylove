import * as _0x9dc5f4 from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import 'three/examples/jsm/loaders/FontLoader.js';
import 'three/examples/jsm/geometries/TextGeometry.js';
const scene = new _0x9dc5f4.Scene();
scene.fog = new _0x9dc5f4.FogExp2(0x0, 0.0015);
const camera = new _0x9dc5f4.PerspectiveCamera(0x4b, window.innerWidth / window.innerHeight, 0.1, 0x186a0);
camera.position.set(0x0, 0x14, 0x1e);
const renderer = new _0x9dc5f4.WebGLRenderer({
  'antialias': true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 0x2));
renderer.outputColorSpace = _0x9dc5f4.SRGBColorSpace;
document.getElementById("container").appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.2;
controls.enabled = false;
controls.target.set(0x0, 0x0, 0x0);
controls.enablePan = false;
controls.minDistance = 0xf;
controls.maxDistance = 0x12c;
controls.zoomSpeed = 0.3;
controls.rotateSpeed = 0.3;
controls.update();
function createGlowMaterial(_0x4d9bbf, _0x4516e0 = 0x80, _0x247cff = 0.55) {
  const _0x105967 = document.createElement('canvas');
  _0x105967.width = _0x105967.height = _0x4516e0;
  const _0xf39c85 = _0x105967.getContext('2d');
  const _0x2f57b8 = _0xf39c85.createRadialGradient(_0x4516e0 / 0x2, _0x4516e0 / 0x2, 0x0, _0x4516e0 / 0x2, _0x4516e0 / 0x2, _0x4516e0 / 0x2);
  _0x2f57b8.addColorStop(0x0, _0x4d9bbf);
  _0x2f57b8.addColorStop(0x1, "rgba(0,0,0,0)");
  _0xf39c85.fillStyle = _0x2f57b8;
  _0xf39c85.fillRect(0x0, 0x0, _0x4516e0, _0x4516e0);
  const _0x5ca1cd = new _0x9dc5f4.CanvasTexture(_0x105967);
  const _0x31800b = new _0x9dc5f4.SpriteMaterial({
    'map': _0x5ca1cd,
    'transparent': true,
    'opacity': _0x247cff,
    'depthWrite': false,
    'blending': _0x9dc5f4.AdditiveBlending
  });
  return new _0x9dc5f4.Sprite(_0x31800b);
}
const centralGlow = createGlowMaterial("rgba(255,255,255,0.8)", 0x9c, 0.25);
centralGlow.scale.set(0x8, 0x8, 0x1);
scene.add(centralGlow);
for (let i = 0x0; i < 0xf; i++) {
  const hue = Math.random() * 0x168;
  const color = "hsla(" + hue + ", 80%, 50%, 0.6)";
  const nebula = createGlowMaterial(color, 0x100);
  nebula.scale.set(0x64, 0x64, 0x1);
  nebula.position.set((Math.random() - 0.5) * 0xaf, (Math.random() - 0.5) * 0xaf, (Math.random() - 0.5) * 0xaf);
  scene.add(nebula);
}
const galaxyParameters = {
  'count': 0x186a0,
  'arms': 0x6,
  'radius': 0x64,
  'spin': 0.5,
  'randomness': 0.2,
  'randomnessPower': 0x14,
  'insideColor': new _0x9dc5f4.Color(0xd63ed6),
  'outsideColor': new _0x9dc5f4.Color(0x48b8b8)
};
function decodeBase64Unicode(_0x3782b7) {
  return decodeURIComponent(atob(_0x3782b7).split('').map(_0x4ff488 => {
    return '%' + ('00' + _0x4ff488.charCodeAt(0x0).toString(0x10)).slice(-0x2);
  }).join(''));
}
function getHeartImagesFromURL() {
  // Sử dụng hình ảnh từ thư mục cục bộ
  const imageList = [
    'z6883666555231_bf51b3b11b9b086d2b421352b81ffe1f.jpg',
    'z6883666555320_e15c008f653acc33dfec458a6e47397e.jpg',
    'z6883666564344_f13e922d7754cd9c2da815de7abc72d8.jpg',
    'z6883666585206_a35d055f486c89508c893f90880d7d7e.jpg',
    'z6883666588438_2ed122608d549fe2b40032f04b8f8444.jpg',
    'z6883666593331_3e9405cdc85ded80172d2f033ac05d67.jpg',
    'z6883666593472_a01d13935f67a13ae44ed54aa65014ed.jpg',
    'z6883666629113_ee71e050257f0cfb383ec7da74d168b4.jpg',
    'z6883666631491_08ba12975934bc3d6dabb8a006896ccc.jpg',
    'z6883666631618_3973d60d282f3efbcb4f652ff970b6ef.jpg',
    'z6883666633496_6b0e41b48af26d1d7c24696c10c60c9c.jpg',
    'z6883666637975_f716948ebe256c4940491a111bc0c173.jpg',
    'z6883666689220_c72fc83ed1aaa2f5cc2109fd1bc998c0.jpg',
    'z6883666692341_50e28d50ee882d245ba32b998b851c96.jpg',
    'z6883666698251_b11b14475293218b3a06813896d5679c.jpg',
    'z6883666701404_0d9bb48b573cdfd3205a22df3b0ebdbc.jpg',
    'z6883666702343_abcc11b5447a54aae72d9b2aaf7f85c0.jpg',
    'z6883666704836_0661d3f3e78b0c4ceb7bc41d0d515e04.jpg',
    'z6883666709144_476b832c492d83815df8e78f7001a153.jpg',
    'z6883666710549_47144e0b1fafb8dc1b58d1b82c29eee5.jpg',
    'z6883666711786_e24a2ef82ad42f5457124a2a5ef6ac7e.jpg',
    'z6883666782813_b47f3644bbfbccc47b4732b8b0586f69.jpg',
    'z6883666792380_6ac5970d8e5957d7b77b06cda80b47c2.jpg',
    'z6883666792505_83a5d0c719e46edb9852bb71d0d7371a.jpg',
    'z6883666792771_1bd8e75dca249e4c1321a415fe9dbe52.jpg',
    'z6883666795628_fce74887d438de35ef992d2b3e5fb750.jpg',
    'z6883666795950_fd968a173de697835da5920f721b0274.jpg',
    'z6883666804019_642dee7413fe67ed27b870f96ae9d3c5.jpg',
    'z6883666806864_c1bc49d9dc371ccd37fb939530f391c6.jpg',
    'z6883666809100_d55efe31b36298b2b6f45c1825655951.jpg',
    'z6883666811040_7472f83d084f6292172c5f79c51a5426.jpg',
    'z6883666812358_07da68368b8e501153d2ee54a8024954.jpg',
    'z6883666815132_dcab8bcea104d26dc27dedd73f211cd1.jpg',
    'z6883666860322_098e154bd4e054a2a5568ae3f0753e34.jpg',
    'z6883666870087_cc789899f116d504ac5bb6438eac6dd0.jpg',
    'z6883666873089_9ad2a853ee2a7c01c3a8aa6658ae9271.jpg'
  ];
  
  return imageList.map(filename => './assets/images/' + filename);
}
const heartImages = getHeartImagesFromURL() || [
  './assets/images/z6883666555231_bf51b3b11b9b086d2b421352b81ffe1f.jpg',
  './assets/images/z6883666555320_e15c008f653acc33dfec458a6e47397e.jpg',
  './assets/images/z6883666564344_f13e922d7754cd9c2da815de7abc72d8.jpg'
];
console.log("Danh sách hình ảnh được sử dụng:", heartImages);
const numGroups = heartImages.length;
let pointsPerGroup;
if (numGroups <= 0x1) {
  pointsPerGroup = 0x3a98;
} else {
  if (numGroups >= 0x6) {
    pointsPerGroup = 0xfa0;
  } else {
    const t = (numGroups - 0x1) / 5;
    pointsPerGroup = Math.floor(0x3a98 * (0x1 - t) + 0xfa0 * t);
  }
}
if (pointsPerGroup * numGroups > 0x186a0) {
  pointsPerGroup = Math.floor(0x186a0 / numGroups);
}
console.log("Số lượng ảnh: " + numGroups + ", Điểm mỗi ảnh: " + pointsPerGroup);
const positions = new Float32Array(300000);
const colors = new Float32Array(300000);
let pointIdx = 0x0;
for (let i = 0x0; i < 0x186a0; i++) {
  const radius = Math.pow(Math.random(), 0x14) * 0x64;
  const branchAngle = i % 0x6 / 0x6 * Math.PI * 0x2;
  const spinAngle = radius * 0.5;
  const randomX = (Math.random() - 0.5) * 0.2 * radius;
  const randomY = (Math.random() - 0.5) * 0.2 * radius * 0.5;
  const randomZ = (Math.random() - 0.5) * 0.2 * radius;
  const totalAngle = branchAngle + spinAngle;
  if (radius < 0x1e && Math.random() < 0.7) {
    continue;
  }
  const i3 = pointIdx * 0x3;
  positions[i3] = Math.cos(totalAngle) * radius + randomX;
  positions[i3 + 0x1] = randomY;
  positions[i3 + 0x2] = Math.sin(totalAngle) * radius + randomZ;
  const mixedColor = new _0x9dc5f4.Color(0xff66ff);
  mixedColor.lerp(new _0x9dc5f4.Color(0x66ffff), radius / 0x64);
  mixedColor.multiplyScalar(0.7 + 0.3 * Math.random());
  colors[i3] = mixedColor.r;
  colors[i3 + 0x1] = mixedColor.g;
  colors[i3 + 0x2] = mixedColor.b;
  pointIdx++;
}
const galaxyGeometry = new _0x9dc5f4.BufferGeometry();
galaxyGeometry.setAttribute("position", new _0x9dc5f4.BufferAttribute(positions.slice(0x0, pointIdx * 0x3), 0x3));
galaxyGeometry.setAttribute("color", new _0x9dc5f4.BufferAttribute(colors.slice(0x0, pointIdx * 0x3), 0x3));
const galaxyMaterial = new _0x9dc5f4.ShaderMaterial({
  'uniforms': {
    'uTime': {
      'value': 0x0
    },
    'uSize': {
      'value': 0x32 * renderer.getPixelRatio()
    },
    'uRippleTime': {
      'value': -0x1
    },
    'uRippleSpeed': {
      'value': 0x28
    },
    'uRippleWidth': {
      'value': 0x14
    }
  },
  'vertexShader': "\n        uniform float uSize;\n        uniform float uTime;\n        uniform float uRippleTime;\n        uniform float uRippleSpeed;\n        uniform float uRippleWidth;\n\n        varying vec3 vColor;\n\n        void main() {\n            // Lấy màu gốc từ geometry (giống hệt vertexColors: true)\n            vColor = color;\n\n            vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n\n            // ---- LOGIC HIỆU ỨNG GỢN SÓNG ----\n            if (uRippleTime > 0.0) {\n                float rippleRadius = (uTime - uRippleTime) * uRippleSpeed;\n                float particleDist = length(modelPosition.xyz);\n\n                float strength = 1.0 - smoothstep(rippleRadius - uRippleWidth, rippleRadius + uRippleWidth, particleDist);\n                strength *= smoothstep(rippleRadius + uRippleWidth, rippleRadius - uRippleWidth, particleDist);\n\n                if (strength > 0.0) {\n                    vColor += vec3(strength * 2.0); // Làm màu sáng hơn khi sóng đi qua\n                }\n            }\n\n            vec4 viewPosition = viewMatrix * modelPosition;\n            gl_Position = projectionMatrix * viewPosition;\n            // Dòng này làm cho các hạt nhỏ hơn khi ở xa, mô phỏng hành vi của PointsMaterial\n            gl_PointSize = uSize / -viewPosition.z;\n        }\n    ",
  'fragmentShader': "\n        varying vec3 vColor;\n        void main() {\n            // Làm cho các hạt có hình tròn thay vì hình vuông\n            float dist = length(gl_PointCoord - vec2(0.5));\n            if (dist > 0.5) discard;\n\n            gl_FragColor = vec4(vColor, 1.0);\n        }\n    ",
  'blending': _0x9dc5f4.AdditiveBlending,
  'depthWrite': false,
  'transparent': true,
  'vertexColors': true
});
const galaxy = new _0x9dc5f4.Points(galaxyGeometry, galaxyMaterial);
scene.add(galaxy);
function createNeonTexture(_0x5d0ef2, _0x332713) {
  const _0x4fedad = window.devicePixelRatio || 0x1;
  const _0x166560 = document.createElement("canvas");
  _0x166560.width = _0x166560.height = _0x332713 * _0x4fedad;
  _0x166560.style.width = _0x166560.style.height = _0x332713 + 'px';
  const _0x5191bc = _0x166560.getContext('2d');
  _0x5191bc.scale(_0x4fedad, _0x4fedad);
  const _0x3f9be8 = _0x5d0ef2.width / _0x5d0ef2.height;
  let _0x1a0dcd;
  let _0x40f8d9;
  let _0x483525;
  let _0x4b5430;
  if (_0x3f9be8 > 0x1) {
    _0x1a0dcd = _0x332713;
    _0x40f8d9 = _0x332713 / _0x3f9be8;
    _0x483525 = 0x0;
    _0x4b5430 = (_0x332713 - _0x40f8d9) / 0x2;
  } else {
    _0x40f8d9 = _0x332713;
    _0x1a0dcd = _0x332713 * _0x3f9be8;
    _0x483525 = (_0x332713 - _0x1a0dcd) / 0x2;
    _0x4b5430 = 0x0;
  }
  _0x5191bc.clearRect(0x0, 0x0, _0x332713, _0x332713);
  const _0x1ee339 = _0x332713 * 0.1;
  _0x5191bc.save();
  _0x5191bc.beginPath();
  _0x5191bc.moveTo(_0x483525 + _0x1ee339, _0x4b5430);
  _0x5191bc.lineTo(_0x483525 + _0x1a0dcd - _0x1ee339, _0x4b5430);
  _0x5191bc.arcTo(_0x483525 + _0x1a0dcd, _0x4b5430, _0x483525 + _0x1a0dcd, _0x4b5430 + _0x1ee339, _0x1ee339);
  _0x5191bc.lineTo(_0x483525 + _0x1a0dcd, _0x4b5430 + _0x40f8d9 - _0x1ee339);
  _0x5191bc.arcTo(_0x483525 + _0x1a0dcd, _0x4b5430 + _0x40f8d9, _0x483525 + _0x1a0dcd - _0x1ee339, _0x4b5430 + _0x40f8d9, _0x1ee339);
  _0x5191bc.lineTo(_0x483525 + _0x1ee339, _0x4b5430 + _0x40f8d9);
  _0x5191bc.arcTo(_0x483525, _0x4b5430 + _0x40f8d9, _0x483525, _0x4b5430 + _0x40f8d9 - _0x1ee339, _0x1ee339);
  _0x5191bc.lineTo(_0x483525, _0x4b5430 + _0x1ee339);
  _0x5191bc.arcTo(_0x483525, _0x4b5430, _0x483525 + _0x1ee339, _0x4b5430, _0x1ee339);
  _0x5191bc.closePath();
  _0x5191bc.clip();
  _0x5191bc.drawImage(_0x5d0ef2, _0x483525, _0x4b5430, _0x1a0dcd, _0x40f8d9);
  _0x5191bc.restore();
  const _0x5705fa = new _0x9dc5f4.CanvasTexture(_0x166560);
  _0x5705fa.minFilter = _0x9dc5f4.LinearFilter;
  _0x5705fa.magFilter = _0x9dc5f4.LinearFilter;
  _0x5705fa.anisotropy = renderer.capabilities.getMaxAnisotropy();
  _0x5705fa.colorSpace = _0x9dc5f4.SRGBColorSpace;
  return _0x5705fa;
}
for (let group = 0x0; group < numGroups; group++) {
  const groupPositions = new Float32Array(pointsPerGroup * 0x3);
  const groupColorsNear = new Float32Array(pointsPerGroup * 0x3);
  const groupColorsFar = new Float32Array(pointsPerGroup * 0x3);
  let validPointCount = 0x0;
  for (let i = 0x0; i < pointsPerGroup; i++) {
    const idx = validPointCount * 0x3;
    const globalIdx = group * pointsPerGroup + i;
    const radius = Math.pow(Math.random(), 0x14) * 0x64;
    if (radius < 0x1e) {
      continue;
    }
    const branchAngle = globalIdx % 0x6 / 0x6 * Math.PI * 0x2;
    const spinAngle = radius * 0.5;
    const randomX = (Math.random() - 0.5) * 0.2 * radius;
    const randomY = (Math.random() - 0.5) * 0.2 * radius * 0.5;
    const randomZ = (Math.random() - 0.5) * 0.2 * radius;
    const totalAngle = branchAngle + spinAngle;
    groupPositions[idx] = Math.cos(totalAngle) * radius + randomX;
    groupPositions[idx + 0x1] = randomY;
    groupPositions[idx + 0x2] = Math.sin(totalAngle) * radius + randomZ;
    const colorNear = new _0x9dc5f4.Color(0xffffff);
    groupColorsNear[idx] = colorNear.r;
    groupColorsNear[idx + 0x1] = colorNear.g;
    groupColorsNear[idx + 0x2] = colorNear.b;
    const colorFar = galaxyParameters.insideColor.clone();
    colorFar.lerp(galaxyParameters.outsideColor, radius / 0x64);
    colorFar.multiplyScalar(0.7 + 0.3 * Math.random());
    groupColorsFar[idx] = colorFar.r;
    groupColorsFar[idx + 0x1] = colorFar.g;
    groupColorsFar[idx + 0x2] = colorFar.b;
    validPointCount++;
  }
  if (validPointCount === 0x0) {
    continue;
  }
  const groupGeometryNear = new _0x9dc5f4.BufferGeometry();
  groupGeometryNear.setAttribute("position", new _0x9dc5f4.BufferAttribute(groupPositions.slice(0x0, validPointCount * 0x3), 0x3));
  groupGeometryNear.setAttribute("color", new _0x9dc5f4.BufferAttribute(groupColorsNear.slice(0x0, validPointCount * 0x3), 0x3));
  const groupGeometryFar = new _0x9dc5f4.BufferGeometry();
  groupGeometryFar.setAttribute('position', new _0x9dc5f4.BufferAttribute(groupPositions.slice(0x0, validPointCount * 0x3), 0x3));
  groupGeometryFar.setAttribute("color", new _0x9dc5f4.BufferAttribute(groupColorsFar.slice(0x0, validPointCount * 0x3), 0x3));
  const posAttr = groupGeometryFar.getAttribute("position");
  let cx = 0x0;
  let cy = 0x0;
  let cz = 0x0;
  for (let i = 0x0; i < posAttr.count; i++) {
    cx += posAttr.getX(i);
    cy += posAttr.getY(i);
    cz += posAttr.getZ(i);
  }
  cx /= posAttr.count;
  cy /= posAttr.count;
  cz /= posAttr.count;
  groupGeometryNear.translate(-cx, -cy, -cz);
  groupGeometryFar.translate(-cx, -cy, -cz);
  const img = new window.Image();
  img.crossOrigin = "Anonymous";
  img.src = heartImages[group];
  img.onload = () => {
    const _0x215d41 = createNeonTexture(img, 0x100);
    const _0x4c62af = new _0x9dc5f4.PointsMaterial({
      'size': 1.8,
      'map': _0x215d41,
      'transparent': false,
      'alphaTest': 0.2,
      'depthWrite': true,
      'depthTest': true,
      'blending': _0x9dc5f4.NormalBlending,
      'vertexColors': true
    });
    const _0x20ac05 = new _0x9dc5f4.PointsMaterial({
      'size': 1.8,
      'map': _0x215d41,
      'transparent': true,
      'alphaTest': 0.2,
      'depthWrite': false,
      'blending': _0x9dc5f4.AdditiveBlending,
      'vertexColors': true
    });
    const _0x26f6f3 = new _0x9dc5f4.Points(groupGeometryFar, _0x20ac05);
    _0x26f6f3.position.set(cx, cy, cz);
    _0x26f6f3.userData.materialNear = _0x4c62af;
    _0x26f6f3.userData.geometryNear = groupGeometryNear;
    _0x26f6f3.userData.materialFar = _0x20ac05;
    _0x26f6f3.userData.geometryFar = groupGeometryFar;
    scene.add(_0x26f6f3);
  };
  img.onerror = () => {
    console.warn('Không thể tải hình ảnh:', heartImages[group]);
    // Tạo vật liệu mặc định không có texture
    const _0x4c62af = new _0x9dc5f4.PointsMaterial({
      'size': 1.8,
      'color': 0xffffff,
      'transparent': false,
      'depthWrite': true,
      'depthTest': true,
      'blending': _0x9dc5f4.NormalBlending,
      'vertexColors': true
    });
    const _0x20ac05 = new _0x9dc5f4.PointsMaterial({
      'size': 1.8,
      'color': 0xffffff,
      'transparent': true,
      'depthWrite': false,
      'blending': _0x9dc5f4.AdditiveBlending,
      'vertexColors': true
    });
    const _0x26f6f3 = new _0x9dc5f4.Points(groupGeometryFar, _0x20ac05);
    _0x26f6f3.position.set(cx, cy, cz);
    _0x26f6f3.userData.materialNear = _0x4c62af;
    _0x26f6f3.userData.geometryNear = groupGeometryNear;
    _0x26f6f3.userData.materialFar = _0x20ac05;
    _0x26f6f3.userData.geometryFar = groupGeometryFar;
    scene.add(_0x26f6f3);
  };
}
const ambientLight = new _0x9dc5f4.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);
const starGeometry = new _0x9dc5f4.BufferGeometry();
const starPositions = new Float32Array(60000);
for (let i = 0x0; i < 0x4e20; i++) {
  starPositions[i * 0x3] = (Math.random() - 0.5) * 0x384;
  starPositions[i * 0x3 + 0x1] = (Math.random() - 0.5) * 0x384;
  starPositions[i * 0x3 + 0x2] = (Math.random() - 0.5) * 0x384;
}
starGeometry.setAttribute("position", new _0x9dc5f4.BufferAttribute(starPositions, 0x3));
const starMaterial = new _0x9dc5f4.PointsMaterial({
  'color': 0xffffff,
  'size': 0.7,
  'transparent': true,
  'opacity': 0.7,
  'depthWrite': false
});
const starField = new _0x9dc5f4.Points(starGeometry, starMaterial);
starField.name = "starfield";
starField.renderOrder = 0x3e7;
scene.add(starField);
let shootingStars = [];
function createShootingStar() {
  const _0xd0c4b6 = new _0x9dc5f4.SphereGeometry(0x2, 0x20, 0x20);
  const _0x22f6fd = new _0x9dc5f4.MeshBasicMaterial({
    'color': 0xffffff,
    'transparent': true,
    'opacity': 0x0,
    'blending': _0x9dc5f4.AdditiveBlending
  });
  const _0x31efcc = new _0x9dc5f4.Mesh(_0xd0c4b6, _0x22f6fd);
  const _0x49e61c = new _0x9dc5f4.SphereGeometry(0x3, 0x20, 0x20);
  const _0x4fd62c = new _0x9dc5f4.ShaderMaterial({
    'uniforms': {
      'time': {
        'value': 0x0
      }
    },
    'vertexShader': "\n            varying vec3 vNormal;\n            void main() {\n                vNormal = normalize(normalMatrix * normal);\n                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n            }\n        ",
    'fragmentShader': "\n            varying vec3 vNormal;\n            uniform float time;\n            void main() {\n                float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);\n                gl_FragColor = vec4(1.0, 1.0, 1.0, intensity * (0.8 + sin(time * 5.0) * 0.2));\n            }\n        ",
    'transparent': true,
    'blending': _0x9dc5f4.AdditiveBlending,
    'side': _0x9dc5f4.BackSide
  });
  const _0xce53c4 = new _0x9dc5f4.Mesh(_0x49e61c, _0x4fd62c);
  _0x31efcc.add(_0xce53c4);
  const _0xeaffd0 = new _0x9dc5f4.SphereGeometry(10.5, 0x30, 0x30);
  const _0x15e97a = new _0x9dc5f4.ShaderMaterial({
    'uniforms': {
      'glowColor': {
        'value': new _0x9dc5f4.Color(0xe0b3ff)
      }
    },
    'vertexShader': "\n        varying vec3 vNormal;\n        void main() {\n            vNormal = normalize(normalMatrix * normal);\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n        }\n    ",
    'fragmentShader': "\n        varying vec3 vNormal;\n        uniform vec3 glowColor;\n        void main() {\n            float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);\n            gl_FragColor = vec4(glowColor, 1.0) * intensity;\n        }\n    ",
    'side': _0x9dc5f4.BackSide,
    'blending': _0x9dc5f4.AdditiveBlending,
    'transparent': true
  });
  const _0x26fa7c = new _0x9dc5f4.Mesh(_0xeaffd0, _0x15e97a);
  planet.add(_0x26fa7c);
  const _0x9ffcde = createRandomCurve();
  const _0x1de292 = [];
  for (let _0x1963be = 0x0; _0x1963be < 0x64; _0x1963be++) {
    const _0x536cfa = _0x1963be / 99;
    _0x1de292.push(_0x9ffcde.getPoint(_0x536cfa));
  }
  const _0x204c46 = new _0x9dc5f4.BufferGeometry().setFromPoints(_0x1de292);
  const _0x99614c = new _0x9dc5f4.LineBasicMaterial({
    'color': 0x99eaff,
    'transparent': true,
    'opacity': 0.7,
    'linewidth': 0x2
  });
  const _0x156da4 = new _0x9dc5f4.Line(_0x204c46, _0x99614c);
  const _0x4b366c = new _0x9dc5f4.Group();
  _0x4b366c.add(_0x31efcc);
  _0x4b366c.add(_0x156da4);
  _0x4b366c.userData = {
    'curve': _0x9ffcde,
    'progress': 0x0,
    'speed': 0.001 + Math.random() * 0.001,
    'life': 0x0,
    'maxLife': 0x12c,
    'head': _0x31efcc,
    'trail': _0x156da4,
    'trailLength': 0x64,
    'trailPoints': _0x1de292
  };
  scene.add(_0x4b366c);
  shootingStars.push(_0x4b366c);
}
function createRandomCurve() {
  const _0x240a00 = [];
  const _0x475b05 = new _0x9dc5f4.Vector3(-0xc8 + Math.random() * 0x64, -0x64 + Math.random() * 0xc8, -0x64 + Math.random() * 0xc8);
  const _0x4fc905 = new _0x9dc5f4.Vector3(0x258 + Math.random() * 0xc8, _0x475b05.y + (-0x64 + Math.random() * 0xc8), _0x475b05.z + (-0x64 + Math.random() * 0xc8));
  const _0x85f28e = new _0x9dc5f4.Vector3(_0x475b05.x + 0xc8 + Math.random() * 0x64, _0x475b05.y + (-0x32 + Math.random() * 0x64), _0x475b05.z + (-0x32 + Math.random() * 0x64));
  const _0x5ebb80 = new _0x9dc5f4.Vector3(_0x4fc905.x - 0xc8 + Math.random() * 0x64, _0x4fc905.y + (-0x32 + Math.random() * 0x64), _0x4fc905.z + (-0x32 + Math.random() * 0x64));
  _0x240a00.push(_0x475b05, _0x85f28e, _0x5ebb80, _0x4fc905);
  return new _0x9dc5f4.CubicBezierCurve3(_0x475b05, _0x85f28e, _0x5ebb80, _0x4fc905);
}
function createPlanetTexture(_0x538b9b = 0x200) {
  const _0x59f1cf = document.createElement("canvas");
  _0x59f1cf.width = _0x59f1cf.height = _0x538b9b;
  const _0x24fc05 = _0x59f1cf.getContext('2d');
  const _0x1b7e1e = _0x24fc05.createRadialGradient(_0x538b9b / 0x2, _0x538b9b / 0x2, _0x538b9b / 0x8, _0x538b9b / 0x2, _0x538b9b / 0x2, _0x538b9b / 0x2);
  _0x1b7e1e.addColorStop(0x0, '#f8bbd0');
  _0x1b7e1e.addColorStop(0.12, "#f48fb1");
  _0x1b7e1e.addColorStop(0.22, '#f06292');
  _0x1b7e1e.addColorStop(0.35, '#ffffff');
  _0x1b7e1e.addColorStop(0.5, '#e1aaff');
  _0x1b7e1e.addColorStop(0.62, "#a259f7");
  _0x1b7e1e.addColorStop(0.75, "#b2ff59");
  _0x1b7e1e.addColorStop(0x1, "#3fd8c7");
  _0x24fc05.fillStyle = _0x1b7e1e;
  _0x24fc05.fillRect(0x0, 0x0, _0x538b9b, _0x538b9b);
  const _0x5a31f6 = ["#f8bbd0", "#f8bbd0", "#f48fb1", "#f48fb1", '#f06292', '#f06292', "#ffffff", '#e1aaff', "#a259f7", "#b2ff59"];
  for (let _0x45a41c = 0x0; _0x45a41c < 0x28; _0x45a41c++) {
    const _0x58ac27 = Math.random() * _0x538b9b;
    const _0x120f04 = Math.random() * _0x538b9b;
    const _0x4ec3e5 = 0x1e + Math.random() * 0x78;
    const _0x1c49a0 = _0x5a31f6[Math.floor(Math.random() * _0x5a31f6.length)];
    const _0x40089d = _0x24fc05.createRadialGradient(_0x58ac27, _0x120f04, 0x0, _0x58ac27, _0x120f04, _0x4ec3e5);
    _0x40089d.addColorStop(0x0, _0x1c49a0 + 'cc');
    _0x40089d.addColorStop(0x1, _0x1c49a0 + '00');
    _0x24fc05.fillStyle = _0x40089d;
    _0x24fc05.fillRect(0x0, 0x0, _0x538b9b, _0x538b9b);
  }
  for (let _0x50b35b = 0x0; _0x50b35b < 0x8; _0x50b35b++) {
    _0x24fc05.beginPath();
    _0x24fc05.moveTo(Math.random() * _0x538b9b, Math.random() * _0x538b9b);
    _0x24fc05.bezierCurveTo(Math.random() * _0x538b9b, Math.random() * _0x538b9b, Math.random() * _0x538b9b, Math.random() * _0x538b9b, Math.random() * _0x538b9b, Math.random() * _0x538b9b);
    _0x24fc05.strokeStyle = "rgba(180, 120, 200, " + (0.12 + Math.random() * 0.18) + ')';
    _0x24fc05.lineWidth = 0x8 + Math.random() * 0x12;
    _0x24fc05.stroke();
  }
  if (_0x24fc05.filter !== undefined) {
    _0x24fc05.filter = "blur(2px)";
    _0x24fc05.drawImage(_0x59f1cf, 0x0, 0x0);
    _0x24fc05.filter = "none";
  }
  return new _0x9dc5f4.CanvasTexture(_0x59f1cf);
}
const planetGeometry = new _0x9dc5f4.SphereGeometry(0xa, 0x30, 0x30);
const planetTexture = createPlanetTexture();
const planetMaterial = new _0x9dc5f4.ShaderMaterial({
  'uniforms': {
    'time': {
      'value': 0x0
    },
    'baseTexture': {
      'value': planetTexture
    }
  },
  'vertexShader': "\n        varying vec2 vUv;\n        void main() {\n            vUv = uv;\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n        }\n    ",
  'fragmentShader': "\n        uniform float time;\n        uniform sampler2D baseTexture;\n        varying vec2 vUv;\n        void main() {\n            vec2 uv = vUv;\n            float angle = length(uv - vec2(0.5)) * 3.0;\n            float twist = sin(angle * 3.0 + time) * 0.1;\n            uv.x += twist * sin(time * 0.5);\n            uv.y += twist * cos(time * 0.5);\n            vec4 texColor = texture2D(baseTexture, uv);\n            float noise = sin(uv.x * 10.0 + time) * sin(uv.y * 10.0 + time) * 0.1;\n            texColor.rgb += noise * vec3(0.8, 0.4, 0.2);\n            gl_FragColor = texColor;\n        }\n    "
});
const planet = new _0x9dc5f4.Mesh(planetGeometry, planetMaterial);
planet.position.set(0x0, 0x0, 0x0);
scene.add(planet);
const ringTexts = ["Happy Birthday Em Iu", ...(window.dataLove2Loveloom && window.dataLove2Loveloom.data.ringTexts ? window.dataLove2Loveloom.data.ringTexts : [])];
function createTextRings() {
  const _0xf435b3 = ringTexts.length;
  window.textRings = [];
  for (let _0x5ba038 = 0x0; _0x5ba038 < _0xf435b3; _0x5ba038++) {
    const _0x154505 = ringTexts[_0x5ba038 % ringTexts.length] + "   ";
    const _0x29e464 = 11 + _0x5ba038 * 0x5;
    function _0x622573(_0x2ef621) {
      const _0x29f06c = _0x2ef621.charCodeAt(0x0);
      if (_0x29f06c >= 0x4e00 && _0x29f06c <= 0x9fff || _0x29f06c >= 0x3040 && _0x29f06c <= 0x309f || _0x29f06c >= 0x30a0 && _0x29f06c <= 0x30ff || _0x29f06c >= 0xac00 && _0x29f06c <= 0xd7af) {
        return "cjk";
      } else {
        if (_0x29f06c >= 0x0 && _0x29f06c <= 0x7f) {
          return "latin";
        }
      }
      return 'other';
    }
    let _0x2c67b1 = {
      'cjk': 0x0,
      'latin': 0x0,
      'other': 0x0
    };
    for (let _0x3e9f91 of _0x154505) {
      _0x2c67b1[_0x622573(_0x3e9f91)]++;
    }
    const _0x48d61e = _0x154505.length;
    const _0x2a0990 = 0x0 / _0x48d61e;
    let _0x1fccbb = {
      'fontScale': 0.75,
      'spacingScale': 1.1
    };
    if (_0x5ba038 === 0x0) {
      _0x1fccbb.fontScale = 0.55;
      _0x1fccbb.spacingScale = 0.9;
    } else if (_0x5ba038 === 0x1) {
      _0x1fccbb.fontScale = 0.65;
      _0x1fccbb.spacingScale = 0x1;
    }
    if (_0x2a0990 > 0x0) {
      _0x1fccbb.fontScale *= 0.9;
      _0x1fccbb.spacingScale *= 1.1;
    }
    const _0x238476 = Math.max(0x78, 180);
    const _0xfd4f5b = document.createElement("canvas");
    const _0x563e47 = _0xfd4f5b.getContext('2d');
    _0x563e47.font = "bold " + _0x238476 + "px Arial, sans-serif";
    let _0x5e819b = ringTexts[_0x5ba038 % ringTexts.length];
    let _0x212cba = _0x5e819b + "   ";
    let _0x3a5817 = _0x563e47.measureText(_0x212cba).width;
    let _0x52b143 = 0x2 * Math.PI * _0x29e464 * 0xb4;
    let _0x4b4144 = Math.ceil(_0x52b143 / _0x3a5817);
    let _0x592982 = '';
    for (let _0x30ff1f = 0x0; _0x30ff1f < _0x4b4144; _0x30ff1f++) {
      _0x592982 += _0x212cba;
    }
    let _0x11be45 = _0x3a5817 * _0x4b4144;
    if (_0x11be45 < 0x1 || !_0x592982) {
      _0x592982 = _0x212cba;
      _0x11be45 = _0x3a5817;
    }
    const _0x4291d5 = document.createElement('canvas');
    _0x4291d5.width = Math.ceil(Math.max(0x1, _0x11be45));
    _0x4291d5.height = 0xc8;
    const _0x302dfd = _0x4291d5.getContext('2d');
    _0x302dfd.clearRect(0x0, 0x0, _0x4291d5.width, 0xc8);
    _0x302dfd.font = "bold " + _0x238476 + "px Arial, sans-serif";
    _0x302dfd.fillStyle = "white";
    _0x302dfd.textAlign = "left";
    _0x302dfd.textBaseline = "alphabetic";
    _0x302dfd.shadowColor = '#e0b3ff';
    _0x302dfd.shadowBlur = 0x18;
    _0x302dfd.lineWidth = 0x6;
    _0x302dfd.strokeStyle = "#fff";
    _0x302dfd.strokeText(_0x592982, 0x0, 160);
    _0x302dfd.shadowColor = "#ffb3de";
    _0x302dfd.shadowBlur = 0x10;
    _0x302dfd.fillText(_0x592982, 0x0, 160);
    const _0x5536aa = new _0x9dc5f4.CanvasTexture(_0x4291d5);
    _0x5536aa.wrapS = _0x9dc5f4.RepeatWrapping;
    _0x5536aa.repeat.x = _0x11be45 / _0x52b143;
    _0x5536aa.needsUpdate = true;
    const _0x1b9cac = new _0x9dc5f4.CylinderGeometry(_0x29e464, _0x29e464, 0x1, 0x80, 0x1, true);
    const _0x116ec7 = new _0x9dc5f4.MeshBasicMaterial({
      'map': _0x5536aa,
      'transparent': true,
      'side': _0x9dc5f4.DoubleSide,
      'alphaTest': 0.01
    });
    const _0x350464 = new _0x9dc5f4.Mesh(_0x1b9cac, _0x116ec7);
    _0x350464.position.set(0x0, 0x0, 0x0);
    _0x350464.rotation.y = Math.PI / 0x2;
    const _0x128408 = new _0x9dc5f4.Group();
    _0x128408.add(_0x350464);
    _0x128408.userData = {
      'ringRadius': _0x29e464,
      'angleOffset': 0.15 * Math.PI * 0.5,
      'speed': 0.008,
      'tiltSpeed': 0x0,
      'rollSpeed': 0x0,
      'pitchSpeed': 0x0,
      'tiltAmplitude': Math.PI / 0x3,
      'rollAmplitude': Math.PI / 0x6,
      'pitchAmplitude': Math.PI / 0x8,
      'tiltPhase': Math.PI * 0x2,
      'rollPhase': Math.PI * 0x2,
      'pitchPhase': Math.PI * 0x2,
      'isTextRing': true
    };
    const _0x3a827b = _0x5ba038 / _0xf435b3 * (Math.PI / 0x1);
    _0x128408.rotation.x = _0x3a827b;
    scene.add(_0x128408);
    window.textRings.push(_0x128408);
  }
}
createTextRings();
function updateTextRingsRotation() {
  if (!window.textRings || !camera) {
    return;
  }
  window.textRings.forEach((_0xadfe0f, _0x47d356) => {
    _0xadfe0f.children.forEach(_0x460c7f => {
      if (_0x460c7f.userData.initialAngle !== undefined) {
        const _0x3f7bf5 = _0x460c7f.userData.initialAngle + _0xadfe0f.userData.angleOffset;
        const _0x1b9766 = Math.cos(_0x3f7bf5) * _0x460c7f.userData.ringRadius;
        const _0x4e35fe = Math.sin(_0x3f7bf5) * _0x460c7f.userData.ringRadius;
        _0x460c7f.position.set(_0x1b9766, 0x0, _0x4e35fe);
        const _0xae1e0a = new _0x9dc5f4.Vector3();
        _0x460c7f.getWorldPosition(_0xae1e0a);
        const _0x1dbf79 = new _0x9dc5f4.Vector3().subVectors(camera.position, _0xae1e0a).normalize();
        const _0x3dad8e = Math.atan2(_0x1dbf79.x, _0x1dbf79.z);
        _0x460c7f.rotation.y = _0x3dad8e;
      }
    });
  });
}
function animatePlanetSystem() {
  if (window.textRings) {
    const _0x7d32eb = Date.now() * 0.001;
    window.textRings.forEach((_0x1e07be, _0x125a48) => {
      const _0x307a37 = _0x1e07be.userData;
      _0x307a37.angleOffset += _0x307a37.speed;
      const _0x139042 = Math.sin(_0x7d32eb * _0x307a37.tiltSpeed + _0x307a37.tiltPhase) * _0x307a37.tiltAmplitude;
      const _0x415f75 = Math.cos(_0x7d32eb * _0x307a37.rollSpeed + _0x307a37.rollPhase) * _0x307a37.rollAmplitude;
      const _0x6a34d7 = Math.sin(_0x7d32eb * _0x307a37.pitchSpeed + _0x307a37.pitchPhase) * _0x307a37.pitchAmplitude;
      _0x1e07be.rotation.x = _0x125a48 / window.textRings.length * (Math.PI / 0x1) + _0x139042;
      _0x1e07be.rotation.z = _0x415f75;
      _0x1e07be.rotation.y = _0x307a37.angleOffset + _0x6a34d7;
      const _0x572f82 = Math.sin(_0x7d32eb * (_0x307a37.tiltSpeed * 0.7) + _0x307a37.tiltPhase) * 0.3;
      _0x1e07be.position.y = _0x572f82;
      const _0x27495b = (Math.sin(_0x7d32eb * 1.5 + _0x125a48) + 0x1) / 0x2;
      const _0x36a13f = _0x1e07be.children[0x0];
      if (_0x36a13f && _0x36a13f.material) {
        _0x36a13f.material.opacity = 0.7 + _0x27495b * 0.3;
      }
    });
    updateTextRingsRotation();
  }
}
let fadeOpacity = 0.1;
let fadeInProgress = false;
let hintIcon;
let hintText;
function createHintIcon() {
  hintIcon = new _0x9dc5f4.Group();
  hintIcon.name = "hint-icon-group";
  scene.add(hintIcon);
  const _0x3dc632 = new _0x9dc5f4.Group();
  const _0x19638b = new _0x9dc5f4.Shape();
  _0x19638b.moveTo(0x0, 0x0);
  _0x19638b.lineTo(-0.30000000000000004, -1.0499999999999998);
  _0x19638b.lineTo(-0.1875, -1.0499999999999998);
  _0x19638b.lineTo(-0.375, -1.5);
  _0x19638b.lineTo(0.375, -1.5);
  _0x19638b.lineTo(0.1875, -1.0499999999999998);
  _0x19638b.lineTo(0.30000000000000004, -1.0499999999999998);
  _0x19638b.closePath();
  const _0x410185 = new _0x9dc5f4.ShapeGeometry(_0x19638b);
  const _0x1c4f23 = new _0x9dc5f4.MeshBasicMaterial({
    'color': 0xffffff,
    'side': _0x9dc5f4.DoubleSide
  });
  const _0x2a8ea4 = new _0x9dc5f4.Mesh(_0x410185, _0x1c4f23);
  const _0x7857ce = new _0x9dc5f4.ShapeGeometry(_0x19638b);
  const _0x1b49e3 = new _0x9dc5f4.MeshBasicMaterial({
    'color': 0xffffff,
    'side': _0x9dc5f4.DoubleSide
  });
  const _0x510812 = new _0x9dc5f4.Mesh(_0x7857ce, _0x1b49e3);
  _0x510812.scale.set(0.8, 0.8, 0x1);
  _0x510812.position.z = 0.01;
  _0x3dc632.add(_0x2a8ea4, _0x510812);
  _0x3dc632.position.y = 0.75;
  _0x3dc632.rotation.x = Math.PI / 0x2;
  const _0x2ac174 = new _0x9dc5f4.RingGeometry(1.8, 0x2, 0x20);
  const _0x524c53 = new _0x9dc5f4.MeshBasicMaterial({
    'color': 0xffffff,
    'side': _0x9dc5f4.DoubleSide,
    'transparent': true,
    'opacity': 0.6
  });
  const _0x1b8b6f = new _0x9dc5f4.Mesh(_0x2ac174, _0x524c53);
  _0x1b8b6f.rotation.x = Math.PI / 0x2;
  hintIcon.userData.ringMesh = _0x1b8b6f;
  hintIcon.add(_0x3dc632);
  hintIcon.add(_0x1b8b6f);
  hintIcon.position.set(1.5, 1.5, 0xf);
  hintIcon.scale.set(0.8, 0.8, 0.8);
  hintIcon.lookAt(planet.position);
  hintIcon.userData.initialPosition = hintIcon.position.clone();
}
function animateHintIcon(_0x3fea22) {
  if (!hintIcon) {
    return;
  }
  if (!introStarted) {
    hintIcon.visible = true;
    const _0x4261d0 = Math.sin(_0x3fea22 * 2.5) * 1.5;
    const _0x2f20b0 = new _0x9dc5f4.Vector3();
    hintIcon.getWorldDirection(_0x2f20b0);
    hintIcon.position.copy(hintIcon.userData.initialPosition).addScaledVector(_0x2f20b0, -_0x4261d0);
    const _0x1b77cf = hintIcon.userData.ringMesh;
    const _0x3f7ee4 = 0x1 + Math.sin(_0x3fea22 * 2.5) * 0.1;
    _0x1b77cf.scale.set(_0x3f7ee4, _0x3f7ee4, 0x1);
    _0x1b77cf.material.opacity = 0.5 + Math.sin(_0x3fea22 * 2.5) * 0.2;
    if (hintText) {
      hintText.visible = true;
      hintText.material.opacity = 0.7 + Math.sin(_0x3fea22 * 0x3) * 0.3;
      hintText.position.y = 0xf + Math.sin(_0x3fea22 * 0x2) * 0.5;
      hintText.lookAt(camera.position);
    }
  } else {
    if (hintIcon) {
      hintIcon.visible = false;
    }
    if (hintText) {
      hintText.visible = false;
    }
  }
}
function animate() {
  requestAnimationFrame(animate);
  const _0x173486 = performance.now() * 0.001;
  animateHintIcon(_0x173486);
  controls.update();
  planet.material.uniforms.time.value = _0x173486 * 0.5;
  if (fadeInProgress && fadeOpacity < 0x1) {
    fadeOpacity += 0.025;
    if (fadeOpacity > 0x1) {
      fadeOpacity = 0x1;
    }
  }
  if (!introStarted) {
    fadeOpacity = 0.1;
    scene.traverse(_0x2f76a4 => {
      if (_0x2f76a4.name === "starfield") {
        if (_0x2f76a4.points && _0x2f76a4.material.opacity !== undefined) {
          _0x2f76a4.material.transparent = false;
          _0x2f76a4.material.opacity = 0x1;
        }
        return;
      }
      if (_0x2f76a4.userData.isTextRing || _0x2f76a4.parent && _0x2f76a4.parent.userData && _0x2f76a4.parent.userData.isTextRing) {
        if (_0x2f76a4.material && _0x2f76a4.material.opacity !== undefined) {
          _0x2f76a4.material.transparent = false;
          _0x2f76a4.material.opacity = 0x1;
        }
        if (_0x2f76a4.material && _0x2f76a4.material.color) {
          _0x2f76a4.material.color.set(0xffffff);
        }
      } else if (_0x2f76a4 !== planet && _0x2f76a4 !== centralGlow && _0x2f76a4 !== hintIcon && _0x2f76a4.type !== "Scene" && !_0x2f76a4.parent.isGroup) {
        if (_0x2f76a4.material && _0x2f76a4.material.opacity !== undefined) {
          _0x2f76a4.material.transparent = true;
          _0x2f76a4.material.opacity = 0.1;
        }
      }
    });
    planet.visible = true;
    centralGlow.visible = true;
  } else {
    scene.traverse(_0x468aca => {
      if (!(_0x468aca.userData.isTextRing || _0x468aca.parent && _0x468aca.parent.userData && _0x468aca.parent.userData.isTextRing || _0x468aca === planet || _0x468aca === centralGlow || _0x468aca.type === "Scene")) {
        if (_0x468aca.material && _0x468aca.material.opacity !== undefined) {
          _0x468aca.material.transparent = true;
          _0x468aca.material.opacity = fadeOpacity;
        }
      } else if (_0x468aca.material && _0x468aca.material.opacity !== undefined) {
        _0x468aca.material.opacity = 0x1;
        _0x468aca.material.transparent = false;
      }
      if (_0x468aca.material && _0x468aca.material.color) {
        _0x468aca.material.color.set(0xffffff);
      }
    });
  }
  for (let _0x5a3f2c = shootingStars.length - 0x1; _0x5a3f2c >= 0x0; _0x5a3f2c--) {
    const _0x31f84b = shootingStars[_0x5a3f2c];
    _0x31f84b.userData.life++;
    let _0x13a923 = 0x1;
    if (_0x31f84b.userData.life < 0x1e) {
      _0x13a923 = _0x31f84b.userData.life / 0x1e;
    } else if (_0x31f84b.userData.life > _0x31f84b.userData.maxLife - 0x1e) {
      _0x13a923 = (_0x31f84b.userData.maxLife - _0x31f84b.userData.life) / 0x1e;
    }
    _0x31f84b.userData.progress += _0x31f84b.userData.speed;
    if (_0x31f84b.userData.progress > 0x1) {
      scene.remove(_0x31f84b);
      shootingStars.splice(_0x5a3f2c, 0x1);
      continue;
    }
    const _0x2d3b5e = _0x31f84b.userData.curve.getPoint(_0x31f84b.userData.progress);
    _0x31f84b.position.copy(_0x2d3b5e);
    _0x31f84b.userData.head.material.opacity = _0x13a923;
    _0x31f84b.userData.head.children[0x0].material.uniforms.time.value = _0x173486;
    const _0x3fb20d = _0x31f84b.userData.trail;
    const _0x4333c9 = _0x31f84b.userData.trailPoints;
    _0x4333c9[0x0].copy(_0x2d3b5e);
    for (let _0x4870d0 = 0x1; _0x4870d0 < _0x31f84b.userData.trailLength; _0x4870d0++) {
      const _0xdf67d8 = Math.max(0x0, _0x31f84b.userData.progress - _0x4870d0 * 0.01);
      _0x4333c9[_0x4870d0].copy(_0x31f84b.userData.curve.getPoint(_0xdf67d8));
    }
    _0x3fb20d.geometry.setFromPoints(_0x4333c9);
    _0x3fb20d.material.opacity = _0x13a923 * 0.7;
  }
  if (shootingStars.length < 0x3 && Math.random() < 0.02) {
    createShootingStar();
  }
  scene.traverse(_0x27812f => {
    if (_0x27812f.isPoints && _0x27812f.userData.materialNear && _0x27812f.userData.materialFar) {
      const _0x2fbc19 = _0x27812f.geometry.getAttribute("position");
      let _0x4fe382 = false;
      for (let _0x51785c = 0x0; _0x51785c < _0x2fbc19.count; _0x51785c++) {
        const _0x21ca55 = _0x2fbc19.getX(_0x51785c) + _0x27812f.position.x;
        const _0x3b4207 = _0x2fbc19.getY(_0x51785c) + _0x27812f.position.y;
        const _0x6af6e8 = _0x2fbc19.getZ(_0x51785c) + _0x27812f.position.z;
        const _0x39aeac = camera.position.distanceTo(new _0x9dc5f4.Vector3(_0x21ca55, _0x3b4207, _0x6af6e8));
        if (_0x39aeac < 0xa) {
          _0x4fe382 = true;
          break;
        }
      }
      if (_0x4fe382) {
        if (_0x27812f.material !== _0x27812f.userData.materialNear) {
          _0x27812f.material = _0x27812f.userData.materialNear;
          _0x27812f.geometry = _0x27812f.userData.geometryNear;
        }
      } else if (_0x27812f.material !== _0x27812f.userData.materialFar) {
        _0x27812f.material = _0x27812f.userData.materialFar;
        _0x27812f.geometry = _0x27812f.userData.geometryFar;
      }
    }
  });
  planet.lookAt(camera.position);
  animatePlanetSystem();
  
  if (starField && starField.material && starField.material.opacity !== undefined) {
    starField.material.opacity = 0x1;
    starField.material.transparent = false;
  }
  renderer.render(scene, camera);
}
function createHintText() {
  const _0x1dc998 = document.createElement("canvas");
  _0x1dc998.width = _0x1dc998.height = 0x200;
  const _0x3af00f = _0x1dc998.getContext('2d');
  _0x3af00f.font = "bold 50px Arial, sans-serif";
  _0x3af00f.textAlign = "center";
  _0x3af00f.textBaseline = "middle";
  _0x3af00f.shadowColor = '#ffb3de';
  _0x3af00f.shadowBlur = 0x5;
  _0x3af00f.lineWidth = 0x2;
  _0x3af00f.strokeStyle = "rgba(255, 200, 220, 0.8)";
  _0x3af00f.strokeText("Chạm Vào Tinh Cầu", 256, 256);
  _0x3af00f.shadowColor = "#e0b3ff";
  _0x3af00f.shadowBlur = 0x5;
  _0x3af00f.lineWidth = 0x2;
  _0x3af00f.strokeStyle = "rgba(220, 180, 255, 0.5)";
  _0x3af00f.strokeText("Chạm Vào Tinh Cầu", 256, 256);
  _0x3af00f.shadowColor = "transparent";
  _0x3af00f.shadowBlur = 0x0;
  _0x3af00f.fillStyle = 'white';
  _0x3af00f.fillText("Chạm Vào Tinh Cầu", 256, 256);
  const _0x309507 = new _0x9dc5f4.CanvasTexture(_0x1dc998);
  _0x309507.needsUpdate = true;
  const _0x1851eb = new _0x9dc5f4.MeshBasicMaterial({
    'map': _0x309507,
    'transparent': true,
    'side': _0x9dc5f4.DoubleSide
  });
  const _0x414702 = new _0x9dc5f4.PlaneGeometry(0x10, 0x8);
  hintText = new _0x9dc5f4.Mesh(_0x414702, _0x1851eb);
  hintText.position.set(0x0, 0xf, 0x0);
  scene.add(hintText);
}
createShootingStar();
createHintIcon();
createHintText();
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  controls.target.set(0x0, 0x0, 0x0);
  controls.update();
});
// Biến để theo dõi dialog lá thư
let letterDialog = null;
let showLetterDialog = false;

function createLetterDialog() {
  // Tạo container div cho dialog
  const dialogContainer = document.createElement('div');
  dialogContainer.id = 'letter-dialog';
  dialogContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    opacity: 0;
    transition: opacity 2s ease-in-out;
    pointer-events: none;
  `;

  // Tạo lá thư
  const letter = document.createElement('div');
  letter.style.cssText = `
    background: linear-gradient(135deg, #fff8e1, #f5f5dc);
    border: 3px solid #d4af37;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    padding: 40px;
    max-width: 500px;
    max-height: 70vh;
    overflow-y: auto;
    position: relative;
    transform: scale(0.8);
    transition: transform 0.5s ease-in-out;
    font-family: 'SF Mono', 'Monaco', 'Menlo', 'Consolas', 'Courier New', monospace;
    
    /* Ẩn thanh scroll */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
  `;

  // CSS để ẩn scrollbar cho webkit browsers
  const hideScrollbarStyle = document.createElement('style');
  hideScrollbarStyle.textContent = `
    #letter-dialog div::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  `;
  document.head.appendChild(hideScrollbarStyle);

  // Nội dung lá thư đơn giản
  letter.innerHTML = `
    <div style="text-align: center; margin-bottom: 30px;">
      <h2 style="color: #8b4513; margin: 0; font-size: 28px; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">
        💌 Thư Gửi Em 💌
      </h2>
    </div>
    
    <div style="color: #4a4a4a; line-height: 1.8; font-size: 16px; text-align: justify;">
      <p style="margin-bottom: 20px;">
        <strong>Em yêu của anh,</strong>
      </p>
      
      <p style="margin-bottom: 20px;">
        Khi em đọc những dòng này, anh hy vọng em đang cảm thấy hạnh phúc và được yêu thương. 
        Vũ trụ này được tạo ra với tất cả tình yêu của anh dành cho em.
      </p>
      
      <p style="margin-bottom: 20px;">
        Mỗi ngôi sao trong đây đại diện cho một kỷ niệm đẹp của chúng ta, 
        mỗi tinh cầu là một ước mơ anh muốn thực hiện cùng em.
      </p>
      
      <p style="margin-bottom: 20px;">
        Anh yêu em nhiều hơn cả những vì sao trên bầu trời, 
        sâu sắc hơn cả đại dương, và bền vững hơn cả thời gian.
      </p>
      
      <p style="margin-bottom: 30px; text-align: center; font-style: italic;">
        <strong>Chúc mừng sinh nhật em! ❤️</strong>
      </p>

    <p style="margin-bottom: 20px;">
     Chúc em tuổi mới tràn đầy niềm vui, sức khỏe và hạnh phúc.
     Tuổi mới sẽ yêu anh nhiều hơn cả những vì sao trên bầu trời này =)))
    </p>


      
      <p style="text-align: right; margin-bottom: 0;">
        <em>Với tất cả tình yêu,<br/>
        Khiem ❤️</em>
      </p>
    </div>
    
    <button id="close-letter" style="
      position: absolute;
      top: 15px;
      right: 15px;
      background: #ff6b6b;
      color: white;
      border: none;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      font-size: 18px;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
    " onmouseover="this.style.background='#ff5252'" onmouseout="this.style.background='#ff6b6b'">
      ✕
    </button>
  `;

  dialogContainer.appendChild(letter);
  document.body.appendChild(dialogContainer);

  // Xử lý sự kiện đóng
  const closeBtn = document.getElementById('close-letter');
  closeBtn.addEventListener('click', function() {
    closeLetterDialog();
  });

  // Đóng khi click bên ngoài
  dialogContainer.addEventListener('click', function(e) {
    if (e.target === dialogContainer) {
      closeLetterDialog();
    }
  });

  return dialogContainer;
}

function showLetterDialogFunc() {
  if (!letterDialog) {
    letterDialog = createLetterDialog();
  }
  
  // Hiển thị dialog với hiệu ứng fade in
  setTimeout(() => {
    letterDialog.style.pointerEvents = 'auto';
    letterDialog.style.opacity = '1';
    const letter = letterDialog.querySelector('div');
    letter.style.transform = 'scale(1)';
  }, 100);
}

function closeLetterDialog() {
  if (letterDialog) {
    letterDialog.style.opacity = '0';
    const letter = letterDialog.querySelector('div');
    letter.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
      letterDialog.style.pointerEvents = 'none';
    }, 2000);
  }
}

function startCameraAnimation() {
  const _0x468ee6 = {
    'x': camera.position.x,
    'y': camera.position.y,
    'z': camera.position.z
  };
  const _0x4bc7a6 = {
    'x': _0x468ee6.x,
    'y': 0x0,
    'z': _0x468ee6.z
  };
  const _0x20f557 = {
    'x': _0x468ee6.x,
    'y': 0x0,
    'z': 0xa0
  };
  const _0x10492f = {
    'x': -0x28,
    'y': 0x64,
    'z': 0x64
  };
  let _0x40fec5 = 0x0;
  function _0x45c98c() {
    _0x40fec5 += 0.00101;
    let _0x5cd0b3;
    if (_0x40fec5 < 0.2) {
      let _0x4a22bb = _0x40fec5 / 0.2;
      _0x5cd0b3 = {
        'x': _0x468ee6.x + (_0x4bc7a6.x - _0x468ee6.x) * _0x4a22bb,
        'y': _0x468ee6.y + (0x0 - _0x468ee6.y) * _0x4a22bb,
        'z': _0x468ee6.z + (_0x4bc7a6.z - _0x468ee6.z) * _0x4a22bb
      };
    } else {
      if (_0x40fec5 < 0.75) {
        let _0x17b7f4 = (_0x40fec5 - 0.2) / 0.55;
        _0x5cd0b3 = {
          'x': _0x4bc7a6.x + (_0x20f557.x - _0x4bc7a6.x) * _0x17b7f4,
          'y': 0x0 + 0 * _0x17b7f4,
          'z': _0x4bc7a6.z + (0xa0 - _0x4bc7a6.z) * _0x17b7f4
        };
      } else {
        if (_0x40fec5 < 1.15) {
          let _0x5448de = (_0x40fec5 - 0.2 - 0.55) / 0.4;
          let _0x455096 = 0.5 - 0.5 * Math.cos(Math.PI * _0x5448de);
          _0x5cd0b3 = {
            'x': _0x20f557.x + (_0x10492f.x - _0x20f557.x) * _0x455096,
            'y': 0x0 + 100 * _0x455096,
            'z': 0xa0 + -60 * _0x455096
          };
        } else {
          // Hoàn thành animation camera và hiển thị dialog lá thư
          camera.position.set(_0x10492f.x, 0x64, 0x64);
          camera.lookAt(0x0, 0x0, 0x0);
          controls.target.set(0x0, 0x0, 0x0);
          controls.update();
          controls.enabled = true;
          
          // Hiển thị dialog lá thư sau 1 giây
          if (!showLetterDialog) {
            showLetterDialog = true;
            setTimeout(() => {
              showLetterDialogFunc();
            }, 1000);
          }
          
          return;
        }
      }
    }
    camera.position.set(_0x5cd0b3.x, _0x5cd0b3.y, _0x5cd0b3.z);
    camera.lookAt(0x0, 0x0, 0x0);
    requestAnimationFrame(_0x45c98c);
  }
  controls.enabled = false;
  _0x45c98c();
}
const raycaster = new _0x9dc5f4.Raycaster();
const mouse = new _0x9dc5f4.Vector2();
let introStarted = false;
const originalStarCount = starGeometry.getAttribute("position").count;
if (starField && starField.geometry) {
  starField.geometry.setDrawRange(0x0, Math.floor(originalStarCount * 0.1));
}
function requestFullScreen() {
  const _0x5be772 = document.documentElement;
  if (_0x5be772.requestFullscreen) {
    _0x5be772.requestFullscreen();
  } else {
    if (_0x5be772.mozRequestFullScreen) {
      _0x5be772.mozRequestFullScreen();
    } else {
      if (_0x5be772.webkitRequestFullscreen) {
        _0x5be772.webkitRequestFullscreen();
      } else if (_0x5be772.msRequestFullscreen) {
        _0x5be772.msRequestFullscreen();
      }
    }
  }
}
function onCanvasClick(_0x449e32) {
  if (introStarted) {
    return;
  }
  const _0x50dbc5 = renderer.domElement.getBoundingClientRect();
  mouse.x = (_0x449e32.clientX - _0x50dbc5.left) / _0x50dbc5.width * 0x2 - 0x1;
  mouse.y = -((_0x449e32.clientY - _0x50dbc5.top) / _0x50dbc5.height) * 0x2 + 0x1;
  raycaster.setFromCamera(mouse, camera);
  const _0x5c9ee1 = raycaster.intersectObject(planet);
  if (_0x5c9ee1.length > 0x0) {
    requestFullScreen();
    introStarted = true;
    fadeInProgress = true;
    document.body.classList.add("intro-started");
    startCameraAnimation();
    if (starField && starField.geometry) {
      starField.geometry.setDrawRange(0x0, originalStarCount);
    }
  } else {
    if (introStarted) {
      const _0x9dbca4 = raycaster.intersectObjects(heartPointClouds);
      if (_0x9dbca4.length > 0x0) {
        const _0x4f2f95 = _0x9dbca4[0x0].object;
        controls.target.copy(_0x4f2f95.position);
      }
    }
  }
}
renderer.domElement.addEventListener('click', onCanvasClick);
animate();
planet.name = 'main-planet';
centralGlow.name = "main-glow";
function setFullScreen() {
  const _0xa73a6a = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", _0xa73a6a + 'px');
  const _0x1177a6 = document.getElementById("container");
  if (_0x1177a6) {
    _0x1177a6.style.height = window.innerHeight + 'px';
  }
}
window.addEventListener('resize', setFullScreen);
window.addEventListener("orientationchange", () => {
  setTimeout(setFullScreen, 0x12c);
});
setFullScreen();
const preventDefault = _0x536e40 => _0x536e40.preventDefault();
document.addEventListener("touchmove", preventDefault, {
  'passive': false
});
document.addEventListener('gesturestart', preventDefault, {
  'passive': false
});
const container = document.getElementById("container");
if (container) {
  container.addEventListener("touchmove", preventDefault, {
    'passive': false
  });
}
function checkOrientation() {
  const _0x45c136 = window.innerHeight > window.innerWidth && "ontouchstart" in window;
  if (_0x45c136) {
    document.body.classList.add("portrait-mode");
  } else {
    document.body.classList.remove("portrait-mode");
  }
}
window.addEventListener('DOMContentLoaded', checkOrientation);
window.addEventListener("resize", checkOrientation);
window.addEventListener('orientationchange', () => {
  setTimeout(checkOrientation, 0xc8);
});