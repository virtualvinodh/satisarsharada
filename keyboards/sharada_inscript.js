
KeymanWeb.KR(new Keyboard_sharada_inscript());

function Keyboard_sharada_inscript()
{
  
  this.KI="Keyboard_sharada_inscript";
  this.KN="Sharada Unicode Inscript";
  this.KMINVER="9.0";
  this.KV={F:' 1em "Satisar Sharada"',K102:0};
  this.KV.KLS={
    "shift": ["𑆃᳕","𑆍ᳮ","ᳮ","𑇀𑆫","𑆫𑇀","𑆃᳐","᳐","𑆄᳐","𑆳᳐","𑆑𑇀𑆰","𑆘𑇀𑆚","𑆂","𑆉","","","","𑆐","𑆎","𑆄","𑆆","𑆈","𑆨","𑆕","𑆔","𑆣","𑆙","𑆞","𑆚","ᳯ","","","","𑆇","𑆍","𑆃","𑆅","𑆇","𑆦","","𑆒","𑆡","𑆗","𑆜","","","","","","","𑆃᳘","𑆀","𑆟","","","𑆭","𑆯","𑆰","𑇆","𑇁","","","","","",""],
    "default": ["᳕","𑇑","𑇒","𑇓","𑇔","𑇕","𑇖","𑇗","𑇘","𑇙","𑇐","","𑆸","","","","𑆿","𑆽","𑆳","𑆵","𑆷","𑆧","𑆲","𑆓","𑆢","𑆘","𑆝","𑇊","𑆃ᳯ","","","","𑆾","𑆼","𑇀","𑆴","𑆶","𑆥","𑆫","𑆑","𑆠","𑆖","𑆛","","","","","","","᳘","𑆁","𑆩","𑆤","𑆮","𑆬","𑆱","","𑇅","𑆪","","","","","",""],
    "shift-ctrl": ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","𑆏𑆁","","","","","","","𑇁","","","","","","",""]
  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KDU=1;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0";
  this.KMBM=0x0030;
  this.KS=1;
  this.KVER="13.0.115.0";
  this.gs=function(t,e) {
    return this.g_main(t,e);
  };
  this.g_main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, 0x4010, 0x31)) {
      if(1){
        r=m=1;   // Line 66
        k.KO(0,t,"𑆍ᳮ");
      }
    }
    else if(k.KKM(e, 0x4010, 0xDE)) {
      if(1){
        r=m=1;   // Line 40
        k.KO(0,t,"𑆜");
      }
    }
    else if(k.KKM(e, 0x4010, 0x33)) {
      if(1){
        r=m=1;   // Line 64
        k.KO(0,t,"𑇀𑆫");
      }
    }
    else if(k.KKM(e, 0x4010, 0x34)) {
      if(1){
        r=m=1;   // Line 63
        k.KO(0,t,"𑆫𑇀");
      }
    }
    else if(k.KKM(e, 0x4010, 0x35)) {
      if(1){
        r=m=1;   // Line 62
        k.KO(0,t,"𑆃᳐");
      }
    }
    else if(k.KKM(e, 0x4010, 0x37)) {
      if(1){
        r=m=1;   // Line 60
        k.KO(0,t,"𑆄᳐");
      }
    }
    else if(k.KKM(e, 0x4000, 0xDE)) {
      if(1){
        r=m=1;   // Line 92
        k.KO(0,t,"𑆛");
      }
    }
    else if(k.KKM(e, 0x4010, 0x39)) {
      if(1){
        r=m=1;   // Line 24
        k.KO(0,t,"𑆑𑇀𑆰");
      }
    }
    else if(k.KKM(e, 0x4010, 0x30)) {
      if(1){
        r=m=1;   // Line 23
        k.KO(0,t,"𑆘𑇀𑆚");
      }
    }
    else if(k.KKM(e, 0x4010, 0x38)) {
      if(1){
        r=m=1;   // Line 59
        k.KO(0,t,"𑆳᳐");
      }
    }
    else if(k.KKM(e, 0x4010, 0xBB)) {
      if(1){
        r=m=1;   // Line 57
        k.KO(0,t,"𑆉");
      }
    }
    else if(k.KKM(e, 0x4000, 0xBE)) {
      if(1){
        r=m=1;   // Line 25
        k.KO(0,t,"𑇅");
      }
    }
    else if(k.KKM(e, 0x4000, 0xBF)) {
      if(1){
        r=m=1;   // Line 93
        k.KO(0,t,"𑆪");
      }
    }
    else if(k.KKM(e, 0x4000, 0x30)) {
      if(1){
        r=m=1;   // Line 11
        k.KO(0,t,"𑇐");
      }
    }
    else if(k.KKM(e, 0x4000, 0x31)) {
      if(1){
        r=m=1;   // Line 20
        k.KO(0,t,"𑇑");
      }
    }
    else if(k.KKM(e, 0x4000, 0x32)) {
      if(1){
        r=m=1;   // Line 19
        k.KO(0,t,"𑇒");
      }
    }
    else if(k.KKM(e, 0x4000, 0x33)) {
      if(1){
        r=m=1;   // Line 18
        k.KO(0,t,"𑇓");
      }
    }
    else if(k.KKM(e, 0x4000, 0x34)) {
      if(1){
        r=m=1;   // Line 17
        k.KO(0,t,"𑇔");
      }
    }
    else if(k.KKM(e, 0x4000, 0x35)) {
      if(1){
        r=m=1;   // Line 16
        k.KO(0,t,"𑇕");
      }
    }
    else if(k.KKM(e, 0x4000, 0x36)) {
      if(1){
        r=m=1;   // Line 15
        k.KO(0,t,"𑇖");
      }
    }
    else if(k.KKM(e, 0x4000, 0x37)) {
      if(1){
        r=m=1;   // Line 14
        k.KO(0,t,"𑇗");
      }
    }
    else if(k.KKM(e, 0x4000, 0x38)) {
      if(1){
        r=m=1;   // Line 13
        k.KO(0,t,"𑇘");
      }
    }
    else if(k.KKM(e, 0x4000, 0x39)) {
      if(1){
        r=m=1;   // Line 12
        k.KO(0,t,"𑇙");
      }
    }
    else if(k.KKM(e, 0x4010, 0xBA)) {
      if(1){
        r=m=1;   // Line 41
        k.KO(0,t,"𑆗");
      }
    }
    else if(k.KKM(e, 0x4000, 0xBA)) {
      if(1){
        r=m=1;   // Line 91
        k.KO(0,t,"𑆖");
      }
    }
    else if(k.KKM(e, 0x4010, 0xBC)) {
      if(1){
        r=m=1;   // Line 51
        k.KO(0,t,"𑆰");
      }
    }
    else if(k.KKM(e, 0x4000, 0xBB)) {
      if(1){
        r=m=1;   // Line 68
        k.KO(0,t,"𑆸");
      }
    }
    else if(k.KKM(e, 0x4030, 0xBE)) {
      if(1){
        r=m=1;   // Line 22
        k.KO(0,t,"𑇁");
      }
    }
    else if(k.KKM(e, 0x4010, 0xBE)) {
      if(1){
        r=m=1;   // Line 50
        k.KO(0,t,"𑇆");
      }
    }
    else if(k.KKM(e, 0x4010, 0xBF)) {
      if(1){
        r=m=1;   // Line 10
        k.KO(0,t,"𑇁");
      }
    }
    else if(k.KKM(e, 0x4010, 0x32)) {
      if(1){
        r=m=1;   // Line 65
        k.KO(0,t,"ᳮ");
      }
    }
    else if(k.KKM(e, 0x4010, 0x41)) {
      if(1){
        r=m=1;   // Line 49
        k.KO(0,t,"𑆇");
      }
    }
    else if(k.KKM(e, 0x4010, 0x43)) {
      if(1){
        r=m=1;   // Line 54
        k.KO(0,t,"𑆟");
      }
    }
    else if(k.KKM(e, 0x4010, 0x44)) {
      if(1){
        r=m=1;   // Line 47
        k.KO(0,t,"𑆃");
      }
    }
    else if(k.KKM(e, 0x4010, 0x45)) {
      if(1){
        r=m=1;   // Line 29
        k.KO(0,t,"𑆄");
      }
    }
    else if(k.KKM(e, 0x4010, 0x46)) {
      if(1){
        r=m=1;   // Line 46
        k.KO(0,t,"𑆅");
      }
    }
    else if(k.KKM(e, 0x4010, 0x47)) {
      if(1){
        r=m=1;   // Line 45
        k.KO(0,t,"𑆇");
      }
    }
    else if(k.KKM(e, 0x4010, 0x48)) {
      if(1){
        r=m=1;   // Line 44
        k.KO(0,t,"𑆦");
      }
    }
    else if(k.KKM(e, 0x4010, 0x49)) {
      if(1){
        r=m=1;   // Line 34
        k.KO(0,t,"𑆔");
      }
    }
    else if(k.KKM(e, 0x4010, 0x4B)) {
      if(1){
        r=m=1;   // Line 43
        k.KO(0,t,"𑆒");
      }
    }
    else if(k.KKM(e, 0x4010, 0x4C)) {
      if(1){
        r=m=1;   // Line 42
        k.KO(0,t,"𑆡");
      }
    }
    else if(k.KKM(e, 0x4010, 0x4D)) {
      if(1){
        r=m=1;   // Line 52
        k.KO(0,t,"𑆯");
      }
    }
    else if(k.KKM(e, 0x4010, 0x4E)) {
      if(1){
        r=m=1;   // Line 53
        k.KO(0,t,"𑆭");
      }
    }
    else if(k.KKM(e, 0x4010, 0x4F)) {
      if(1){
        r=m=1;   // Line 35
        k.KO(0,t,"𑆣");
      }
    }
    else if(k.KKM(e, 0x4010, 0x50)) {
      if(1){
        r=m=1;   // Line 36
        k.KO(0,t,"𑆙");
      }
    }
    else if(k.KKM(e, 0x4010, 0x51)) {
      if(1){
        r=m=1;   // Line 27
        k.KO(0,t,"𑆐");
      }
    }
    else if(k.KKM(e, 0x4010, 0x52)) {
      if(1){
        r=m=1;   // Line 30
        k.KO(0,t,"𑆆");
      }
    }
    else if(k.KKM(e, 0x4010, 0x53)) {
      if(1){
        r=m=1;   // Line 48
        k.KO(0,t,"𑆍");
      }
    }
    else if(k.KKM(e, 0x4010, 0x54)) {
      if(1){
        r=m=1;   // Line 31
        k.KO(0,t,"𑆈");
      }
    }
    else if(k.KKM(e, 0x4010, 0x55)) {
      if(1){
        r=m=1;   // Line 33
        k.KO(0,t,"𑆕");
      }
    }
    else if(k.KKM(e, 0x4010, 0x57)) {
      if(1){
        r=m=1;   // Line 28
        k.KO(0,t,"𑆎");
      }
    }
    else if(k.KKM(e, 0x4030, 0x58)) {
      if(1){
        r=m=1;   // Line 21
        k.KO(0,t,"𑆏𑆁");
      }
    }
    else if(k.KKM(e, 0x4010, 0x58)) {
      if(1){
        r=m=1;   // Line 56
        k.KO(0,t,"𑆀");
      }
    }
    else if(k.KKM(e, 0x4010, 0x59)) {
      if(1){
        r=m=1;   // Line 32
        k.KO(0,t,"𑆨");
      }
    }
    else if(k.KKM(e, 0x4010, 0x5A)) {
      if(1){
        r=m=1;   // Line 55
        k.KO(0,t,"𑆃᳘");
      }
    }
    else if(k.KKM(e, 0x4000, 0xDB)) {
      if(1){
        r=m=1;   // Line 72
        k.KO(0,t,"𑆝");
      }
    }
    else if(k.KKM(e, 0x4000, 0xDC)) {
      if(1){
        r=m=1;   // Line 70
        k.KO(0,t,"𑆃ᳯ");
      }
    }
    else if(k.KKM(e, 0x4000, 0xDD)) {
      if(1){
        r=m=1;   // Line 71
        k.KO(0,t,"𑇊");
      }
    }
    else if(k.KKM(e, 0x4010, 0x36)) {
      if(1){
        r=m=1;   // Line 61
        k.KO(0,t,"᳐");
      }
    }
    else if(k.KKM(e, 0x4010, 0xBD)) {
      if(1){
        r=m=1;   // Line 58
        k.KO(0,t,"𑆂");
      }
    }
    else if(k.KKM(e, 0x4000, 0xC0)) {
      if(1){
        r=m=1;   // Line 69
        k.KO(0,t,"᳕");
      }
    }
    else if(k.KKM(e, 0x4000, 0x41)) {
      if(1){
        r=m=1;   // Line 83
        k.KO(0,t,"𑆾");
      }
    }
    else if(k.KKM(e, 0x4000, 0x42)) {
      if(1){
        r=m=1;   // Line 96
        k.KO(0,t,"𑆮");
      }
    }
    else if(k.KKM(e, 0x4000, 0x43)) {
      if(1){
        r=m=1;   // Line 100
        k.KO(0,t,"𑆩");
      }
    }
    else if(k.KKM(e, 0x4000, 0x44)) {
      if(1){
        r=m=1;   // Line 85
        k.KO(0,t,"𑇀");
      }
    }
    else if(k.KKM(e, 0x4000, 0x45)) {
      if(1){
        r=m=1;   // Line 80
        k.KO(0,t,"𑆳");
      }
    }
    else if(k.KKM(e, 0x4000, 0x46)) {
      if(1){
        r=m=1;   // Line 86
        k.KO(0,t,"𑆴");
      }
    }
    else if(k.KKM(e, 0x4000, 0x47)) {
      if(1){
        r=m=1;   // Line 87
        k.KO(0,t,"𑆶");
      }
    }
    else if(k.KKM(e, 0x4000, 0x48)) {
      if(1){
        r=m=1;   // Line 88
        k.KO(0,t,"𑆥");
      }
    }
    else if(k.KKM(e, 0x4000, 0x49)) {
      if(1){
        r=m=1;   // Line 75
        k.KO(0,t,"𑆓");
      }
    }
    else if(k.KKM(e, 0x4000, 0x4A)) {
      if(1){
        r=m=1;   // Line 26
        k.KO(0,t,"𑆫");
      }
    }
    else if(k.KKM(e, 0x4000, 0x4B)) {
      if(1){
        r=m=1;   // Line 89
        k.KO(0,t,"𑆑");
      }
    }
    else if(k.KKM(e, 0x4000, 0x4C)) {
      if(1){
        r=m=1;   // Line 90
        k.KO(0,t,"𑆠");
      }
    }
    else if(k.KKM(e, 0x4000, 0x4D)) {
      if(1){
        r=m=1;   // Line 94
        k.KO(0,t,"𑆱");
      }
    }
    else if(k.KKM(e, 0x4000, 0x4E)) {
      if(1){
        r=m=1;   // Line 95
        k.KO(0,t,"𑆬");
      }
    }
    else if(k.KKM(e, 0x4000, 0x4F)) {
      if(1){
        r=m=1;   // Line 74
        k.KO(0,t,"𑆢");
      }
    }
    else if(k.KKM(e, 0x4000, 0x50)) {
      if(1){
        r=m=1;   // Line 73
        k.KO(0,t,"𑆘");
      }
    }
    else if(k.KKM(e, 0x4000, 0x51)) {
      if(1){
        r=m=1;   // Line 82
        k.KO(0,t,"𑆿");
      }
    }
    else if(k.KKM(e, 0x4000, 0x52)) {
      if(1){
        r=m=1;   // Line 79
        k.KO(0,t,"𑆵");
      }
    }
    else if(k.KKM(e, 0x4000, 0x53)) {
      if(1){
        r=m=1;   // Line 84
        k.KO(0,t,"𑆼");
      }
    }
    else if(k.KKM(e, 0x4000, 0x54)) {
      if(1){
        r=m=1;   // Line 78
        k.KO(0,t,"𑆷");
      }
    }
    else if(k.KKM(e, 0x4000, 0x55)) {
      if(1){
        r=m=1;   // Line 76
        k.KO(0,t,"𑆲");
      }
    }
    else if(k.KKM(e, 0x4000, 0x56)) {
      if(1){
        r=m=1;   // Line 97
        k.KO(0,t,"𑆤");
      }
    }
    else if(k.KKM(e, 0x4000, 0x57)) {
      if(1){
        r=m=1;   // Line 81
        k.KO(0,t,"𑆽");
      }
    }
    else if(k.KKM(e, 0x4000, 0x58)) {
      if(1){
        r=m=1;   // Line 99
        k.KO(0,t,"𑆁");
      }
    }
    else if(k.KKM(e, 0x4000, 0x59)) {
      if(1){
        r=m=1;   // Line 77
        k.KO(0,t,"𑆧");
      }
    }
    else if(k.KKM(e, 0x4000, 0x5A)) {
      if(1){
        r=m=1;   // Line 98
        k.KO(0,t,"᳘");
      }
    }
    else if(k.KKM(e, 0x4010, 0xDB)) {
      if(1){
        r=m=1;   // Line 37
        k.KO(0,t,"𑆞");
      }
    }
    else if(k.KKM(e, 0x4010, 0xDC)) {
      if(1){
        r=m=1;   // Line 39
        k.KO(0,t,"ᳯ");
      }
    }
    else if(k.KKM(e, 0x4010, 0xDD)) {
      if(1){
        r=m=1;   // Line 38
        k.KO(0,t,"𑆚");
      }
    }
    else if(k.KKM(e, 0x4010, 0xC0)) {
      if(1){
        r=m=1;   // Line 67
        k.KO(0,t,"𑆃᳕");
      }
    }
    return r;
  };
}
