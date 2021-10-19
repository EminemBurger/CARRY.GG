import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("CARRY.GG");
    }

    async getHtml() {
        return `
        <div class="section-1">
        <div class="section-1-rank">
            <span class="section-1-rank-emblem"></span>
            <div class="section-1-sum-div2">
                <p class="section-1-rank-tier"></p>
                <p class="section-1-rankname">솔로 랭크 5x5</p>
                <p class="section-1-lp">0 LP</p>
            </div>
        </div>
        <div class="section-1-sum">
            <span class="section-1-profile-icon"></span>
            <div class="section-1-sum-div2">
                <span class="section-1-summoner"></span>
                <p class="section-1-summoner-p">레벨</p>
            </div>
        </div>
    </div>
    <div class="section-2">

    </div>
        `;
    }
}