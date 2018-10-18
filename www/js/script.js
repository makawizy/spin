	function register_user(username, phonenumber, password, radioValue){
			localStorage.setItem("surname","");
			localStorage.setItem("firstname", "");
			localStorage.setItem("othername", "");
			localStorage.setItem("phonenumber", "");
			localStorage.setItem("email", "");
			localStorage.setItem("gender", "");
			$.ajax({
						type:"POST",  //Request type
						url: "http://cecoeng.com/spinthewheel/php_scripts/register_user.php",   
						data:{username:username, password:password, phonenumber:phonenumber,radioValue:radioValue},
						cache:false,
						success:function(data) {
							if(data > 0){
								localStorage.setItem("username",username);
								localStorage.setItem("user_id", data);
								localStorage.setItem("login_status", true);
								document.querySelector('#my_navigator').pushPage('menu.html');
						   }else{
							ons.notification.alert('Registration Could Not Be Completed');
						   }
						   //window.plugins.spinnerDialog.hide();
						}
					});


	} 
	function login_user(login_username, login_password){

				$.ajax({
						type:"POST",  //Request type
						url: "http://cecoeng.com/spinthewheel/php_scripts/login_user.php",   
						data:{login_username:login_username, login_password:login_password},
						cache:false,
						success:function(data) {
						   if(data > 0 ){
							localStorage.setItem("username",login_username);
							localStorage.setItem("user_id", data);
							localStorage.setItem("login_status", true);
							document.querySelector('#my_navigator').pushPage('menu.html');
						   }else{
							ons.notification.alert('Wrong Login Details');
						   }
						   // window.plugins.spinnerDialog.hide();
						}
					});
	}  
	function spinCalculator(user_id){
			var spins_left = 0;
			$.ajax({
						type:"POST",  //Request type
						url: "http://cecoeng.com/spinthewheel/php_scripts/spincalculator.php",   
						data:{user_id:user_id},
						cache:false,
						success:function(data) {
						   ons.notification.alert(data);
						   startSpin();
						}
					});

	}
	function dailySpinAllocator(user_id){
		$.ajax({
						type:"POST",  //Request type
						url: "http://cecoeng.com/spinthewheel/php_scripts/dailySpinAllocator.php",   
						data:{user_id:user_id},
						cache:false,
						success:function(data) {
						 
							ons.notification.alert(data);
						   
						   
						}
					});

	}
function reduceSpinBalance(user_id){
	$.ajax({
						type:"POST",  //Request type
						url: "http://cecoeng.com/spinthewheel/php_scripts/reduceSpinBalance.php",   
						data:{user_id:user_id},
						cache:false,
						success:function(data) {
						 
							ons.notification.alert(data);
						   
						   
						}
					});
}
function updateRewards(user_id, score){
$.ajax({
						type:"POST",  //Request type
						url: "http://cecoeng.com/spinthewheel/php_scripts/updateRewards.php",   
						data:{user_id:user_id,score:score},
						cache:false,
						success:function(data) {
						 
							ons.notification.alert(data);
						   
						   
						}
					});


}	
	function update_user_profile(user_id, surname, firsname, othername, phonenumber, email, radioValue){
			
			$.ajax({
						type:"POST",  //Request type
						url: "http://cecoeng.com/spinthewheel/php_scripts/update_user_profile.php",   
						data:{user_id:user_id, surname:surname, firsname:firsname, othername:othername,phonenumber:phonenumber,email:email,radioValue:radioValue},
						cache:false,
						success:function(data) {
						
							if(data == "success"){
								localStorage.setItem("surname",surname);
								localStorage.setItem("firstname", firsname);
								localStorage.setItem("othername", othername);
								localStorage.setItem("phonenumber", phonenumber);
								localStorage.setItem("email", email);
								localStorage.setItem("gender", radioValue);
								ons.notification.alert("Profile successfully updated");
						   }else{
							ons.notification.alert("try again");
						   }
						   //window.plugins.spinnerDialog.hide();
						}
					});


	}
	function winning_retrieve(user_id){
	 var url = "http://cecoeng.com/spinthewheel/php_scripts/get_winnings.php";
        $.getJSON(url,{user_id:user_id}, function(result) {
            console.log(result);
            $.each(result, function(i, field) {
                var amount = field.amount_won;
				var time = field.time;
				var table_winnings = document.getElementById("table_winnings");	
								var row = table_winnings.insertRow(1);
								var cell1 = row.insertCell(0);
								var cell2 = row.insertCell(1);
								cell1.innerHTML =time;
								cell2.innerHTML = amount; 
                
            });
        });
				
	
	}
	function bank_retrieve(user_id){
		 var url = "http://cecoeng.com/spinthewheel/php_scripts/bank.php";
        $.getJSON(url,{user_id:user_id}, function(result) {
            console.log(result);
            $.each(result, function(i, field) {
                var account_name = field.account_name;
				var account_number = field.account_number;
				var bank_name = field.bank_name;
				$('#bank_name').text(bank_name);
				$('#account_number').text(account_number);
				$('#account_name').text(account_name);
				   
            });
        });
	
	}
function retrieve_user_profile(user_id){
		 var url = "http://cecoeng.com/spinthewheel/php_scripts/retrieve_user_profile.php";
        $.getJSON(url,{user_id:user_id}, function(result) {
            console.log(result);
            $.each(result, function(i, field) {
                var surname = field.surname;
				var firstname = field.firstname;
				var othername = field.middlename;
				var phone_number = field.phone_number;
				var email = field.email;
				var gender = field.gender;
				$('#pro_fullname').text(surname+" "+firstname+" "+othername);
				$('#pro_phonenumber').text(phone_number);
				$('#pro_email').text(email);
				$('#pro_gender').text(gender);
								localStorage.setItem("surname",surname);
								localStorage.setItem("firstname", firstname);
								localStorage.setItem("othername", othername);
								localStorage.setItem("phonenumber", phone_number);
								localStorage.setItem("email", email);
								localStorage.setItem("gender", gender);
				   
            });
        });
	
	}
	// -------------------------------------
	// resize layout for device screen
	// -------------------------------------
	function resize() {
		// resize menu area and game area to full screen
		var windowwidth = $(window).width();
		var windowheight = $(window).height();
				// resize all menu elements
		var basesize = $(window).height() / 20; // base=32px
		
		$('body, html').css({
			"font-size": basesize+"px",
			"width": windowwidth+"px",
			"height": windowheight+"px"
		});
		$('#div_background').css({
			"font-size": basesize+"px",
			"width": windowwidth+"px",
			"height": windowheight+"px"
		});
		$('#rounded_div').css({
			"width": (windowwidth*0.7)+"px",
			"height": (windowheight*0.08)+"px",
			"margin-top": (windowheight*0.2)+"px"
		
		});
		$('#menu_pic').css({
			"width": (windowwidth*0.2)+"px",
			"margin-top": (windowheight*0.1)+"px"
		
		});
		$('#register_rounded_div').css({
			"width": (windowwidth*0.7)+"px",
			"height": (windowheight*0.08)+"px",
			"margin-top": (windowheight*0.15)+"px"
		
		});
	}
	
