const lessons = [
  {stage:'입 열기',title:'처음 만난 팬에게 인사하기',scene:'팬 인사',h:'你好！很高兴认识你。',p:'Nǐ hǎo! Hěn gāoxìng rènshi nǐ.',k:'안녕하세요! 만나서 정말 반가워요.',tip:'‘hǎo’는 낮게 내려갔다 올려 말해요.'},
  {stage:'입 열기',title:'한국에서 왔다고 말하기',scene:'팬 인사',h:'我是从韩国来的。',p:'Wǒ shì cóng Hánguó lái de.',k:'저는 한국에서 왔어요.',tip:'wǒ는 “워”에 가깝게, 3성으로 말해요.'},
  {stage:'입 열기',title:'중국어가 서툴다고 알리기',scene:'기본',h:'我的中文不太好。',p:'Wǒ de Zhōngwén bú tài hǎo.',k:'제 중국어는 그리 좋지 않아요.',tip:'不는 4성 앞에서 bú(2성)로 바뀌어요.'},
  {stage:'입 열기',title:'천천히 부탁하기',scene:'기본',h:'请说慢一点。',p:'Qǐng shuō màn yìdiǎn.',k:'조금 천천히 말씀해 주세요.',tip:'못 알아들었을 때 가장 먼저 꺼낼 문장이에요.'},
  {stage:'식당 생존',title:'인원과 자리 말하기',scene:'식당',h:'两位，有座位吗？',p:'Liǎng wèi, yǒu zuòwèi ma?',k:'두 명인데, 자리 있나요?',tip:'사람 수에는 보통 位(wèi)를 써요.'},
  {stage:'식당 생존',title:'추천 메뉴 묻기',scene:'식당',h:'有什么推荐的吗？',p:'Yǒu shénme tuījiàn de ma?',k:'추천할 만한 게 있나요?',tip:'메뉴판을 가리키며 말해도 충분해요.'},
  {stage:'식당 생존',title:'주문 시작하기',scene:'식당',h:'我要这个。',p:'Wǒ yào zhège.',k:'이걸로 주세요.',tip:'사진이나 메뉴를 가리키며 말하면 아주 자연스러워요.'},
  {stage:'식당 생존',title:'맵기 조절하기',scene:'식당',h:'请做得不太辣。',p:'Qǐng zuò de bú tài là.',k:'너무 맵지 않게 해 주세요.',tip:'完全不辣는 “전혀 맵지 않게”라는 뜻이에요.'},
  {stage:'식당 생존',title:'직원 말 알아듣기',scene:'식당',h:'在这里吃还是带走？',p:'Zài zhèlǐ chī háishi dàizǒu?',k:'여기서 드시나요, 포장인가요?',tip:'여기서 먹으면 在这里吃라고 답해요.'},
  {stage:'식당 생존',title:'계산 요청하기',scene:'식당',h:'麻烦买单。',p:'Máfan mǎidān.',k:'계산 부탁드려요.',tip:'麻烦은 부탁을 부드럽게 만드는 표현이에요.'},
  {stage:'팬 대화',title:'같은 팬인지 묻기',scene:'팬 대화',h:'你也是罗云熙的粉丝吗？',p:'Nǐ yě shì Luó Yúnxī de fěnsī ma?',k:'당신도 라운희 팬이에요?',tip:'‘팬’은 중국어로 粉丝(fěnsī)라고 해요.'},
  {stage:'팬 대화',title:'팬이 된 시기 말하기',scene:'팬 대화',h:'我喜欢他很久了。',p:'Wǒ xǐhuan tā hěn jiǔ le.',k:'저는 그를 좋아한 지 오래됐어요.',tip:'喜欢의 huan은 가볍고 짧게 말해요.'},
  {stage:'팬 대화',title:'최애 작품 묻기',scene:'팬 대화',h:'你最喜欢他的哪部作品？',p:'Nǐ zuì xǐhuan tā de nǎ bù zuòpǐn?',k:'그의 어떤 작품을 가장 좋아하세요?',tip:'작품을 셀 때 部(bù)를 써요.'},
  {stage:'팬 대화',title:'내 최애 말하기',scene:'팬 대화',h:'我最喜欢《水龙吟》。',p:'Wǒ zuì xǐhuan “Shuǐ Lóng Yín”.',k:'저는 《수룡음》을 가장 좋아해요.',tip:'작품명만 내가 좋아하는 작품으로 바꿔 말해보세요.'},
  {stage:'팬 대화',title:'공연 소감 나누기',scene:'팬 대화',h:'今天的舞台太精彩了！',p:'Jīntiān de wǔtái tài jīngcǎi le!',k:'오늘 무대 정말 멋졌어요!',tip:'太…了는 “정말 너무 …하다”라는 감탄이에요.'},
  {stage:'친해지기',title:'사진 부탁하기',scene:'팬 대화',h:'我们可以一起拍照吗？',p:'Wǒmen kěyǐ yìqǐ pāizhào ma?',k:'우리 같이 사진 찍어도 될까요?',tip:'可以吗？는 허락을 구하는 만능 표현이에요.'},
  {stage:'친해지기',title:'연락처 교환하기',scene:'팬 대화',h:'可以加你的微信吗？',p:'Kěyǐ jiā nǐ de Wēixìn ma?',k:'위챗 추가해도 될까요?',tip:'加微信는 “위챗 친구를 추가하다”예요.'},
  {stage:'친해지기',title:'다시 만나자고 말하기',scene:'팬 대화',h:'下次有机会再见！',p:'Xià cì yǒu jīhuì zàijiàn!',k:'다음에 기회가 되면 또 만나요!',tip:'헤어질 때 따뜻하고 부담 없이 쓸 수 있어요.'},
  {stage:'베이징 실전',title:'길을 물어보기',scene:'이동',h:'请问，地铁站怎么走？',p:'Qǐngwèn, dìtiězhàn zěnme zǒu?',k:'실례합니다, 지하철역은 어떻게 가나요?',tip:'请问으로 시작하면 정중한 질문이 돼요.'},
  {stage:'베이징 실전',title:'마지막 종합 리허설',scene:'실전',h:'不好意思，我没听懂，可以再说一遍吗？',p:'Bù hǎoyìsi, wǒ méi tīng dǒng, kěyǐ zài shuō yí biàn ma?',k:'죄송하지만 못 알아들었어요. 한 번 더 말씀해 주실래요?',tip:'당황했을 때 이 한 문장만 기억하세요.'}
];

