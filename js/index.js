function snap() {
	fetch("https://jsonplaceholder.typicode.com/posts/")
		.then(response => {
			//catch any requests that aren't 200 OK
			if(response.status !== 200) {
				alert('Sorry. Something happened. :-( Status Code: '.response.status);
				return;
			}

			response.json().then(data => {
				console.log(data);
				document.getElementById("crackle").innerHTML  = data.map(result =>
					 `
						<div class="card">
							<div class="card-body">
      						<h5 class="card-title">${result.title}</h5>
     							 <p class="card-text">${result.body}</p>
    						</div>
    					</div>`
				);

			});
		})
}