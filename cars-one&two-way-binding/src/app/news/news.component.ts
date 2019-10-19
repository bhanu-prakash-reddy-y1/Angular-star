import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }
news = [
  {
    name : 'virat kohli',
    img : 'https://cdn.pixabay.com/photo/2019/04/29/17/01/virat-4166561__340.png',
    news : 'Virat Kohli (About this soundpronunciation (help·info); born 5 November 1988) is an Indian cricketer who currently captains the India national team. A right-handed top-order batsman, Kohli is regarded as one of the best batsmen in the world.[3] He plays for Royal Challengers Bangalore in the Indian Premier League (IPL), and has been the teams captain since 2013. Since October 2017, he has been the top-ranked ODI batsman in the world and is currently the leading batsman in the Test rankings.[4] Among Indian batsmen, Kohli has the best ever Test rating (937 points), ODI rating (911 points) and T20I rating (897 points)'
  },
  {
    name : 'susma swaraj',
    img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Secretary_Tillerson_is_Greeted_by_Indian_Minister_of_External_Affairs_Swaraj_%2824074726498%29_%28cropped%29.jpg/220px-Secretary_Tillerson_is_Greeted_by_Indian_Minister_of_External_Affairs_Swaraj_%2824074726498%29_%28cropped%29.jpg',
    news : 'Sushma Swaraj (About this soundpronunciation (help·info)) (née Sushma Sharma; 14 February 1952 – 6 August 2019) was an Indian politician and a Supreme Court lawyer. A senior leader of Bharatiya Janata Party, Swaraj served as the Minister of External Affairs of India in the first Narendra Modi government (2014–2019). She was the second woman to hold the office, after Indira Gandhi. She was elected seven times as a Member of Parliament and three times as a Member of the Legislative Assembly. At the age of 25 in 1977, she became the youngest cabinet minister of Indian state of Haryana. She also served as 5th Chief Minister of Delhi for a short duration in 1998'
  },
  {
    name : 'Nilambur landslide: Only house standing, but resident not sure of it’s a good thing to be alive',
    img : 'https://images.indianexpress.com/2019/08/thankamanni-house-759.jpg?w=610',
    news : 'Except for the couples home, a tiny Shiva temple and a clump of areca nut trees in the centre, the hill had wiped out everything'
  },
  {
    name : 'Rajinikanth hails removal of Article 370, likens Modi, Shah to ‘Krishna and Arjuna',
    img : 'https://images.indianexpress.com/2019/08/modi-amit-shah.jpg?w=759&h=422&imflag=true',
    news : 'Superstar Rajnikanth on Sunday lauded the Centre for abrogating Article 370 which gave special status to Jammu and Kashmir, and likened the duo of Prime Minister Narendra Modi and Union Home Minister Amit Shah toSuperstar Rajnikanth on Sunday lauded the Centre for abrogating Article 370 which gave special status to Jammu and Kashmir, and likened the duo of Prime Minister Narendra Modi and Union Home Minister Amit Shah to'
  },
  {
    name : 'Rahul Gandhi visits flood-ravaged Wayanad, assures displaced people of assistance',
    img : 'https://images.indianexpress.com/2019/08/rahul-gandhi-1.jpeg?w=759&h=422&imflag=true',
    news : 'Congress leader and Wayanad MP Rahul Gandhi arrived on a two-day visit to Kerala on Sunday afternoon and visited his Lok Sabha constituency, which is one of the severely affected areas in the state that has been battered by torrential rainfallpowered by Rubicon ProjectAdvertisinGandhi visited a relief camp at Wayanad and patiently heard the woes of the people who were displaced from their homes following flooding and destruction of their dwellings. Assuring the people of assistance, the Congress leader said'
  },
  {
    name : 'Delhi Metro employee commits suicide, streams it live on Facebook',
    img : 'https://images.indianexpress.com/2019/06/delhi-metro-759.jpg?w=610',
    news : 'No suicide note was found from his room at East Delhis Shahdara where he was found hanging from a hook in the ceiling with a plastic wire around his neck, they said'
  },
  {
    name : 'See how flooded Kerala looks from the skies',
    img : 'https://images.indianexpress.com/2019/08/kerala-flooded.jpeg?w=759&h=422&imflag=true',
    news : 'Kerala floods: The flood situation in Kerala continued to remain bleak on Sunday, with the government reporting as many as 67 deaths and over 2.27 lakh people were evacuated to relief camps that have been set up in various parts across the state. The Indian Meteorological Department (IMD) has issued a red alert for three districts – Wayanad, Kannur and Kasaragod for Sunday'
  },
  {
    name : 'India cancels Samjhauta Express service after Pakistan suspends ',
    img : 'https://images.indianexpress.com/2019/08/samjhauta-759.jpg?w=759&h=422&imflag=true',
    news : 'Days after Pakistan suspended the Samjhauta Express train service that runs between New Delhi and Lahore, India on Sunday followed suit by cancelling its operation as well, PTI reported. The decision was taken after Pakistan suspended operations on its side, the government said.'
  },
  {
    name : 'Mamata Banerjee to sit on dharna over I-T notices to Durga puja committees',
    img : 'https://images.indianexpress.com/2019/06/mamata-13.jpg?w=759&h=422&imflag=true',
    news : 'Hitting out at the Centre for issuing income tax notices to several Durga Puja committees in the state, West Bengal Chief Minister Mamata Banerjee Sunday said the TMC would sit on a dharna on August 13 to protest the move of the BJP-led government'
  },  
  {
    name : 'Congress, Gandhi family’s political survival questionable, says Dilip Ghosh',
    img : 'https://images.indianexpress.com/2019/01/dilip-ghosh.jpg?w=759&h=422&imflag=true',
    news : 'West Bengal BJP chief Dilip Ghosh on Sunday took a jibe at the appointment of Sonia Gandhi as the interim chief of the Congress, saying the political survival of the grand old party and the Gandhi family has come into question'
  }
]
  ngOnInit() {
  }
  newsdata:any = '';
  sendnews(n){
    this.newsdata = n;
  }
}
