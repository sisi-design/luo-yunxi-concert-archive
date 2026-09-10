(function(){
  function esc(value){
    return String(value).replace(/[&<>\"]/g,function(char){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[char];
    });
  }

  function word(hanzi,pinyin,korean,meaning){
    return [hanzi,pinyin,korean,meaning];
  }

  function line(hanzi,pinyin,korean,translation,words){
    return {hanzi:hanzi,pinyin:pinyin,korean:korean,translation:translation,words:words};
  }

  var opening=[
    line("一晃神不知掉进","Yī huǎngshén bù zhī diào jìn","이 황선 부 즈 댜오 진","정신을 잠깐 놓친 사이 어디론가 빠져든 줄도 모르고",[
      word("一晃神","yī huǎngshén","이 황선","잠깐 정신을 놓치다"),word("不知","bù zhī","부 즈","알지 못하다"),word("掉进","diào jìn","댜오 진","빠져들다")
    ]),
    line("哪座小城小巷","Nǎ zuò xiǎochéng xiǎoxiàng","나 쭤 샤오청 샤오샹","어느 작은 도시의 골목에 들어왔을까",[
      word("哪","nǎ","나","어느, 어떤"),word("座","zuò","쭤","건물·산·도시를 세는 양사"),word("小城","xiǎochéng","샤오청","작은 도시"),word("小巷","xiǎoxiàng","샤오샹","작은 골목")
    ]),
    line("三更夜清风微凉","Sāngēng yè qīngfēng wēiliáng","산겅 예 칭펑 웨이량","한밤중 맑은 바람이 살짝 서늘하고",[
      word("三更夜","sāngēng yè","산겅 예","한밤중, 깊은 밤"),word("清风","qīngfēng","칭펑","맑고 산뜻한 바람"),word("微凉","wēiliáng","웨이량","조금 서늘하다")
    ]),
    line("吹灭一街声响","Chuī miè yì jiē shēngxiǎng","추이 미에 이 지에 성샹","거리 가득한 소리를 바람이 불어 잠재우고",[
      word("吹灭","chuī miè","추이 미에","불어 끄다"),word("一街","yì jiē","이 지에","거리 전체"),word("声响","shēngxiǎng","성샹","소리, 울림")
    ]),
    line("慢慢悠悠闲逛","Mànmàn yōuyōu xiánguàng","만만 여우여우 시앤광","느긋하고 천천히 거닐며",[
      word("慢慢悠悠","mànmàn yōuyōu","만만 여우여우","느리고 여유로운 모양"),word("闲逛","xiánguàng","시앤광","한가롭게 거닐다")
    ]),
    line("提灯轻轻摇晃","Tí dēng qīngqīng yáohuàng","티 덩 칭칭 야오황","등불을 들고 살며시 흔들어",[
      word("提灯","tí dēng","티 덩","등불을 들다"),word("轻轻","qīngqīng","칭칭","살며시, 가볍게"),word("摇晃","yáohuàng","야오황","흔들리다, 흔들다")
    ]),
    line("树影拂过老城墙的痒","Shùyǐng fúguò lǎo chéngqiáng de yǎng","수잉 푸궈 라오 청창 더 양","나무 그림자가 오래된 성벽을 스치며 간지럽혀",[
      word("树影","shùyǐng","수잉","나무 그림자"),word("拂过","fúguò","푸궈","스치고 지나가다"),word("老城墙","lǎo chéngqiáng","라오 청창","오래된 성벽"),word("的","de","더","수식어를 이어주는 조사"),word("痒","yǎng","양","가렵다, 간지러움")
    ])
  ];

  var refrain=[
    line("石板路落了白霜","Shíbǎnlù luò le báishuāng","스반루 뤄 러 바이솽","돌길 위에 하얀 서리가 내리고",[
      word("石板路","shíbǎnlù","스반루","돌을 깐 길"),word("落了","luò le","뤄 러","내렸다, 내려앉았다"),word("白霜","báishuāng","바이솽","하얀 서리")
    ]),
    line("闲花落满池塘","Xiánhuā luò mǎn chítáng","시앤화 뤄 만 츠탕","한가로이 핀 꽃이 연못 가득 떨어져",[
      word("闲花","xiánhuā","시앤화","한가로이 핀 들꽃"),word("落满","luò mǎn","뤄 만","가득 떨어지다"),word("池塘","chítáng","츠탕","연못")
    ]),
    line("思念如花间月光","Sīniàn rú huājiān yuèguāng","쓰니앤 루 화지앤 위에광","그리움은 꽃 사이의 달빛처럼",[
      word("思念","sīniàn","쓰니앤","그리워하다, 그리움"),word("如","rú","루","~와 같다"),word("花间","huājiān","화지앤","꽃 사이"),word("月光","yuèguāng","위에광","달빛")
    ]),
    line("落在谁的心上","Luò zài shéi de xīnshàng","뤄 짜이 쉐이 더 신상","누구의 마음 위에 내려앉을까",[
      word("落在","luò zài","뤄 짜이","~에 내려앉다"),word("谁","shéi","쉐이","누구"),word("的","de","더","~의"),word("心上","xīnshàng","신상","마음속, 마음 위")
    ]),
    line("鸟在树梢 好半晌","Niǎo zài shùshāo hǎo bànshǎng","냐오 짜이 수사오 하오 반상","새는 나뭇가지 끝에 한참을 머물고",[
      word("鸟","niǎo","냐오","새"),word("在","zài","짜이","~에 있다"),word("树梢","shùshāo","수사오","나뭇가지 끝"),word("好半晌","hǎo bànshǎng","하오 반상","꽤 오랫동안, 한참")
    ]),
    line("不忙人间一趟","Bù máng rénjiān yí tàng","부 망 런지앤 이 탕","인간 세상 한 번 다녀가는 길, 서두르지 않아",[
      word("不忙","bù máng","부 망","서두르지 않다"),word("人间","rénjiān","런지앤","인간 세상"),word("一趟","yí tàng","이 탕","한 차례, 한 번의 여정")
    ]),
    line("听风吹落 柳花香","Tīng fēng chuīluò liǔhuā xiāng","팅 펑 추이뤄 리우화 샹","바람이 버들꽃 향기를 불어 흩뜨리는 소리를 듣고",[
      word("听","tīng","팅","듣다"),word("风","fēng","펑","바람"),word("吹落","chuīluò","추이뤄","바람에 불려 떨어지다"),word("柳花香","liǔhuā xiāng","리우화 샹","버들꽃 향기")
    ]),
    line("平湖留诗三两行","Pínghú liú shī sān liǎng háng","핑후 리우 스 산 량 항","잔잔한 호수에 시 두어 줄을 남겨",[
      word("平湖","pínghú","핑후","잔잔한 호수"),word("留诗","liú shī","리우 스","시를 남기다"),word("三两行","sān liǎng háng","산 량 항","두어 줄")
    ]),
    line("落款深 提笔打湿谁眼眶","Luòkuǎn shēn, tíbǐ dǎshī shéi yǎnkuàng","뤄콴 선 티비 다스 쉐이 옌쾅","깊이 서명을 남기며 붓을 들자 누구의 눈시울이 젖을까",[
      word("落款","luòkuǎn","뤄콴","글·그림에 서명하다"),word("深","shēn","선","깊다"),word("提笔","tíbǐ","티비","붓을 들다, 글을 쓰기 시작하다"),word("打湿","dǎshī","다스","적시다"),word("谁","shéi","쉐이","누구"),word("眼眶","yǎnkuàng","옌쾅","눈시울, 눈언저리")
    ]),
    line("若是轻轻一眨眼","Ruòshì qīngqīng yì zhǎyǎn","뤄스 칭칭 이 자옌","살며시 눈을 한 번 깜박이면",[
      word("若是","ruòshì","뤄스","만약 ~라면"),word("轻轻","qīngqīng","칭칭","살며시"),word("一眨眼","yì zhǎyǎn","이 자옌","눈을 한 번 깜박이다; 눈 깜짝할 사이")
    ]),
    line("回头时就寻不见","Huítóu shí jiù xún bú jiàn","후이터우 스 지우 쉰 부 지앤","뒤돌아볼 때는 이미 찾을 수 없고",[
      word("回头","huítóu","후이터우","뒤돌아보다"),word("时","shí","스","~할 때"),word("就","jiù","지우","곧, 바로"),word("寻不见","xún bú jiàn","쉰 부 지앤","찾아도 보이지 않다")
    ]),
    line("独坐桥头 湖中看月亮","Dúzuò qiáotóu, húzhōng kàn yuèliang","두쭤 차오터우 후중 칸 위에량","홀로 다리 끝에 앉아 호수 속 달을 바라봐",[
      word("独坐","dúzuò","두쭤","홀로 앉다"),word("桥头","qiáotóu","차오터우","다리 끝, 다리 어귀"),word("湖中","húzhōng","후중","호수 안"),word("看","kàn","칸","보다"),word("月亮","yuèliang","위에량","달")
    ]),
    line("桥梁石像 对坐着相望","Qiáoliáng shíxiàng, duìzuòzhe xiāngwàng","차오량 스샹 뚜이쭤저 샹왕","다리의 석상처럼 마주 앉아 서로 바라보고",[
      word("桥梁","qiáoliáng","차오량","다리"),word("石像","shíxiàng","스샹","석상"),word("对坐着","duìzuòzhe","뚜이쭤저","마주 앉아 있다"),word("相望","xiāngwàng","샹왕","서로 바라보다")
    ]),
    line("杏花雨落下","Xìnghuā yǔ luòxià","싱화 위 뤄샤","살구꽃비가 내려",[
      word("杏花雨","xìnghuā yǔ","싱화 위","살구꽃이 비처럼 떨어지는 모습"),word("落下","luòxià","뤄샤","떨어지다, 내리다")
    ]),
    line("谁又在谁身旁","Shéi yòu zài shéi shēnpáng","쉐이 여우 짜이 쉐이 선팡","누가 또 누구의 곁에 있을까",[
      word("谁","shéi","쉐이","누구"),word("又","yòu","여우","또, 다시"),word("在","zài","짜이","~에 있다"),word("谁","shéi","쉐이","누구"),word("身旁","shēnpáng","선팡","곁, 몸 가까이")
    ]),
    line("人海茫茫捉迷藏","Rénhǎi mángmáng zhuō mícáng","런하이 망망 줘 미창","망망한 사람의 바다에서 숨바꼭질하고",[
      word("人海","rénhǎi","런하이","사람의 바다, 인파"),word("茫茫","mángmáng","망망","끝없이 넓고 아득한 모양"),word("捉迷藏","zhuō mícáng","줘 미창","숨바꼭질하다")
    ]),
    line("看花开又花落","Kàn huā kāi yòu huā luò","칸 화 카이 여우 화 뤄","꽃이 피고 또 지는 것을 바라보면",[
      word("看","kàn","칸","보다"),word("花开","huā kāi","화 카이","꽃이 피다"),word("又","yòu","여우","또"),word("花落","huā luò","화 뤄","꽃이 지다")
    ]),
    line("总有人赏","Zǒng yǒu rén shǎng","쭝 여우 런 상","언제나 그 풍경을 감상하는 사람이 있어",[
      word("总有","zǒng yǒu","쭝 여우","언제나 ~이 있다"),word("人","rén","런","사람"),word("赏","shǎng","상","감상하다, 즐기다")
    ])
  ];

  var outro=[
    line("高楼大厦 对坐着相望","Gāolóu dàshà, duìzuòzhe xiāngwàng","가오러우 다샤 뚜이쭤저 샹왕","높은 빌딩들이 마주 앉은 듯 서로 바라보고",[
      word("高楼大厦","gāolóu dàshà","가오러우 다샤","높은 빌딩과 큰 건물"),word("对坐着","duìzuòzhe","뚜이쭤저","마주 앉아 있다"),word("相望","xiāngwàng","샹왕","서로 바라보다")
    ]),
    line("春江月夜花","Chūnjiāng yuèyè huā","춘지앙 위에예 화","봄 강과 달밤과 꽃",[
      word("春江","chūnjiāng","춘지앙","봄날의 강"),word("月夜","yuèyè","위에예","달 밝은 밤"),word("花","huā","화","꽃")
    ]),
    line("不过是梦一场","Búguò shì mèng yì chǎng","부궈 스 멍 이 창","그저 한바탕 꿈일 뿐",[
      word("不过","búguò","부궈","그저 ~일 뿐"),word("是","shì","스","~이다"),word("梦","mèng","멍","꿈"),word("一场","yì chǎng","이 창","한바탕, 한 차례")
    ]),
    line("路过人间好半晌","Lùguò rénjiān hǎo bànshǎng","루궈 런지앤 하오 반상","인간 세상을 한참 스쳐 지나며",[
      word("路过","lùguò","루궈","지나가다, 스쳐 가다"),word("人间","rénjiān","런지앤","인간 세상"),word("好半晌","hǎo bànshǎng","하오 반상","꽤 오랫동안, 한참")
    ]),
    line("看人来又人往","Kàn rén lái yòu rén wǎng","칸 런 라이 여우 런 왕","사람들이 오고 또 가는 것을 바라보니",[
      word("看","kàn","칸","보다"),word("人来","rén lái","런 라이","사람이 오다"),word("又","yòu","여우","또"),word("人往","rén wǎng","런 왕","사람이 가다")
    ]),
    line("似花落一场","Sì huā luò yì chǎng","쓰 화 뤄 이 창","한바탕 꽃이 지는 것 같아",[
      word("似","sì","쓰","~와 같다"),word("花落","huā luò","화 뤄","꽃이 지다"),word("一场","yì chǎng","이 창","한 차례, 한바탕")
    ])
  ];

  function renderLine(item){
    var chips=item.words.map(function(entry){
      return '<span class="chip"><b class="hw">'+esc(entry[0])+'</b><span class="cpy">'+esc(entry[1])+'</span><span class="cmn">'+esc(entry[2])+' · '+esc(entry[3])+'</span></span>';
    }).join('');
    return '<div class="line"><div class="zh">'+esc(item.hanzi)+'</div><div class="pron py">'+esc(item.pinyin)+'</div><div class="pron kp">'+esc(item.korean)+'</div><div class="kr">'+esc(item.translation)+'</div><div class="chips">'+chips+'</div></div>';
  }

  function renderSection(label,lines,note){
    return '<section class="sec"><div class="seclab"><span>'+esc(label)+'</span>'+(note?'<span class="snote">'+esc(note)+'</span>':'')+'</div>'+lines.map(renderLine).join('')+'</section>';
  }

  document.addEventListener('DOMContentLoaded',function(){
    if(document.getElementById('yemeng-chunyou')) return;
    var article=document.createElement('article');
    article.className='song';
    article.id='yemeng-chunyou';
    article.innerHTML='<header class="shead"><div class="stitle"><h2 lang="zh">夜梦春游</h2><div class="skor">예멍 춘여우</div></div><div class="smean">밤꿈 속 봄나들이<span class="seng"> · A Spring Outing in a Night Dream</span></div><p class="sdesc">깊은 밤 등불을 들고 오래된 골목과 돌길을 걷는 몽환적인 봄나들이. 꽃과 달빛, 연못과 다리를 지나며 잠깐 스친 인연과 흘러가는 인간 세상을 한바탕 꿈처럼 바라보는 곡.</p><div class="meta"><span class="mchip"><span class="ml">노래</span>罗云熙 · 라운희</span><span class="mchip"><span class="ml">발표</span>2026.07.20</span><span class="mchip"><span class="ml">수록</span>《小小的我》</span></div></header>'+renderSection('Verse 01',opening,'꿈속 골목으로')+renderSection('Refrain 01',refrain,'꽃과 달빛 사이')+renderSection('Refrain 02',refrain,'반복')+renderSection('Outro',outro,'꿈에서 인간 세상으로');

    var footer=document.querySelector('footer');
    footer.parentNode.insertBefore(article,footer);
    var rail=document.querySelector('.rail-in');
    var link=document.createElement('a');
    link.className='rchip';
    link.href='#yemeng-chunyou';
    link.innerHTML='<b>夜梦春游</b><span>밤꿈 속 봄나들이</span>';
    rail.appendChild(link);
    if(location.hash==='#yemeng-chunyou') setTimeout(function(){article.scrollIntoView();},0);
  });
})();
