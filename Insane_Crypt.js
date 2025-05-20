$(document).on('submit','#form_2crypt',function(event){
	event.preventDefault();
	var fd = new FormData();    
	fd.append('input_2crypt',$("#input").val());
	$.ajax({
		url: 'https://cryptography.securitytactics.com/API-Crypo/remote/API-crypto.php?2crypt',
		type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
		dataType: 'json',
		beforeSend: function() { 
			$('.button').val('Validando...');
		}
	})
	.done(function(respuesta) {
		console.log("success");
		console.log(respuesta);
		if(!respuesta.info.error){
			$('#hash').html(respuesta.output.hash);
			$('#2crypt').html(respuesta.output.output);
			$('.show').show();
			$('#input_2decrypt').val((respuesta.output.output));
			$('#input_pass_2decrypt').val('');
			$('#form_2decrypt').submit();
			$('.2decrypt').show();
		}
	})
	.fail(function(resp) {
		console.log(resp.responseText);
		console.log("error");
	})
	.always(function() {
		console.log("complete");
		$('.button').val('Cifrar');
	})
});
$(document).on('submit','#form_2crypt_0',function(event){
	event.preventDefault();
	var fd = new FormData();    
	fd.append('input_2crypt',$("#input_0").val());
	fd.append('input_size_2crypt',$("#input_size_0").val());
	$.ajax({
		url: 'https://cryptography.securitytactics.com/API-Crypt/public/remote/API-crypto.php?2crypt',
		type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
		dataType: 'json',
		beforeSend: function() { 
			$('.button').val('Validando...');
		}
	})
	.done(function(respuesta) {
		console.log("success");
		console.log(respuesta);
		if(!respuesta.info.error){
			$('#hash').html(respuesta.output.hash);
			$('#2crypt').html(respuesta.output.output);
			$('.show').show();
			$('#input_2decrypt').val((respuesta.output.output));
			$('#input_pass_2decrypt').val('');
			$('#form_2decrypt').submit();
			$('.2decrypt').show();
		}
	})
	.fail(function(resp) {
		console.log(resp.responseText);
		console.log("error");
	})
	.always(function() {
		console.log("complete");
		$('.button').val('Cifrar');
	})
});
$(document).on('submit','#form_2crypt_1',function(event){
	event.preventDefault();
	var fd = new FormData();    
	fd.append('input_2crypt',$("#input_1").val());
	fd.append('input_pass_2crypt',$("#input_pass_1").val());
	$.ajax({
		url: 'https://cryptography.securitytactics.com/API-Crypt/public/remote/API-crypto.php?2crypt',
		type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
		dataType: 'json',
		beforeSend: function() { 
			$('.button').val('Validando...');
		}
	})
	.done(function(respuesta) {
		console.log("success");
		console.log(respuesta);
		if(!respuesta.info.error){
			$('#hash').html(respuesta.output.hash);
			$('#2crypt').html(respuesta.output.output);
			$('.show').show();
			$('#input_2decrypt').val((respuesta.output.output));
			$('#input_pass_2decrypt').val($('#input_pass_1').val());
			$('#form_2decrypt').submit();
			$('.2decrypt').show();
		}
	})
	.fail(function(resp) {
		console.log(resp.responseText);
		console.log("error");
	})
	.always(function() {
		console.log("complete");
		$('.button').val('Cifrar');
	})
});
$(document).on('submit','#form_2crypt_2',function(event){
	event.preventDefault();
	var fd = new FormData();    
	fd.append('input_2crypt',$("#input_2").val());
	fd.append('input_pass_2crypt',$("#input_pass_2").val());
	fd.append('input_size_2crypt',$("#input_size_2").val());
	$.ajax({
		url: 'https://cryptography.securitytactics.com/API-Crypt/public/remote/API-crypto.php?2crypt',
		type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
		dataType: 'json',
		beforeSend: function() { 
			$('.button').val('Validando...');
		}
	})
	.done(function(respuesta) {
		console.log("success");
		console.log(respuesta);
		if(!respuesta.info.error){
			$('#hash').html(respuesta.output.hash);
			$('#2crypt').html(respuesta.output.output);
			$('.show').show();
			$('#input_2decrypt').val((respuesta.output.output));
			$('#input_pass_2decrypt').val($('#input_pass_2').val());
			$('#form_2decrypt').submit();
		}
	})
	.fail(function(resp) {
		console.log(resp.responseText);
		console.log("error");
	})
	.always(function() {
		console.log("complete");
		$('.button').val('Cifrar');
	})
});
$(document).on('submit','#form_2decrypt',function(event){
	event.preventDefault();
	var fd = new FormData();    
	fd.append('input_2decrypt',$("#input_2decrypt").val());
	fd.append('input_pass_2decrypt',$("#input_pass_2decrypt").val());
	$.ajax({
		url: 'https://cryptography.securitytactics.com/API-Crypt/public/remote/API-crypto.php?2decrypt',
		type: 'POST',
        data: fd,
        processData: false,
        contentType: false,
		dataType: 'json',
	})
	.done(function(respuesta) {
		console.log("success");
		console.log(respuesta);
		if(!respuesta.info.error){
			$('#2decrypt').html(respuesta.output.output);
			$('.2decrypt').show();			
		}
	})
	.fail(function(resp) {
		console.log(resp.responseText);
		console.log("error");
	})
	.always(function() {
		console.log("complete");
		$('.button').val('Cifrar');
	})
});
$(document).ready(function(){
	//Botones distintos encriptados
	$("#button_2crypt_on").bind('click', function(){
				$("#button_2crypt_on").hide(); 
				$("#2crypt_").show();
				$("#button_2crypt_off").show(); 
		}); 
	$("#button_2crypt_off").bind('click', function(){
				$("#button_2crypt_off").hide();  
				$("#2crypt_").hide();
				$("#button_2crypt_on").show(); 
		}); 
	$("#button_2crypt_0_on").bind('click', function(){
				$("#button_2crypt_0_on").hide(); 
				$("#2crypt_0").show();
				$("#button_2crypt_0_off").show(); 
		}); 
	$("#button_2crypt_0_off").bind('click', function(){
				$("#button_2crypt_0_off").hide();  
				$("#2crypt_0").hide();
				$("#button_2crypt_0_on").show(); 
		}); 
	$("#button_2crypt_1_on").bind('click', function(){
				$("#button_2crypt_1_on").hide(); 
				$("#2crypt_1").show();
				$("#button_2crypt_1_off").show(); 
		}); 
	$("#button_2crypt_1_off").bind('click', function(){
				$("#button_2crypt_1_off").hide();  
				$("#2crypt_1").hide();
				$("#button_2crypt_1_on").show(); 
		}); 
	$("#button_2crypt_2_on").bind('click', function(){
				$("#button_2crypt_2_on").hide(); 
				$("#2crypt_2").show();
				$("#button_2crypt_2_off").show(); 
		}); 
	$("#button_2crypt_2_off").bind('click', function(){
				$("#button_2crypt_2_off").hide();  
				$("#2crypt_2").hide();
				$("#button_2crypt_2_on").show(); 
		}); 
});
