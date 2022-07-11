import styled from 'styled-components'

/*

	Colours:

	Blue: #2274A5;
	Purple: #D741A7;
	Green: #43B929;
	Orange: #F3B61F;
	Beige: #D8A48F;

*/

export const Routes = styled.main`
	background-color: #2274A5;
	width: 100vw;
	height: 92vh;
	display: flex;
	padding: 15px 0;

	p {
		margin: 0;
		padding: 15px;
		height: 40px;
		width: 300px;
		border-radius: 15px;
		color: white;
		text-shadow: 2px 2px 2px black;
		font-weight: bolder;
		font-size: 24px;
		text-align: center;
		margin-right: 130px;
		margin-left: 15px;
		margin-top: 125px;
	}

	div {
		height: 170px;
		width: 300px;
		margin-right: 180px;
		margin-top: 70px;
		padding: 15px;
		color: white;
		text-shadow: 1px 1px 1px black;
		font-weight: bolder;
		text-align: center;

		&:hover {
			cursor: pointer;
		}
	}

	section {
		display: flex;
		flex-wrap: wrap;
		height: 100px;
		width: 250px;
	}

	span {
		color: white;
		text-shadow: 1px 1px 1px black;
		font-weight: bolder;
		text-align: center;
		margin-bottom: 5px;
		width: 210px;
	}

	img {
		height: 360px;
		width: 700px;
		border-radius: 15px;
		height: 50px;
		width: 50px;
		margin-right: 15px;
		padding: 5px;
	}
`;