const extraPhrases = [
  ['기본','谢谢！','Xièxie!','감사합니다!'],['기본','没关系。','Méi guānxi.','괜찮아요.'],['기본','我听懂了。','Wǒ tīng dǒng le.','알아들었어요.'],['기본','可以打字给我看吗？','Kěyǐ dǎzì gěi wǒ kàn ma?','글자로 써서 보여주실 수 있나요?'],
  ['식당','请给我看一下菜单。','Qǐng gěi wǒ kàn yíxià càidān.','메뉴 좀 보여주세요.'],['식당','这个里面有花生吗？','Zhège lǐmiàn yǒu huāshēng ma?','이 안에 땅콩이 있나요?'],['식당','我要一瓶水。','Wǒ yào yì píng shuǐ.','물 한 병 주세요.'],['식당','很好吃！','Hěn hǎochī!','정말 맛있어요!'],['식당','可以用支付宝吗？','Kěyǐ yòng Zhīfùbǎo ma?','알리페이로 결제할 수 있나요?'],
  ['팬 대화','你从哪里来的？','Nǐ cóng nǎlǐ lái de?','어디에서 오셨어요?'],['팬 대화','我第一次来北京。','Wǒ dì-yī cì lái Běijīng.','저는 베이징에 처음 왔어요.'],['팬 대화','你的应援物真漂亮！','Nǐ de yìngyuánwù zhēn piàoliang!','응원 굿즈가 정말 예뻐요!'],['팬 대화','我也这么觉得。','Wǒ yě zhème juéde.','저도 그렇게 생각해요.'],['팬 대화','认识你很开心！','Rènshi nǐ hěn kāixīn!','알게 되어 기뻐요!'],
  ['이동','我要去这个地址。','Wǒ yào qù zhège dìzhǐ.','이 주소로 가고 싶어요.'],['이동','还有多远？','Hái yǒu duō yuǎn?','얼마나 더 가야 하나요?'],['이동','我迷路了。','Wǒ mílù le.','길을 잃었어요.']
];

