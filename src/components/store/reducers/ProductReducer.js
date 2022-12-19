import couscous from './imagePro/couscous.webp';
import cremefr from './imagePro/crème frèche.jpg';
import crème from './imagePro/crème.webp';
import fromage from './imagePro/fromage.jpg';
import aif from './imagePro/aif_ifrane.jpg';
import ain from './imagePro/ain saiss.jpg';
import anchois from './imagePro/anchois.jpg';
import asta from './imagePro/asta.jpg';
import bad from './imagePro/badaouia.jpg';
import pavot from './imagePro/baguette aux pavot.jpg';
import semoule from './imagePro/baguette semoule.jpg';
import crereal from './imagePro/barre crereal.jpg';
import be from './imagePro/be.jpg';
import bellar from './imagePro/bellar.png';
import gervais from './imagePro/beurre gervais.jpg';
import boudoir from './imagePro/boudoir.jpg';
import cafMolu from './imagePro/café moulu.png';
import cafsoluble from './imagePro/café soluble.jpg';
import chapelur from './imagePro/chapelure.jpg';
import char from './imagePro/char.jpg';
import cola from './imagePro/cola.jpg';
import cremo from './imagePro/cremo.jpg';
import deodoran from './imagePro/deodoran.jpg';
import dsoin from './imagePro/douche soin.jpg';
import aquafina from './imagePro/eau aquafina.jpg';
import eyo from './imagePro/eyo.jpg';
import finou from "./imagePro/farine finou.jpg";
import fleur from "./imagePro/farine fleur.jpg";
import mais from "./imagePro/fleur de mais en poudre.jpg";
import frblan from "./imagePro/fromage blanc.jpg";
import frcrm from "./imagePro/fromage crème.jpg";
import gran from "./imagePro/fromage edam gran.jpg" ;
import edam from "./imagePro/fromage edam.jpg";
import orblan from "./imagePro/fromage fondu or blan.jpg";
import frfrai from "./imagePro/fromage frai.jpg";
import rape from "./imagePro/fromage rapé.jpg" ;
import geld from "./imagePro/geldouche.png" ;
import lesliq from "./imagePro/lessive liquide.jpg";
import lotus from "./imagePro/lotus.jpg";
import margarine from "./imagePro/margarine.jpg";
import omo from "./imagePro/omo.jpg";
import painbeldi from "./imagePro/pain beldi.jpg"; 
import mie from "./imagePro/pain de mie.jpg";
import pain from "./imagePro/paint.jpg";
import raibi from "./imagePro/raibi.jpg";
import saumon from "./imagePro/saumon.jpg";
import sevenup from "./imagePro/sevenup.jpg";
import surimi from "./imagePro/surimi.jpg";
import sultan from './imagePro/thé ver sultan.png';
import tide from './imagePro/tide.jpg';
import yoboi from './imagePro/yagourt boire.jpg';
import boire from './imagePro/yagourt à boire.jpg';
import COKA from './imagePro/COCA.jpeg';
import PEPSI from './imagePro/PEPSI.jpg';
import FANTA from './imagePro/FANTA.jpg';
import Croiss from './imagePro/croissant.jpg';
import PainSui from './imagePro/painSuisse.jpg';
import LaitFr from './imagePro/laitAuFraise.jpg';
import laitchoc from './imagePro/laitChocolat.jpg';
import oeufs from './imagePro/oeufs.jpg';
import spaghetti from './imagePro/spaghetti.png';
import rizBassm from './imagePro/riz.jpg';
import rizComp from './imagePro/rizComplet.jpg';
import bonbCar from './imagePro/bonbonCara.jpg';
import jusOr from './imagePro/boustane.jpg';
import ananas from './imagePro/ananas.jpg';
import bonbPo from './imagePro/bonbonPomme.jpg';
import flash from './imagePro/flash.jpg';
import fluffy from './imagePro/fluffy.jpg';
import bedon from './imagePro/bedonut.jpg';
import cake from './imagePro/cakeChoco.jpg';
import cakeFr from './imagePro/cakeFruit.jpg';
import barreCer from './imagePro/barre crereal.jpg';
import carrote from './imagePro/jusCarr.jpg';
import frapoccino from './imagePro/frapCara.jpg';
import liqu from './imagePro/liquideVissel.jpg';
import citr from './imagePro/citronVissele.jpg';
import main from './imagePro/mainvisselle.jpg';
import pate from './imagePro/pateLavante.jpg';
import dentif from './imagePro/dentifrice.jpg';
import dentif3d from './imagePro/dentifrice3d.jpg';
import bainbouche from './imagePro/bainbouche.jpg';
import shampo from './imagePro/shampooing.jpg';
import pastrami from './imagePro/pastrami en tranches.jpg';
import surimiroulé from './imagePro/surimiRoule.jpg';
import salami from './imagePro/salamibeuf.jpg';
import duosurimi from './imagePro/duosurimi.jpg';
import miette from './imagePro/miettedesauman.jpg';
import surimirape from './imagePro/surimirapé.jpg';


