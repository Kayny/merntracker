import React, { Fragment, useEffect, useState } from 'react';
import './App.css';

const App = () => {
	useEffect(() => {
		const getAPI = async () => {
			const response = await fetch('http://localhost:8080/');
			const data = await response.json();

			try {
				console.log(data);
				setLoading(false);
				setAnime(data);
			} catch (error) {
				console.log(error);
			}
		};
		getAPI();
	}, []);

	const [anime, setAnime] = useState([]);
	const [loading, setLoading] = useState(true);

	return (
		<Fragment>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">MERN Tracker</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="http://localhost:8080">Afficher tous les éléments</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="http://localhost:8080/add-anime">Ajouter un nouvel élément</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<br /><br />

			<div className="container">
				{loading ? (
					<div>
						<p>Pas de données...</p>
					</div>
				) : (
					<div>
						{anime.map((data) => (
							<div key={data._id}>
								<main>
									<ul className="anime">
										<li>
											<img src={data.image} alt={data.name} className="anime-img" />
										</li>
										<li>
											<h1>{data.name}</h1>
										</li>

										<li>
											<a href={data._id}>View Anime &#x21DB;</a>
										</li>
									</ul>
								</main>
							</div>
						))}
					</div>
				)}
			</div>
			{/* <div>
				<h1>Add New Anime</h1>
				<form method="POST" action="http://localhost:8080/add-anime">
					<div>
						<label>Name</label>
						<input type="text" name="name" required />
					</div>
					<div>
						<label>Image</label>
						<input type="text" name="image" required />
					</div>
					<div>
						<label>Description</label>
						<input type="text" name="description" required />
					</div>

					<div>
						<button type="submit">Add Anime</button>
					</div>
				</form>
			</div> */}
		</Fragment>
	);
};

export default App;
