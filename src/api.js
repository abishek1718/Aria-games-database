//Base URL
const base_URL = "https://api.rawg.io/api/";

//getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_URL}${popular_games}`;
export const upcomingGamesURL = () => `${base_URL}${upcoming_games}`;
export const newGamesURL = () => `${base_URL}${new_games}`;
//GAME DETAILS
export const gameDetailsURL = (game_id) => `${base_URL}games/${game_id}`;
//Game Screenshots
export const gameScreenshotsURL = (game_id) =>
  `${base_URL}games/${game_id}/screenshots`;
export const searchGamesURL = (game_name) =>
  `${base_URL}games?search=${game_name}&page_size=9`;
