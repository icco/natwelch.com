<?php $this->render('page/header');?>

	<div class="screen" id="login">
		<h1>Not so fast, hotshot.</h1>

		<form method="post" action="" id="login-form" onsubmit="window.scrollTo(0,99999);this.focus();"><!-- action must remain empty -->
			<div class="box">	
				<input type="hidden" name="action" value="login" />

				<fieldset>
						<label>Email <input type="text" id="email" name="email" value="<?php e((isset($_POST['email']))?prevent_xss($_POST['email']):'');?>" autocapitalize="off" /></label>
						<button class="btn text default" onclick="this.form.action.value='remind';">Remind</button>
				</fieldset>
	
				<fieldset>
					<label>Password <input type="password" name="password" autocapitalize="off" /></label>
					<button class="btn text default">Login</button>
				</fieldset>
	
			</div>
		</form>
		
		<div class="footer">
			<a href="http://feedafever.com" rel="external">Fever</a> <?php e($this->formatted_version()); ?> &copy; 2007&ndash;2009 <a href="http://shauninman.com/" rel="external">Shaun Inman</a>. All rights reserved. 
			Available at <a href="http://feedafever.com" rel="external">feedafever.com</a>.
		</div>

	</div>
	
<?php $this->render('page/footer');?>