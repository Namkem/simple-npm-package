const lyrics		= ['Trrr Stibidi', 'Dop Dop Dop Dop Dop', 'Yes Yes Yes Yes', 'Shtib Shtibidi Dip Dibidi', 'Wwww Yes Yes Yes Yes'];
const alreadySung	= [];
const lyricsBoard	= document.createElement('div');

var line			= 0;

const singMeASong = () => {
	if (line == 0) {
		document.body.appendChild(lyricsBoard);
	}
	if (line < lyrics.length) {
		alreadySung.push(lyrics[line ++]);
		lyricsBoard.innerText(alreadySung.join("<br />"));
		setTimeout(singMeASong, 1000);
	}
}

export default singMeASong;