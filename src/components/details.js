import React, { Component } from 'react';
import { Img } from '../components/img';

export class Details extends Component {
	render() {
		if (this.props.show === true) {
			debugger
			return (
				<div className="container">
					<div className="row ">
						{
							this.props.alldata.map((x) => {
								return (
									<div className="col-sm-3" key={x.id}>
										<div className="card">
											<div className="card-body">
												<p className="card-text">This image is in the middle</p>
											</div>

											<Img src={x.urls.raw} height={270} width={300} />

											<div className="card-body">
												<button value={x.id} id="likeButton" onClick={this.props.likeB} className="btn btn-primary" style={{ fontSize: 10 }}>Likes {x.likes}</button>											</div>

										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			)
		}
		return '';
	}
}