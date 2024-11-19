import './App.css';
import './Style.css';
import Header from './components/Header';
import Img from './components/Img';
import Footer from './components/Footer';
import Cart from './components/Cart';
function App() {
  return (
    <div class="App">
      <Header/>

      <div style={{display: "flex" , gap:"70px" , marginLeft:"80px", marginTop:"10px"}}>
      <Cart name="Joker:Folie a Deux" para="Drama/Suspense/Thrilir" imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-NC44LzEwICA2LjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00352820-umndtlbyjs-portrait.jpg"/>
      <Cart name="Dharmaveer 2" para="Biography/Drama" imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAyNS4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00403175-kvdhsqcvnr-portrait.jpg"/>
      <Cart name="Devara-Part1" para="Drama/Action/Thrilir" imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAyNDUuOUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00310216-tluebxpafx-portrait.jpg"/>
      <Cart name="Navara Navasacha2" para="Drama/Comedy/Family" imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICAxOS45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00406886-kjmebnsccr-portrait.jpg"/>
      <Cart name="Stree2" para="Drama/Comedy/Horror" imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICA0MDguMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00364249-gysqjkrwnv-portrait.jpg"/>
      </div>
      <Img  imgurl="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png"/>

      <div style={{height:"600px" ,width:"100%" , backgroundColor:"#30344c"}}>
      <div style={{display: "flex" , gap:"70px" , marginLeft:"80px" , marginTop:"100px", backgroundColor:"" , height:"500px", paddingTop:"70px"}}>
      <Cart name="The LayOff Party" para="Hindi" imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00414193-cjcnwnawzc-portrait.jpg"/>
      <Cart name="Sidone in Japan" para="French" imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00392296-prukhfjnbx-portrait.jpg"/>
      <Cart name="M.S Dhoni" para="Hindi" imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00025234-gpfkhfkvqd-portrait.jpg"/>
      <Cart name="Hoy Maharaja" para="Marathi" imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00398190-nbanllwyhl-portrait.jpg"/>
      <Cart name="Shyamchi Aai" para="Marathi" imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00371488-wmtmdqwyrt-portrait.jpg"/>
      </div>
      </div>
      <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png" height={100} width={1300} style={{marginLeft:"100px", marginTop:"50px", marginBottom:"-30px"}} alt="" />
      <div style={{display: "flex" , gap:"70px" , marginLeft:"80px" , marginTop:"30px", backgroundColor:"" , height:"500px", paddingTop:"70px"}}>
      <Cart name="Live Cage Fight" para="Andheri Sports Complex" imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409427-lgtpgquzdx-portrait.jpg"/>
      <Cart name="GamingCon" para="Mumbai" imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzMCBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412364-chbbrcpqnm-portrait.jpg"/>
      <Cart name="Chembur 10km Run" para="Chembur" imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMCBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407153-hwgqcvbyhe-portrait.jpg"/>
      <Cart name="Mumbai Marathon" para="Bandra Fort" imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMiBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00342539-rdfhdfhbuu-portrait.jpg"/>
      <Cart name="Mumbai Half 50Km" para="Mumbai" imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyIEZlYg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00345580-sftjzxlqaa-portrait.jpg"/>
      </div>

      <div style={{display: "flex" , gap:"70px" , marginLeft:"80px" , marginTop:"30px", backgroundColor:"" , height:"500px", paddingTop:"70px"}}>
      <Cart name="Dome Dandiya Nites 2024" para="NSCI Stadium" imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA0IE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410756-pzkdtztzyg-portrait.jpg"/>
      <Cart name="RangRas Navratri 2024" para="Mumbai" imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA0IE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407953-lcpsqzfvsw-portrait.jpg"/>
      <Cart name="Patidar Mandal Navratri 2024" para="Hotel Sahara " imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA0IE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412041-ctkccgnmex-portrait.jpg"/>
      <Cart name="Raas rang Thane" para="Thane" imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA0IE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409072-rgrhrlctxc-portrait.jpg"/>
      <Cart name="Royal Gardan Resort" para="Nigoan East" imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA1IE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00370117-xbbhylavsn-portrait.jpg"/>
      </div>
   <hr/>
      <Footer/>
    </div>
  );
}

export default App;
