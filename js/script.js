// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Jakub Malhotra
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

function onLoad() {
  if (localStorage.cookietotal) {
    document.getElementById("cookie").innerHTML =
      "You have: " + localStorage.cookietotal + " cookies."
  } else {
    localStorage.cookietotal = 0
    document.getElementById("cookie").innerHTML =
      "You have: " + localStorage.cookietotal + " cookies."
  }
}
function myButtonClicked() {
  localStorage.cookietotal++
  document.getElementById("cookie").innerHTML =
    "You have: " + localStorage.cookietotal + " cookies."
}
