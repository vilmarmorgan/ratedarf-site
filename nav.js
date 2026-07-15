/*
 * Shared navigation menu for Rated Arf (ratedarf.com).
 *
 * SINGLE SOURCE OF TRUTH: edit the LINKS list below and every page's menu
 * overlay updates automatically (homepage, Kickstarter Backers, etc).
 *
 * Each page has an empty <nav class="nav-menu-links"></nav> followed by
 * <script src="/nav.js"></script>. This script runs during parse (before the
 * page's own menu wiring) and fills in the links, so the existing open/close
 * and click-to-close handlers find them normally.
 *
 * URLs are root-relative ("/", "/kickstarter/") so they work from any page depth.
 * "soon" items render as a disabled label + "coming soon" (no link yet).
 */
(function () {
  var LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Buy Now', soon: true },
    { label: 'How to Play', soon: true },
    { label: 'Kickstarter Backers', href: '/kickstarter/' },
    { label: 'Play Pupcup', href: 'https://playpupcup.com/', external: true, newTab: true, sub: 'The Family Friendly Game' }
  ];

  var html = LINKS.map(function (l) {
    if (l.soon) {
      return '<div class="nav-menu-soon"><span class="nav-menu-soon-label">' + l.label +
             '</span><span class="nav-menu-soon-sub">coming soon</span></div>';
    }
    var attrs = l.external ? ' rel="noopener"' : '';
    if (l.newTab) attrs += ' target="_blank"';
    if (l.sub) {
      return '<div class="nav-menu-pup"><a href="' + l.href + '"' + attrs + '>' + l.label + '</a>' +
             '<span class="nav-menu-pup-sub">' + l.sub + '</span></div>';
    }
    return '<a href="' + l.href + '"' + attrs + '>' + l.label + '</a>';
  }).join('\n    ');

  var nav = document.querySelector('.nav-menu-links');
  if (nav) nav.innerHTML = html;
})();
