/* eslint-disable react/no-unescaped-entities */
import "./KinesiologiePage.css";
import { dogPositif, medecineCh } from "../../../assets";

export default function KinesiologiePage() {
  return (
    <div id="container-kinesio">
      <img className="featured-img" src={dogPositif} alt="kinesiologie" />
      <div className="title">
        <h1>La Kinésiologie</h1>
      </div>
      <div className="text-kinesio">
        <p>
          La kinésiologie est une méthode basée sur la médecine chinoise,
          spécialisée dans la libération émotionnelle et l'inconscient.
        </p>
        <p>
          Un animal qui développe une problématique, qu'elle soit physique (dont
          le vétérinaire ne trouve pas l'origine), psychologique, émotionnelle
          ou comportementale, c'est qu'il essaie de communiquer avec son humain,
          de lui montrer qu'il a un mal-être profond et qu'il a besoin d'aide
          pour s'en libérer.
        </p>
        <p>
          Lors d'une séance, je me connecte à votre animal via le toucher pour
          me mettre en lien avec l'énergie qui circule en lui. Je lui demande,
          via un test en tissulaire, l'autorisation de travailler avec lui, et
          les problématiques auxquelles il est prêt à libérer aujourd'hui. Je ne
          vais pas me concentrer sur le problème en tant que tel, par exemple
          "une réactivité envers les congénères", mais je vais aller en chercher
          l'origine : qu'est-ce qui a bien pu se passer, à un moment dans la vie
          de cet animal, qui a engendré un blocage émotionnel, engendrant cette
          problématique ? Une fois la "cause" trouvée, je vais laisser la
          mémoire de l'événement en place tout en retirant l'émotion très forte
          qui y était associée.
        </p>
        <p>
          <span className="underline">Exemple :</span> Tobby, un chien de 3 ans
          est réactif envers ses congénères depuis un an. En séance de
          kinésiologie, un événement originel aurait causé son changement de
          comportement, le fait qu'il se soit fait chahuter quand il était chiot
          par ses frères et sœurs. Il y a associé de la peur et un grand manque
          de confiance en lui. À la fin de la séance, ces deux blocages
          émotionnels ont été libérés, Tobby se souviendra de cet événement mais
          ne vivra plus ces deux émotions là. Il pourra à nouveau se
          reconstruire et évoluer.
        </p>
      </div>
      <h3 className="separation">
        " La kinésiologie ne remplace pas une consultation avec votre
        vétérinaire "
      </h3>
      <div className="text-kinesio">
        <div className="question">
          Une fois la séance réalisé, le problème de mon animal aura disparu ?
        </div>
        <img
          className="image-in-text"
          src={medecineCh}
          alt="kinésiologie séance"
        />
        <p>
          Je n'ai ni baguette magique, ni potion miracle. Je ne peux vous
          garantir un résultat ou transformation extraordinaire. Les animaux ont
          besoin de temps, tout comme nous, pour amorcer des changements
          intérieurs, et peuvent nécessiter un suivi de quelques séances sur
          plusieurs mois pour voir une nette amélioration. Nous n'avons pas tous
          les mêmes difficultés ni la même montagne à gravir : certains animaux
          auront des belles améliorations en 2 séances tandis que d'autres
          auront besoin d'être accompagnés pendant 10 séances. Un animal ayant
          vécu de multiples traumatismes aura nettement plus de blocages
          émotionnels qu'un chiot de 5 mois, venant d'un élevage bienveillant.
        </p>
        <div className="question">Quel délai y a-t-il entre deux séances ?</div>
        <p>
          Il faut attendre 3 semaines au minimum entre deux séances, le temps
          que la séance se diffuse intégralement et que l'animal commence à
          effectuer les changements intérieurs. Généralement, je propose un
          délais d'un mois, ce qui est confortable pour l'animal. Dans l'idéal,
          il est conseillé le même délais entre une séance de kinésiologie et un
          autre "soin" (ostéopathie, shiatsu, soin énergétique, etc) que ce soit
          avant ou après, pensez-y avant de prendre rendez-vous ;) .
        </p>
        <div className="question">
          Tous les animaux peuvent bénéficier d'une séance de kinésiologie?
        </div>
        <p>
          Oui, tous peuvent en bénéficier ! Qu'ils soient de compagnie,
          d'élevage, NACS ou sauvages, la kinésiologie contribue à améliorer le
          bien-être de nos animaux.
        </p>
        <div className="question">
          Quelles techniques ou méthodes utilises-tu ?
        </div>
        <p>
          Ce sont les animaux qui choisissent la méthode qui leur est le plus
          adaptée le Jour J, celle dont ils tireront le plus de bénéfice. Ils
          ont le choix, à ce jour entre :
        </p>
        <p>
          - Une séance de kinésiologie "classique". Les animaux vont m'expliquer
          leur vécu et leurs émotions actuelles, me faire remonter à travers le
          temps pour localiser exactement la période de leur vie qui a été à
          l'origine d'une émotion bloquée/enkystée pour la libérer.
        </p>
        <p>
          - Une séance de réflexologie cranio-sacrée (méthode Poyet) : une
          technique énergétique, relançant l'énergie dans le corps tout en
          libérant des émotions bloquées.
        </p>
        <p>
          - Une séance de kinésiologie transgénérationnelle : Pour partir à la
          découverte des ancêtres, de leur vécu et de leurs émotions bloquées
          qui impactent aujourd'hui leur descendance (car oui, en plus de l'ADN,
          notre transmettons une valise de mémoires émotionnelles à notre
          progéniture).
        </p>
      </div>
    </div>
  );
}
