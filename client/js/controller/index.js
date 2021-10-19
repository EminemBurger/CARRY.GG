import Home from "./home.controller.js";
import Champions from "./champions.controller.js";
import Champion from "./champion.controller.js";
import Summoner from "./summoner.controller.js";

async function Pages (path, params) {

switch (path) {
  case "/": {
    return await Home(params);
  }
  case "/champions": {
    return await Champions(params);
  }
  case "/champion": {
    return await Champion(params);
  }
  case "/summoner": {
    return await Summoner(params);
  }
  default: {
    return;
  }
}

}

export default Pages;