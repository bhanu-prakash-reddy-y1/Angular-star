import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars = [{
    brand : 'BMW',
    img : 'https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408__340.jpg',
    description : 'BMW began production of motorcycle engines and then motorcycles after World War I.[22] Its motorcycle brand is now known as BMW Motorrad. Their first successful motorcycle after the failed Helios and Flink, was the "R32" in 1923, though production originally began in 1921.[23] This had a "boxer" twin engine, in which a cylinder projects into the air-flow from each side of the machine. Apart from their single-cylinder models (basically to the same pattern), all their motorcycles used this distinctive layout until the early 1980s. Many BMW'
  },
  {
    brand : 'BENZ',
    img : 'https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220__340.jpg',
    description : 'Mercedes-Benz (German: [mɛɐ̯ˈtseːdəsˌbɛnts, -dɛs-])[3][4] is a German global automobile marque and a division of Daimler AG. The brand is known for luxury vehicles, buses, coaches, and trucks. The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz. In 2018, Mercedes-Benz was the biggest selling premium vehicle brand in the world, having sold 2.31 million passenger cars'
  },
  {
    brand : 'rolls royce',
    img : 'https://cdn.pixabay.com/photo/2016/07/27/08/02/rollsroyce-1544788__340.jpg',
    description : 'Rolls-Royce Motor Cars Limited is a British luxury automobile maker. A wholly owned subsidiary of German group BMW, it was established in 1998 after BMW was licensed the rights to the Rolls-Royce brand name and logo from Rolls-Royce plc and acquired the rights to the Spirit of Ecstasy and Rolls-Royce grill shape trademarks from Volkswagen AG. Rolls-Royce Motor Cars Limited operates from purpose-built administrative and production facilities opened in 2003 across from the historic Goodwood Circuit in Goodwood, West Sussex, England, United Kingdom'
  },
  {
    brand : 'Bugatti',
    img : 'https://image.shutterstock.com/image-photo/geneva-march-5-2013-bugatti-260nw-130933826.jpg',
    description : 'Bugatti Automobiles S.A.S. (French pronunciation: ​[bygati]) is a French high-performance luxury automobiles manufacturer and a subsidiary of Volkswagen AG, with its head office and assembly plant in Molsheim, Alsace, France. Volkswagen purchased the Bugatti trademark in June 1998 and incorporated Bugatti Automobiles S.A.S. in 1999.'
  },
  {
    brand : 'lamborghini',
    img : 'https://cdn.pixabay.com/photo/2012/04/12/23/48/car-30990__340.png',
    description : 'Ferruccio Lamborghini, an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with established marques, including Ferrari. The company gained wide acclaim in 1966 for the Miura sports coupé, which established rear mid-engine, rear wheel drive as the standard layout for high-performance cars of the era. Lamborghini grew rapidly during its first decade, but sales plunged in the wake of the 1973 worldwide financial downturn and the oil crisis. The firm'
  },
  {
    brand : 'audi',
    img : 'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__340.jpg',
    description : 'The origins of the company are complex, going back to the early 20th century and the initial enterprises (Horch and the Audiwerke) founded by engineer August Horch; and two other manufacturers (DKW and Wanderer), leading to the foundation of Auto Union in 1932. The modern era of Audi essentially began in the 1960s when Auto Union was acquired by Volkswagen from Daimler-Benz.[10] After relaunching the Audi brand with the 1965 introduction of the Audi F103 series, Volkswagen merged Auto Union with NSU Motorenwerke in 1969, thus creating the present day form of the company.'
  },
  {
    brand : 'ambassador',
    img : 'https://cdn.pixabay.com/photo/2017/08/06/19/17/wrecked-2595420__340.jpg',
    description : 'An ambassador[1] is an official envoy, especially a high-ranking diplomat who represents a state and is usually accredited to another sovereign state or to an international organization as the resident representative of their own government or sovereign or appointed for a special and often temporary diplomatic assignment.[2] The word is also often used more liberally for persons who are known, without national appointment, to represent certain professions, activities and fields of endeavor such as sales'
  },
  {
    brand : 'chevrolet',
    img : 'https://cdn.pixabay.com/photo/2018/03/23/09/15/chevrolet-3253172__340.png',
    description : 'Chevrolet-branded vehicles are sold in most automotive markets worldwide. In Oceania, Chevrolet is represented by GM subsidiary Holden, having returned to the region in 2018 after a 50-year absence with the launching of the Camaro and Silverado pickup truck. In 2005, Chevrolet was relaunched in Europe, primarily selling vehicles built by GM Daewoo of South Korea with the tagline "Daewoo has grown up enough to become Chevrolet", a move rooted in General Motors'
  },
  {
    brand : 'audi-Q3',
    img : 'https://image.shutterstock.com/image-vector/vector-layout-silver-crossover-audi-260nw-1409698385.jpg',
    description : 'The car uses the Volkswagen Group A5 (PQ35) platform of the Volkswagen Golf Mk5, the same as the Volkswagen Tiguan compact SUV. The Q3 slots above the Audi Q2 subcompact crossover SUV. Compared to the compact luxury crossover SUV Q5 and mid-size luxury crossover SUV Q7, which are positioned more for family practicality and off-road performance, the Q3 is aimed as more of a lifestyle/sports automobile. Design and development began following board approval in the second half of 2007. Julian Hoenig'
  },]
  cardata : any;
  constructor() { }
  sendcar(car){
    this.cardata = car;
  }
  ngOnInit() {
  }

}
