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
import totalOverdose from '../../assets/total-overdose.jpg';
import metalGearSolid2 from '../../assets/metal-gear-solid-2.webp';
import grandTheftAutoViceCity from '../../assets/gta-vc.webp';
import residentEvil4 from '../../assets/resident-4.jpeg';
import needForSpeedMostWanted from '../../assets/need-most-wanted.jpeg';
import granTurismo4 from '../../assets/gran-turismo-4.webp';
import driverParallelLines from '../../assets/driver.jpg';
import pes2014 from '../../assets/pes-2014.jpg';
import midnightClub3 from '../../assets/midnigth-club-3.jpeg';
import pes2011 from '../../assets/pes-2011.jpg';
import bully from '../../assets/bully.jpg';
import guitarHeroIII from '../../assets/guitar-hero-3.jpg';
import bombaPath2024 from '../../assets/bomba-path.png';

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
    { id: 14, title: 'God of War 2', image: godOfWar2, link: 'https://drive.google.com/file/d/1Hmzj2uIhkoLcJE5PA834Can88q3CiJkC/view?usp=sharing', linkTorrent: ''  },
    { id: 15, title: 'Total Overdose', image: totalOverdose, link: 'https://drive.google.com/file/d/1zTbncbLjNeKGMmlOSMgu1H5EHKGKelTr/view?usp=sharing', linkTorrent: ''  },
    { id: 25, title: 'Bully', image: bully, link: 'https://drive.google.com/file/d/1QAn5yIZTHJ6bY0XYBl0NSwHYURu8KKtl/view?usp=sharing', linkTorrent: ''  },
    { id: 26, title: 'Guitar Hero III', image: guitarHeroIII, link: 'https://drive.google.com/file/d/1JHGLkOn5mHnQJ0e5eYL7gAyR1iW5bwx3/view?usp=share_link', linkTorrent: ''  },
    { id: 23, title: 'Midnight Club 3', image: midnightClub3, link: 'https://drive.google.com/file/d/1WiFDze1gPZ65ja7QjBo3-XCE1bHUEWzA/view?usp=sharing', linkTorrent: ''  },
    { id: 26, title: 'Bomba Path 2024', image: bombaPath2024, link: 'https://drive.google.com/file/d/1ih-lUk2qPbMC1w2OZSXmy8b2qGASRhRr/view?usp=sharing', linkTorrent: ''  },
    { id: 24, title: 'PES 2011', image: pes2011, link: 'https://drive.google.com/file/d/1CU4PodMSQ_X6p8pKDadBkdAIfCiNsOuI/view?usp=share_link', linkTorrent: ''  },
    { id: 16, title: 'Metal Gear Solid 2', image: metalGearSolid2, link: 'https://drive.google.com/file/d/165BX5BqrKuVQK_crhR3lshUC45wgzZ3G/view?usp=sharing', linkTorrent: ''  },
    { id: 17, title: 'Grand Theft Auto: Vice City', image: grandTheftAutoViceCity, link: 'https://drive.google.com/file/d/1IY1cwanUPJv2UaSJx6ecABP6yxDP1s49/view?usp=sharing', linkTorrent: ''  },
    { id: 18, title: 'Resident Evil 4', image: residentEvil4, link: 'https://drive.google.com/file/d/1AE2numUgDROl6oxIY5u_1CIl25BXM3ZQ/view?usp=sharing', linkTorrent: ''  },
    { id: 22, title: 'PES 2014', image: pes2014, link: 'https://drive.google.com/file/d/1qzdZcOtn0rNE99M-znBJyBxy4GxMOpBb/view?usp=sharing', linkTorrent: ''  },
    { id: 20, title: 'Gran Turismo 4', image: granTurismo4, link: 'https://drive.google.com/file/d/1jGp61ScxVHz-rMfwOGYwtfX4kiso5dSH/view?usp=sharing', linkTorrent: ''  },
    { id: 19, title: 'Need for Speed Most Wanted', image: needForSpeedMostWanted, link: 'https://drive.google.com/file/d/1vM0xTwr8a3GEZvof_LIxxYF4dC4FyoCt/view?usp=sharing', linkTorrent: ''  },
    { id: 21, title: 'Driver - Parallel Lines', image: driverParallelLines, link: 'https://drive.google.com/file/d/1ih-lUk2qPbMC1w2OZSXmy8b2qGASRhRr/view?usp=sharing', linkTorrent: ''  },
];

export default games;