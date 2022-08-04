import abradolflincler from "./img/abradolflincler.jpeg";
import abudangoclusterprincess from "./img/abudangoclusterprincess.jpeg";
import adjudicatorrick from "./img/adjudicatorrick.jpeg";
import agencydirector from "./img/agencydirector.jpeg";
import alanrails from "./img/alanrails.jpeg";
import alberteinstein from "./img/alberteinstein.jpeg";
import alexander from "./img/alexander.jpeg";
import aliengoogah from "./img/aliengoogah.jpeg";
import alienrick from "./img/alienrick.jpeg";
import alienmorty from "./img/alienmorty.jpeg";
import amishcyborg from "./img/amishcyborg.jpeg";
import annie from "./img/annie.jpeg";
import antennamorty from "./img/antennamorty.jpeg";
import antsinmyeyesjohnson from "./img/antsinmyeyesjohnson.jpeg";
import bethsmith from "./img/bethsmith.jpeg";
import jerrysmith from "./img/jerrysmith.jpeg";
import mortysmith from "./img/mortysmith.jpeg";
import ricksanchez from "./img/ricksanchez.jpeg";
import summersmith from "./img/summersmith.jpeg";

const cards = [];

const cardCreator = (text, image) => {
  const card = {};
  card.text = text;
  card.image = image;
  card.id = cards.length;
  cards.push(card);
};

cardCreator("Abradolf Lincler", abradolflincler);
cardCreator("Abadango Cluster Princess", abudangoclusterprincess);
cardCreator("Adjudicator Rick", adjudicatorrick);
cardCreator("Agency Director", agencydirector);
cardCreator("Alan Rails", alanrails);
cardCreator("Albert Einstein", alberteinstein);
cardCreator("Alexander", alexander);
cardCreator("Alien Googah", aliengoogah);
cardCreator("Alien Rick", alienrick);
cardCreator("Alien Morty", alienmorty);
cardCreator("Amish Cyborg", amishcyborg);
cardCreator("Annie", annie);
cardCreator("Antenna Morty", antennamorty);
cardCreator("Ants in my Eyes Johnson", antsinmyeyesjohnson);
cardCreator("Beth Smith", bethsmith);
cardCreator("Jerry Smith", jerrysmith);
cardCreator("Morty Smith", mortysmith);
cardCreator("Rick Sanchez", ricksanchez);
cardCreator("Summer Smith", summersmith);

export default cards;
