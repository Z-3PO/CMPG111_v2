/* ═══════════════════════════════════════════════════════════
   PYTHON COURSE SITE — SHARED SCRIPT
   Handles: mobile nav, topic tabs, collapsibles, solutions,
            difficulty+topic filters
   ═══════════════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", function () {

  /* ─── Mobile navigation toggle ─── */
  var menuBtn = document.getElementById("menu-toggle");
  var navLinks = document.getElementById("nav-links");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
    var links = navLinks.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function () {
        navLinks.classList.remove("open");
      });
    }
  }

  /* ─── Topic tabs (cheat sheets & notes pages) ─── */
  var topicTabs = document.querySelectorAll(".topic-tab");
  var topicPanels = document.querySelectorAll(".topic-panel");

  function showTopic(num) {
    for (var i = 0; i < topicPanels.length; i++) {
      topicPanels[i].classList.remove("active");
    }
    for (var j = 0; j < topicTabs.length; j++) {
      topicTabs[j].removeAttribute("data-active");
    }
    var panel = document.getElementById("topic-" + num);
    if (panel) panel.classList.add("active");
    var activeTab = document.querySelector('.topic-tab[data-topic="' + num + '"]');
    if (activeTab) activeTab.setAttribute("data-active", "true");
    if (history.replaceState) {
      history.replaceState(null, null, "#topic-" + num);
    }
    var header = document.querySelector(".topic-tabs");
    if (header) {
      var y = header.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  for (var k = 0; k < topicTabs.length; k++) {
    (function (tab) {
      tab.addEventListener("click", function () {
        var num = tab.getAttribute("data-topic");
        if (num) showTopic(num);
      });
    })(topicTabs[k]);
  }

  if (topicTabs.length > 0 && window.location.hash) {
    var match = window.location.hash.match(/topic-(\d+)/);
    if (match && match[1]) {
      setTimeout(function () { showTopic(match[1]); }, 50);
    }
  }

  /* ─── Collapsible note sections ─── */
  var noteHeaders = document.querySelectorAll(".note-section-header");
  for (var m = 0; m < noteHeaders.length; m++) {
    (function (header) {
      header.addEventListener("click", function () {
        var section = header.parentElement;
        var isOpen = section.getAttribute("data-open") === "true";
        section.setAttribute("data-open", isOpen ? "false" : "true");
      });
    })(noteHeaders[m]);
  }

  /* ─── Solution toggles ─── */
  var solutionBtns = document.querySelectorAll(".solution-toggle");
  for (var n = 0; n < solutionBtns.length; n++) {
    (function (btn) {
      btn.addEventListener("click", function () {
        var sol = btn.nextElementSibling;
        if (sol && sol.classList.contains("solution")) {
          sol.classList.toggle("show");
          btn.textContent = sol.classList.contains("show")
            ? "Hide Solution"
            : "Show / Hide Solution";
        }
      });
    })(solutionBtns[n]);
  }

  /* ─── Combined Difficulty + Topic filter ─── */
  var diffBtns = document.querySelectorAll(".diff-btn:not(.topic-filter-btn)");
  var topicFilterBtns = document.querySelectorAll(".topic-filter-btn");
  var exams = document.querySelectorAll(".exam-box");
  var qCounter = document.getElementById("q-counter");

  var currentDiff = "all";
  var currentTopic = "all";

  function applyFilters() {
    var shown = 0;
    for (var i = 0; i < exams.length; i++) {
      var eDiff  = exams[i].getAttribute("data-difficulty");
      var eTopic = exams[i].getAttribute("data-topic");
      var matchDiff  = (currentDiff  === "all" || eDiff  === currentDiff);
      var matchTopic = (currentTopic === "all" || eTopic === currentTopic);
      if (matchDiff && matchTopic) {
        exams[i].style.display = "";
        shown++;
      } else {
        exams[i].style.display = "none";
      }
    }
    if (qCounter) {
      qCounter.textContent = "Showing " + shown + " of " + exams.length + " questions";
    }
  }

  for (var p = 0; p < diffBtns.length; p++) {
    (function (btn) {
      btn.addEventListener("click", function () {
        currentDiff = btn.getAttribute("data-diff");
        for (var j = 0; j < diffBtns.length; j++) diffBtns[j].removeAttribute("data-active");
        btn.setAttribute("data-active", "true");
        applyFilters();
      });
    })(diffBtns[p]);
  }

  for (var q = 0; q < topicFilterBtns.length; q++) {
    (function (btn) {
      btn.addEventListener("click", function () {
        currentTopic = btn.getAttribute("data-topic-filter");
        for (var j = 0; j < topicFilterBtns.length; j++) topicFilterBtns[j].removeAttribute("data-active");
        btn.setAttribute("data-active", "true");
        applyFilters();
      });
    })(topicFilterBtns[q]);
  }

  if (qCounter && exams.length > 0) {
    qCounter.textContent = "Showing " + exams.length + " of " + exams.length + " questions";
  }

});
