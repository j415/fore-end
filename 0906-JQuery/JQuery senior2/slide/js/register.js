$(function(){
	var error_name = false;
	var error_pwd = false;
	var error_cpwd = false;
	var error_email = false;
	var error_allow = false;
	
	// user_name
	$('#user_name').blur(function(){
		check_username();
	})
	$('#user_name').focus(function(){
		$(this).next().hide();
	})
	
	// pwd
	$('#pwd').blur(function(){
		check_pwd();
	})
	$('#pwd').focus(function(){
		$(this).next().hide();
	})
	
	// cpwd
	$('#cpwd').blur(function(){
		check_cpwd();
	})
	$('#cpwd').focus(function(){
		$(this).next().hide();
	})
	
	// email
	$('#email').blur(function(){
		check_email();
	})
	$('#email').focus(function(){
		$(this).next().hide();
	})
	
	// allow
	$('#allow').click(function(){
		if($(this).prop('checked')==true){
			error_allow = false;
			$('.error_tip2').hide();
		}else{
			error_allow= true;
			$('.error_tip2').html('请同意协议').show();
		}
	})
	
	
	function check_username(){
		var val = $('#user_name').val();
		var re =  /^\w{5,15}$/i;
		
		if(val== ''){
			$('#user_name').next().html('用户名不能为空！');
			$('#user_name').next().show();
			error_name = true;
			return;
		}
		if(re.test(val)){
			error_name= false;
		}else{
			error_name = true;
			$('#user_name').next().html('用户名是包含数字、字母、下划线的5到15位字符！');
			$('#user_name').next().show();
		}
	}
	
	function check_pwd(){
		var val = $('#pwd').val();
		var re =  /^[a-zA-Z0-9@\$\*\.\!\?]{6,16}$/;
		
		if(val== ''){
			$('#pwd').next().html('密码不能为空！');
			$('#pwd').next().show();
			error_pwd = true;
			return;
		}
		if(re.test(val)){
			error_pwd= false;
		}else{
			error_pwd = true;
			$('#pwd').next().html('密码是包含数字、字母和特殊字符：@ $ * ！?等6-16位字符');
			$('#pwd ').next().show();
		}
	}
	
	function check_cpwd(){
		var val = $('#pwd').val();
		var cval = $('#cpwd').val();
		
		if(val==cval){
			error_cpwd = false;
		}else{
			error_cpwd = true;
			$('#cpwd').next().html('两次输入的密码不一致');
			$('#cpwd ').next().show();
		}
	}
	
	function check_email(){
		var val = $('#email').val();
		var re =  /^[0-9a-z][\w\.\-]*@[0-9a-z\-]+(\.[a-z]{2,5}){1,2}$/;
		
		if(val== ''){
			$('#email').next().html('邮箱不能为空！');
			$('#email').next().show();
			error_email = true;
			return;
		}
		if(re.test(val)){
			error_email false;
		}else{
			error_email = true;
			$('#email').next().html('你输入的邮箱格式不正确');
			$('#email').next().show();
		}
	}
	
	$('.reg_form').submit(function(){
		check_username();
		check_pwd();
		check_cpwd();
		check_email();
		
		if(error_name == false && error_pwd == false && error_cpwd == false && error_email == false && error_allow == false){
			return true;
		}else{
			return false;
		}
	})
	
})