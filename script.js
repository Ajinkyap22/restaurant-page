"use strict";

class Restaurant {
  tabHome;
  tabMenu;
  tabAbout;
  tabContact;

  contentHome;
  contentMenu;
  contentAbout;
  contentContact;

  btnMenu = document.querySelector(".btn");

  constructor() {
    [
      this.tabHome,
      this.tabMenu,
      this.tabAbout,
      this.tabContact,
    ] = document.querySelectorAll(".tab");

    [
      this.contentHome,
      this.contentMenu,
      this.contentAbout,
      this.contentContact,
    ] = document.querySelectorAll(".main");

    this.btnMenu.addEventListener(
      "click",
      this._activeTab.bind(this.tabMenu, this.contentMenu)
    );

    this.tabHome.addEventListener(
      "click",
      this._activeTab.bind(this.tabHome, this.contentHome)
    );

    this.tabMenu.addEventListener(
      "click",
      this._activeTab.bind(this.tabMenu, this.contentMenu)
    );

    this.tabAbout.addEventListener(
      "click",
      this._activeTab.bind(this.tabAbout, this.contentAbout)
    );

    this.tabContact.addEventListener(
      "click",
      this._activeTab.bind(this.tabContact, this.contentContact)
    );
  }

  _activeTab(content) {
    document
      .querySelectorAll(".tab")
      .forEach((tab) => tab.classList.remove("active"));

    document
      .querySelectorAll(".main")
      .forEach((content) => content.classList.add("hidden"));

    this.classList.add("active");

    content.classList.remove("hidden");
  }
}

const chillout = new Restaurant();