const roleplays = {
  '팬 첫인사':[
    ['你好！你也是罗云熙的粉丝吗？','Nǐ hǎo! Nǐ yě shì Luó Yúnxī de fěnsī ma?','안녕하세요! 당신도 라운희 팬인가요?','是的，我从韩国来的。','Shì de, wǒ cóng Hánguó lái de.','네, 저는 한국에서 왔어요.'],
    ['你最喜欢他的哪部作品？','Nǐ zuì xǐhuan tā de nǎ bù zuòpǐn?','어떤 작품을 가장 좋아하세요?','我最喜欢《水龙吟》。你呢？','Wǒ zuì xǐhuan “Shuǐ Lóng Yín”. Nǐ ne?','저는 《수룡음》이 가장 좋아요. 당신은요?'],
    ['认识你很开心！','Rènshi nǐ hěn kāixīn!','알게 되어 기뻐요!','我也是！可以一起拍照吗？','Wǒ yě shì! Kěyǐ yìqǐ pāizhào ma?','저도요! 같이 사진 찍어도 될까요?']
  ],
  '식당 주문':[
    ['您好，几位？','Nín hǎo, jǐ wèi?','안녕하세요, 몇 분이세요?','两位。','Liǎng wèi.','두 명이에요.'],
    ['想吃点儿什么？','Xiǎng chī diǎnr shénme?','무엇을 드시겠어요?','我要这个，请做得不太辣。','Wǒ yào zhège, qǐng zuò de bú tài là.','이걸로 주세요. 너무 맵지 않게 해주세요.'],
    ['还需要别的吗？','Hái xūyào bié de ma?','또 필요한 건 없으세요?','不用了，谢谢。','Bú yòng le, xièxie.','괜찮습니다, 감사합니다.']
  ],
  '못 들었을 때':[
    ['您的手机号是多少？','Nín de shǒujīhào shì duōshao?','휴대전화 번호가 어떻게 되세요?','不好意思，我没听懂。','Bù hǎoyìsi, wǒ méi tīng dǒng.','죄송하지만 못 알아들었어요.'],
    ['我再说一遍。','Wǒ zài shuō yí biàn.','한 번 더 말할게요.','请说慢一点。','Qǐng shuō màn yìdiǎn.','조금 천천히 말씀해 주세요.'],
    ['这样可以吗？','Zhèyàng kěyǐ ma?','이렇게 하면 될까요?','可以，谢谢！','Kěyǐ, xièxie!','네, 감사합니다!']
  ],
  '작품 이야기':[
    ['你是从哪部剧开始喜欢他的？','Nǐ shì cóng nǎ bù jù kāishǐ xǐhuan tā de?','어떤 드라마를 계기로 그를 좋아하게 됐어요?','我是看了《香蜜沉沉烬如霜》以后开始喜欢他的。','Wǒ shì kàn le “Xiāngmì Chénchén Jìn Rú Shuāng” yǐhòu kāishǐ xǐhuan tā de.','저는 《향밀침침신여상》을 본 뒤부터 좋아하게 됐어요.'],
    ['你觉得他演得最好的角色是谁？','Nǐ juéde tā yǎn de zuì hǎo de juésè shì shéi?','그가 가장 잘 연기한 배역은 누구라고 생각해요?','很难选，每个角色都有不同的魅力。','Hěn nán xuǎn, měi ge juésè dōu yǒu bùtóng de mèilì.','고르기 어려워요. 역할마다 다른 매력이 있어요.'],
    ['对，我也这么觉得！','Duì, wǒ yě zhème juéde!','맞아요, 저도 그렇게 생각해요!','以后有新作品，我们可以一起聊。','Yǐhòu yǒu xīn zuòpǐn, wǒmen kěyǐ yìqǐ liáo.','나중에 새 작품이 나오면 우리 같이 이야기해요.']
  ],
  '공연 후 대화':[
    ['你觉得今天的演唱会怎么样？','Nǐ juéde jīntiān de yǎnchànghuì zěnmeyàng?','오늘 콘서트 어땠어요?','特别感动，现场比视频里更精彩。','Tèbié gǎndòng, xiànchǎng bǐ shìpín lǐ gèng jīngcǎi.','정말 감동적이었어요. 현장이 영상보다 더 멋졌어요.'],
    ['你最喜欢哪个舞台？','Nǐ zuì xǐhuan nǎ ge wǔtái?','어떤 무대가 가장 좋았어요?','我最喜欢《星星之火》，听到前奏就想哭。','Wǒ zuì xǐhuan “Xīngxīng Zhī Huǒ”, tīngdào qiánzòu jiù xiǎng kū.','저는 《성성지화》가 가장 좋았어요. 전주를 듣자마자 울컥했어요.'],
    ['我也是，大家一起唱的时候太感人了。','Wǒ yě shì, dàjiā yìqǐ chàng de shíhou tài gǎnrén le.','저도요. 모두 함께 부를 때 정말 감동적이었어요.','下次如果还有机会，我们再一起看吧！','Xià cì rúguǒ hái yǒu jīhuì, wǒmen zài yìqǐ kàn ba!','다음에 또 기회가 있으면 우리 같이 봐요!']
  ],
  '굿즈와 일정':[
    ['你的应援物在哪里买的？真的很好看。','Nǐ de yìngyuánwù zài nǎlǐ mǎi de? Zhēnde hěn hǎokàn.','응원 굿즈는 어디서 샀어요? 정말 예뻐요.','这是朋友送给我的，我也很喜欢。','Zhè shì péngyou sòng gěi wǒ de, wǒ yě hěn xǐhuan.','친구가 선물해 줬어요. 저도 정말 마음에 들어요.'],
    ['明天你有什么安排？','Míngtiān nǐ yǒu shénme ānpái?','내일은 어떤 일정이 있어요?','我想去附近看看，也想买一些纪念品。','Wǒ xiǎng qù fùjìn kànkan, yě xiǎng mǎi yìxiē jìniànpǐn.','근처를 구경하고 기념품도 조금 사고 싶어요.'],
    ['我们明天也去，要不要一起？','Wǒmen míngtiān yě qù, yào bu yào yìqǐ?','우리도 내일 가는데 같이 갈래요?','好啊！但是我的中文不太好，请多关照。','Hǎo a! Dànshì wǒ de Zhōngwén bú tài hǎo, qǐng duō guānzhào.','좋아요! 다만 제 중국어가 서툴러요. 잘 부탁드려요.']
  ]
};

