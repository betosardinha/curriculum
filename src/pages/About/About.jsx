import React from 'react';

import PostTemplate from 'components/PostTemplate';

import cover from 'assets/images/about-me-cover.png';
import profile from 'assets/images/profile.png';

import styles from './About.module.scss';

function About() {
  return (
    <PostTemplate
      cover={cover}
      title="Sobre mim"
    >
      <h3 className={styles.subtitle}>Olá, eu sou o Alberto! </h3>
      <img src={profile} alt="Foto minha sorrindo" className={styles.picture} />

      {/* eslint-disable */}
      <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod sem ligula, non ornare nisi elementum vitae. Fusce bibendum urna ut nibh rhoncus laoreet ac id dui. Nulla tristique ultricies neque a eleifend. Aenean scelerisque vel tortor sit amet maximus. Donec fermentum, mauris ac pretium consequat, nunc metus consectetur quam, non tempor est odio sit amet tellus. In eu vulputate justo. Praesent consectetur, ante vel elementum condimentum, felis diam sollicitudin ligula, non viverra dui tellus in risus. Integer in pellentesque quam, quis commodo leo. Aliquam nec nisl semper, ultrices metus et, posuere urna. In luctus urna nibh, congue accumsan nisl scelerisque non. Phasellus feugiat ante a lectus auctor pretium. Maecenas gravida neque ut imperdiet tempor. Fusce scelerisque feugiat eleifend.</p>
      <p className={styles.paragraph}>Aliquam erat volutpat. In sed urna vitae mi tristique viverra vel vitae felis. Suspendisse condimentum, ligula nec bibendum volutpat, augue nunc lobortis lectus, in euismod erat nisi et enim. Mauris faucibus elit nec ante facilisis, non pharetra quam tincidunt. In hac habitasse platea dictumst. Mauris felis libero, consequat et mi non, vestibulum facilisis neque. Nulla malesuada justo vel turpis interdum mattis. Vestibulum lacinia nunc id nisl elementum, a scelerisque leo posuere.</p>
      <p className={styles.paragraph}>Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris dolor metus, pulvinar ac semper ut, posuere nec elit. Donec semper ex in odio facilisis, id lobortis lectus vestibulum. Fusce id magna hendrerit, iaculis elit placerat, scelerisque orci. Cras hendrerit justo dignissim lectus rhoncus, quis dictum metus lobortis. Phasellus a arcu eu erat dictum molestie eget vitae quam. Pellentesque non dui arcu. Pellentesque egestas ultrices libero, quis posuere orci vulputate vitae. Vestibulum risus leo, aliquet aliquet elit a, dignissim fringilla ligula. Mauris quis malesuada enim, fermentum consequat justo. Nulla feugiat dui in massa volutpat, vitae vehicula ante maximus. Sed gravida vulputate eros, et convallis nisl malesuada ut. Nullam lobortis, elit sed imperdiet laoreet, eros neque venenatis mi, vitae bibendum mauris nisi non nibh. Suspendisse tristique mi non ipsum consectetur, at lobortis ipsum tempus. Ut finibus in nisi et feugiat.</p>
      <p className={styles.paragraph}>Vestibulum hendrerit dolor urna, vitae gravida eros porttitor id. Nulla rhoncus suscipit ex ac pharetra. Donec commodo tellus a enim efficitur, id luctus ligula finibus. Proin facilisis ut mauris nec hendrerit. Pellentesque iaculis tortor nec eros tincidunt, quis dignissim mi commodo. Nulla facilisi. Vivamus interdum, elit sed feugiat consectetur, turpis purus convallis nibh, rhoncus sagittis nulla erat non orci.</p>
      <p className={styles.paragraph}>In in dui a nunc aliquam efficitur nec sit amet est. Donec rutrum tempus urna ut fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus auctor dolor in felis interdum ultricies. Sed in erat gravida, auctor enim at, pulvinar metus. Maecenas in ipsum vitae tortor sagittis maximus sit amet vitae libero. Quisque diam turpis, feugiat sed volutpat id, pretium non orci.</p>
      <p className={styles.paragraph}>Suspendisse et condimentum felis. Vestibulum non mauris vitae purus auctor consequat eu in odio. Quisque eget sapien pharetra, rhoncus eros ut, gravida erat. Integer bibendum porttitor libero, finibus posuere augue consectetur sed. Pellentesque quis sagittis libero. Nulla maximus ligula quis commodo pellentesque. Nunc maximus mauris sed lobortis mattis. Suspendisse non mollis eros. Maecenas at lobortis tortor. Donec accumsan ante massa, et pellentesque lacus suscipit id. Curabitur tincidunt hendrerit nibh sed tristique.</p>
      {/* eslint-disable-next-line */}

    </PostTemplate>
  );
}

export default About;
