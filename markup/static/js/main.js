// import $ from '../../../node_modules/jquery/dist/jquery.min.js';
import '../../../node_modules/page-scroll-to-id/jquery.malihu.PageScroll2id';
// import {default as swal} from 'sweetalert2';
import '../../components/order-form/floatingFormInput';
import '../../components/order-form/order-form';
import '../../components/order-form/ajaxFormSend';
$(() => {
    $('.navigation a, .logo a').mPageScroll2id({
        highlightSelector: '.navigation a'
    });

});
