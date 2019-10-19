import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipeDetail:any = '';
  recipes  = [
    {
      recipe : 'biriyani',
      img : 'https://cdn.pixabay.com/photo/2016/01/15/10/56/biryani-1141444__340.jpg',
      discription : 'Biryani (pronounced [bɪr.jaːniː]), also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent.[1][2][3] It can be compared to mixing a curry, later combining it with semi-cooked rice separately. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan.[4] It is made with Indian spices, rice, meat (chicken, goat, beef, lamb, prawn, or fish), vegetables or eggs.'
    },
    {
      recipe : 'chicken fry',
      img : 'https://cdn.pixabay.com/photo/2019/04/07/17/20/chicken-4110208__340.jpg',
      discription : 'BK Chicken Fries are a fried chicken product sold by the international fast-food restaurant chain Burger King. At the time of their introduction in 2005, the company had intended Chicken Fries to be one of their larger, adult oriented products made with higher quality ingredients than their standard menu items. Additionally, the product further targeted the snacking and convenience food markets with a specific packaging design that was intended to be easier to handle and fit into automotive cup holders. The product wa'
    },
    {
      recipe : 'mutton  fry',
      img : 'https://image.shutterstock.com/image-photo/kerala-style-beef-dry-fry-260nw-500018788.jpg',
      discription : 'Lamb, hogget and mutton are the meat of domestic sheep (species Ovis aries) at different ages in its life. In general, a sheep in its first year is calledrasam/Mutton bone soup Nalli elumbu masala/Goat Bone marrow masala Mutton curry dosa Ratha poriyal/Goat blood fry Mutton Sukka Mu'
    },
    {
      recipe : 'mutton biriyani',
      img : 'https://image.shutterstock.com/image-photo/hyderabadi-biryani-form-hyderabad-india-260nw-562943647.jpg',
      discription : 'Biryani (pronounced [bɪr.jaːniː]), also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent.[1][2][3] It can be compared to mixing a curry, later combining it with semi-cooked rice separately. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan'
    },
    {
      recipe : 'mutton curry',
      img : 'https://image.shutterstock.com/image-photo/butter-chicken-curry-murgh-makhani-260nw-610126394.jpg',
      discription : 'Mutton curry (also referred to as kosha mangsho,[1] Goat curry[2][3] and lamb curry[4]) is an Indian curry dish that is prepared from mutton and vegetables[5] and originated in Bengal.[6] Railway mutton curry is a variation of the dish that originated during the British India. Primary ingredients of mutton curry include mutton, onion, tomato and spices.'
    },
    {
      recipe : 'chicken fry',
      img : 'https://cdn.pixabay.com/photo/2018/10/21/20/52/chicken-3763827__340.jpg',
      discription : 'BK Chicken Fries are a fried chicken product sold by the international fast-food restaurant chain Burger King. At the time of their introduction in 2005, the company had intended Chicken Fries to be one of their larger, adult oriented products made with higher quality ingredients than their standard menu items. Additionally, the product further targeted the snacking and convenience food markets with a specific packaging design that was intended to be easier to handle and fit into automotive cup holders. The product was part of a series of product introductions designed to'
    },
    {
      recipe : 'french fries',
      img : 'https://media-public.canva.com/MADFCmDBGn8/1/thumbnail_large.png',
      discription : 'French fries, or simply fries (North American English), chips (British and Commonwealth English),[1] finger chips (Indian English)[2] or french-fried potatoes, are batonnet or allumette-cut deep-fried potatoes'
    }
  ]
  constructor() { }
  recipedata(r){
    this.recipeDetail = r;
  }
  ngOnInit() {
  }

}
