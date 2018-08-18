import React, { Component } from 'react';
import { Details } from '../components/details';
import { LogIn } from '../components/login';
import { Collection } from '../components/collection';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
var request = require('request');
const redirect = true;

export class Gellary extends Component {
	constructor() {
		super();
		this.state = {
			alldata: [],
			likes: 0,
			total: 0,
			collections: [],
			total_pages: 0,
			showLogInPage: false,
			showDetailsPage: true,
			token: "",
			username: "",
			firstname: "",
			lastname: "",
		}
	}
	componentWillMount() {
		var self = this;
		var data = [];
		var options = this._connect("cars");
		request(options, function (err, res, body) {
			data = JSON.parse(body);
			this.setState({
				alldata: data.results,
				total: data.total,
				total_pages: data.total_pages
			})
		}.bind(this));

		var options = this._find_collection();
		request(options, function (err, res, body) {
			data = JSON.parse(body);
			debugger
			this.setState({
				collections: data
			})
		}.bind(this));

		if (redirect === true) {


		}

	}

	_find_collection() {
		var options = {
			"url": "https://api.unsplash.com/collections",
			"method": "GET",
			"headers": {
				"content-type": "application/json",
				"authorization": "Client-ID bb900432e136eac6fa4c3756fdc03890f89c0e906ab7a45f70cde39302eb304f"
			}
		};
		return options;
	}

	_connect(svalue) {
		var options = {
			"url": "https://api.unsplash.com/search/photos?query=" + svalue,
			"method": "GET",
			"headers": {
				"content-type": "application/json",
				"authorization": "Client-ID bb900432e136eac6fa4c3756fdc03890f89c0e906ab7a45f70cde39302eb304f"
			}
		};
		return options;
	}

	_search_images() {
		debugger
		var svalue = document.getElementById('searchValue').value.trim();
		var options = this._connect(svalue);
		var self = this;
		var data = [];
		request(options, function (err, res, body) {
			data = JSON.parse(body);
			this.setState({
				alldata: data.results || []
			})
			debugger
		}.bind(this));
		debugger
	}

	_like() {
		alert("dcdc");
		var id = document.getElementById('likeButton').value;
		debugger
		var options = {
			"url": "https://api.unsplash.com/photos/mlNn-DY7_nA/like",
			"method": "POST",
			"headers": {
				"content-type": "application/json",
				"authorization": "Bearer " + this.state.token
			}
		};
		var data = [];
		request(options, function (err, res, body) {
			alert(res.statusCode);
			body = JSON.parse(body);
			debugger
		}.bind(this));
	}

	_drop_down_change() {
		var svalue = document.getElementById('dropdown').value;
		var options = this._connect(svalue);
		var self = this;
		var data = [];
		request(options, function (err, res, body) {
			data = JSON.parse(body);
			this.setState({
				alldata: data.results || []
			})

		}.bind(this));
		debugger
	}
	_log_in_show() {
		this.setState({
			showDetailsPage: false,
			showLogInPage: true
		})
	}

	_log_in(e) {
		e.preventDefault();
		var baseURL = "https://unsplash.com/oauth/authorize?client_id=bb900432e136eac6fa4c3756fdc03890f89c0e906ab7a45f70cde39302eb304f&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections";

		window.location = baseURL;
		var url;
		url = window.location.href;
		var nurl = new URL(url);
		var c;
		c = nurl.searchParams.get("code");
		alert(c);

	}

	_log_in_n() {

		var url;
		url = window.location.href;
		var nurl = new URL(url);
		var c;
		c = nurl.searchParams.get("code");
		//Get Bearer Token
		var data = {
			"client_id": 'bb900432e136eac6fa4c3756fdc03890f89c0e906ab7a45f70cde39302eb304f',
			"client_secret": '624eba03498b743a66ce9a7b7b92be58cc1ab4e6332a280460a6ff2647b13197',
			"redirect_uri": 'http://localhost:3000',
			"code": c,
			"grant_type": 'authorization_code'
		};
		var options = {
			"url": "https://unsplash.com/oauth/token",
			"method": "POST",
			"headers": {
				"content-type": "application/json",
			},
			"body": JSON.stringify(data)
		};

		var data = [];
		request(options, function (err, res, body) {

			data = JSON.parse(body);
			this.setState({
				token: data.access_token
			})
			debugger
			this._find_user();
		}.bind(this));

	}
	
	_find_user(){
	
		//Get User Details
		var options = {
			"url": "https://api.unsplash.com/me",
			"method": "GET",
			"headers": {
				"content-type": "application/json",
				"authorization": "Bearer " + this.state.token
			}
		};
		var data = [];
		request(options, function (err, res, body) {

			data = JSON.parse(body);
			this.setState({
				 username: data.username
			})
			debugger
		}.bind(this));
	
	}
	

	render() {
		if (this.state.alldata.length == 0) {
			return ''
		}
		// debugger
		return (
			<div>
				<div className="container">
					<div className="">
					</div>
					<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ postion: 'fixed' }}>
						<a className="navbar-brand" href="#">ImagesBazzar</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<Router >
								<div>
									<ul className="navbar-nav mr-auto">
										<li className="nav-item active">
											<a className="nav-link " href="#">
												<Link to="/" style={{ textDecoration: 'none', color: 'black', marginTop: '50' }} >Home</Link>
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link ">
												<Link to="/collection" style={{ textDecoration: 'none', color: 'black', marginTop: '50' }} >Collection</Link>
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link " href="#">
												<Link to="/collection" style={{ textDecoration: 'none', color: 'black', marginTop: '50' }} >Photo</Link></a>
												
										</li>
									</ul>
									<Route exact path="/" component={ Details } />
									<Route path="/collection" component={Collection} />
									

								</div>
							</Router>
							<select className="form-control"
								id="dropdown"
								onChange={this._drop_down_change.bind(this)}>

								{this.state.collections.map((item) => {
									return (
										<option key={item.id}>{item.title}</option>)
								})
								}
							</select>

							<input className="form-control mr-sm-2" type="text" placeholder="Search" id="searchValue" aria-label="Search" />
							<button className="btn btn-outline-success my-2 my-sm-0" onClick={this._search_images.bind(this)} >Search</button>
							<button className="btn btn-success" onClick={this._log_in.bind(this)} logIn={this._log_in}>Log In</button>
							<button className="btn btn-success" onClick={this._log_in_n.bind(this)} logIn={this._log_in}>Log In2</button>
							<a href="#">{ this.state.username}</a>
						</div>
					</nav>

				</div>
				<div className="container">
					<div className="jumbotron">
						<h1 style={{ color: '#4E4E4E', fontSize: 50, fontWeight: 'bolder' }}>Total Photos {this.state.total}</h1>
						{/* <br/><h1>Pages {this.state.total_pages}</h1> */}
					</div>
				</div>
				<Details alldata={this.state.alldata} show={this.state.showDetailsPage} likeB={this._like.bind(this)} />
				<LogIn show={this.state.showLogInPage} />
			</div>
		)
	}
}
