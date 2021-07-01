# CARRY.GG [![PyPI license](https://img.shields.io/pypi/l/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/) ![PyPI license](https://img.shields.io/badge/npm-6.14.4-green) ![PyPI license](https://img.shields.io/badge/node-13.14.0-green)

[![giphy](https://media.giphy.com/media/TCAb4opucKWVCeEvp8/giphy.gif)](https://giphy.com/)


# Description
* CARRY.GG는 유명 게임인 리그 오브 레전드의 챔피언들의 능력치를 나타내고 유저의 게임 승패 기록을 보여주는 웹사이트 입니다.
* 프론트엔드 부분은 html과 css와 javascript를 활용해서 구현하였고, 백엔드 부분은 node.js와 express 프레임워크를 사용해 구현하였습니다. 데이터는 라이엇 공식 사이트에서 제공하는 API를 사용하여 웹사이트에 표시하였습니다.
* 라이엇 API를 활용하여 유저의 게임 승패 기록을 나타내는 기능을 현재 개발중에 있으며, 부가 기능을 추가하는 것 또한 계획에 있습니다.

# Installation
```js

    git clone https://github.com/EminemBurger/CARRY.GG.git

```

* git이 컴퓨터 환경에 설치되어있다면, cmd나 vscode 혹은 기타 IDE를 통해 CARRY.GG의 코드를 가져옵니다.
* git이 설치되어 있지 않다면, zip 파일로 다운받아 압축을 풉니다.

```js
    cd client
    npm install
    
    .
    .
    .
    
    cd server
    npm install
```


* 위의 명령을 설행하기 위해 npm과 node를 필수적으로 컴퓨터 환경에 설치하여야 합니다.
* 백엔드에서 사용되는 모듈들을 설치하기 위해 server 디렉터리를 현재 디렉터리로 하고, cmd나 vscode 에서 명령을 실행합니다.
* 마찬가지로 프론트에서 사용되는 모듈들을 설치하기 위해 client 디렉터리를 현재 디렉터리로 하고, 명령을 실행합니다.

```js

    npm start // in CARRY.GG folder  

```

* 모듈이 성공적으로 설치되었다면, start 명령을 통해 애플리케이션을 실행시킬 수 있습니다.
* concurrently 모듈을 사용함으로써, 클라이언트와 서버가 동시에 실행됩니다. package.json에서 코드 수정을 통해 클라이언트와 서버를 따로 실행시킬수도 있습니다.

# Functions

* D3.js 라이브러리를 활용한 챔피언 능력치 페이지


![image info](./client/asset/riven.jpg)  
상단 메뉴에서 Champion 버튼을 클릭하면 챔피언 페이지로 이동할 수 있습니다.  
챔피언 페이지에서 챔피언을 클릭하면 해당 챔피언의 능력치와 역할군을 확인할 수 있습니다.
챔피언의 승률과 아이템을 장착할 경우, 챔피언의 능력치 변화를 나타내는 분석창을 구현하는 것을 목표로 하고 있습니다.


```js

    rect.data(object_value)
        .enter().append("rect")
        .attr("width", 20)
        .attr("fill", "#ff2f2f")
        .attr("height", function(d) {
            return d * 20;
        })
        .attr("x", function(d, i) {
            return (parseInt(svg_x) / 8) + (parseInt(svg_x) / 4) * i + 'px';
        })
        .attr("y", function(d) {
            return 200 - (d * 20);
         })

    svg.append("g")
    .attr("transform" , "translate(0,200)")
    .attr("color", "white")
    .call(d3.axisBottom(xx));

    .
    .

```

CARRY.GG/client/js/champion.js 내에 작성된 코드를 수정함으로써 해당 기능을 변경하거나 개선시킬 수 있습니다. 라이엇 공식 API 홈페이지에서 문서를 참고하여 개발하면 도움이 될 수 있습니다.  
https://developer.riotgames.com/apis

# Dependencies

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | 
| --------- | --------- | 
| 90.0.818.62 latest |  90.0.4430.212 latest| 

### OS 
* window 7
* window 10

