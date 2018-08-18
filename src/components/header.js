import React, { Component } from 'react';
export class Header extends Component {
	render() {
		return (
			<div>
				<div class="container">
					<div className="">
						<div></div>
						</div>
					</div>

					<nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ postion: 'fixed' }}>
						<a class="navbar-brand" href="#">ImagesBazzar</a>

						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>

						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav mr-auto">
								<li class="nav-item active">
									<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">Collection</a>
								</li>
								<li class="nav-item">
									<a class="nav-link " href="#">Photos</a>
								</li>
							</ul>
							<select class="form-control" id="dropdown" onChange={this.props.dropdown.bind(this)}>
								<option>Cars</option>
								<option>Bikes</option>
								<option>Flower</option>
								<option>Cycle</option>
								<option>House</option>
								<option>Dog</option>
							</select>


							<input class="form-control mr-sm-2" type="text" placeholder="Search" id="searchValue" aria-label="Search" />
							<button class="btn btn-outline-success my-2 my-sm-0" onClick={this.props.search.bind(this)} >Search</button>
						</div>
					</nav>



				</div>
				)
    }
}