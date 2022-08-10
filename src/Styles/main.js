import styled from 'styled-components'

/*

	Colours:

	Blue: #2274A5;
	Purple: #D741A7;
	Green: #43B929;
	Orange: #F3B61F;
	Beige: #D8A48F;

*/

export const Header = styled.header`
	background-color: black;
	width: 97.8vw;
	height: 90px;
	padding: 15px;

	@media screen and (min-width: 300px) and (max-width: 440px) {
		width: 96%;
		height: 135px;
		padding-right: 8px;
	}

	@media screen and (min-width: 441px) and (max-width: 510px) {
		width: 96%;
		height: 135px;
		padding-right: 11px;
	}

	@media screen and (min-width: 511px) and (max-width: 585px) {
		width: 96%;
		height: 135px;
		padding-right: 14px;
	}

	@media screen and (min-width: 586px) and (max-width: 675px) {
		width: 96%;
		height: 135px;
		padding-right: 17px;
	}

	@media screen and (min-width: 676px) and (max-width: 765px) {
		width: 96%;
		height: 135px;
		padding-right: 20px;
	}

	@media screen and (min-width: 766px) and (max-width: 800px) {
		width: 96%;
		height: 135px;
		padding-right: 30px;
	}

	.git {
		@media screen and (min-width: 300px) and (max-width: 800px) {
			display: flex;
			justify-content: center;
		}
	}

	div {
		position: absolute;
		right: 25px;
		top: 93px;

		@media screen and (min-width: 300px) and (max-width: 350px) {
			position: relative;
			right: 2%;
			top: 5%;
		}

		@media screen and (min-width: 350px) and (max-width: 375px) {
			position: relative;
			right: 2%;
			top: 5%;
		}

		@media screen and (min-width: 376px) and (max-width: 440px) {
			position: relative;
			right: 2%;
			top: 5%;
		}

		@media screen and (min-width: 441px) and (max-width: 500px) {
			position: relative;
			right: 1.3%;
			top: 5%;
		}

		@media screen and (min-width: 501px) and (max-width: 564px) {
			position: relative;
			right: 1.3%;
			top: 5%;
		}

		@media screen and (min-width: 565px) and (max-width: 730px) {
			position: relative;
			right: 1%;
			top: 5%;
		}

		@media screen and (min-width: 731px) and (max-width: 770px) {
			position: relative;
			right: 1%;
			top: 5%;
		}

		@media screen and (min-width: 771px) and (max-width: 800px) {
			position: relative;
			right: 1%;
			top: 5%;
		}

		@media screen and (min-width: 300px) and (max-width: 800px) {
			margin-top: -5px;
		}

		a {
			color: #bbb;
			padding-left: 15px;

			&:hover {
				color: white;
			}

			@media screen and (min-width: 300px) and (max-width: 800px) {
				display: flex;
				justify-content: center;
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
`;

export const Bar = styled.p`
	border-top: 1px solid white;
	width: 96.5vw;
	padding-bottom: 4px;

	@media screen and (min-width: 300px) and (max-width: 800px) {
		width: 97%;
	}
`;

export const Title = styled.h1`
	background-color: black;
	font-family: 'Honey Script', 'Honey Script Bold', cursive;
	color: white;
	width: 96vw;
	margin: -5px 0 0 0;

	@media screen and (min-width: 300px) and (max-width: 800px) {
		display: flex;
		justify-content: center;
		width: 100%;
	}
`;

export const Body = styled.main`
	background-color: #D741A7;
	height: 81vh;
	width: 100vw;
	display: flex;
	justify-content: center;

	@media screen and (min-width: 300px) and (max-width: 795px) {
		width: 100%;
		padding-right: 8px;
	}

	@media screen and (min-width: 796px) and (max-width: 850px) {
		width: 100%;
		padding-right: 11px;
	}

	@media screen and (min-width: 300px) and (max-width: 699px) {
		flex-direction: column;
	}

	p {
		color: white;
		font-weight: bold;
		text-shadow: 1px 1px 1px black;
		height: 150px;
		width: 400px;
		text-align: center;
		margin-right: 200px;
		margin-top: 160px;

		@media screen and (min-width: 300px) and (max-width: 450px) {
			width: 230px;
			margin-top: -50px;
			margin-bottom: 30px;
			margin-right: auto;
			margin-left: auto;
		}

		@media screen and (min-width: 451px) and (max-width: 699px) {
			margin-top: -60px;
			margin-bottom: -5px;
			margin-right: auto;
			margin-left: auto;
		}

		@media screen and (min-width: 700px) and (max-width: 799px) {
			width: 350px;
			margin-top: 165px;
			margin-right: auto;
			margin-left: auto;
		}

		@media screen and (min-width: 800px) and (max-width: 850px) {
			width: 350px;
			margin-top: 160px;
			margin-left: 30px;
			margin-right: 150px;
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

		@media screen and (min-width: 300px) and (max-width: 449px) {
			margin-top: 30px;
			margin-right: auto;
			margin-left: auto;
		}

		@media screen and (min-width: 450px) and (max-width: 699px) {
			margin-top: 30px;
			margin-right: auto;
			margin-left: auto;
		}

		@media screen and (min-width: 700px) and (max-width: 850px) {
			margin-top: 120px;
			margin-right: auto;
			margin-left: auto;
		}
	}
`;
