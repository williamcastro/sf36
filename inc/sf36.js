/*
Sistema desenvolvido por William Castro
Email para contato: williamccoelho@gmail.com
*/

function exe_system(){
	var error = 0;

	// QUADRO 01
	var R_Q01L01 = 	$("input:checked[name=Q01L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q01L01 == '') {
		error++;
		destacar('Q01L01');
	}
	else {
		// remover destaque se tiver marcado
		if($('#L_Q01L01').is('.linha_h')) {
			$('#L_Q01L01').removeClass('linha_h');
			$('#L_Q01L01').addClass('even');
		}
	}

	
	
	
	
	// QUADRO 02
	var R_Q02L01 = 	$("input:checked[name=Q02L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q02L01 == '') {
		error++;
		destacar('Q02L01');
	}	
	else {
		// remover destaque se tiver marcado
		if($('#L_Q02L01').is('.linha_h')) {
			$('#L_Q02L01').removeClass('linha_h');
			$('#L_Q02L01').addClass('even');
		}
	}		
	
	
	
	
	
	// QUADRO 03 - LINHA 01
	var R_Q03L01 = 	$("input:checked[name=Q03L01]").map(function() {return $(this).val();}).get().join();
	
	
	if(R_Q03L01 == '') {
		error++;
		destacar('Q03L01');
	}	
	else {
		// remover destaque se tiver marcado
		if($('#L_Q03L01').is('.linha_h')) {
			$('#L_Q03L01').removeClass('linha_h');
			$('#L_Q03L01').addClass('even');
		}
	}		
	
	// QUADRO 03 - LINHA 02
	var R_Q03L02 = 	$("input:checked[name=Q03L02]").map(function() {return $(this).val();}).get().join();
	
	
	if(R_Q03L02 == '') {
		error++;
		destacar('Q03L02');
	}	
	else {
		// remover destaque se tiver marcado
		if($('#L_Q03L02').is('.linha_h')) {
			$('#L_Q03L02').removeClass('linha_h');
			$('#L_Q03L02').addClass('even');
		}
	}	
	
	// QUADRO 03 - LINHA 03
	var R_Q03L03 = 	$("input:checked[name=Q03L03]").map(function() {return $(this).val();}).get().join();
	
	
	if(R_Q03L03 == '') {
		error++;
		destacar('Q03L03');
	}	
	else {
		// remover destaque se tiver marcado
		if($('#L_Q03L03').is('.linha_h')) {
			$('#L_Q03L03').removeClass('linha_h');
			$('#L_Q03L03').addClass('even');
		}
	}		
	
		
	// QUADRO 03 - LINHA 04
	var R_Q03L04 = 	$("input:checked[name=Q03L04]").map(function() {return $(this).val();}).get().join();
	
	
	if(R_Q03L04 == '') {
		error++;
		destacar('Q03L04');
	}	
	else {
		// remover destaque se tiver marcado
		if($('#L_Q03L04').is('.linha_h')) {
			$('#L_Q03L04').removeClass('linha_h');
			$('#L_Q03L04').addClass('even');
		}
	}			
	
	// QUADRO 03 - LINHA 05
	var R_Q03L05 = 	$("input:checked[name=Q03L05]").map(function() {return $(this).val();}).get().join();
	
	
	if(R_Q03L05 == '') {
		error++;
		destacar('Q03L05');
	}	
	else {
		// remover destaque se tiver marcado
		if($('#L_Q03L05').is('.linha_h')) {
			$('#L_Q03L05').removeClass('linha_h');
			$('#L_Q03L05').addClass('even');
		}
	}	
		
	// QUADRO 03 - LINHA 06
	var R_Q03L06 = 	$("input:checked[name=Q03L06]").map(function() {return $(this).val();}).get().join();
	
	
	if(R_Q03L06 == '') {
		error++;
		destacar('Q03L06');
	}	
	else {
		// remover destaque se tiver marcado
		if($('#L_Q03L06').is('.linha_h')) {
			$('#L_Q03L06').removeClass('linha_h');
			$('#L_Q03L06').addClass('even');
		}
	}	
	
	// QUADRO 03 - LINHA 07
	var R_Q03L07 = 	$("input:checked[name=Q03L07]").map(function() {return $(this).val();}).get().join();
	
	
	if(R_Q03L07 == '') {
		error++;
		destacar('Q03L07');
	}	
	else {
		// remover destaque se tiver marcado
		if($('#L_Q03L07').is('.linha_h')) {
			$('#L_Q03L07').removeClass('linha_h');
			$('#L_Q03L07').addClass('even');
		}
	}	
		
	// QUADRO 03 - LINHA 08
	var R_Q03L08 = 	$("input:checked[name=Q03L08]").map(function() {return $(this).val();}).get().join();
	
	
	if(R_Q03L08 == '') {
		error++;
		destacar('Q03L08');
	}	
	else {
		// remover destaque se tiver marcado
		if($('#L_Q03L08').is('.linha_h')) {
			$('#L_Q03L08').removeClass('linha_h');
			$('#L_Q03L08').addClass('even');
		}
	}	
		
	// QUADRO 03 - LINHA 09
	var R_Q03L09 = 	$("input:checked[name=Q03L09]").map(function() {return $(this).val();}).get().join();
	
	
	if(R_Q03L09 == '') {
		error++;
		destacar('Q03L09');
	}	
	else {
		// remover destaque se tiver marcado
		if($('#L_Q03L09').is('.linha_h')) {
			$('#L_Q03L09').removeClass('linha_h');
			$('#L_Q03L09').addClass('even');
		}
	}	
	
	// QUADRO 03 - LINHA 10
	var R_Q03L10 = 	$("input:checked[name=Q03L10]").map(function() {return $(this).val();}).get().join();
	
	
	if(R_Q03L10 == '') {
		error++;
		destacar('Q03L10');
	}	
	else {
		// remover destaque se tiver marcado
		if($('#L_Q03L10').is('.linha_h')) {
			$('#L_Q03L10').removeClass('linha_h');
			$('#L_Q03L10').addClass('even');
		}
	}	
	
	

	
	
	// QUADRO 04 - LINHA 01
	var R_Q04L01 = 	$("input:checked[name=Q04L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q04L01 == '') {
		error++;
		destacar('Q04L01');
	}		
	else {
		if($('#L_Q04L01').is('.linha_h')) {
			$('#L_Q04L01').removeClass('linha_h');
			$('#L_Q04L01').addClass('even');
		}
	}
	
	// QUADRO 04 - LINHA 02
	var R_Q04L02 = 	$("input:checked[name=Q04L02]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q04L02 == '') {
		error++;
		destacar('Q04L02');
	}		
	else {
		if($('#L_Q04L02').is('.linha_h')) {
			$('#L_Q04L02').removeClass('linha_h');
			$('#L_Q04L02').addClass('even');
		}
	}
		
	// QUADRO 04 - LINHA 03
	var R_Q04L03 = 	$("input:checked[name=Q04L03]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q04L03 == '') {
		error++;
		destacar('Q04L03');
	}		
	else {
		if($('#L_Q04L03').is('.linha_h')) {
			$('#L_Q04L03').removeClass('linha_h');
			$('#L_Q04L03').addClass('even');
		}
	}
	
	// QUADRO 04 - LINHA 04
	var R_Q04L04 = 	$("input:checked[name=Q04L04]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q04L04 == '') {
		error++;
		destacar('Q04L04');
	}		
	else {
		if($('#L_Q04L04').is('.linha_h')) {
			$('#L_Q04L04').removeClass('linha_h');
			$('#L_Q04L04').addClass('even');
		}
	}			
	
	
	// QUADRO 05 - LINHA 01
	var R_Q05L01 = 	$("input:checked[name=Q05L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q05L01 == '') {
		error++;
		destacar('Q05L01');
	}		
	else {
		if($('#L_Q05L01').is('.linha_h')) {
			$('#L_Q05L01').removeClass('linha_h');
			$('#L_Q05L01').addClass('even');
		}
	}		
		
	// QUADRO 05 - LINHA 02
	var R_Q05L02 = 	$("input:checked[name=Q05L02]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q05L02 == '') {
		error++;
		destacar('Q05L02');
	}		
	else {
		if($('#L_Q05L02').is('.linha_h')) {
			$('#L_Q05L02').removeClass('linha_h');
			$('#L_Q05L02').addClass('even');
		}
	}	
	
	// QUADRO 05 - LINHA 03
	var R_Q05L03 = 	$("input:checked[name=Q05L03]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q05L03 == '') {
		error++;
		destacar('Q05L03');
	}		
	else {
		if($('#L_Q05L03').is('.linha_h')) {
			$('#L_Q05L03').removeClass('linha_h');
			$('#L_Q05L03').addClass('even');
		}
	}
	
	
	
	
	
	
	// QUADRO 06 - LINHA 01
	var R_Q06L01 = 	$("input:checked[name=Q06L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q06L01 == '') {
		error++;
		destacar('Q06L01');
	}			
	else {
		if($('#L_Q06L01').is('.linha_h')) {
			$('#L_Q06L01').removeClass('linha_h');
			$('#L_Q06L01').addClass('even');
		}
	}		
	
	
	
	
	

	// QUADRO 07 - LINHA 01
	var R_Q07L01 = 	$("input:checked[name=Q07L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q07L01 == '') {
		error++;
		destacar('Q07L01');
	}			
	else {
		if($('#L_Q07L01').is('.linha_h')) {
			$('#L_Q07L01').removeClass('linha_h');
			$('#L_Q07L01').addClass('even');
		}
	}			

	
	// QUADRO 08 - LINHA 01
	var R_Q08L01 = 	$("input:checked[name=Q08L01]").map(function() {return $(this).val();}).get().join();
		

	if(R_Q08L01 == '') {
		error++;
		destacar('Q08L01');
	}	
	else {
		if(R_Q07L01 == 6 && R_Q08L01 == 1) {
			var RF_Q08L01 = 6;
		}
		
		if(R_Q07L01 != 6 && R_Q08L01 == 1) {
			var RF_Q08L01 = 5;
		}
		
		if(R_Q07L01 != 6 && R_Q08L01 == 2) {
			var RF_Q08L01 = 4;
		}

		if(R_Q07L01 != 6 && R_Q08L01 == 3) {
			var RF_Q08L01 = 3;
		}

		if(R_Q07L01 != 6 && R_Q08L01 == 4) {
			var RF_Q08L01 = 2;
		}

		if(R_Q07L01 != 6 && R_Q08L01 == 5) {
			var RF_Q08L01 = 1;
		}
		
		if(RF_Q08L01 == '') {
			RF_Q08L01 = R_Q08L01;
		}
		
		// remover
		if($('#L_Q08L01').is('.linha_h')) {
			$('#L_Q08L01').removeClass('linha_h');
			$('#L_Q08L01').addClass('even');
		}
		

	}	
		
	
	
	// QUADRO 09 - A LINHA 01
	var R_Q09L01 = 	$("input:checked[name=Q09L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q09L01 == '') {
		error++;
		destacar('Q09L01');
	}	
	else {
		// alteração valores
		if(R_Q09L01 == 1) {
			RF_Q09L01 = 6;
		}
		if(R_Q09L01 == 2) {
			RF_Q09L01 = 5;
		}
		if(R_Q09L01 == 3) {
			RF_Q09L01 = 4;
		}
		if(R_Q09L01 == 4) {
			RF_Q09L01 = 3;
		}
		if(R_Q09L01 == 5) {
			RF_Q09L01 = 2;
		}
		if(R_Q09L01 == 6) {
			RF_Q09L01 = 1;
		}
		
		if(RF_Q09L01 == '') {
			RF_Q09L01 = R_Q09L01;
		}
		
		if($('#L_Q09L01').is('.linha_h')) {
			$('#L_Q09L01').removeClass('linha_h');
			$('#L_Q09L01').addClass('even');
		}
	}	
	
	// QUADRO 09 - B LINHA 02
	var R_Q09L02 = 	$("input:checked[name=Q09L02]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q09L02 == '') {
		error++;
		destacar('Q09L02');
	}	
	else {
		if($('#L_Q09L02').is('.linha_h')) {
			$('#L_Q09L02').removeClass('linha_h');
			$('#L_Q09L02').addClass('even');
		}
	}	
	
	// QUADRO 09 - C LINHA 03
	var R_Q09L03 = 	$("input:checked[name=Q09L03]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q09L03 == '') {
		error++;
		destacar('Q09L03');
	}
	else {
		if($('#L_Q09L03').is('.linha_h')) {
			$('#L_Q09L03').removeClass('linha_h');
			$('#L_Q09L03').addClass('even');
		}
	}	
	
	// QUADRO 09 - D LINHA 04
	var R_Q09L04 = 	$("input:checked[name=Q09L04]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q09L04 == '') {
		error++;
		destacar('Q09L04');
	}		
	else {
		// alteração valores
		if(R_Q09L04 == 1) {
			RF_Q09L04 = 6;
		}
		if(R_Q09L04 == 2) {
			RF_Q09L04 = 5;
		}
		if(R_Q09L04 == 3) {
			RF_Q09L04 = 4;
		}
		if(R_Q09L04 == 4) {
			RF_Q09L04 = 3;
		}
		if(R_Q09L04 == 5) {
			RF_Q09L04 = 2;
		}
		if(R_Q09L04 == 6) {
			RF_Q09L04 = 1;
		}
		
		if(RF_Q09L04 == '') {
			RF_Q09L04 = R_Q09L04;
		}

		if($('#L_Q09L04').is('.linha_h')) {
			$('#L_Q09L04').removeClass('linha_h');
			$('#L_Q09L04').addClass('even');
		}
	}	

	// QUADRO 09 - E LINHA 05
	var R_Q09L05 = 	$("input:checked[name=Q09L05]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q09L05 == '') {
		error++;
		destacar('Q09L05');
	}			
	else {
		// alteração valores
		if(R_Q09L05 == 1) {
			RF_Q09L05 = 6;
		}
		if(R_Q09L05 == 2) {
			RF_Q09L05 = 5;
		}
		if(R_Q09L05 == 3) {
			RF_Q09L05 = 4;
		}
		if(R_Q09L05 == 4) {
			RF_Q09L05 = 3;
		}
		if(R_Q09L05 == 5) {
			RF_Q09L05 = 2;
		}
		if(R_Q09L05 == 6) {
			RF_Q09L05 = 1;
		}
		
		if(RF_Q09L05 == ''){
			RF_Q09L05 = R_Q09L05;
		}
			
		if($('#L_Q09L05').is('.linha_h')) {
			$('#L_Q09L05').removeClass('linha_h');
			$('#L_Q09L05').addClass('even');
		}
	}	

	// QUADRO 09 - F LINHA 06
	var R_Q09L06 = 	$("input:checked[name=Q09L06]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q09L06 == '') {
		error++;
		destacar('Q09L06');
	}
	else {
		if($('#L_Q09L06').is('.linha_h')) {
			$('#L_Q09L06').removeClass('linha_h');
			$('#L_Q09L06').addClass('even');
		}
	}	
	
	// QUADRO 09 - G LINHA 07
	var R_Q09L07 = 	$("input:checked[name=Q09L07]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q09L07 == '') {
		error++;
		destacar('Q09L07');
	}
	else {
		if($('#L_Q09L07').is('.linha_h')) {
			$('#L_Q09L07').removeClass('linha_h');
			$('#L_Q09L07').addClass('even');
		}
	}
	
	// QUADRO 09 - H LINHA 08
	var R_Q09L08 = 	$("input:checked[name=Q09L08]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q09L08 == '') {
		error++;
		destacar('Q09L08');
	}
	else {
		// alteração valores
		if(R_Q09L08 == 1) {
			RF_Q09L08 = 6;
		}
		if(R_Q09L08 == 2) {
			RF_Q09L08 = 5;
		}
		if(R_Q09L08 == 3) {
			RF_Q09L08 = 4;
		}
		if(R_Q09L08 == 4) {
			RF_Q09L08 = 3;
		}
		if(R_Q09L08 == 5) {
			RF_Q09L08 = 2;
		}
		if(R_Q09L08 == 6) {
			RF_Q09L08 = 1;
		}
		
		if(RF_Q09L08 == '') {
			RF_Q09L08 = R_Q09L08;
		}
		

		if($('#L_Q09L08').is('.linha_h')) {
			$('#L_Q09L08').removeClass('linha_h');
			$('#L_Q09L08').addClass('even');
		}
	}
		
	// QUADRO 09 - I LINHA 09
	var R_Q09L09 = 	$("input:checked[name=Q09L09]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q09L09 == '') {
		error++;
		destacar('Q09L09');
	}
	else {
		if($('#L_Q09L09').is('.linha_h')) {
			$('#L_Q09L09').removeClass('linha_h');
			$('#L_Q09L09').addClass('even');
		}
	}		
	
	
	// QUADRO 10 - LINHA 01
	var R_Q10L01 = 	$("input:checked[name=Q10L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q10L01 == '') {
		error++;
		destacar('Q10L01');
	}
	else {
		if($('#L_Q10L01').is('.linha_h')) {
			$('#L_Q10L01').removeClass('linha_h');
			$('#L_Q10L01').addClass('even');
		}
	}
	
	
	
	
	
	
	// QUADRO 11 - LINHA 01
	var R_Q11L01 = 	$("input:checked[name=Q11L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q11L01 == '') {
		error++;
		destacar('Q11L01');
	}	
	else {
		if($('#L_Q11L01').is('.linha_h')) {
			$('#L_Q11L01').removeClass('linha_h');
			$('#L_Q11L01').addClass('even');
		}
	}	
		
	// QUADRO 11 - B LINHA 02
	var R_Q11L02 = 	$("input:checked[name=Q11L02]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q11L02 == '') {
		error++;
		destacar('Q11L02');
	}	
	else {
		// alteração valores
		if(R_Q11L02 == 1) {
			RF_Q11L02 = 5;
		}
		if(R_Q11L02 == 2) {
			RF_Q11L02 = 4;
		}
		if(R_Q11L02 == 3) {
			RF_Q11L02 = 3;
		}
		if(R_Q11L02 == 4) {
			RF_Q11L02 = 2;
		}
		if(R_Q11L02 == 5) {
			RF_Q11L02 = 1;
		}
		
		if(RF_Q11L02 == '') {
			RF_Q11L02 = R_Q11L02;
		}

		if($('#L_Q11L02').is('.linha_h')) {
			$('#L_Q11L02').removeClass('linha_h');
			$('#L_Q11L02').addClass('even');
		}
	}
		
	// QUADRO 11 - LINHA 03
	var R_Q11L03 = 	$("input:checked[name=Q11L03]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q11L03 == '') {
		error++;
		destacar('Q11L03');
	}	
	else {
		if($('#L_Q11L03').is('.linha_h')) {
			$('#L_Q11L03').removeClass('linha_h');
			$('#L_Q11L03').addClass('even');
		}
	}
			
	// QUADRO 11 - D LINHA 04
	var R_Q11L04 = 	$("input:checked[name=Q11L04]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q11L04 == '') {
		error++;
		destacar('Q11L04');
	}	
	else {
		if(R_Q11L04 == 1) {
			RF_Q11L04 = 5;
		}
		if(R_Q11L04 == 2) {
			RF_Q11L04 = 4;
		}
		if(R_Q11L04 == 3) {
			RF_Q11L04 = 3;
		}
		if(R_Q11L04 == 4) {
			RF_Q11L04 = 2;
		}
		if(R_Q11L04 == 5) {
			RF_Q11L04 = 1;
		}
		
		if(RF_Q11L04 == '') {
			RF_Q11L04 = R_Q11L04;
		}

		
		if($('#L_Q11L04').is('.linha_h')) {
			$('#L_Q11L04').removeClass('linha_h');
			$('#L_Q11L04').addClass('even');
		}
	}
		


	
	
	
	
	
	// VERIFICAÇÃO	
	if(error > 0) {
		alert('As alternativas destacadas em cor rosa, não foram selecionadas e são obrigatórias.');
		var error = 0;
	}
	else {
		// SOMATÓRIA - QUADRO 01
		var R_Q01 = parseFloat(R_Q01L01);
		
		// SOMATÓRIA - QUADRO 02
		var R_Q02 = parseFloat(R_Q02L01);

		// SOMATÓRIA - QUADRO 03
		var R_Q03 = parseFloat(R_Q03L01)+parseFloat(R_Q03L02)+parseFloat(R_Q03L03)+parseFloat(R_Q03L04)+parseFloat(R_Q03L05)+parseFloat(R_Q03L06)+parseFloat(R_Q03L07)+parseFloat(R_Q03L08)+parseFloat(R_Q03L09)+parseFloat(R_Q03L10);

		// SOMATÓRIA - QUADRO 04
		var R_Q04 = parseFloat(R_Q04L01)+parseFloat(R_Q04L02)+parseFloat(R_Q04L03)+parseFloat(R_Q04L04);
		
		// SOMATÓRIA - QUADRO 05
		var R_Q05 = parseFloat(R_Q05L01)+parseFloat(R_Q05L02)+parseFloat(R_Q05L03);

		// SOMATÓRIA - QUADRO 06
		var R_Q06 = parseFloat(R_Q06L01);	

		// SOMATÓRIA - QUADRO 07
		var R_Q07 = parseFloat(R_Q07L01);	

		// SOMATÓRIA - QUADRO 08
		var R_Q08 = parseFloat(RF_Q08L01);
		
		var R_Q09 = parseFloat(RF_Q09L01) + parseFloat(R_Q09L02) + parseFloat(R_Q09L03) + parseFloat(RF_Q09L04) + parseFloat(RF_Q09L05) + parseFloat(R_Q09L06) + parseFloat(R_Q09L07) + parseFloat(RF_Q09L08);
		
		var R_Q10 = parseFloat(R_Q10L01);
			
		
		var R_Q11 = parseFloat(R_Q11L01) + parseFloat(RF_Q11L02) + parseFloat(R_Q11L03) + parseFloat(RF_Q11L04);
			
		// CALCULO FINAL
		var b_capacidade	= R_Q03;
		var capacidade 		= (b_capacidade-10)*100/20;
			capacidade		= capacidade.toFixed(2);

		var b_limit		= R_Q04;
			limitacao		= (b_limit-4)*100/4;
			limitacao		= limitacao.toFixed(2);
			
		var b_dor			= R_Q07 + R_Q08;
			dor				= (b_dor-2)*100/10;
			dor				= dor.toFixed(2);
			
		var b_estado		= R_Q01 + R_Q11;
			estado			= (b_estado-5)*100/20;
			estado			= estado.toFixed(2);
			
		var b_vitalidade	= parseFloat(RF_Q09L01) + parseFloat(RF_Q09L05) + parseFloat(R_Q09L07) + parseFloat(R_Q09L09);
			vitalidade		= (b_vitalidade-4)*100/20;
			vitalidade		= vitalidade.toFixed(2);
			
		var b_aspectos	= R_Q06 + R_Q10;
			aspectos		= (b_aspectos-2)*100/8;
			aspectos		= aspectos.toFixed(2);
			
		var b_limitacao2	= R_Q05;
			limitacao2		= (b_limitacao2-3)*100/3;
			limitacao2		= limitacao2.toFixed(2);
			
		var b_saude		= parseFloat(R_Q09L02) + parseFloat(R_Q09L03) + parseFloat(RF_Q09L04) + parseFloat(R_Q09L06) + parseFloat(RF_Q09L08);
			saude			= (b_saude-5)*100/25;
			saude			= saude.toFixed(2);
		
					
		$('#formulario').fadeOut('slow', function () { 
			$('#div_capacidade').html("Capacidade funcional: "+b_capacidade+" <br /> Raw Scale: "+capacidade);
			$('#div_limitacao').html("Limitacao por aspectos físicos: "+b_limit+" <br /> Raw Scale: "+limitacao);
			$('#div_dor').html("Dor: "+b_dor+" <br /> Raw Scale: "+dor);
			$('#div_estado').html("Estado geral de saúde: "+b_estado+" <br /> Raw Scale: "+estado);
			$('#div_vitalidade').html("Vitalidade: "+b_vitalidade+" <br /> Raw Scale: "+vitalidade);
			$('#div_aspectos').html("Aspectos sociais: "+b_aspectos+" <br /> Raw Scale: "+aspectos);
			$('#div_limitacao2').html("Limitação por aspectos emocionais: "+b_limitacao2 +" <br /> Raw Scale: "+limitacao2);
			$('#div_saude').html("Saúde mental: "+b_saude +" <br /> Raw Scale: "+saude);
			
			$('#resultado').fadeIn('slow');
		});
	}
	
	
	
}
function voltar() {
	$('#resultado').fadeOut('slow' , function () {
		$('#formulario').fadeIn('slow')
		});		
	}

function resetar() {
	$('#formulario-perguntas').each(function(){
	        if(confirm("Você tem certeza que deseja resetar o formulário?")) {
		    	this.reset();
			}
	});
}

function destacar(id) {
	$('#L_'+id).removeClass('even'); 
	$('#L_'+id).addClass('linha_h'); 
}










