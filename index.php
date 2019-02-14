<!DOCTYPE html>
<html>
	<head>
		<title>en-inflectors Demo</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	</head>
	<body>
		<div class="demo">
			<div class="input">
				<div id="verbs-input" data-verb="<?php
					echo $_GET["verb"]
				?>"></div>
			</div>
			<div id="verbs-output" class="output">
			</div>
		</div>
		<script src="./demo/main.js"></script>
	</body>
</html>