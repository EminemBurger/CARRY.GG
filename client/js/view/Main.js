import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("CARRY.GG");
    }

    async getHtml() {
        return `
      <section class='section-1'> 
          <h1 class='section-heading'>CARRY.GG</h1> 
          <span class='section-1-input'> 
            <input placeholder='소환사 이름'></input> 
            <a href="/summoner">CARRY.GG</a> 
          </span> 
     
      </section> 
        
        
      <section class='section-2'> 
        <div class='section-2-header'> 
          <p>새로운 소식</p> 
          <div></div> 
          <h2>분석창</h2> 
        </div> 
        <div class='section-2-content'> 
          <div> 
            <img src='./asset/riven.jpg' class='section-2-content-img'></img> 
            <h2>챔피언을 파악할 수 있는 분석창</h2> 
            <p>당신의 챔피언에 대해 자세하게 이해하여 전장에서 더 큰 활약을 하세요!</p> 
          </div> 
          <div> 
            <img src='./asset/leesin.jpg' class='section-2-content-img'></img> 
            <h2>새로운 아이템 빌드를 위한 분석창</h2> 
            <p>당신의 챔피언이 어떤 아이템을 장착해야 강한 지, 직접 실험해보세요!</p> 
          </div> 
        </div> 
      </section> 
        
        
      <section class='section-3'> 
        
        <div class='section-3-header'> 
          <h1>롤이란 무엇인가요?</h1> 
          <p>롤은 5명의 플레이어로 팀을 이루어 넥서스를 부수는 게임입니다.</p> 
        </div> 
        
        <div class='section-3-redbox'></div> 
        <div class='section-3-content'> 
          <div class='section-3-content-describe'> 
            <img src='./asset/champioin.jpg'></img> 
            <h2>100종류가 넘는 다양한 챔피언들</h2> 
            <p>당신의 개성에 맞는 챔피언으로 팀을 승리로 이끄세요!</p> 
          </div> 
          <div class='section-3-content-describe'> 
            <img src='./asset/league.jpg'></img> 
            <h2>5명의 소환사가 펼치는 게임</h2> 
            <p>팀으로 이루어진 소환사들과 팀워크를 발휘해 승리하세요!</p> 
          </div> 
        </div> 
        
        <div class='section-3-comment'> 
          <div class='section-3-comment-div'> 
            <h2>매주 이루어지고 있는 패치</h2> 
            <p> 
              챔피언의 종류만큼이나 서로간의 밸런스가 중요하기 때문에 
              지속적인 업데이트는 이루어지고 있습니다. 자세한 내용은 
              아래 링크를 통해 확인하세요. 
            </p> 
            <a href='https://kr.leagueoflegends.com/ko-kr/news/tags/patch-notes'>더보기</a> 
          </div> 
          <div class='section-3-comment-div'> 
            <h2>뛰어난 플레이어들이 펼치는 경기</h2>
            <p>
              세계 각국의 E-sports League에서 최고 기량의 선수들이 
              플레이하고 있습니다. 그들의 플레이를 보려면 경기 일정을 
              확인하세요. 
            </p> 
            <a href='https://lolesports.com/'>더보기</a> 
          </div> 
        </div> 
        
      </section>  
        
        
      <section class='section-4'> 
          <h1>소환사의 협곡은 새로운 소환사를 기다리고 있습니다.</h1> 
          <a href='https://na.leagueoflegends.com/ko-kr/'>참전하기</a> 
          <video autoplay loop muted> 
            <source src='https://media.giphy.com/media/2sfHBti8mqSO5Bhlqq/giphy.mp4'> 
          </video> 
        
      </section>`;
    }
}