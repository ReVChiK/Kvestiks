import "sass-reset/src/reset.scss";
import "bootstrap/scss/bootstrap.scss";
import "../sass/index.scss";
import "../sass/media/media.scss";

import Logotype from "../img/logo/logo.svg";
import MenuIcon from "../img/icons/menu.svg";

import Tel_icon from "../img/icons/tel.png";
import Book_icon from "../img/icons/book.png";
import Person_icon from "../img/icons/person.png";

import QuestFon from "../img/quest.png";
import QuestFonMobile from "../img/quest_mobile.png";

import SberIcon from "../img/icons/sber.png";
import MastercardIcon from "../img/icons/mastercard.png";
import VisaIcon from "../img/icons/visa.png";
import MirIcon from "../img/icons/mir.png";

import stars from "../img/icons/stars.png";

import { setSvg } from "./modules/svg/svg";
import { setIcons } from "./modules/icons/icons";
import {
  setBackground,
  setImage,
  setMobileBackground,
} from "./modules/img/img";
import { correctDate } from "./modules/date/date";

let icons = [Tel_icon, Book_icon, Person_icon];
let payments = [SberIcon, MastercardIcon, VisaIcon, MirIcon];

let setDate = (className, callback) =>
  document
    .querySelectorAll(`.${className}`)
    .forEach((item) => (item.textContent = callback));

function main() {
  setSvg("header__logo", Logotype, "header__logo_image");
  setSvg("header__menu", MenuIcon, "header__menu_icon");
  setIcons("header__nav_item-icon", icons);
  setImage("icon__item_img", payments);
  setImage("star-image", stars);
  setBackground("quest", QuestFon);
  setMobileBackground("quest__mobile_image", QuestFonMobile);
  setDate("card-date", correctDate(0));
}

window.addEventListener("DOMContentLoaded", main);
