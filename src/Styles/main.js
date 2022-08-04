import styled from 'styled-components'

/*

	Colours:

	Blue: #2274A5;
	Purple: #D741A7;
	Green: #43B929;
	Orange: #F3B61F;
	Beige: #D8A48F;

*/

export const Title = styled.h1`
	background-color: black;
	font-family: 'Honey Script', 'Honey Script Bold', cursive;
	color: white;
	width: 96vw;
	margin: -5px 0 0 0;

	@media screen and (min-width: 300px) and (max-width: 600px) {
		text-align: center;
		margin-left: 20px;
	}
`;

export const Bar = styled.p`
	border-top: 1px solid white;
	width: 96.5vw;
	padding-bottom: 4px;

	@media screen and (min-width: 300px) and (max-width: 600px) {
		width: 108vw;
	}

	@media screen and (min-width: 601px) and (max-width: 830px) {
		width: 93vw;
	}
`;

export const Header = styled.header`
	background-color: black;
	width: 97.8vw;
	height: 90px;
	padding: 15px;

	.git {
		@media screen and (min-width: 300px) and (max-width: 600px) {
			font-size: 22px;
			margin-left: 121px;
		}

		@media screen and (min-width: 601px) and (max-width: 830px) {
			font-size: 21px;
			position: absolute;
			top: 85px;
			left: 20px;
		}
	}

	@media screen and (min-width: 300px) and (max-width: 600px) {
		height: 165px;
	}

	div {
		position: absolute;
		right: 25px;
		top: 93px;

		@media screen and (min-width: 300px) and (max-width: 600px) {
			top: 123px;
		}

		@media screen and (min-width: 601px) and (max-width: 830px) {
			top: 85px;
		}

		a {
			color: #bbb;
			padding-left: 15px;

			&:hover {
				color: white;
			}

			@media screen and (min-width: 300px) and (max-width: 600px) {
				display: block;
				font-size: 22px;
				margin-right: 48px;
				text-align: center;
			}

			@media screen and (min-width: 601px) and (max-width: 830px) {
				font-size: 21px;
			}
		}
	}

	a {
		color: #bbb;
		text-decoration: none;
		font-weight: bold;

		&:hover {
			color: white;
		}
	}

	@media screen and (min-width: 300px) and (max-width: 600px) {
		width: 107.5vw;
	}
`;

export const Body = styled.main`
	background-color: #D741A7;
	height: 81vh;
	width: 100vw;
	display: flex;
	justify-content: center;

	p {
		color: white;
		font-weight: bold;
		text-shadow: 1px 1px 1px black;
		height: 150px;
		width: 400px;
		text-align: center;
		margin-right: 200px;
		margin-top: 160px;

		@media screen and (min-width: 300px) and (max-width: 600px) {
			width: 300px;
			margin-left: 28px;
			margin-bottom: 60px;
			margin-top: -35px;
			font-size: 21px;
			text-shadow: 2px 2px 2px black;
		}

		@media screen and (min-width: 601px) and (max-width: 830px) {
			padding-left: 50px;
			text-shadow: 2px 2px 2px black;
			margin-right: 125px;
		}
	}

	img {
		height: 200px;
		width: 200px;
		border-radius: 50%;
		margin-top: 120px;
		border: 5px solid black;

		&:hover {
			cursor: pointer;
		}

		@media screen and (min-width: 300px) and (max-width: 600px) {
			margin-left: 83px;
			margin-bottom: 5px;
		}

		@media screen and (min-width: 601px) and (max-width: 830px) {
			margin-right: 53px;
		}
	}

	@media screen and (min-width: 300px) and (max-width: 600px) {
		flex-direction: column;
		width: 117.5vw;
		height: 110vh;
	}
`;
