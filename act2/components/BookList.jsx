import React from "react";

export default class BookList extends React.Component {
    render() {
        return(
            <section class="section-prices">
<h2 class="section-header">Book List</h2>
<div class="list-boxs">
	<div class="card starter">
		<div class="head">
			Animal Farm
		</div>
		<div class="ticket"></div>
		<div class="body">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore
				magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.
			</p>
			 
		</div>
	</div>
	<div class="card standard">
		<div class="head">
			The Alchemist
		</div>
		<div class="ticket"> </div>
		<div class="body">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore
				magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.
			</p>
			 
		</div>
	</div>
	<div class="card premium">
		<div class="head">
        Gilead
		</div>
		<div class="ticket"></div>
		<div class="body">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore
				magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.
			</p>
			 
		</div>
	</div>
</div>
</section>
        );
    }
}