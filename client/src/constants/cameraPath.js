import * as THREE from "three";

const forestPath = {
    start: '-95 -18.5 91',
    curvePoints: [
        new THREE.Vector3(-95, -18.5, 91),
        new THREE.Vector3(-105, -18.5, 81),
        new THREE.Vector3(-113, -18.5, 73),
        new THREE.Vector3(-120, -18.5, 60),
        new THREE.Vector3(-132, -18.5, 24),
        new THREE.Vector3(-129, -18.5, 18),
        new THREE.Vector3(-110, -18.5, 10),
        new THREE.Vector3(-92, -18.5, -33),
        new THREE.Vector3(-71, -18.5, -51),
        new THREE.Vector3(-62, -18.5, -46),
        new THREE.Vector3(-59, -18.5, -15),
        new THREE.Vector3(-55, -18.5, -8),
        new THREE.Vector3(-45, -18.5, -6),
        new THREE.Vector3(-26, -18.5, -20),
        new THREE.Vector3(-14, -18.5, -16),
        new THREE.Vector3(8, -18.5, -35),
        new THREE.Vector3(26, -18.5, -40),
        new THREE.Vector3(40, -18.5, -49),
        new THREE.Vector3(55, -18.5, -4),
        new THREE.Vector3(53, -18.5, 35),
        new THREE.Vector3(29, -18.5, 56),
        new THREE.Vector3(3, -18.5, 60),
        new THREE.Vector3(-28, -18.5, 52),
        new THREE.Vector3(-44, -18.5, 37),
        new THREE.Vector3(-53, -18.5, 66),
        new THREE.Vector3(-95, -18.5, 91)
    ]
}

const mountainPath = {
    start: '-0.278, .95, 0.293',
    curvePoints: [
        new THREE.Vector3(-0.278, .95, 0.293),
        new THREE.Vector3(-0.278, .98, 0.128),
        new THREE.Vector3(-0.234, 1.02, 0.0313),
        new THREE.Vector3(-0.202, .95, -0.119),
        new THREE.Vector3(-0.054, .95, -0.15),
        new THREE.Vector3(-0.018, .95, -0.346),
        new THREE.Vector3(-0.063, 1.02, -0.484),
        new THREE.Vector3(-0.158, .95, -0.613),
        new THREE.Vector3(0.218, .97, -0.704),
        new THREE.Vector3(0.369, .975, -0.722),
        new THREE.Vector3(0.437, .98, -0.541),
        new THREE.Vector3(0.58, .985, -0.41),
        new THREE.Vector3(0.486, .99, -0.236),
        new THREE.Vector3(0.423, 1.04, -0.043),
        new THREE.Vector3(0.281, .95, 0.00688),
        new THREE.Vector3(0.279, .97, 0.143),
        new THREE.Vector3(0.208, .95, 0.391),
        new THREE.Vector3(0.0446, .95, 0.503),
        new THREE.Vector3(-0.075, .95, 0.680),
        new THREE.Vector3(-0.321, .95, 0.647),
        new THREE.Vector3(-0.456, .95, 0.473),
        new THREE.Vector3(-0.379, .97, 0.398),
        new THREE.Vector3(-0.278, .95, 0.293),
    ]
}

const desertPath = {
    start: '-0.95, 0, 1.408',
    curvePoints: [
        new THREE.Vector3(-0.95, 0, 1.408),
        new THREE.Vector3(-1.12, 0, 0.78),
        new THREE.Vector3(-0.902, 0, 0.663),
        new THREE.Vector3(-0.505, 0, -0.254),
        new THREE.Vector3(-0.168, 0, -1.418),
        new THREE.Vector3(0.160, 0, -0.789),
        new THREE.Vector3(0.308, 0, -0.277),
        new THREE.Vector3(0.408, 0.12, -0.207),
        new THREE.Vector3(0.644, 0, -0.144),
        new THREE.Vector3(0.824, 0.12, -0.242),
        new THREE.Vector3(1.16, 0, -0.26),
        new THREE.Vector3(1.05, 0, 0.010),
        new THREE.Vector3(1, 0, 0.388),
        new THREE.Vector3(0.646, 0, 0.405),
        new THREE.Vector3(0.455, 0, 1.096),
        new THREE.Vector3(-0.64, 0, 0.96),
        new THREE.Vector3(-0.95, 0, 1.408),
    ]
}

const lakePath = {
    start: '-5.32, 1, 9.12',
    curvePoints: [
        new THREE.Vector3(-5.32, 1, 9.12),
        new THREE.Vector3(3.10, 1, 5.62),
        new THREE.Vector3(6.57, 2, 13.46),
        new THREE.Vector3(10.92, 2, 11.91),
        new THREE.Vector3(14.22, 4, 14.66),
        new THREE.Vector3(19.186, 3, 9.635),
        new THREE.Vector3(19.789, 3, -1.23),
        new THREE.Vector3(19.618, 2.5, -10.18),
        new THREE.Vector3(20.42, 2, -15.17),
        new THREE.Vector3(13.008, 1, -20.05),
        new THREE.Vector3(6.819, .7, -21.36),
        new THREE.Vector3(3.62, .6, -21.28),
        new THREE.Vector3(-5.7, .6, -23.19),
        new THREE.Vector3(-14.47, .6, -19.37),
        new THREE.Vector3(-23.35, .6, -11.35),
        new THREE.Vector3(-25.25, .7, -7.11),
        new THREE.Vector3(-28.19, 1, -5.756),
        new THREE.Vector3(-28.399, 1, -1.157),
        new THREE.Vector3(-25.36, 1, -0.91),
        new THREE.Vector3(-21.31, 1.5, 6.94),
        new THREE.Vector3(-18.85, 1.5, 10.45),
        new THREE.Vector3(-5.32, 1, 9.12),
    ]
}

export const cameraPath = {
    forest: forestPath,
    mountain: mountainPath,
    desert: desertPath,
    lake: lakePath
}
