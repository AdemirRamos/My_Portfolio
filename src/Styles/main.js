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
`;

export const Bar = styled.p`
	border-top: 1px solid white;
	width: 96.5vw;
	padding-bottom: 4px;
`;

export const Header = styled.header`
	background-color: black;
	width: 97.8vw;
	height: 90px;
	padding: 15px;

	div {
		position: absolute;
		right: 25px;
		top: 93px;

		a {
			color: #bbb;
			padding-left: 15px;

			&:hover {
				color: white;
			}
		}
	}

	.head {
		background-color: red;
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
	}
`;
