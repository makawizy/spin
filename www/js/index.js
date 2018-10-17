/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

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
			"height": windowheight+"px",
			"overflow:scroll"
		});
		}
// on page finished loading
document.addEventListener("deviceready", function() {
	resize();
}, false);

