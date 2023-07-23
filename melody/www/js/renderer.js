const songType = 'songs'
const playlistType = 'playlists'
const searchType = 'search'
const settingsType = 'settings'

let frameType = songType

window.onload = () => { changeFrame(songType); }

function changeFrame(type) {
    let scroller = ocument.getElementById('scroller');
    frameType = type;

    console.log("changeFrame");
    switch(type) {
        case songType:
            /* Loads all songs */
            //...

            let newDiv = document.createElement("div");
            newDiv.innerHTML = "Nouveau texte ajouté";
            scroller.appendChild(newDiv);
            break;
        case playlistType:
            break;
        case searchType:
            break;
        case settingsType:
            break;
    }
}

function onClickedSongs() {
    changeFrame(songType);
}

function onClickedPlaylist() {
    changeFrame(playlistType);
}

function onClickedSearch() {
    changeFrame(searchType);
}

function onClickedSettings() {
    changeFrame(settingsType);
}