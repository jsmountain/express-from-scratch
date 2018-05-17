// event pada saat link di cklik

$('.page-scroll').on('click', function(e){

	//aMbil isi href
	var tujuan = $(this).attr('href');

	// tangkap elemen ybs
	var elementujan = $(tujuan);

	//pindahkan scroll
 	$('body').scrollTop('0');

	e.preventDefault();

});