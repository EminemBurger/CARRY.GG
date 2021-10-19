import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("CARRY.GG");
    }

    async getHtml() {
        return `
        <div class="section-1">
        <div class="section-1-content">
          <div class="section-1-content-header">
            <img></img>
            <div class="section-1-content-header-banner">
              <h1>데이터를 불러올 수 없습니다.</h1>
              <p>데이터를 불러올 수 없습니다.</p>
            </div>
          </div>

          <div class="section-1-champion">
            <div class="section-1-champion-stat">
              <svg class="section-1-champion-stat-svg"></svg>
            </div>
            <div class="section-1-champion-role">
              <table class="type09">
                <thead>
                <tr>
                  <th scope="cols">능력치</th>
                  <th scope="cols">값</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">체력</th>
                  <td id="td1">값을 불러오는데 오류가 있습니다.</td>
                </tr>
                <tr>
                  <th scope="row">성장 체력</th>
                  <td id="td2">값을 불러오는데 오류가 있습니다.</td>
                </tr>
                <tr>
                  <th scope="row">마나</th>
                  <td id="td3">값을 불러오는데 오류가 있습니다.</td>
                </tr>
                <tr>
                  <th scope="row">성장 마력</th>
                  <td id="td4">값을 불러오는데 오류가 있습니다.</td>
                </tr>
                <tr>
                  <th scope="row">방어력</th>
                  <td id="td5">값을 불러오는데 오류가 있습니다.</td>
                </tr>
                <tr>
                  <th scope="row">성장 방어력</th>
                  <td id="td6">값을 불러오는데 오류가 있습니다.</td>
                </tr>
                <tr>
                  <th scope="row">마법 저항력</th>
                  <td id="td7">값을 불러오는데 오류가 있습니다.</td>
                </tr>
                <tr>
                  <th scope="row">성장 마법 저항력</th>
                  <td id="td8">값을 불러오는데 오류가 있습니다.</td>
                </tr>
                <tr>
                  <th scope="row">공격력</th>
                  <td id="td9">값을 불러오는데 오류가 있습니다.</td>
                </tr>
                <tr>
                  <th scope="row">성장 공격력</th>
                  <td id="td10">값을 불러오는데 오류가 있습니다.</td>
                </tr>
                <tr>
                  <th scope="row">공격 속도</th>
                  <td id="td11">값을 불러오는데 오류가 있습니다.</td>
                </tr>
                <tr>
                  <th scope="row">성장 공격속도</th>
                  <td id="td12">값을 불러오는데 오류가 있습니다.</td>
                </tr>
                <tr>
                  <th scope="row">공격범위</th>
                  <td id="td13">값을 불러오는데 오류가 있습니다.</td>
                </tr>
                <tr>
                  <th scope="row">이동 속도</th>
                  <td id="td14">값을 불러오는데 오류가 있습니다.</td>
                </tr>

                </tbody>
              </table>

            </div>
          </div>

        </div>
      </div>
        `;
    }
}