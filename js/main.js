fetch("https://ramyabathula2.github.io/ecommerce/data/data.json").then(response=>{
		return response.json()
	}).then(data=>{
		displayData(data)
	})
	

	function displayData(info){
	
		var bodyElement=document.querySelector("body");
		var row = document.createElement("section")
		row.classList.add("row","justify-content-center")
		bodyElement.append(row)
		info.mobiles.map(value=>{
			var column=document.createElement("article")
			column.classList.add("col-sm-10","col-md-6","col-lg-3");
			row.append(column)
		
			//card
			var card=document.createElement("div");
			card.classList.add("card","mt-1")

			//card-body
			var cardBody=document.createElement("div");
			cardBody.classList.add("card-body")
		
			//image
			var imageElement=document.createElement("img");
			imageElement.src=value.image;
			imageElement.classList.add("img-responsive")
			imageElement.alt=value.name;
		
			//Name 
			var name=document.createElement("h2")
			name.textContent=value.name;
			name.classList.add("text-center", "text-primary")
		
			//Price
			var price=document.createElement("p");
			price.classList.add("text-danger", "text-center")
			price.innerHTML="<s> ₹"+value.price+ "/- <s>";

			//original_Price
			var original_price=document.createElement("p");
			original_price.classList.add("text-success", "text-center")
			original_price.textContent="₹"+value.original_price+"/-";

			//Button
			var buttonParent=document.createElement("div");
			buttonParent.classList.add("d-grid","gap-2");

			var button = document.createElement("button");
			button.classList.add("btn","btn-primary");
			button.textContent="Add to cart"
			buttonParent.append(button)

			cardBody.append(imageElement)
			cardBody.append(name)			
			cardBody.append(price)
			cardBody.append(original_price)




			cardBody.append(buttonParent)
			card.append(cardBody);
			column.append(card);

		})

	}
