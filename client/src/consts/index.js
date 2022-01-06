import {
  pirates,
  titanic,
  whitehousedown,
  spiderman,
  django,
  getsmart,
  rockstart,
  killbill,
  avatar,
  jumpstreet,
} from "../assets/questionnaireimages/movies";

import {
  ChristopherNolan,
  CoenBrothers,
  DavidFincher,
  JamesCameron,
  MartinScorsese,
  PeterJackson,
  StanleyCubrick,
  StevenSpielberg,
  WoodyAllen,
  QuentinTarantino,
} from "../assets/questionnaireimages/directors";

import {
  AlPacino,
  AngelinaJolie,
  BradPitt,
  DenzelWashington,
  JeffBridges,
  JuliaRoberts,
  MorganFreeman,
  RobertDeNiro,
  SeanPenn,
  TomHanks,
} from "../assets/questionnaireimages/actors";

import {
  action,
  adventure,
  comedy,
  fantasy,
  drama,
  horror,
  romance,
  sciencefiction,
  thriller,
  western,
} from "../assets/questionnaireimages/genres";

export const movies = [
  {
    id: 1,
    name: "Pirates of the Caribbean",
    img: pirates,
  },
  { id: 2, name: "Titanic", img: titanic },
  { id: 3, name: "The Amazing Spider-Man", img: spiderman },
  { id: 4, name: "White House Down", img: whitehousedown },
  { id: 5, name: "Django Unchained", img: django },
  { id: 6, name: "Get Smart", img: getsmart },
  { id: 7, name: "Kill Bill: Vol. 2", img: killbill },
  { id: 8, name: "22 Jump Street", img: jumpstreet },
  { id: 9, name: "Rock Star", img: rockstart },
  { id: 10, name: "Avatar", img: avatar },
];

export const directors = [
  { id: 1, name: "James Cameron", img: JamesCameron },
  { id: 2, name: "Martin Scorsese", img: MartinScorsese },
  { id: 3, name: "Quentin Tarantino", img: QuentinTarantino },
  { id: 4, name: "Steven Spielberg", img: StevenSpielberg },
  { id: 5, name: "Christopher Nolan", img: ChristopherNolan },
  { id: 6, name: "The Coen Brothers", img: CoenBrothers },
  { id: 7, name: "Stanley Cubrick", img: StanleyCubrick },
  { id: 8, name: "Woody Allen", img: WoodyAllen },
  { id: 9, name: "Peter Jackson", img: PeterJackson },
  { id: 10, name: "David Fincher", img: DavidFincher },
];

export const actors = [
  { id: 1, name: "Robert De Niro", img: RobertDeNiro },
  { id: 2, name: "Al Pacino", img: AlPacino },
  { id: 3, name: "Tom Hanks", img: TomHanks },
  { id: 4, name: "Sean Penn", img: SeanPenn },
  { id: 5, name: "Brad Pitt", img: BradPitt },
  { id: 6, name: "Morgan Freeman", img: MorganFreeman },
  { id: 7, name: "Denzel Washington", img: DenzelWashington },
  { id: 8, name: "Julia Roberts", img: JuliaRoberts },
  { id: 9, name: "Jeff Bridges", img: JeffBridges },
  { id: 10, name: "Angelina Jolie", img: AngelinaJolie },
];

export const genres = [
  { id: 1, name: "Action", img: action },
  { id: 2, name: "Comedy", img: comedy },
  { id: 3, name: "Drama", img: drama },
  { id: 4, name: "Science Fiction", img: sciencefiction },
  { id: 5, name: "Horror", img: horror },
  { id: 6, name: "Fantasy", img: fantasy },
  { id: 7, name: "Romance", img: romance },
  { id: 8, name: "Thriller", img: thriller },
  { id: 9, name: "Western", img: western },
  { id: 10, name: "Adventure", img: adventure },
];
