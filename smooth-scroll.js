const ContentText = ({ title, alt, onClick }) => {
  const clickHeadline = (e) => {
    e.preventDefault();
    let sectionId = e.target.href;
    sectionId = sectionId.split("#")[1];
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="privacy-policy-wrapper">
      <div className="container">
        <ul>
          <li>
            <a href="#startOfThePP" onClick={(e) => clickHeadline(e)}>
              Start of the PP
            </a>
          </li>
          <li>
            <a href="#section2" onClick={(e) => clickHeadline(e)}>
              Section 2
            </a>
          </li>
          <li>
            <a href="#section3" onClick={(e) => clickHeadline(e)}>
              Section 3
            </a>
          </li>
          <li>
            <a href="#section4" onClick={(e) => clickHeadline(e)}>
              Section 4
            </a>
          </li>
          <li>
            <a href="#section5" onClick={(e) => clickHeadline(e)}>
              Section 5
            </a>
          </li>
          <li>
            <a href="#lastsection" onClick={(e) => clickHeadline(e)}>
              last section
            </a>
          </li>
        </ul>
        <div className="text-wrapper">
          <h1>{title}</h1>
          <p id="startOfThePP">
            Justo ornare ac lacinia integer a sem lobortis nostra vestibulum
            ullamcorper adipiscing condimentum dignissim porta congue
            ullamcorper mattis etiam vivamus nulla posuere ullamcorper leo eu
            justo porttitor adipiscing ornare pulvinar. Dignissim consequat
            molestie nisl purus ullamcorper blandit metus curabitur scelerisque
            justo at cras a a congue torquent posuere a a mus nullam consequat
            arcu. Vitae at eleifend integer vestibulum aliquam suspendisse
            phasellus ullamcorper torquent in massa a suscipit netus adipiscing
            vestibulum conubia cubilia id suscipit class cum vel quis elementum
            consectetur a et. Scelerisque a nisi rutrum odio aliquet est
            habitant parturient a justo litora ac volutpat a mus lacus tempus
            ullamcorper nec sed sed sed. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Mauris iaculis tincidunt dui, eu vulputate
            nibh elementum in. Proin feugiat rhoncus nisi, et efficitur augue
            pharetra quis. Sed dapibus sapien sodales varius eleifend. Quisque
            sodales sagittis nisl, in placerat est venenatis at. Suspendisse a
            orci ultricies, tincidunt ex vel, porttitor ex. Vivamus commodo
            posuere nibh ac bibendum. In bibendum mattis enim sed condimentum.
            Fusce non erat id tortor placerat aliquet ut quis massa. Vivamus eu
            nisl sit amet nunc efficitur accumsan eu ac nisi. Donec rhoncus erat
            eu felis accumsan egestas non nec nunc. Donec ante justo, bibendum
            non leo sed, posuere blandit nisl. Suspendisse bibendum ullamcorper
            gravida.
          </p>

          <p id="section2">
            Conubia torquent sagittis a ullamcorper scelerisque libero metus nam
            hac vel sed nulla vivamus sociosqu et per nunc. Porta quam pretium
            adipiscing vel mattis volutpat per non ipsum vivamus erat mi a
            lobortis consectetur mattis aptent consectetur dolor scelerisque
            leo. Arcu consectetur nam nam porta condimentum parturient sodales
            penatibus a tempor a a convallis suspendisse quam quisque. A ac cum
            ad id mus suspendisse dui commodo cursus accumsan parturient ac
            parturient laoreet pretium donec suspendisse pulvinar in facilisis
            eros a curabitur. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Cras vel nisi sit amet orci lobortis semper vitae eu augue.
            Nam ultricies luctus leo, ac ullamcorper magna gravida quis. Aenean
            in sem condimentum, consectetur lorem non, porta orci. Pellentesque
            molestie placerat diam, a molestie ligula posuere quis. Donec semper
            libero ac dolor suscipit, ac faucibus lectus venenatis. Nam
            sollicitudin ac nisl ut ullamcorper. Nulla eget enim magna.
            Suspendisse tempus, purus ac molestie tincidunt, magna leo tincidunt
            turpis, condimentum feugiat libero nisl sit amet mi. Sed sit amet
            aliquam eros. Donec dui justo, vulputate eget elementum vitae,
            laoreet at nisi. Donec commodo mollis massa. Nulla ullamcorper nibh
            ipsum, sed rhoncus est vulputate vel. Suspendisse a varius ante, eu
            tempus tortor.
          </p>

          <p id="section3">
            Amet convallis torquent duis nunc tincidunt a iaculis curabitur
            risus sit malesuada a a phasellus. Diam nostra a ac posuere a
            vestibulum maecenas condimentum volutpat nam vestibulum ultricies a
            rhoncus. Non nunc tincidunt non tincidunt cursus penatibus
            parturient scelerisque consequat a tortor ad ipsum proin pharetra
            mus proin phasellus taciti per a ante eu cum massa. Nulla
            suspendisse scelerisque eget urna parturient at mattis nibh mauris a
            facilisis nunc sociis mi a ullamcorper sodales volutpat nunc metus
            a. Senectus nec volutpat quisque ac vestibulum vestibulum id rhoncus
            suspendisse sagittis a posuere vestibulum a justo vestibulum.
            Molestie ultrices nunc commodo risus lacinia scelerisque a justo
            vestibulum interdum ullamcorper massa vestibulum mi cursus justo
            condimentum a adipiscing a varius viverra imperdiet ante feugiat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            nisi sit amet orci lobortis semper vitae eu augue. Nam ultricies
            luctus leo, ac ullamcorper magna gravida quis. Aenean in sem
            condimentum, consectetur lorem non, porta orci. Pellentesque
            molestie placerat diam, a molestie ligula posuere quis. Donec semper
            libero ac dolor suscipit, ac faucibus lectus venenatis. Nam
            sollicitudin ac nisl ut ullamcorper. Nulla eget enim magna.
            Suspendisse tempus, purus ac molestie tincidunt, magna leo tincidunt
            turpis, condimentum feugiat libero nisl sit amet mi. Sed sit amet
            aliquam eros. Donec dui justo, vulputate eget elementum vitae,
            laoreet at nisi. Donec commodo mollis massa. Nulla ullamcorper nibh
            ipsum, sed rhoncus est vulputate vel. Suspendisse a varius ante, eu
            tempus tortor.
          </p>

          <p id="section4">
            Eu vestibulum neque odio egestas vestibulum dignissim urna
            parturient morbi litora consectetur a facilisi feugiat blandit
            magnis a mi volutpat suspendisse vestibulum ac turpis. Donec nisi
            parturient aenean pharetra metus sagittis tellus augue luctus
            parturient sed a id amet ullamcorper quisque nascetur parturient
            placerat vehicula eu ante. A ut feugiat himenaeos ullamcorper vitae
            parturient dignissim fermentum condimentum vivamus adipiscing diam
            integer nam justo ut habitasse faucibus integer cras. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Cras vel nisi sit amet
            orci lobortis semper vitae eu augue. Nam ultricies luctus leo, ac
            ullamcorper magna gravida quis. Aenean in sem condimentum,
            consectetur lorem non, porta orci. Pellentesque molestie placerat
            diam, a molestie ligula posuere quis. Donec semper libero ac dolor
            suscipit, ac faucibus lectus venenatis. Nam sollicitudin ac nisl ut
            ullamcorper. Nulla eget enim magna. Suspendisse tempus, purus ac
            molestie tincidunt, magna leo tincidunt turpis, condimentum feugiat
            libero nisl sit amet mi. Sed sit amet aliquam eros. Donec dui justo,
            vulputate eget elementum vitae, laoreet at nisi. Donec commodo
            mollis massa. Nulla ullamcorper nibh ipsum, sed rhoncus est
            vulputate vel. Suspendisse a varius ante, eu tempus tortor.
          </p>

          <p id="section5">
            Suspendisse ante convallis ipsum parturient suspendisse vehicula
            augue non nullam suspendisse dui fames sem praesent rutrum non. Per
            neque vestibulum in et eu a ac pharetra a ullamcorper ullamcorper a
            est fermentum vestibulum pretium parturient tristique nostra
            accumsan scelerisque penatibus molestie dictum. Non ornare a
            parturient suspendisse maecenas elementum faucibus magna scelerisque
            dapibus a dui a proin est aliquet scelerisque in. Gravida bibendum
            sit a mollis nam venenatis a cum hac leo ad ac vestibulum mattis a
            ornare quisque ad porta porttitor dictumst a condimentum arcu congue
            dictumst at consectetur. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cras vel nisi sit amet orci lobortis semper vitae
            eu augue. Nam ultricies luctus leo, ac ullamcorper magna gravida
            quis. Aenean in sem condimentum, consectetur lorem non, porta orci.
            Pellentesque molestie placerat diam, a molestie ligula posuere quis.
            Donec semper libero ac dolor suscipit, ac faucibus lectus venenatis.
            Nam sollicitudin ac nisl ut ullamcorper. Nulla eget enim magna.
            Suspendisse tempus, purus ac molestie tincidunt, magna leo tincidunt
            turpis, condimentum feugiat libero nisl sit amet mi. Sed sit amet
            aliquam eros. Donec dui justo, vulputate eget elementum vitae,
            laoreet at nisi. Donec commodo mollis massa. Nulla ullamcorper nibh
            ipsum, sed rhoncus est vulputate vel. Suspendisse a varius ante, eu
            tempus tortor.
          </p>

          <p id="lastsection">
            Eu sapien consectetur magna interdum facilisis id vitae vivamus nibh
            a condimentum parturient curabitur fermentum a suscipit vestibulum
            in diam. Habitant pharetra dictumst magna sem eros faucibus sagittis
            fusce proin diam at quisque eros viverra rhoncus lobortis nec eget
            integer dui adipiscing parturient velit convallis. Adipiscing vel mi
            a et fermentum condimentum arcu urna ut facilisis parturient
            suspendisse hac scelerisque a suspendisse porttitor netus dolor
            dapibus sociosqu sit parturient mattis suspendisse mauris nunc
            facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras vel nisi sit amet orci lobortis semper vitae eu augue. Nam
            ultricies luctus leo, ac ullamcorper magna gravida quis. Aenean in
            sem condimentum, consectetur lorem non, porta orci. Pellentesque
            molestie placerat diam, a molestie ligula posuere quis. Donec semper
            libero ac dolor suscipit, ac faucibus lectus venenatis. Nam
            sollicitudin ac nisl ut ullamcorper. Nulla eget enim magna.
            Suspendisse tempus, purus ac molestie tincidunt, magna leo tincidunt
            turpis, condimentum feugiat libero nisl sit amet mi. Sed sit amet
            aliquam eros. Donec dui justo, vulputate eget elementum vitae,
            laoreet at nisi. Donec commodo mollis massa. Nulla ullamcorper nibh
            ipsum, sed rhoncus est vulputate vel. Suspendisse a varius ante, eu
            tempus tortor.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContentText;