const mcScripts=[
  {s:'오프닝 인사와 관객 호응',h:'大家晚上好！欢迎来到今天的演唱会。你们开心吗？',p:'Dàjiā wǎnshang hǎo! Huānyíng láidào jīntiān de yǎnchànghuì. Nǐmen kāixīn ma?',k:'여러분, 안녕하세요! 오늘 콘서트에 오신 것을 환영합니다. 즐거우신가요?',w:['大家 모두','欢迎 환영하다','开心 즐겁다']},
  {s:'멀리서 온 팬에게 감사',h:'我知道有很多朋友从很远的地方来到这里，真的非常感谢你们。',p:'Wǒ zhīdào yǒu hěn duō péngyou cóng hěn yuǎn de dìfang láidào zhèlǐ, zhēnde fēicháng gǎnxiè nǐmen.',k:'많은 분이 먼 곳에서 여기까지 오신 것을 알아요. 정말 진심으로 감사드립니다.',w:['很远 아주 멀다','来到 오다','感谢 감사하다']},
  {s:'처음 온 관객에게 질문',h:'今天第一次来看我的朋友，可以举一下手吗？让我看看你们。',p:'Jīntiān dì-yī cì lái kàn wǒ de péngyou, kěyǐ jǔ yíxià shǒu ma? Ràng wǒ kànkan nǐmen.',k:'오늘 저를 처음 보러 오신 분은 손을 한번 들어주시겠어요? 여러분을 볼게요.',w:['第一次 처음','举手 손을 들다','看看 보다']},
  {s:'다음 곡 소개',h:'接下来这首歌对我来说很特别，希望你们会喜欢。',p:'Jiēxiàlái zhè shǒu gē duì wǒ lái shuō hěn tèbié, xīwàng nǐmen huì xǐhuan.',k:'다음 노래는 제게 무척 특별합니다. 여러분도 좋아해 주셨으면 해요.',w:['接下来 다음으로','这首歌 이 노래','希望 바라다']},
  {s:'함께 노래하도록 유도',h:'这首歌你们都会唱吗？会唱的话，就跟我一起唱吧！',p:'Zhè shǒu gē nǐmen dōu huì chàng ma? Huì chàng de huà, jiù gēn wǒ yìqǐ chàng ba!',k:'이 노래 여러분 모두 부를 수 있나요? 부를 수 있다면 저와 함께 불러요!',w:['会唱 부를 줄 알다','一起 함께','唱吧 부릅시다']},
  {s:'공연 준비와 팬의 응원',h:'准备这次演唱会真的不容易，但是看到你们，我觉得一切都值得。',p:'Zhǔnbèi zhè cì yǎnchànghuì zhēnde bù róngyì, dànshì kàndào nǐmen, wǒ juéde yíqiè dōu zhíde.',k:'이번 콘서트를 준비하는 일이 정말 쉽지 않았지만, 여러분을 보니 모든 것이 가치 있다고 느껴요.',w:['准备 준비하다','不容易 쉽지 않다','值得 가치 있다']},
  {s:'앙코르와 체력 묻기',h:'大家累不累？还想不想再听一首？你们的声音在哪里？',p:'Dàjiā lèi bu lèi? Hái xiǎng bu xiǎng zài tīng yì shǒu? Nǐmen de shēngyīn zài nǎlǐ?',k:'여러분 힘드세요? 한 곡 더 듣고 싶으세요? 여러분의 목소리는 어디 있나요?',w:['累 피곤하다','再 한 번 더','声音 목소리']},
  {s:'마지막 인사와 귀가 안내',h:'谢谢你们陪我度过这么美好的夜晚。回去的路上注意安全，我们下次再见！',p:'Xièxie nǐmen péi wǒ dùguò zhème měihǎo de yèwǎn. Huíqu de lùshang zhùyì ānquán, wǒmen xià cì zàijiàn!',k:'이렇게 아름다운 밤을 저와 함께해 주셔서 감사합니다. 돌아가는 길 안전에 유의하시고, 다음에 또 만나요!',w:['陪 함께하다','注意安全 안전에 유의하다','下次 다음번']}
];

