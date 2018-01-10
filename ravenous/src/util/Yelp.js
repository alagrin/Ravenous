const apiKey = 'XtmSmMYabTjaoEU2d54rDWk7cUzQtUoCSAZFY0199flfCm_I0ZcYArp8xmKjtAoreEzb6os14WxdcoWEIoS2MaKfpheEnm0_tZR4dgzztqN_RYIJKA7SurDoceRSWnYx';

export const Yelp = {
	search(term, location, sortBy) {
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
			headers: {
				Authorization: `Bearer ${apiKey}`
			}
		}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if (jsonResponse.businesses) {
				return jsonResponse.businesses.map(business => ({
					id: business.id,
					imageSrc: business.image_url,
					name: business.name,
					address: business.location.address,
					city: business.location.city,
					state: business.location.state,
					zipCode: business.location.zip_code,
					category: business.category,
					rating: business.rating,
					reviewCount: business.review_count
				})); 
			}
		});
	}
};

export default Yelp;