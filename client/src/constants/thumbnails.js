import Forest from '../assets/thumbnails/forest.png'
import Mountain from '../assets/thumbnails/mountain.png'
import Desert from '../assets/thumbnails/desert.png'
import Lake from '../assets/thumbnails/lake.png'

import Leaf from '../assets/icons/leaf.svg'
import Snow from '../assets/icons/snow.svg'
import Cactus from '../assets/icons/cactus.svg'
import Water from '../assets/icons/water.svg'

export const thumbnails = [
    {env: 'forest', src: Forest, url: '/foret', alt: 'thumbnail forest environment', icon: Leaf},
    {env: 'mountain', src: Mountain, url: '/montagne', alt: 'thumbnail mountain environment', icon: Snow},
    {env: 'desert', src: Desert, url: '/desert', alt: 'thumbnail desrt environment', icon: Cactus},
    {env: 'lake', src: Lake, url: '/lac', alt: 'thumbnail lake environment', icon: Water},
]
