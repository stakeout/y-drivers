import '../../../node_modules/page-scroll-to-id/jquery.malihu.PageScroll2id';
import '../../components/order-form/floatingFormInput';
import '../../components/order-form/order-form';
// import phoneMask from '../../components/order-form/phoneMask';
$(() => {
    $('.navigation a, .logo a').mPageScroll2id({
        highlightSelector: '.navigation a'
    });
    // phoneMask();
    // $('#phone').mask('+7(xxx) xxx-xx-xx');
});
