/**
 * The internal imports
 */
import "./Kinesiologie.css";
import { main } from "../../../assets";

export default function kinesiologie() {
  return (
    <section id="laKinesiologie">
      <div className="container">
        <div>
          <h2> C'est quoi la kinésiologie ?</h2>
          <div className="textImage">
            <div className="text">
              <p>
                <i>
                  La kinésiologie est une méthode, basée sur la médecine
                  chinoise, spécialisée dans la libération émotionnelle et
                  l'inconscient.
                </i>
              </p>
              <img src={main} alt="main touchant du doigt de l'eau" />
              <p>
                Un animal qui développe une problématique, qu'elle soit physique
                (dont le vétérinaire ne trouve pas l'origine), psychologique,
                émotionnelle ou comportementale, essaie de communiquer avec son
                humain. Il montre qu'il a un mal-être profond et qu'il a besoin
                d'aide pour s'en libérer.
              </p>
              <p>
                Lors d'une séance, je me connecte à votre animal par le toucher
                pour me mettre en lien avec l'énergie qui circule en lui. Via un
                test tissulaire, je lui demande l'autorisation ainsi que les
                problématiques qu'il est prêt à libérer aujourd'hui.
              </p>
              <p>
                L'objectif n'est pas de se concentrer sur le problème en tant
                que tel (ex: réaction aux congénères) mais plutôt de chercher
                l'origine : "Qu'est ce qui a engendré ce blocage émotionnel,
                dans la vie de cet animal ?"
              </p>
              <p>
                Une fois trouvée, je vais laisser la mémoire de l'évènement en
                place tout en retirant l'émotion très forte qui y était
                associée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
