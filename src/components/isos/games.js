import needForSpeed from '../../assets/need-under-2.jpeg';
import shadowOfTheColossus from '../../assets/shadow-of-the-colossus.jpeg';
import redDeadRevolver from '../../assets/red-dead-revolver.jpg';
import spiderMen2 from '../../assets/spider-man-2.jpg';
import sniperElite from '../../assets/sniper-elite.jpg';
import needForSpeedUnderground from '../../assets/need-under-1.jpeg';
import fifa13 from '../../assets/fifa-13.jpg';
import grandTheftAutoIII from '../../assets/gta-3.jpeg';
import metalSlugAnthology from '../../assets/metal-slug-anthology.jpeg';
import black from '../../assets/black.jpg';
import callOfDuty3 from '../../assets/call-of-duty-3.jpeg';
import gow from '../../assets/god-of-war.jpeg';
import gtaSA from '../../assets/gta-sa.webp';
import godOfWar2 from '../../assets/god-of-war-2.jpeg';

const games = [
    { id: 1, title: 'Need for Speed Underground 2', image: needForSpeed, link: 'https://drive.google.com/file/d/11mW64yMp8M8CjvXu6QMo1FLh6V4aL5P9/view?usp=share_link', linkTorrent: '' },
    { id: 2, title: 'Shadow Of The Colossus', image: shadowOfTheColossus, link: 'https://drive.google.com/file/d/1xs2QiA8nEf4rHxK71-sWuxhu7fOZAJAv/view?usp=share_link', linkTorrent: 'https://utweb.rainberrytv.com/gui/share.html#link=magnet%3A%3Fxt%3Durn%3Abtih%3Abab12a4f5cc118cc42bede6bf7800541ccdd5bb5%26dn%3DShadow%2520of%2520the%2520Colossus%2520(USA).iso%26tr%3Dudp%253a%252f%252ftracker.openbittorrent.com%253a80%252fannounce%26tr%3Dudp%253a%252f%252ftracker.opentrackr.org%253a1337%252fannounce'  },
    { id: 3, title: 'Red Dead Revolver', image: redDeadRevolver, link: 'https://drive.google.com/file/d/1dNw2aaGVHqPMp-tgm2Tr0UOI_M8eJGEW/view?usp=share_link', linkTorrent: 'https://utweb.rainberrytv.com/gui/share.html#link=magnet%3A%3Fxt%3Durn%3Abtih%3Af81a27192e0ca0fa37eaef0e0570e597a90b3117%26dn%3DRed%2520Dead%2520Revolver%2520(USA).iso%26tr%3Dudp%253a%252f%252ftracker.openbittorrent.com%253a80%252fannounce%26tr%3Dudp%253a%252f%252ftracker.opentrackr.org%253a1337%252fannounce'  },
    { id: 4, title: 'Spider-Man 2', image: spiderMen2, link: 'https://drive.google.com/file/d/19aGNJLZciPXYrvfz4C0iZkj7ScA6RFl5/view?usp=share_link', linkTorrent: 'https://utweb.rainberrytv.com/gui/share.html#link=magnet%3A%3Fxt%3Durn%3Abtih%3Aacd28aa7a207b6e39bc614209337e8ea1b44efdb%26dn%3DSpider-Man%25202%2520(USA).iso%26tr%3Dudp%253a%252f%252ftracker.openbittorrent.com%253a80%252fannounce%26tr%3Dudp%253a%252f%252ftracker.opentrackr.org%253a1337%252fannounce'  },
    { id: 5, title: 'Sniper Elite', image: sniperElite, link: 'https://drive.google.com/file/d/17JzEBMKyUjMCBH31EKgo_pvhfqFzkIoL/view?usp=share_link', linkTorrent: 'https://utweb.rainberrytv.com/gui/share.html#link=magnet%3A%3Fxt%3Durn%3Abtih%3A4978802f3843e5637344fbf88bbc2abe55e5e969%26dn%3DSniper%2520Elite%2520(USA).iso%26tr%3Dudp%253a%252f%252ftracker.openbittorrent.com%253a80%252fannounce%26tr%3Dudp%253a%252f%252ftracker.opentrackr.org%253a1337%252fannounce'  },
    { id: 6, title: 'Need For Speed Underground', image: needForSpeedUnderground, link: 'https://drive.google.com/file/d/1TpvpxGHnv7zSbeVP9_1OjL_3fKxHlK92/view?usp=sharing', linkTorrent: ''  },
    { id: 7, title: 'Fifa 13', image: fifa13, link: 'https://drive.google.com/file/d/1UUsW0JzTxOOKkSrQ7GOq4rxADJ64on0N/view?usp=sharing', linkTorrent: ''  },
    { id: 8, title: 'Grand Theft Auto III', image: grandTheftAutoIII, link: 'https://drive.google.com/file/d/1xz0QAYEin20puSZ5CzMFZkEuM-3TaYHI/view?usp=sharing', linkTorrent: ''  },
    { id: 9, title: 'Metal Slug Anthology', image: metalSlugAnthology, link: 'https://drive.google.com/file/d/1CHQDjI0mcWakW_0XtacTvqhE4GwYStJb/view?usp=sharing', linkTorrent: ''  },
    { id: 10, title: 'Black', image: black, link: 'https://drive.google.com/file/d/186h0zFWqDVJ3C_TG1rGugxrpR7AtoLkN/view?usp=sharing', linkTorrent: ''  },
    { id: 11, title: 'Call Of Duty 3', image: callOfDuty3, link: 'https://drive.google.com/file/d/1r4UkNoyAn3ImuQSdAuXYB2ZZFdqhm9ef/view?usp=sharing', linkTorrent: ''  },
    { id: 12, title: 'God of War', image: gow, link: 'https://drive.google.com/file/d/1PMPW4y5ugwGQDuvxKAiUb6hlJifQkUGt/view?usp=sharing', linkTorrent: 'https://utweb.rainberrytv.com/gui/share.html#link=magnet%3A%3Fxt%3Durn%3Abtih%3Ad992e3febca77d94ca248cb678e9c758be7de4d1%26dn%3DGod%2520of%2520War%2520(USA).iso.zip%26tr%3Dudp%253a%252f%252ftracker.openbittorrent.com%253a80%252fannounce%26tr%3Dudp%253a%252f%252ftracker.opentrackr.org%253a1337%252fannounce'  },
    { id: 13, title: 'Grand Theft Auto San Andreas', image: gtaSA, link: 'https://drive.google.com/file/d/1nXU60GTWfEwGMM00rgy5n30ft0zo9vqB/view?usp=share_link', linkTorrent: 'https://utweb.rainberrytv.com/gui/share.html#link=magnet%3A%3Fxt%3Durn%3Abtih%3A6d7f1e93212cda11f2ba5ab024f0af5074fba3cf%26dn%3DGrand%2520Theft%2520Auto%2520-%2520San%2520Andreas%2520(USA)%2520(v3.00).iso%26tr%3Dudp%253a%252f%252ftracker.openbittorrent.com%253a80%252fannounce%26tr%3Dudp%253a%252f%252ftracker.opentrackr.org%253a1337%252fannounce' },
    { id: 11, title: 'God of War 2', image: godOfWar2, link: 'https://drive.google.com/file/d/1Hmzj2uIhkoLcJE5PA834Can88q3CiJkC/view?usp=sharing', linkTorrent: ''  },
];

export default games;