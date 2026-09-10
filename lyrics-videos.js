(function(){
  var videos={
    "xingxing-zhihuo":{id:"9LpgVmsGq0A",kind:"콘서트 대표영상",note:"난징 공연 직캠"},
    "xinshang-xuan":{id:"UYoEuuzGBk0",kind:"공식 OST",note:"《颜心记》 삽입곡"},
    "yaoburan-yiwannian":{id:"PaaUiP9NbQY",kind:"콘서트 대표영상",note:"광저우 공연 직캠"},
    "yiwang":{id:"VF1TvQUByPg",kind:"콘서트 대표영상",note:"청두 공연 무대"},
    "lilong-yin":{id:"jKvVp4CDcd8",kind:"콘서트 대표영상",note:"난징 공연 직캠"},
    "dengfeng-ting":{id:"_EOKIHlUTh8",kind:"콘서트 대표영상",note:"난징 공연 직캠"},
    "buran":{id:"3U5jv0apwUM",kind:"콘서트 대표영상",note:"청두 공연 무대"},
    "yun-zhidao":{id:"hW7YlE1qDQU",kind:"공식 음원",note:"YouTube Music 제공 영상"},
    "bumu-chunfeng":{id:"0PtHLKuFMk0",kind:"OST 영상",note:"장량잉 · 류위닝 원곡"},
    "yuni":{id:"aCGFfLsr0vA",kind:"콘서트 대표영상",note:"난징 공연 직캠"},
    "zui-langman":{id:"DWtZvfMpuZc",kind:"라이브 영상",note:"칠석 특별기획 무대"},
    "youxi-shijian":{id:"XpEeYkjyCLc",kind:"콘서트 대표영상",note:"2024 《此刻 X 以光》 무대"},
    "wayfarer":{id:"xvRoujeGUgw",kind:"콘서트 대표영상",note:"난징 공연 직캠"},
    "yemeng-chunyou":{id:"Z2tpUEvPdaE",kind:"콘서트 대표영상",note:"2026.09.05 청두 공연"},
    "huixide-tong":{id:"LgtkSSE93P8",kind:"첫 솔로 콘서트 영상",note:"2024 《此刻 X 以光》 무대"}
  };

  function makeVideo(song,video){
    var title=(song.querySelector('.stitle h2')||{}).textContent||'대표영상';
    var details=document.createElement('details');
    details.className='song-video';
    details.innerHTML='<summary aria-label="'+title+' 대표영상 펼치기">'+
      '<span class="video-thumb"><img src="https://i.ytimg.com/vi/'+video.id+'/mqdefault.jpg" alt="" loading="lazy"></span>'+
      '<span class="video-copy"><b>'+video.kind+'</b><span>'+video.note+' · 눌러서 가사와 함께 보기</span></span>'+
      '<span class="video-arrow" aria-hidden="true">⌄</span></summary>'+
      '<div class="video-frame"><iframe data-src="https://www.youtube-nocookie.com/embed/'+video.id+'?rel=0" title="'+title+' 영상" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div>'+
      '<div class="video-foot"><span>'+video.kind+' · '+video.note+'</span><a href="https://www.youtube.com/watch?v='+video.id+'" target="_blank" rel="noopener noreferrer">YouTube에서 크게 보기 ↗</a></div>';
    details.addEventListener('toggle',function(){
      var frame=details.querySelector('iframe');
      if(details.open&&!frame.src)frame.src=frame.getAttribute('data-src');
      if(!details.open&&frame.src){frame.removeAttribute('src');}
    });
    song.classList.add('has-video');
    song.querySelector('.shead').insertAdjacentElement('afterend',details);
  }

  document.addEventListener('DOMContentLoaded',function(){
    Object.keys(videos).forEach(function(id){
      var song=document.getElementById(id);
      if(song)makeVideo(song,videos[id]);
    });
  });
})();
