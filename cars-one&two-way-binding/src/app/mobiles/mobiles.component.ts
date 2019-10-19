import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  constructor() { }
  mobiles  = [
    {
      brand : 'nokia',
      img : 'https://cdn.pixabay.com/photo/2013/07/12/19/00/slider-154174__340.png',
      discription : 'The company has operated in various industries over the past 150 years. It was founded as a pulp mill and had long been associated with rubber and cables, but since the 1990s has focused on large-scale telecommunications infrastructures, technology development, and licensing.[7] Nokia is a major contributor to the mobile telephony industry, having assisted in the development of the GSM, 3G and LTE standards (and currently in 5G), '
    },
    {
      brand : 'samsung',
      img : 'https://cdn.pixabay.com/photo/2016/09/20/11/27/phone-1682317__340.png',
      discription : 'Samsung was founded by Lee Byung-chul in 1938 as a trading company. Over the next three decades, the group diversified into areas including food processing, textiles, insurance, securities, and retail. Samsung entered the electronics industry in the late 1960s and the construction and shipbuilding industries in the mid-1970s; these areas would drive its subsequent growth.'
    },
    {
      brand : 'i phone',
      img : 'https://cdn.pixabay.com/photo/2016/12/26/06/16/i-phone-1931557__340.jpg',
      discription : 'The user interface is built around the devices multi-touch screen, including a virtual keyboard. The iPhone has Wi-Fi and can connect to cellular networks. An iPhone can take photos, play music, send and receive email, browse the web, send and receive text messages, record notes, perform mathematical calculations, and receive visual voicemail. Shooting video also became a standard feature with the iPhone 3GS. Other functionality, such as video games, reference works, and social networking, can be enabled by downloading mobile apps. As of January 2017, Apple'
    },
    {
      brand : 'one plus',
      img : 'https://cdn.pixabay.com/photo/2016/03/27/22/18/smartphone-1284501__340.jpg',
      discription : 'The company unveiled its first device, the OnePlus One, on 23 April 2014.[6] In December 2014, alongside the release of the OnePlus One in India exclusively through Amazon, OnePlus also announced plans to establish a presence in the country, with plans to open 25 official walk-in service centres across India.'
    },
    {
      brand : 'intel',
      img : 'https://image.shutterstock.com/image-vector/smartphone-mobile-phone-isolated-realistic-260nw-703670326.jpg',
      discription : 'does not exist. You can ask for it to be created, but consider checking the search results below to see whether the topic is already covered.'
    },
    {
      brand : 'black berry',
      img : 'https://cdn.pixabay.com/photo/2017/08/28/15/57/blackberry-2690103__340.jpg',
      discription : 'BlackBerry is a line of smartphones, tablets, and services originally designed and marketed by Canadian company BlackBerry Limited (formerly known as Research In Motion, or RIM).[1] These are currently designed, manufactured, and marketed by TCL Communication (under the brand of BlackBerry Mobile), BB Merah Putih, and Optiemus Infracom for the global, Indonesian, and South Asian markets (respectively) using the BlackBerry brand under license'
    },
    {
      brand : 'lg',
      img : 'https://cdn.pixabay.com/photo/2017/11/12/00/16/android-2941165__340.jpg',
      discription : 'LG Corporation (Korean: 주식회사 LG), formerly Lucky-Goldstar (Korean: Leogki Geumseong; Korean: 럭키금성; Hanja: 樂喜金星), is a South Korean multinational conglomerate corporation. It is the fourth-largest chaebol in South Korea. It is headquartered in the LG Twin Towers building in Yeouido-dong, Yeongdeungpo District, Seoul.[2] LG makes electronics, chemicals, and telecom products and operates subsidiaries such as LG Electronics, Zenith, LG Display, LG Uplus, LG Innotek and LG Chem in over 80 countries'
    }
  ]
  mobiledata :any = '';
  sendmobile(mobile){
   this.mobiledata = mobile;
  }
  ngOnInit() {
  }

}
