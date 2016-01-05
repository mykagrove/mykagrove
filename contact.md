---
layout: page
title: Contact
permalink: /contact/
---

<div class="row">
	<div class="col-xs-12 col-sm-8 col-md-6">
		<form action="https://formspree.io/{{ site.email }}" method="POST">
			<input type="hidden" name="_next" value="{{ site.baseurl }}/thanks/" />
			<input type="hidden" name="_subject" value="Contact Form - m.ichael.co.uk" />
			<input type="text" name="_gotcha" style="display:none" />

			<div class="form-group">
				<input type="email" name="email" class="form-control" placeholder="Email Address">
			</div>

			<div class="form-group">
				<textarea name="content" class="form-control" rows="5" placeholder="What would you like to say?"></textarea>
			</div>

			<div class="form-group">
				<button type="submit" class="btn">Submit <i class="fa fa-caret-right"></i></button>
			</div>
		</form>
	</div>
</div>
