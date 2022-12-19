import chocolat from './imagesBlog/chocolat-chaud-s.webp';
import berd from './imagesBlog/sous-blog-berd.webp';
import tajine from './imagesBlog/tajine.webp';
import tiramisu from './imagesBlog/tiramuso.webp';
import fruit from './imagesBlog/sous-blog-fruits-et-.webp';

const BlogData = [

    {
        id : 1,
        img : chocolat,
        title : 'Chocolat chaud',
        date : '04 Mars ',
        ingredient :[
            '100 g de chocolat noir',
            '50 cl de lait',
            '10 cl d’eau',
            '2 sachets de sucre vanillé',
            'Poudre de cacao/pincée de cannelle (optionnel)'
        ],
        preparation :[
            'Mettre l’eau et le lait dans une casserole et faire chauffer',
            'Ajouter le sucre vanillé à la casserole et bien mélanger après que le liquide commence à frémir',
            'Laisser chauffer pendant 1 minute avant d’enlever la casserole du feu',
            'Couper le chocolat en petits morceaux et l’ajouter à la mixture en fouettant rigoureusement',
            'Décorer à l’aide de la poudre de cacao et de la cannelle Servir chaud'
        ] 
    },
    {
        id : 2,
        img : berd,
        title : 'Brioches filantes',
        date : '04 april ',
        ingredient :[
            '200 ml de lait',
            '2 œufs',
            '500 g de farine',
            '8 g de levure boulangère',
            '120 g de beurre',
            '1 œuf pour dorer',
            '1 c. à café de sel'
        ],
        preparation :[
            'Dans le bol du robot battez les œufs, le lait, le sucre et le sel sur la vitesse 2.',
            'Versez la farine et enfin la levure, ensuite mélangez bien au robot pétrisseur pendant 7 minutes sur la vitesse 1, puis 5 minutes sur la vitesse 2.',
            'Ajoutez le beurre mou et pétrissez à nouveau pendant 7 minutes jusqu’à obtenir une belle pâte à brioche bien homogène et compacte.',
            'Laissez reposer pendant 2 heures, dans un endroit chaud et recouvrez la pâte d’un torchon humide.',
            'Façonnez vos brioches : faites 6 petites boules et laissez lever encore pendant 45 minutes recouvertes d’un torchon humide.'
        ]
    },
    {
        
        id : 3,
        img : tajine,
        title : 'Tagine de coquelets',
        date : '15 Mars ',
        ingredient :[
            '2 coquelets prêts à cuire',
            '2 gros oignons émincés',
            '2 c. à s. d’huile d’olive',
            '1 pincée de safran',
            ' 250g d’olives violettes',
            '2 citrons confits',
            '1 c. à c. de gingembre en poudre',
            '1/2 c. à c. de paprika',
            '1 botte de coriandre',
            '2 gousses d’ail',
            'Une pincée de sel et poivre',
            'Eau pour la cuisson'
        ],
        preparation : [
            'Faites chauffer l’huile dans une grande cocotte et faites-y revenir les coquelets avec les oignons émincés.',
            'Ajoutez l’ail écrasé, les épices, le sel, le poivre, un citron confit coupé en quatre et l’eau. Amenez à ébullition et laissez mijoter à couvert et à feu doux pendant 30 minutes.',
            'Coupez le 2ème citron confit en quatre. Ne gardez que l’écorce et coupez-le en bâtonnets. Mettez le dans la cocotte avec les olives et mélangez.  Prolongez la cuisson une dizaine de minutes',
            'Déposez les coquelets dans un plat de service, garnissez-les d’olives, de quartiers de citrons confits et d’un peu de sauce et servez le tajine bien chaud.'
        ]
    },
    {
        id : 4,
        img : tiramisu,
        title : 'Recette Tiramisu',
        date : '30 Mars ',
        ingredient : [
            '6 oeufs',
            '130 g de sucre en poudre',
            '80 g de farine de blé',
            '250 g de mascarpone',
            '25 cl de café',
            '12 cl de crème liquide',
            '50 g de cacao en poudre non sucré'
        ],
        preparation : [
            'Faites chauffer l’huile dans une grande cocotte et faites-y revenir les coquelets avec les oignons émincés.',
            ' Ajoutez l’ail écrasé, les épices, le sel, le poivre, un citron confit coupé en quatre et l’eau. Amenez à ébullition et laissez mijoter à couvert et à feu doux pendant 30 minutes.',
            'Coupez le 2ème citron confit en quatre. Ne gardez que l’écorce et coupez-le en bâtonnets. Mettez le dans la cocotte avec les olives et mélangez.  Prolongez la cuisson une dizaine de minutes.',
            'Déposez les coquelets dans un plat de service, garnissez-les d’olives, de quartiers de citrons confits et d’un peu de sauce et servez le tajine bien chaud.'
        ]
    },
    {
        id : 5,
        img : fruit,
        title : '5 aliments riches en eau',
        date : '30 Mars ',
        ingredient : [
            'Saviez-vous que 20% de la valeur quotidienne d’eau que nous consommons provient des aliments ?'
        ],
        preparation :[
            'Voici cinq aliments qui favorisent l’hydratation à ajouter dans à assiette régulièrement !',
            'Le concombre : aliment composé de 96% d’eau.',
            'La tomate : son apport en eau varie entre 94 et 96%.',
            'Le melon d’eau (Pastèque) : comme son nom l’indique, ce type de melon contient une quantité importante d’eau, soit 92%',
            'Le gruau ou soupe à base de céréales : 250 ml de flocons d’avoine contiennent 197 ml d’eau.',
            'Le lait : boisson faite d’environ 87% d’eau !'
        ] 
    }
];

export default BlogData;