const featuredSongs=[
  {rank:1,id:'xingxing-zhihuo',title:'星星之火',reading:'Xīngxīng zhī huǒ · 싱싱 즈 훠',meaning:'작은 불씨 · 팬과 가수가 서로에게 건네는 약속',parts:['Verse 01','Pre-Chorus','Chorus','Verse 02','Pre-Chorus 02','Chorus 02','처음부터 끝까지']},
  {rank:2,id:'dengfeng-ting',title:'等风停',reading:'Děng fēng tíng · 덩 펑 팅',meaning:'바람이 멎기를 기다리며 · 다정한 송별과 응원',parts:['Verse 01','Verse 02','Pre-Chorus','Chorus 01','Pre-Chorus 02','Chorus 02','Outro','처음부터 끝까지']}
];
const catalogSeed=[
  ['心上悬','Xīn shàng xuán','마음에 걸린 달','xinshang-xuan'],['要不然我们就这样一万年','Yàobùrán wǒmen jiù zhèyàng yí wàn nián','차라리 우리 이대로 만 년을','yaoburan-yiwannian'],['一往','Yì wǎng','오직 앞으로','yiwang'],['骊龙吟','Lí lóng yín','검은 용의 노래','lilong-yin'],['不染','Bù rǎn','물들지 않다','buran'],['云知道','Yún zhīdào','구름은 알고 있어','yun-zhidao'],['不沐春风不遇你','Bù mù chūnfēng bù yù nǐ','봄바람을 맞지 않으면 너를 만나지 못해','bumu-chunfeng'],['与你','Yǔ nǐ','너와 함께','yuni'],['最浪漫的事','Zuì làngmàn de shì','가장 낭만적인 일','zui-langman'],['游熙时间','Yóuxī shíjiān','유희 시간','youxi-shijian'],['旅人','Lǚrén','여행자','wayfarer'],['夜梦春游','Yè mèng chūnyóu','밤꿈 속 봄나들이','yemeng-chunyou'],['三生三世','Sān shēng sān shì','삼생삼세','sansheng-sanshi'],['会呼吸的痛','Huì hūxī de tòng','숨 쉴 때마다 아픈 고통','huixide-tong']
];
const genericParts=['첫 구간','두 번째 구간','핵심 후렴','후반부','처음부터 끝까지'];
const songCatalog=[...featuredSongs,...catalogSeed.map(x=>({title:x[0],reading:x[1],meaning:x[2],id:x[3],parts:genericParts}))];

const state = JSON.parse(localStorage.getItem('xiaoliao-state') || '{}');
state.start ||= new Date().toISOString().slice(0,10); state.tasks ||= {}; state.favorites ||= []; state.songParts ||= {}; state.selectedSongs ||= ['星星之火','等风停']; state.mcDone ||= []; if(!('openSong' in state))state.openSong='星星之火'; state.departure ||= '2027-02-01';
const todayKey = new Date().toISOString().slice(0,10);
const elapsed = Math.max(0, Math.floor((new Date(todayKey)-new Date(state.start))/86400000));
const weekIndex = Math.min(19, Math.floor(elapsed/7));
const lesson = lessons[weekIndex];
const dailyModes = ['새 문장 익히기','소리만 듣고 맞히기','짧게 대답하기','콘서트 멘트 듣기','상황 역할극','노래 한 구간 외우기','일주일 복습'];

