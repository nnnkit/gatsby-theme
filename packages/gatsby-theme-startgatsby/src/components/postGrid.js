import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

export default function postGrid({ excerpt, frontmatter }) {
  const { banner, title, slug } = frontmatter;
  return (
    <>
      <div className="blog__item">
        <Img
          className="img-responsive blog__img"
          fluid={banner.sharp.fluid}
          alt={title}
        />
        <div className="blog__content">
          <Link className="blog-item__link" to={slug}>
            <h3 className="blog__heading">{title}</h3>
          </Link>
          <div className="blog__details flex-start">
            <span>Airytails</span>
            <span className="separator">|</span>
            <span>Feb 26, 2019</span>
          </div>
          <div>
            <p className="blog__intro-text">{excerpt}</p>
          </div>
          <Link className="blog__link" to={slug}>
            Read More
          </Link>
        </div>
        <div className="blog__overlay" />
      </div>
    </>
  );
}
