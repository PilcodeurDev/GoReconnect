export default function legalNotion() {
  const nomDuSite = "Kinesiologie Animaliere 25";
  const urlDuSite = "https://www.kinesiologie-animaliere-25.fr";``
  const proprietaire = "Alix Lucidarme";
  const adresseProprietaire = "32 Bis rue de l'Etang, 25560 Frasne";
  const telephoneProprietaire = "+33668352377";
  const hebergeur = "Wix Online Platform Limited";
  const adresseHebergeur = "1 Grant’s Row, Dublin 2 D02HX96, Ireland";
  const telephoneHebergeur = "(+1) 415 358 0857";
  return (
    <section>
      <div className="container">
        <h1>
          <strong>Mentions légales</strong>
        </h1>
        <p>
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
          pour la confiance en l'économie numérique, il est précisé aux
          utilisateurs du site {nomDuSite} l'identité des différents
          intervenants dans le cadre de sa réalisation et de son suivi.
        </p>
        <h3>Edition du site</h3>
        <p>
          Le présent site, accessible à l’URL {urlDuSite}
          (le « Site »), est édité par : {proprietaire}, résidant au{" "}
          {adresseProprietaire}, de nationalité Française (France), né(e) le
          25/09/1992,
        </p>
        <h3>Hébergement</h3>
        <p>
          Le Site est hébergé par la société {hebergeur}, situé
          {adresseHebergeur}, (contact téléphonique ou email :{" "}
          {telephoneHebergeur}).
        </p>
        <h3>Directeur de publication</h3>
        Le Directeur de la publication du Site est {proprietaire}.
        <h3>Nous contacter</h3>
        <p>Par téléphone : {telephoneProprietaire}</p>
        <p>Par courrier : {adresseProprietaire}</p>
        <i>Génération des mentions légales par Legalstart.</i>
      </div>
    </section>
  );
}