function save(){ localStorage.setItem('xiaoliao-state', JSON.stringify(state)); }
function speak(text, rate=.82){
  if(!('speechSynthesis' in window)) return toast('이 브라우저는 음성 재생을 지원하지 않아요.');
  speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text); u.lang='zh-CN'; u.rate=rate;
  const voices=speechSynthesis.getVoices();
  const femaleNames=/Xiaoxiao|Tingting|Meijia|Sinji|Yating|HiuMaan|Lili|Shanshan|Yaoyao|Hanhan|Huihui|Kangkang|女性|女声/i;
  u.voice=voices.find(v=>/zh|cmn/i.test(v.lang)&&femaleNames.test(v.name))||voices.find(v=>femaleNames.test(v.name))||voices.find(v=>/zh-CN|cmn-Hans/i.test(v.lang))||null;
  speechSynthesis.speak(u);
}
function toast(msg){const el=document.querySelector('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('show'),1800)}
function ddays(){return Math.ceil((new Date(state.departure+'T12:00:00')-new Date())/86400000)}

function renderToday(){
  const currentTasks=state.tasks[todayKey]||[]; const dayNo=elapsed+1; const done=currentTasks.length;
  document.querySelector('#dayLabel').textContent=`DAY ${dayNo} · ${dailyModes[elapsed%7]}`;
  document.querySelector('#greeting').innerHTML=`${lesson.stage}, 오늘은<br><em>${lesson.title}</em>`;
  document.querySelector('#dDay').textContent=ddays()>=0?`D−${ddays()}`:'여행 중';
  ['scene','h','p','k','tip'].forEach(key=>document.querySelector({scene:'#sceneTag',h:'#hanzi',p:'#pinyin',k:'#korean',tip:'#tip'}[key]).textContent=lesson[key]);
  document.querySelector('#progressText').textContent=`${done} / 4`; document.querySelector('#progressBar').style.width=`${done*25}%`;
  const tasks=[['听','귀 열기','중국어만 3번 듣기'],['说','입 풀기','병음을 보며 5번 따라 하기'],['答','바로 답하기','뜻을 가리고 3초 안에 말하기'],['用','내 말로 쓰기','오늘 한 번 실제 상황을 상상해 말하기']];
  document.querySelector('#taskList').innerHTML=tasks.map((t,i)=>`<button class="task ${currentTasks.includes(i)?'done':''}" data-task="${i}"><span class="task-icon">${t[0]}</span><span><strong>${t[1]}</strong><small>${t[2]}</small></span><span class="task-check">${currentTasks.includes(i)?'✓':''}</span></button>`).join('');
  document.querySelectorAll('[data-task]').forEach(b=>b.onclick=()=>{const i=+b.dataset.task;const arr=state.tasks[todayKey]||[];state.tasks[todayKey]=arr.includes(i)?arr.filter(x=>x!==i):[...arr,i];save();renderToday();if(state.tasks[todayKey].length===4)toast('今天完成！오늘 학습 완료 🎉')});
  const fav=state.favorites.includes(lesson.h);document.querySelector('.favorite-btn').classList.toggle('saved',fav);document.querySelector('.favorite-btn').textContent=fav?'♥':'♡';
  updateStats();
}

document.querySelector('#speakMain').onclick=()=>speak(lesson.h);
document.querySelector('#meaningToggle').onclick=e=>{const m=document.querySelector('#meaning');m.hidden=!m.hidden;e.target.textContent=m.hidden?'뜻 보기':'뜻 숨기기'};
document.querySelector('.favorite-btn').onclick=()=>{state.favorites=state.favorites.includes(lesson.h)?state.favorites.filter(x=>x!==lesson.h):[...state.favorites,lesson.h];save();renderToday();};

let scenario=Object.keys(roleplays)[0], roleIndex=0, revealed=false;
function renderRoleplay(){
  document.querySelector('#scenarioTabs').innerHTML=Object.keys(roleplays).map(s=>`<button class="${s===scenario?'active':''}" data-scenario="${s}">${s}</button>`).join('');
  const r=roleplays[scenario][roleIndex]; document.querySelector('#roleStep').textContent=`${roleIndex+1} / ${roleplays[scenario].length}`; document.querySelector('#partnerRole').textContent=scenario==='식당 주문'?'식당 직원':'중국 팬';
  document.querySelector('#promptHanzi').textContent=r[0];document.querySelector('#promptPinyin').textContent=revealed?`${r[1]} · ${r[2]}`:'먼저 소리만 들어보세요';
  document.querySelector('#revealReply').innerHTML=revealed?`<small>나</small><strong>${r[3]}</strong><span>${r[4]}<br>${r[5]}</span>`:'<small>나</small><strong>눌러서 답 보기</strong><span>먼저 혼자 말해보세요</span>';
  document.querySelectorAll('[data-scenario]').forEach(b=>b.onclick=()=>{scenario=b.dataset.scenario;roleIndex=0;revealed=false;renderRoleplay();speak(roleplays[scenario][0][0])});
}
document.querySelector('#replayPrompt').onclick=()=>{const r=roleplays[scenario][roleIndex];speak(r[0],.75);revealed=true;renderRoleplay()};
document.querySelector('#revealReply').onclick=()=>{revealed=true;renderRoleplay()};
document.querySelector('#speakReply').onclick=()=>{const r=roleplays[scenario][roleIndex];revealed=true;renderRoleplay();speak(r[3],.78)};
document.querySelector('#nextRole').onclick=()=>{roleIndex=(roleIndex+1)%roleplays[scenario].length;revealed=false;renderRoleplay();setTimeout(()=>speak(roleplays[scenario][roleIndex][0],.75),200)};

let mcIndex=0,mcRevealed=false;
function renderMC(){const m=mcScripts[mcIndex],done=state.mcDone.includes(mcIndex);document.querySelector('#mcNumber').textContent=`예상 MC ${String(mcIndex+1).padStart(2,'0')} · ${mcIndex+1}/${mcScripts.length}`;document.querySelector('#mcProgress').textContent=`${state.mcDone.length} / ${mcScripts.length} 이해`;document.querySelector('#mcSituation').textContent=m.s;document.querySelector('#mcHanzi').textContent=m.h;document.querySelector('#mcPinyin').textContent=m.p;document.querySelector('#mcKorean').textContent=m.k;document.querySelector('#mcKeywords').innerHTML=m.w.map(x=>`<span>${x}</span>`).join('');document.querySelector('#mcScript').classList.toggle('masked',!mcRevealed);document.querySelector('#mcReveal').textContent=mcRevealed?'스크립트 가리기':'스크립트 보기';const btn=document.querySelector('#mcDone');btn.classList.toggle('done',done);btn.textContent=done?'이해 완료 ✓':'핵심이 들렸어요 ✓'}
document.querySelector('#mcSlow').onclick=()=>speak(mcScripts[mcIndex].h,.68);
document.querySelector('#mcNormal').onclick=()=>speak(mcScripts[mcIndex].h,.96);
document.querySelector('#mcReveal').onclick=()=>{mcRevealed=!mcRevealed;renderMC()};
document.querySelector('#mcPrev').onclick=()=>{mcIndex=(mcIndex-1+mcScripts.length)%mcScripts.length;mcRevealed=false;renderMC()};
document.querySelector('#mcNext').onclick=()=>{mcIndex=(mcIndex+1)%mcScripts.length;mcRevealed=false;renderMC()};
document.querySelector('#mcDone').onclick=()=>{state.mcDone=state.mcDone.includes(mcIndex)?state.mcDone.filter(x=>x!==mcIndex):[...state.mcDone,mcIndex];save();renderMC();toast(state.mcDone.includes(mcIndex)?'이 멘트의 핵심을 익혔어요':'이해 체크를 해제했어요')};

const allPhrases=[...lessons.map(x=>[x.scene,x.h,x.p,x.k]),...extraPhrases];let phraseFilter='전체';
function renderPhrases(){
  const filters=['전체','즐겨찾기','기본','식당','팬 대화','이동']; document.querySelector('#phraseFilters').innerHTML=filters.map(f=>`<button class="${f===phraseFilter?'active':''}" data-filter="${f}">${f}</button>`).join('');
  const q=document.querySelector('#phraseSearch').value.trim().toLowerCase(); const visible=allPhrases.filter(x=>(phraseFilter==='전체'||(phraseFilter==='즐겨찾기'?state.favorites.includes(x[1]):x[0]===phraseFilter))&&x.join(' ').toLowerCase().includes(q));
  document.querySelector('#phraseList').innerHTML=visible.map((x,i)=>`<article class="phrase-item"><div><strong>${x[1]}</strong><p>${x[2]}</p><small>${x[3]}</small></div><button data-speak-index="${allPhrases.indexOf(x)}" aria-label="듣기">▶</button></article>`).join('')||'<p style="text-align:center;color:#7e756d;padding:30px">해당 문장이 없어요.</p>';
  document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{phraseFilter=b.dataset.filter;renderPhrases()}); document.querySelectorAll('[data-speak-index]').forEach(b=>b.onclick=()=>speak(allPhrases[+b.dataset.speakIndex][1]));
}
document.querySelector('#phraseSearch').oninput=renderPhrases;

function renderSongs(){
  const select=document.querySelector('#songSelect');
  if(!songCatalog.some(song=>song.title===state.openSong))state.openSong='星星之火';
  select.innerHTML=songCatalog.map(song=>`<option value="${song.title}">${song.rank?`${song.rank}순위 · `:''}${song.title} · ${song.reading}</option>`).join('');
  select.value=state.openSong;
  const song=songCatalog.find(item=>item.title===state.openSong);
  document.querySelector('#songList').innerHTML=`<article class="song-card current-song-card"><div class="song-rank"><span class="${song.rank?'':'choice'}">${song.rank?`${song.rank}순위`:'선택한 곡'}</span><small>선택 즉시 가사 표시</small></div><h2 class="song-title">${song.title}</h2><p class="song-reading">${song.reading}</p><p class="song-meaning">${song.meaning}</p><section class="inline-lyrics-panel" aria-label="${song.title} 가사"><div class="inline-lyrics-title"><b>${song.title} · 가사 암기</b><span id="offlineStatus">오프라인 준비됨</span></div><div class="lyrics-audio-box"><audio id="savedAudio" controls hidden></audio><div id="audioEmpty"><b>비행기에서도 노래와 함께</b><small>보유한 MP3·M4A 파일을 이 기기에 저장하세요.</small></div><button id="chooseAudio">＋ 내 음원 저장</button><button id="removeAudio" hidden>음원 삭제</button><input id="audioFile" type="file" accept="audio/*" hidden></div><div class="lyrics-memory-tools"><span>가리고 떠올려 보세요</span><div><button data-lyric-layer="h-zh" aria-pressed="false">원문</button><button data-lyric-layer="h-pron" aria-pressed="false">병음·발음</button><button data-lyric-layer="h-kr" aria-pressed="false">해석</button></div></div><iframe id="lyricsFrame" src="./lyrics/lyrics-v7.html?song=${song.id}#${song.id}" title="${song.title} 가사 학습"></iframe></section></article>`;
  select.onchange=()=>{state.openSong=select.value;save();renderSongs();toast(`${select.value} 가사로 바꿨어요`)};
  setupInlineLyrics(song);
}

let activeLyricsSong=null,audioObjectUrl=null;
function audioDb(){return new Promise((resolve,reject)=>{const req=indexedDB.open('xiaoliao-offline-audio',1);req.onupgradeneeded=()=>req.result.createObjectStore('songs');req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)})}
async function audioGet(title){const db=await audioDb();return new Promise((resolve,reject)=>{const tx=db.transaction('songs','readonly'),req=tx.objectStore('songs').get(title);req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)})}
async function audioPut(title,file){const db=await audioDb();return new Promise((resolve,reject)=>{const tx=db.transaction('songs','readwrite');tx.objectStore('songs').put(file,title);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}
async function audioDelete(title){const db=await audioDb();return new Promise((resolve,reject)=>{const tx=db.transaction('songs','readwrite');tx.objectStore('songs').delete(title);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}
function clearAudioPlayer(){const audio=document.querySelector('#savedAudio');if(!audio)return;audio.pause();audio.removeAttribute('src');audio.hidden=true;document.querySelector('#audioEmpty').hidden=false;document.querySelector('#removeAudio').hidden=true;if(audioObjectUrl){URL.revokeObjectURL(audioObjectUrl);audioObjectUrl=null}}
async function loadSongAudio(title){clearAudioPlayer();try{const blob=await audioGet(title),audio=document.querySelector('#savedAudio');if(blob&&audio){audioObjectUrl=URL.createObjectURL(blob);audio.src=audioObjectUrl;audio.hidden=false;document.querySelector('#audioEmpty').hidden=true;document.querySelector('#removeAudio').hidden=false}}catch(e){toast('저장된 음원을 불러오지 못했어요')}}
function updateNetworkBadge(){const badge=document.querySelector('#offlineStatus');if(!badge)return;badge.textContent=navigator.onLine?'가사 저장됨':'오프라인 모드';badge.classList.toggle('offline',!navigator.onLine)}
function setupInlineLyrics(song){if(!song)return;activeLyricsSong=song;const frame=document.querySelector('#lyricsFrame');updateNetworkBadge();loadSongAudio(song.title);document.querySelectorAll('[data-lyric-layer]').forEach(btn=>btn.onclick=()=>{try{const body=frame.contentDocument.body,hidden=body.classList.toggle(btn.dataset.lyricLayer);btn.setAttribute('aria-pressed',String(hidden))}catch(e){toast('가사를 불러오는 중이에요')}});document.querySelector('#chooseAudio').onclick=()=>document.querySelector('#audioFile').click();document.querySelector('#audioFile').onchange=async e=>{const file=e.target.files[0];if(!file||!activeLyricsSong)return;if(file.size>150*1024*1024){toast('150MB 이하 음원을 선택해 주세요');return}try{await audioPut(activeLyricsSong.title,file);await loadSongAudio(activeLyricsSong.title);toast('이 기기에 음원을 저장했어요 ✈️')}catch(err){toast('저장 공간이 부족하거나 저장할 수 없어요')}e.target.value=''};document.querySelector('#removeAudio').onclick=async()=>{await audioDelete(activeLyricsSong.title);clearAudioPlayer();toast('저장된 음원을 삭제했어요')}}
window.addEventListener('online',updateNetworkBadge);window.addEventListener('offline',updateNetworkBadge);

function updateStats(){
  const days=Object.values(state.tasks).filter(x=>x.length===4).length; document.querySelector('#completedDays').textContent=days;
  const sorted=Object.keys(state.tasks).filter(k=>state.tasks[k].length===4).sort().reverse(); let streak=0, cursor=new Date(); for(let i=0;i<365;i++){const k=cursor.toISOString().slice(0,10);if(sorted.includes(k))streak++;else if(i>0||!sorted.includes(todayKey))break;cursor.setDate(cursor.getDate()-1)}document.querySelector('#streakCount').textContent=streak;
}
function renderRoadmap(){document.querySelector('#departureDate').value=state.departure;document.querySelector('#roadmap').innerHTML=lessons.map((l,i)=>`<article class="week ${i<weekIndex?'done':i===weekIndex?'current':''}"><small>${String(i+1).padStart(2,'0')}주차 · ${l.stage}</small><b>${l.title}</b><p>${i===weekIndex?'지금 여기에서 연습 중이에요':l.k}</p></article>`).join('');updateStats()}
document.querySelector('#departureDate').onchange=e=>{state.departure=e.target.value;save();renderToday();toast('출발일을 저장했어요')};

document.querySelectorAll('.bottom-nav button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.bottom-nav button').forEach(x=>x.classList.toggle('active',x===b));document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.dataset.view===b.dataset.target));if(b.dataset.target==='phrases')renderPhrases();if(b.dataset.target==='songs')renderSongs();if(b.dataset.target==='roadmap')renderRoadmap();window.scrollTo({top:0,behavior:'smooth'})});
document.querySelector('#streakBtn').onclick=()=>toast('하루 네 과제를 마치면 연속 학습일이 올라가요');
renderToday();renderRoleplay();renderMC();renderPhrases();renderSongs();renderRoadmap();save();
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('./sw.js').then(reg=>reg.update()).catch(()=>{});
