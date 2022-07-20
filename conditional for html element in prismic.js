import React from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import * as prismicH from '@prismicio/helpers';
import IconArrowUp from "../../components/icons/IconArrowUp";

const Text = ({ slice }) => {
  const { primary } = slice;
  const teaserExists = prismicH.asText(primary.teaser) != "" ? true : false;
  const linkExists = prismicH.asLink(primary.link) && prismicH.asLink(primary.link) != "" ? true : false;
  const titleExists = prismicH.asText(primary.title) != "" ? true : false;
  const contentExists = prismicH.asText(primary.content) != "" ? true : false;

  return (
    <section className={`text ${teaserExists ? "teaser-exists" : ""} ${linkExists ? "link-exists" : ""}`.trim()}>
      <div className="container-1450">
        {titleExists ? <div className="title container-1297"><PrismicRichText field={primary.title} /></div>
          : null}
        <div className="container-1297 outer-wrapper">
          <div className="container-940">
            <div className="inner-wrapper">


              {contentExists ? <div className="content"><PrismicRichText field={primary.content} /></div>
                : null}

              {teaserExists ?
                <div className="teaser"><PrismicRichText field={primary.teaser} />  </div>
                : null}

            </div>

            {linkExists ? <div className="link">
              <PrismicLink field={primary.link}>
                {primary.linkLabel}
                <IconArrowUp />
              </PrismicLink>
            </div> : null}

          </div>
        </div>
      </div>
    </section>
  )
};

export default Text;
