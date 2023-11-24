let url = 'https://75750e17-4c6f-43f1-9a65-e4290c99700a.mock.pstmn.io/stations';
let radioList = document.getElementById('radioList');


async function getData() {
    const response = await fetch(url)
    const names = await response.json()
    names.forEach((el) => {
        getStreamUrl(el.slug);
    })
}

async function getStreamUrl(slug) {
    const response = await fetch(`${url}/${slug}`)
    const link = await response.json()
    console.log(link.streamUrl);
    createElement(link.logo, link.name, link.tagline, link.streamUrl);
}

function createElement(logo, name, tagline, link) {
    const newListElement = document.createElement('li');
    newListElement.classList.add('radio-station');

    const newImgElement = document.createElement('img');
    newImgElement.setAttribute('src', logo);
    newImgElement.setAttribute('alt', name)
    newListElement.appendChild(newImgElement);

    const newTextSectionElement = document.createElement('div');
    newTextSectionElement.classList.add('list-text-section');
    newListElement.appendChild(newTextSectionElement);

    const newH2Element = document.createElement('h2');
    const newH3Element = document.createElement('h3');
    newH2Element.innerText = name;
    newH3Element.innerText = tagline;
    newTextSectionElement.appendChild(newH2Element);
    newTextSectionElement.appendChild(newH3Element);

    const newAnchorElement = document.createElement('a');
    newAnchorElement.setAttribute('href', link);
    newAnchorElement.setAttribute('target', '_blank');
    newListElement.appendChild(newAnchorElement);

    radioList.appendChild(newListElement);
}


getData();