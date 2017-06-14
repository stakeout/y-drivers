import '../../../node_modules/page-scroll-to-id/jquery.malihu.PageScroll2id';
$(() => {
    $('.navigation a, .logo a').mPageScroll2id({
        highlightSelector: '.navigation a'
    });
});
