import {Component, OnInit} from '@angular/core';
import {Product} from './product/product.model';

export const sampleProducts: Product[] = [
  {
    id: 0,
    name: 'Lear Siegler ADM 3A',
    desc: 'The ADM-3A was one of the first video display terminals. First shipped in 1976.',
    history: `
    Lear Siegler, Inc. (LSI) manufactured its first video display terminal in 1972 – the 7700A. In 1973 LSI hired a new
    head of engineering, Jim Placak. He and his team created the ADM-1 in late '73. It set a new pricing low in the
    industry at $1,500. Its lower cost was primarily due to a unique single printed circuit board design. The ADM-1 was
    quickly followed by the ADM-2 in early '74. It had expanded functionality and a detached keyboard.
    `,
    imageName: 'adm3.png',
    youtubeId: 'rh6UJqY1X8U',
    price: 3234.42
  },
  {
    id: 1,
    name: 'Sony PVM-2730QM CRT Monitor',
    desc: `The Sony ProFeel Pro (1986) monitor, commonly known as the Sony Cube, represents a high point in the
    developmental history of monitor technology and product design.`,
    history: `
      The definitive cuboid form of the Sony ProFeel Pro (1986) had not previously been a feature of monitor casing
      design in Sony’s range. Formerly, the dimensions of the back edge of the monitor had not been identical to the
      front; instead, the casing at the rear of the screen had been visibly narrower. In contrast, and distinctively,
      however, the Sony ProFeel Pro articulates the quintessential cuboid form, with its operational components removed
      from view and suspended within the back frame. The cuboid shape of the monitor casing facilitates the stacking of
      monitors, while also functioning as a grip-bar, which assists in carrying. These practical attributes of the design
      substantially enhance the utility and versatility of the equipment for exhibition purposes
    `,
    imageName: 'sony_2730.png',
    youtubeId: 'Kpx0h6zomjs',
    price: 2100.99
  },
  {
    id: 2,
    name: 'Super Nintendo Entertainment System',
    desc: `Super Nintendo Entertainment System, often referred to as SNES, Super Nintendo, or Super NES, is a 16-bit
    video game console.`,
    history: `
      Released by Nintendo in North America, Brazil, Europe, and Australia. In Japan, it is known as the Super Famicom.
      In South Korea, the Super Nintendo was distributed as the Super Comboy by Hyundai Electronics. Unlike the Hyundai
      Comboy, which is a renamed American NES, the Super Comboy is a renamed Japanese/European model.
    `,
    imageName: 'snes.png',
    youtubeId: 'eSBFw93V3Rg',
    price: 899.98
  },
  {
    id: 3,
    name: 'Polybius',
    desc: ':)',
    history: 'Creepy stuff.',
    imageName: 'polybius.jpg',
    youtubeId: 'h1ccH97j63o',
    price: 0.01
  },
  {
    id: 4,
    name: 'TRS-80 Personal Computer',
    desc: `
    The TRS-80 Micro Computer System (TRS-80; later known as the Model I to distinguish it from successors) is a desktop
    microcomputer launched in 1977 and sold by Tandy Corporation through their Radio Shack stores.
    `,
    history: `
    The name is an abbreviation of Tandy/Radio Shack, Z-80 microprocessor.[3] It was one of the earliest mass-produced
    and mass-marketed retail personal computers. Notable features of the TRS-80 included its full-stroke QWERTY keyboard,
    its new Zilog Z80 processor (rather than the more common Intel 8080), 4K RAM standard memory (many 8-bit computers
    then shipped with only 1K RAM), small size and desk footprint, its floating-point BASIC programming language, an
    included 64 column video monitor, and a starting price of US$600[1] (equivalent to US$2400 in 2016).
    `,
    imageName: 'trs-80.png',
    youtubeId: '7kT207Jmhq4',
    price: 2799.99
  }
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = sampleProducts;

  constructor() {
  }

  ngOnInit() {
  }

}