const initiState ={
    products : [
        {
            id : 1,
            productImg : couscous,
            productName : "couscous  ",
            productPrice : 16.20,
            productDetails : "couscous Dalia 500 g",
            categorie : "epicerie",
            isAOffre : true
        },
        {
            id : 2,
            productImg : crème,
            productName : "Crème fraîche  ",
            productPrice : 16.20,
            productDetails : `Crème JAOUDA 500ml `,
            categorie : "crémerie",
            isAOffre : true
        },
        {
            id : 3,
            productImg : fromage,
            productName : "Fromage à tartiner  ",
            productPrice : 20.20,
            productDetails : "16 units ",
            categorie : "fromage & charcuterie",
            isAOffre : true
        },
        {
            id : 4,
            productImg : aif,
            productName : "Aïn Ifrane Eau minérale   ",
            productPrice : 4.50,
            productDetails : "1.5 L",
            categorie : "eaux & boissons",
            isAOffre : true
        },
        {
            id : 5,
            productImg : ain,
            productName : "Aïn Saïss Eau minérale   ",
            productPrice : 5.95,
            productDetails : "2 L",
            categorie : "eaux & boissons",
            isAOffre : true
        },
        {
            id : 7,
            productImg : anchois,
            productName : "Anchois ",
            productPrice : 7.20,
            productDetails : "250 g",
            categorie : "produits de la mer",
            isAOffre : true
        },
        {
            id : 8,
            productImg : asta,
            productName : "Cafée Asta ",
            productPrice : 7.20,
            productDetails : "300 g",
            categorie : "caffé & thé",
            isAOffre : true
        },
        {
            id : 9,
            productImg : bad,
            productName : "Beurre BAAOUIA ",
            productPrice : 10.50,
            productDetails : "280 g",
            categorie : "crémerie",
            isAOffre : false
        },
        {
            id : 10,
            productImg : pavot,
            productName : "Baguette aux pavot ",
            productPrice : 2.90,
            productDetails : "100 g",
            categorie : "bolangerie",
            isAOffre : false
        },
        {
            id : 11,
            productImg : semoule,
            productName : "Baguette au semoule  ",
            productPrice : 2.85,
            productDetails : "100 g",
            categorie : "bolangerie",
            isAOffre : false
        },
        {
            id : 12,
            productImg : crereal,
            productName : "Barre au séreal  ",
            productPrice : 3.50,
            productDetails : "90 g",
            categorie : "biscuits & confiseries",
            isAOffre : false
        },
        {
            id : 13,
            productImg : be,
            productName : "Biscuit sèche Be ",
            productPrice : 13.50,
            productDetails : "130 g",
            categorie : "biscuits & confiseries",
            isAOffre : false
        },
        {
            id : 14,
            productImg : bellar,
            productName : "Thé vert BELLAR ",
            productPrice : 8.60,
            productDetails : "190 g",
            categorie : "caffé & thé",
            isAOffre : false
        },
        {
            id : 15,
            productImg : gervais,
            productName : "Beurre à l'ensienne GERVAIS ",
            productPrice : 17.60,
            productDetails : "200 g",
            categorie : "crémerie",
            isAOffre : false
        },
        {
            id : 16,
            productImg : boudoir,
            productName : "Boudoir au oeuf frais ",
            productPrice : 20.60,
            productDetails : "300 g",
            categorie : "biscuits & confiseries",
            isAOffre : false
        },
        {
            id: 17,
            productImg : cafMolu,
            productName : "Caffé moulu NESCAFE",
            productPrice : 20.60,
            productDetails : "300 g",
            categorie : "caffé & thé",
            isAOffre : false
        },
        {
            id: 18,
            productImg : cafsoluble,
            productName : "Caffé Soluble",
            productPrice : 25.60,
            productDetails : "500 g",
            categorie : "caffé & thé",
            isAOffre : false
        },
        {
            id: 19,
            productImg : chapelur,
            productName : "Chaplure ",
            productPrice : 25.60,
            productDetails : "250 g",
            categorie : "epécerie",
            isAOffre : false
        },
        {
            id: 20,
            productImg : char,
            productName : "Charcuterie dinde fumée ",
            productPrice : 40.60,
            productDetails : "250 g",
            categorie : "fromages & charcuteries",
            isAOffre : false
        },
        {
            id: 21,
            productImg : cola,
            productName : "Cola  ",
            productPrice : 6.60,
            productDetails : "260cl",
            categorie : "eau & boisson",
            isAOffre : false
        },
        {
            id: 22,
            productImg : cremo,
            productName : "Biscuit au chokolat  ",
            productPrice : 1.10,
            productDetails : "100 g",
            categorie : "bonbons & sucres",
            isAOffre : false
        },
        {
            id: 23,
            productImg : cremefr,
            productName : "Crème faîche  ",
            productPrice : 23.10,
            productDetails : "200 g",
            categorie : "crémerie",
            isAOffre : false
        },
        {
            id: 24,
            productImg : deodoran,
            productName : "Deodorants féminine ",
            productPrice : 16.20,
            productDetails : "120 cl",
            categorie : "hygiène et beauté",
            isAOffre : false
        },
        {
            id: 25,
            productImg : dsoin,
            productName : "Bain douche soin NIVEA ",
            productPrice : 17.20,
            productDetails : "250 cl",
            categorie : "hygiène et beauté",
            isAOffre : false
        },
        {
            id: 26,
            productImg : aquafina,
            productName : "Eau minérale AQUOIFINA ",
            productPrice : 26.30,
            productDetails : "50*16 cl",
            categorie : "eau & boisson",
            isAOffre : false
        },
        {
            id: 27,
            productImg : eyo,
            productName : "Biscuit au chokolat EYO ",
            productPrice : 2.20,
            productDetails : "100 g",
            categorie : "bonbons & sucres",
            isAOffre : false
        },
        {
            id: 28,
            productImg : finou,
            productName : "Farine Finout",
            productPrice : 90.60,
            productDetails : "560 g",
            categorie : "epécerie",
            isAOffre : false
        },
        {
            id: 29,
            productImg : fleur,
            productName : "Farine Fleur à patisserie",
            productPrice : 100.60,
            productDetails : "560 g",
            categorie : "epécerie",
            isAOffre : false
        },
        {
            id: 30,
            productImg : mais,
            productName : "Fleur de maîs en poudre",
            productPrice : 30.60,
            productDetails : "270 g",
            categorie : "epécerie",
            isAOffre : false
        },
        {
            id: 31,
            productImg : frblan,
            productName : "Fromage faîs blanc",
            productPrice : 70.60,
            productDetails : "150 g",
            categorie : "efromages & charcuteries",
            isAOffre : false
        },
        {
            id: 32,
            productImg : frcrm,
            productName : "Fromage crème",
            productPrice : 40.60,
            productDetails : "180 g",
            categorie : "efromages & charcuteries",
            isAOffre : false
        },
        {
            id: 33,
            productImg : gran,
            productName : "Fromage Edam",
            productPrice : 70.60,
            productDetails : "150 g",
            categorie : "efromages & charcuteries",
            isAOffre : false
        },
        {
            id: 34,
            productImg : edam,
            productName : "Fromage EDAME",
            productPrice : 180.60,
            productDetails : "150 g",
            categorie : "efromages & charcuteries",
            isAOffre : false
        },
        {
            id: 35,
            productImg : orblan,
            productName : "Fromage fondu OR BLANC",
            productPrice : 16.60,
            productDetails : "140 g",
            categorie : "crémerie",
            isAOffre : false
        },
        {
            id: 36,
            productImg : frfrai,
            productName : "Fromage fraî",
            productPrice : 18.60,
            productDetails : "130 g",
            categorie : "crémerie",
            isAOffre : false
        },
        {
            id: 37,
            productImg : rape,
            productName : "Fromage rapé",
            productPrice : 23.60,
            productDetails : "140 g",
            categorie : "crémerie",
            isAOffre : false
        },
        {
            id: 38,
            productImg : geld,
            productName : "Gel de douche ",
            productPrice : 24.60,
            productDetails : "230 cl",
            categorie : "hygiène et beauté",
            isAOffre : false
        },
        {
            id: 39,
            productImg : lesliq,
            productName : "Lessive liquide",
            productPrice : 36.60,
            productDetails : "250 cl",
            categorie : "hentretien & nettoyages",
            isAOffre : false
        },
        {
            id: 40,
            productImg : lotus,
            productName : "Biscuit sèche LOTUS",
            productPrice : 36.60,
            productDetails : "218 g",
            categorie : "bonbons & sucres",
            isAOffre : false
        },
        {
            id: 41,
            productImg : margarine,
            productName : "Margarine beurre à l'ansienne",
            productPrice : 38.60,
            productDetails : "270 g",
            categorie : "crémerie",
            isAOffre : false
        },
        {
            id: 42,
            productImg : omo,
            productName : "Lessive OMO",
            productPrice : 9.60,
            productDetails : "210 g",
            categorie : "entretien & nettoyages",
            isAOffre : false
        },
        {
            id: 43,
            productImg : painbeldi,
            productName : "Pain Beldi",
            productPrice : 3.60,
            productDetails : "130 g",
            categorie : "bolangerie",
            isAOffre : false
        },
        {
            id: 44,
            productImg : mie,
            productName : "Pain demie",
            productPrice : 30.20,
            productDetails : "270 g",
            categorie : "bolangerie",
            isAOffre : false
        },
        {
            id: 45,
            productImg : pain,
            productName : "Pain ",
            productPrice : 3.60,
            productDetails : "90 g",
            categorie : "bolangerie",
            isAOffre : false
        },
        {
            id: 46,
            productImg : raibi,
            productName : "Raibi yougurt liquide",
            productPrice : 28.50,
            productDetails : "30 cl",
            categorie : "crémerie",
            isAOffre : false
        },
        {
            id: 47,
            productImg : saumon,
            productName : "Saumon fumée",
            productPrice : 120.40,
            productDetails : "220 g",
            categorie : "produits de la mer",
            isAOffre : false
        },
        {
            id: 48,
            productImg : sevenup,
            productName : "Seven UP",
            productPrice : 5.40,
            productDetails : "40 cl",
            categorie : "eau & boisson",
            isAOffre : false
        },
        {
            id: 49,
            productImg : surimi,
            productName : "Surimi batton",
            productPrice : 85.40,
            productDetails : "120 g",
            categorie : "produits de la mer",
            isAOffre : false
        },
        {
            id: 50,
            productImg : sultan,
            productName : "Thé vert SULTAN",
            productPrice : 32.40,
            productDetails : "150 g",
            categorie : "caffé & thé",
            isAOffre : false
        },
        {
            id: 51,
            productImg : tide,
            productName : "Lessive TIDE",
            productPrice : 32.40,
            productDetails : "300 g",
            categorie : "entretien & nettoyages",
            isAOffre : false
        },
        {
            id: 52,
            productImg : yoboi,
            productName : "Yougurt à boire",
            productPrice : 5.40,
            productDetails : "30 cl",
            categorie : "crémerie",
            isAOffre : false
        },
        {
            id: 53,
            productImg : boire,
            productName : "Yougurt à boire",
            productPrice : 5.40,
            productDetails : "30 cl",
            categorie : "crémerie",
            isAOffre : false
        },
        {
            id: 54,
            productImg: COKA,
            productName : "Coka ",
            productPrice : 3.40,
            productDetails : "30 cl",
            categorie : "eaux & boissons",
            isAOffre : false
        },
        {
            id: 55,
            productImg: PEPSI,
            productName : "Pepsi ",
            productPrice : 3.40,
            productDetails : "30 cl",
            categorie : "eaux & boissons",
            isAOffre : false
        },
        {
            id: 56,
            productImg: FANTA,
            productName : "Fanta ",
            productPrice : 3.40,
            productDetails : "30 cl",
            categorie : "eaux & boissons",
            isAOffre : false
        },
        {
            id: 57,
            productImg: Croiss,
            productName : "Croisssant pur ",
            productPrice : 17.95,
            productDetails : "30 cl",
            categorie : "bolangerie",
            isAOffre : false
        },
        {
            id: 58,
            productImg: PainSui,
            productName : "Pain Suisse",
            productPrice : 10.95,
            productDetails : "30 cl",
            categorie : "bolangerie",
            isAOffre : false
        },
        {
            id: 59,
            productImg: laitchoc,
            productName : "Lait CHOCO",
            productPrice : 10.95,
            productDetails : "30 cl",
            categorie : "crémerie",
            isAOffre : false
        },
        {
            id: 60,
            productImg: LaitFr,
            productName : "Lait fraise",
            productPrice : 3.50,
            productDetails : "30 cl",
            categorie : "crémerie",
            isAOffre : false
        },
        {
            id: 61,
            productImg: frapoccino,
            productName : "Frappuccino",
            productPrice : 48.20,
            productDetails : "30 cl",
            categorie : "eaux & boissons",
            isAOffre : false
        },
        {
            id: 62,
            productImg: liqu,
            productName : "Liquide Vissele",
            productPrice : 15.90,
            productDetails : "30 cl",
            categorie : "entretien & nettoyages",
            isAOffre : false
        },
        {
            id: 63,
            productImg: citr,
            productName : "Liquide Vissele",
            productPrice : 16.90,
            productDetails : "30 cl",
            categorie : "entretien & nettoyages",
            isAOffre : false
        },
        {
            id: 64,
            productImg: oeufs,
            productName : "Oeufs Frais",
            productPrice : 10.90,
            productDetails : "30 cl",
            categorie : "epécerie",
            isAOffre : false
        },
        {
            id: 65,
            productImg: spaghetti,
            productName : "Spaghetti",
            productPrice : 24.50,
            productDetails : "30 cl",
            categorie : "epécerie",
            isAOffre : false
        },
        {
            id: 66,
            productImg: rizBassm,
            productName : "Riz Bassmati",
            productPrice : 57.50,
            productDetails : "30 cl",
            categorie : "epécerie",
            isAOffre : false
        },
        {
            id: 67,
            productImg: rizComp,
            productName : "Riz Complet",
            productPrice : 27.50,
            productDetails : "30 cl",
            categorie : "epécerie",
            isAOffre : false
        },
        {
            id: 68,
            productImg: bonbCar,
            productName : "Bonbons Caramel",
            productPrice : 25.95,
            productDetails : "30 cl",
            categorie : "bonbons & sucres",
            isAOffre : false
        },
        {
            id: 74,
            productImg: bonbPo,
            productName : "Bonbons Pomme",
            productPrice : 20.95,
            productDetails : "30 cl",
            categorie : "bonbons & sucres",
            isAOffre : false
        },
        {
            id: 69,
            productImg: flash,
            productName : "Chewing gums",
            productPrice : 4.65,
            productDetails : "30 cl",
            categorie : "bonbons & sucres",
            isAOffre : false
        },
        {
            id: 70,
            productImg: fluffy,
            productName : "Cake Fluffy",
            productPrice : 2.00,
            productDetails : "30 cl",
            categorie : "biscuits & confiseries",
            isAOffre : false
        },
        {
            id: 71,
            productImg: bedon,
            productName : "Be Donut",
            productPrice : 19.00,
            productDetails : "30 cl",
            categorie : "biscuits & confiseries",
            isAOffre : false
        },
        {
            id: 72,
            productImg: cake,
            productName : "Cake Choco",
            productPrice : 32.95,
            productDetails : "30 cl",
            categorie : "biscuits & confiseries",
            isAOffre : false
        },
        {
            id: 73,
            productImg: cakeFr,
            productName : "Cake Fruits",
            productPrice : 38.95,
            productDetails : "30 cl",
            categorie : "biscuits & confiseries",
            isAOffre : false
        },
        {
            id: 75,
            productImg: barreCer,
            productName : "Barre Céreal",
            productPrice : 19.95,
            productDetails : "30 cl",
            categorie : "biscuits & confiseries",
            isAOffre : false
        },
        {
            id: 76,
            productImg: carrote,
            productName : "Jus Carrote",
            productPrice : 29.95,
            productDetails : "30 cl",
            categorie : "eaux & boissons",
            isAOffre : false
        },
        {
            id: 77,
            productImg: jusOr,
            productName : "Jus Orange",
            productPrice : 12.50,
            productDetails : "30 cl",
            categorie : "eaux & boissons",
            isAOffre : false
        },
        {
            id: 78,
            productImg: ananas,
            productName : "Jus Ananas",
            productPrice : 14.50,
            productDetails : "30 cl",
            categorie : "eaux & boissons",
            isAOffre : false
        },
        {
            id: 79,
            productImg: main,
            productName : "Vissele main",
            productPrice : 32.50,
            productDetails : "30 cl",
            categorie : "entretien & nettoyages",
            isAOffre : false
        },
        {
            id: 80,
            productImg: pate,
            productName : "Pâte Lavante",
            productPrice : 14.50,
            productDetails : "30 cl",
            categorie : "entretien & nettoyages",
            isAOffre : false
        },
        {
            id: 81,
            productImg: dentif,
            productName : "Dentifrice",
            productPrice : 16.50,
            productDetails : "30 cl",
            categorie : "hygiène et beauté",
            isAOffre : false
        },
        {
            id: 82,
            productImg: dentif3d,
            productName : "Dentifrice 3D",
            productPrice : 26.50,
            productDetails : "30 cl",
            categorie : "hygiène et beauté",
            isAOffre : false
        },
        {
            id: 83,
            productImg: bainbouche,
            productName : "Bain Bouche",
            productPrice : 36.50,
            productDetails : "30 cl",
            categorie : "hygiène et beauté",
            isAOffre : false
        },
        {
            id: 84,
            productImg: shampo,
            productName : "Shampooing",
            productPrice : 67.95,
            productDetails : "30 cl",
            categorie : "hygiène et beauté",
            isAOffre : false
        },
        {
            id: 85,
            productImg: pastrami,
            productName : "Pastrami",
            productPrice : 32.95,
            productDetails : "30 cl",
            categorie : "fromages & charcuteries",
            isAOffre : false
        },
        {
            id: 86,
            productImg: surimiroulé,
            productName : "Surimi Roulé",
            productPrice : 15.95,
            productDetails : "30 cl",
            categorie : "fromages & charcuteries",
            isAOffre : false
        },
        {
            id: 87,
            productImg: salami,
            productName : "Salami Boeuf",
            productPrice : 13.95,
            productDetails : "30 cl",
            categorie : "fromages & charcuteries",
            isAOffre : false
        },
        {
            id: 88,
            productImg: duosurimi,
            productName : "Duo de surimi",
            productPrice : 43.90,
            productDetails : "30 cl",
            categorie : "produits de la mer",
            isAOffre : false
        },
        {
            id: 89,
            productImg: miette,
            productName : "Miettes Saumon",
            productPrice : 53.00,
            productDetails : "30 cl",
            categorie : "produits de la mer",
            isAOffre : false
        },
        {
            id: 90,
            productImg: surimirape,
            productName : "Surimi Râpé",
            productPrice : 30.00,
            productDetails : "30 cl",
            categorie : "produits de la mer",
            isAOffre : false
        }
    ]
};

export const ProductReducer = (state = initiState, action) =>{
    return state
}
