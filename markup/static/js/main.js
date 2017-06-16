import '../../../node_modules/page-scroll-to-id/jquery.malihu.PageScroll2id';
import '../../components/order-form/floatingFormInput';
$(() => {
    $('.navigation a, .logo a').mPageScroll2id({
        highlightSelector: '.navigation a'
    });
});
