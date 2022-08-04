import styled from 'styled-components'

/*

	Colours:

	Blue: #2274A5;
	Purple: #D741A7;
	Green: #43B929;
	Orange: #F3B61F;
	Beige: #D8A48F;
	
	476px == 76vh | 1305 == 100 vw.

*/

export const Project = styled.main`
	background-color: #2274A5;
	width: 100.1vw;
	height: 76vh;
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
		margin-right: 280px;
		margin-left: -5px;
		margin-top: 75px;
	}

	div {
		height: 170px;
		width: 300px;
		margin-right: 180px;
		margin-top: 140px;
		padding: 15px;
		color: white;
		text-shadow: 1px 1px 1px black;
		font-weight: bolder;
		text-align: center;
	}

	section {
		display: flex;
		flex-wrap: wrap;
		height: 100px;
		width: 250px;
	}

	.extra-margin {
		margin-top: 20px;
	}

	.text-adjustment1 {
		width: 320px;
		margin-right: 160px;
	}

	.extra-margin1 {
		margin-top: 55px;
	}

	.text-adjustment2 {
		margin-right: 120px;
		margin-top: 90px;
		height: 200px;
		width: 400px;
		margin-left: -30px;
	}

	.extra-margin2 {
		margin-top: 60px;
	}

	.text-adjustment3 {
		margin-top: 165px;
	}

	.extra-margin3 {
		margin-top: 40px;
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
